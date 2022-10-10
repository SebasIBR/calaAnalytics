import pandas as pd
data=pd.read_table('D:/Sebastian/ProyectosDeDesarrollo/calaAnalytics/back/database/ejercicio1_b2.txt')
js= data.to_json(orient="records")
print(js)

