import pandas as pd

data= pd.read_excel('D:/Sebastian/ProyectosDeDesarrollo/calaAnalytics/back/database/ejercicio1_b1.xlsx',usecols="A:D")
print(data)
js= data.to_json(orient="records")
print(js)
