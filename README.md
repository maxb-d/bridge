# Example Return

[
  {
    "acc_number": "0000001",
    "amount": 25,
    "transactions": [
      {
        "label": "Label 1",
        "amount": 50,
        "currency": "EUR"
      },
      {
        "label": "Label 2",
        "amount": -25,
        "currency": "EUR"
      }
    ]
  },
  {
    "acc_number": "0000002",
    "amount": 50,
    "transactions": []
  }
]

# Get Accounts

{
    "accounts": [
        {
            "acc_number": "0000001",
            "amount": 50,
            "currency": "EUR"
        },
        {
            "acc_number": "0000002",
            "amount": 200,
            "currency": "EUR"
        },
        {
            "acc_number": "0000003",
            "amount": 240,
            "currency": "EUR"
        }
    ],
    "links": {
        "self": "/accounts?page=1",
        "next": "/accounts?page=2"
    }
}

# Get Transactions

{
    "transactions": [
        {
            "id": 1,
            "label": "Label 1",
            "sign": "CDT",
            "amount": 50,
            "currency": "EUR"
        },
        {
            "id": 2,
            "label": "Label 2",
            "sign": "DBT",
            "amount": 200,
            "currency": "EUR"
        },
        {
            "id": 3,
            "label": "Label 3",
            "sign": "DBT",
            "amount": 32,
            "currency": "EUR"
        }
    ],
    "links": {
        "self": "/accounts/0000001/transactions?page=1",
        "next": "/accounts/0000001/transactions?page=2"
    }
}