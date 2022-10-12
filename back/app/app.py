import numpy as np
import pandas as pd
from flask import Flask

app= Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return 'Welcome'

@app.route("/apiPedido", methods=['GET'])
def pedidoApi():
    data= pd.read_excel('D:/Sebastian/ProyectosDeDesarrollo/calaAnalytics/back/database/ejercicio1_b1.xlsx',usecols="A:D")
    js= data.to_json(orient="records")
    return js

@app.route("/apiUsuarios", methods=['GET'])
def usuariosApi():
    data=pd.read_table('D:/Sebastian/ProyectosDeDesarrollo/calaAnalytics/back/database/ejercicio1_b2.txt')
    js= data.to_json(orient="records")
    return js

@app.route("/apiTabla", methods=['GET'])
def tablaApi():
    data1=pd.read_excel('D:/Sebastian/ProyectosDeDesarrollo/calaAnalytics/back/database/ejercicio1_b1.xlsx',usecols="A:D")
    data2=pd.read_table('D:/Sebastian/ProyectosDeDesarrollo/calaAnalytics/back/database/ejercicio1_b2.txt')
    datos=pd.merge(data1,data2,left_on="cc_cliente",right_on="CEDULA")
    js= datos.to_json(orient="records")
    return js


if __name__ == '__main__':
    app.run(debug=True) 