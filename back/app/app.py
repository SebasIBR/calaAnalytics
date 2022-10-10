import numpy as np
from turtle import pd
from flask import Flask

app= Flask(__name__)

@app.route('/index', methods=['GET'])
def index():
    return 'Welcome'

@app.route("/getfile", methods=['GET'])
def getfile():
    with open("/database/ejercicio1_b2.txt","r+") as f:
        data=f.read()
    return data


if __name__ == '__main__':
    app.run(debug=True)