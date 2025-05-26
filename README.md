# Fleet Vehicle Status Updater

## Project Overview
A mini full-stack fleet vehicle status tracker built with React, Redux, FastAPI, and Material UI.

## Tech Stack
- **Frontend:** React, Redux Toolkit, Material UI, Axios
- **Backend:** FastAPI (Python)


## Project Structure
```pgsql
fleet-updater/
├── api/
│   ├── vehicle_app/
│   │   ├── v1/
│   │   │   ├── tests/
│   │   │   ├── __init__.py
│   │   │   ├── schemas.py
│   │   │   └── views.py
│   │   ├── __init__.py
│   ├── main.py
│   ├── __init__.py
│   ├── poetry.lock
│   ├── pytest.ini
│   └── pyproject.toml
├── web/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── redux/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── api.js
│   └── package.json
└── README.md

```

## Setup Instructions

### Backend
```bash
cd api
python3 -m venv .venv
source .venv/bin/activate

pip install poetry
poetry install

python main.py


### Frontend
```bash
cd web
npm install
npm start
```
