from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import json

app = FastAPI()

# Configurar CORS
origins = [
    "http://localhost",
    "http://localhost:8100",  # Agrega el origen de tu frontend de Angular/Ionic
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Cargar datos desde el archivo JSON
with open("datos.json", "r") as json_file:
    problemas_y_soluciones = json.load(json_file)

class SintomasBusqueda(BaseModel):
    sintomas: List[str]

class Sugerencia(BaseModel):
    id: int
    solucion: str

@app.post("/buscar_sugerencias", response_model=List[Sugerencia])
def buscar_sugerencias(sintomas_busqueda: SintomasBusqueda):
    sintomas = sintomas_busqueda.sintomas
    sugerencias = []

    # Buscar problemas y soluciones basadas en los síntomas proporcionados
    for id, datos in problemas_y_soluciones.items():
        if all(sintoma in datos["sintomas"] for sintoma in sintomas):
            sugerencias.append({"id": id, "solucion": datos["solucion"]})

    if not sugerencias:
        raise HTTPException(status_code=404, detail="No se encontraron sugerencias para los síntomas proporcionados")

    return sugerencias
