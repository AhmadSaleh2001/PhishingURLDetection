from fastapi import FastAPI , Form
from pydantic import BaseModel
import pickle
from fastapi.middleware.cors import CORSMiddleware


App = FastAPI()

origins = [
    "http://localhost:3000"
]
App.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
Model = None
with open("MODELSVM2.pkl", 'rb') as F:
    Model = pickle.load(F)  

@App.post("/")
async def Scoring_End_Point(URL : str = Form()):
    MinAns = Model.predict([URL])
    return {"Ans" : str(MinAns[0])}
