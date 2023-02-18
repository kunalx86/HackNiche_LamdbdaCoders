const data = [
  {
    "risk_factor": "medium",
    "time_period": "5 years",
    "capital": 5000,
    "investments": [
      {
        "name": "Vanguard Total Stock Market Index Fund",
        "type": "Mutual Fund",
        "description": "The fund provides broad exposure to the entire U.S. equity market, including small-, mid-, and large-cap stocks.",
        "return_rate": 8.5,
        "risk_level": "Medium",
        "min_investment": 1000
      },
      {
        "name": "iShares MSCI EAFE ETF",
        "type": "ETF",
        "description": "The fund provides exposure to the developed markets outside of North America, including Europe, Australasia, and the Far East.",
        "return_rate": 6.5,
        "risk_level": "Medium",
        "min_investment": 500
      },
      {
        "name": "Invesco DB Agriculture Fund",
        "type": "ETF",
        "description": "The fund tracks an index of agricultural commodities, including corn, wheat, soybeans, and sugar.",
        "return_rate": 5,
        "risk_level": "Medium",
        "min_investment": 1000
      },
      {
        "name": "Schwab U.S. TIPS ETF",
        "type": "ETF",
        "description": "The fund invests in U.S. Treasury Inflation-Protected Securities, which provide protection against inflation.",
        "return_rate": 3.5,
        "risk_level": "Medium",
        "min_investment": 1000
      },
      {
        "name": "PIMCO Income Fund",
        "type": "Mutual Fund",
        "description": "The fund invests in a diversified portfolio of fixed income securities, including U.S. Treasuries, mortgage-backed securities, and corporate bonds.",
        "return_rate": 4.5,
        "risk_level": "Medium",
        "min_investment": 2000
      }
    ]
  },
  {
    "risk_factor": "medium",
    "time_period": "10 years",
    "capital": 5000,
    "investments": [
      {
        "name": "S&P 500 Index Fund",
        "type": "Index Fund",
        "description": "A fund that tracks the performance of the S&P 500 index, which is composed of the 500 largest US publicly traded companies.",
        "return_rate": 7.5,
        "risk_level": "Medium",
        "min_investment": 1000
      },
      {
        "name": "Real Estate Investment Trust (REIT)",
        "type": "Alternative Investment",
        "description": "A type of security that invests in real estate through property or mortgages, offering potential high returns and diversification benefits.",
        "return_rate": 8.5,
        "risk_level": "Medium",
        "min_investment": 2000
      },
      {
        "name": "Corporate Bond Fund",
        "type": "Bond Fund",
        "description": "A fund that invests in bonds issued by companies, providing a regular stream of income and potential capital gains.",
        "return_rate": 5.5,
        "risk_level": "Low-Medium",
        "min_investment": 500
      },
      {
        "name": "Global Equity Fund",
        "type": "Equity Fund",
        "description": "A fund that invests in stocks of companies located around the world, providing diversification benefits and exposure to different sectors and regions.",
        "return_rate": 6.5,
        "risk_level": "Medium",
        "min_investment": 1000
      },
      {
        "name": "Balanced Fund",
        "type": "Mixed Asset Fund",
        "description": "A fund that invests in a mix of stocks, bonds, and other assets to achieve a balance of growth and income potential, with lower risk than pure equity funds.",
        "return_rate": 6,
        "risk_level": "Low-Medium",
        "min_investment": 1000
      }
    ]
  },
  {
    "risk_factor": "low",
    "time_period": "5 years",
    "capital": 5000,
    "investments": [
      {
        "name": "Savings Account",
        "type": "Cash",
        "description": "A savings account is a deposit account held at a bank or other financial institution that provides a modest interest rate.",
        "return_rate": 0.5,
        "risk_level": "Low",
        "min_investment": 500
      },
      {
        "name": "Corporate Bonds",
        "type": "Fixed Income",
        "description": "Corporate bonds are debt securities issued by corporations to raise capital. They typically offer a fixed interest rate and a set maturity date.",
        "return_rate": 3.5,
        "risk_level": "Low to Medium",
        "min_investment": 1000
      },
      {
        "name": "Index Fund",
        "type": "Equity",
        "description": "An index fund is a type of mutual fund or exchange-traded fund that is designed to track the performance of a specific market index.",
        "return_rate": 6.5,
        "risk_level": "Medium",
        "min_investment": 2500
      },
      {
        "name": "Real Estate Investment Trust (REIT)",
        "type": "Alternative",
        "description": "A REIT is a type of investment that allows individuals to invest in real estate assets without having to purchase physical property.",
        "return_rate": 4.5,
        "risk_level": "Medium to High",
        "min_investment": 1000
      },
      {
        "name": "Blue-Chip Stocks",
        "type": "Equity",
        "description": "Blue-chip stocks are shares of large, established companies with a long history of stable earnings and a solid reputation in the market.",
        "return_rate": 7.5,
        "risk_level": "High",
        "min_investment": 2000
      }
    ]
  },
  {
    "risk_factor": "low",
    "time_period": "10 years",
    "capital": 5000,
    "investments": [
      {
        "name": "High-Yield Savings Account",
        "type": "Cash",
        "description": "A high-yield savings account is a deposit account held at a bank or other financial institution that offers a higher interest rate than a traditional savings account.",
        "return_rate": 1.5,
        "risk_level": "Low",
        "min_investment": 500
      },
      {
        "name": "Certificates of Deposit (CDs)",
        "type": "Fixed Income",
        "description": "CDs are time deposits that offer a fixed interest rate and a set maturity date. They are issued by banks and typically offer higher rates than savings accounts.",
        "return_rate": 2.5,
        "risk_level": "Low to Medium",
        "min_investment": 1000
      },
      {
        "name": "Diversified ETF",
        "type": "Equity",
        "description": "An exchange-traded fund (ETF) is a type of investment fund that tracks a specific market index. A diversified ETF invests in a broad range of stocks, reducing the risk of any single stock affecting the overall performance.",
        "return_rate": 8.5,
        "risk_level": "Medium",
        "min_investment": 2500
      },
      {
        "name": "Real Estate Fund",
        "type": "Alternative",
        "description": "A real estate fund is a type of investment that pools money from multiple investors to invest in a variety of real estate properties and assets.",
        "return_rate": 6.5,
        "risk_level": "Medium to High",
        "min_investment": 1000
      },
      {
        "name": "Growth Stocks",
        "type": "Equity",
        "description": "Growth stocks are shares of companies that are expected to grow faster than the overall market, often because of innovative products or services.",
        "return_rate": 10.5,
        "risk_level": "High",
        "min_investment": 2000
      }
    ]
  },
  {
    "risk_factor": "high",
    "time_period": "5 years",
    "capital": 5000,
    "investments": [
      {
        "name": "Cryptocurrency",
        "type": "Alternative",
        "description": "Cryptocurrency is a digital or virtual currency that uses cryptography for security. Its decentralized nature and lack of government oversight make it a high-risk, high-reward investment.",
        "return_rate": 20,
        "risk_level": "Very High",
        "min_investment": 1000
      },
      {
        "name": "Emerging Market Stocks",
        "type": "Equity",
        "description": "Emerging market stocks are shares of companies located in developing countries with rapidly growing economies. They offer high potential for growth, but also come with high risks due to political instability and economic volatility.",
        "return_rate": 15,
        "risk_level": "Very High",
        "min_investment": 2000
      },
      {
        "name": "Leveraged ETFs",
        "type": "Equity",
        "description": "Leveraged exchange-traded funds (ETFs) use derivatives and debt to amplify the returns of an underlying index. They are high-risk, high-reward investments that are intended for short-term trading.",
        "return_rate": 25,
        "risk_level": "Very High",
        "min_investment": 2500
      },
      {
        "name": "Options",
        "type": "Derivatives",
        "description": "Options are contracts that give the buyer the right, but not the obligation, to buy or sell an underlying asset at a set price on or before a specific date. They can offer high returns, but also come with high risks due to their complex nature and potential for large losses.",
        "return_rate": 30,
        "risk_level": "Very High",
        "min_investment": 1000
      },
      {
        "name": "Commodities",
        "type": "Alternative",
        "description": "Commodities are physical goods such as gold, oil, and agricultural products that are traded on global markets. They can offer high returns, but also come with high risks due to their volatility and susceptibility to global economic factors.",
        "return_rate": 12,
        "risk_level": "High",
        "min_investment": 1000
      }
    ]
  },

  {
    "risk_factor": "high",
    "time_period": "10 years",
    "capital": 5000,
    "investments": [
      {
        "name": "Venture Capital",
        "type": "Private Equity",
        "description": "Venture capital is a form of private equity financing that is provided to startups and early-stage companies with high growth potential. It offers the potential for high returns, but also comes with high risks due to the high failure rate of startups.",
        "return_rate": 30,
        "risk_level": "Very High",
        "min_investment": 5000
      },
      {
        "name": "Hedge Funds",
        "type": "Alternative",
        "description": "Hedge funds are private investment funds that use a variety of strategies to generate high returns. They are typically only available to accredited investors and come with high fees and high risks due to their use of leverage and complex investment strategies.",
        "return_rate": 15,
        "risk_level": "Very High",
        "min_investment": 10000
      },
      {
        "name": "Emerging Market Bonds",
        "type": "Fixed Income",
        "description": "Emerging market bonds are debt securities issued by governments or corporations in developing countries. They offer higher yields than developed market bonds, but also come with higher risks due to currency fluctuations and political instability.",
        "return_rate": 10,
        "risk_level": "High",
        "min_investment": 5000
      },
      {
        "name": "Real Estate Investment Trusts (REITs)",
        "type": "Real Estate",
        "description": "REITs are companies that own or finance income-producing real estate properties. They offer the potential for high returns and diversification, but also come with high risks due to their sensitivity to interest rate changes and economic cycles.",
        "return_rate": 8,
        "risk_level": "High",
        "min_investment": 5000
      },
      {
        "name": "High-Yield Corporate Bonds",
        "type": "Fixed Income",
        "description": "High-yield corporate bonds, also known as junk bonds, are debt securities issued by companies with lower credit ratings. They offer higher yields than investment-grade bonds, but also come with higher risks of default.",
        "return_rate": 12,
        "risk_level": "High",
        "min_investment": 5000
      }
    ]
  }
]


export default data;


