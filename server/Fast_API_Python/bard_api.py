from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from bardapi import Bard
import os
import json
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional

# Configure CORS settings
origins = [
        "http://localhost",
        "http://localhost:4000",
        "http://localhost:3000"
]

app=FastAPI(title='Test API')
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Add the origin URL of your React.js application
    allow_credentials=True,
    allow_methods=["GET","OPTIONS","POST"],
    allow_headers=["Content-Type"],
)

os.environ['_BARD_API_KEY']='WggF3McIdRse_TTfqXoSBwVjCc2lmL1pQ6IaNz_AmtLi50L6YWYnltTcAZ62AoV4TpxT0w.'

@app.get('/')
async def hello(request:Request):
    return "<h1>Hello, There</h1>"

@app.get('/chat-bard-api')
async def bard_chat(prompt: Optional[str]=None):
    print("Prompt is----------",prompt)
    data= Bard().get_answer(prompt)['content']
    print("Data is",data)
    return {'data':data}
