import numpy as np
from turtle import pd
from flask import Flask
app= Flask(__name__)

@app.route('/')
def index():
    return "Hola Mundo"

@app.route('/pedidos')
def usuarios():
    return "ApiTXT"

@app.route('/analisis')
def productos():
    return "ApiProdcutos"

if __name__ == '__main__':
    app.run(debug=True)