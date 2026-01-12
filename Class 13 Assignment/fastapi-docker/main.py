from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {
        "title": "Docker Isolation Concept",
        "message": "This FastAPI app is running inside a Docker container.",
        "benefit": "Isolation protects applications from unwanted changes."
    }
