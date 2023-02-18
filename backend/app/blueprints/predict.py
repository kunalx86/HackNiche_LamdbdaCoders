from flask import Blueprint, jsonify, request
import yfinance
from flask_jwt_extended import jwt_required, get_jwt_identity
from bson import ObjectId
import pandas as pd
import numpy as np
import pickle
from app.models.user_data import UserData

predict = Blueprint("predict", __name__)
f = open("./model.pkl", "rb")
model = pickle.load(f)
df = pd.read_csv("./adult.csv")

@predict.route("", methods=["POST"])
@jwt_required()
def predict_route():
    identity = get_jwt_identity()
    user_data = UserData.objects(user=ObjectId(identity["id"])).first()
    data = request.json
    print(data)
    print(user_data.to_json())
    new_data = pd.DataFrame([[user_data["age"], 'private', user_data["age"], 'Masters', data["education"],
                              'Separated','Exec-managerial','Not-in-family','White','Male',0,2824,57,
                              'United-States','income',int(user_data["income"]),int(user_data["expense"]),
                              user_data["family_members_count"],int(data["emi_rent"]),int(user_data["income"]) * 12,
                              'Graduate',data["earning_members"],int(user_data["income"]) - int(user_data["expense"])]]
                              , columns=['age', 'workclass', 'fnlwgt', 'education', 'education.num',
       'marital.status', 'occupation', 'relationship', 'race', 'sex',
       'capital.gain', 'capital.loss', 'hours.per.week', 'native.country',
       'income', 'Mthly_HH_Income', 'Mthly_HH_Expense', 'No_of_Fly_Members',
       'Emi_or_Rent_Amt', 'Annual_HH_Income', 'Highest_Qualified_Member',
       'No_of_Earning_Members', 'savings'])
    numeric_cols = new_data.select_dtypes(include=['number']).columns
    df_numeric = df[numeric_cols]
    new_data_cols = df_numeric.select_dtypes(include=np.number).columns
    # print(new_data_cols)
    new_data = new_data[new_data_cols]
    # new_data_norm = (new_data - mean) / std
    new_data_norm = new_data.astype(np.float32)
    # print(new_data_norm)
    predictions = model.predict(new_data_norm)
    return jsonify(pd.DataFrame(predictions).to_json(orient="values"))

@predict.route("/stock")
def stock_market():
    stock = yfinance.Ticker("GOOG")
    history = stock.history(period="1y")
    return jsonify({
        # "stock": stock.info,
        "history": history["Close"].to_json(orient="values")
    })