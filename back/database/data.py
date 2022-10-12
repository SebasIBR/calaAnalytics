import pandas as pd

data1= pd.read_excel('D:/Sebastian/ProyectosDeDesarrollo/calaAnalytics/back/database/ejercicio1_b1.xlsx',usecols="A:D")
js1= data1.to_json(orient="records")

data2=pd.read_table('D:/Sebastian/ProyectosDeDesarrollo/calaAnalytics/back/database/ejercicio1_b2.txt')
js2= data2.to_json(orient="records")

datos=pd.merge(data1,data2,left_on="cc_cliente",right_on="CEDULA")
print(datos)