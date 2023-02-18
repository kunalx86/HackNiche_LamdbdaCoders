from flask import jsonify, Blueprint, request
from app.lib.pdf_analyze import main
import os
bank_statement = Blueprint("bank_statement", __name__)

@bank_statement.route("/pdf_file", methods=["POST"])
def upload_pdf_file():
    # file = request.files["statement"]
    res = main("/uploads/file.pdf")
    return jsonify(res)