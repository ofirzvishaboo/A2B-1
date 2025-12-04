# Backend API

FastAPI backend with PostgreSQL database support.

## Setup

### 1. Install Dependencies

```bash
# Using pip
pip install -e .

# Or using uv (recommended)
uv pip install -e .
```

### 2. Configure Environment Variables

Create a `.env` file in the backend directory:

```env
DATABASE_URL=postgresql+asyncpg://username:password@localhost:5432/database_name
API_V1_STR=/api/v1
PROJECT_NAME=Backend API
```

**Important:** Replace `username`, `password`, `localhost`, `5432`, and `database_name` with your actual PostgreSQL credentials.

### 3. Setup PostgreSQL Database

Make sure PostgreSQL is running and create a database:

```sql
CREATE DATABASE database_name;
```

### 4. Run the Application

```bash
# Development mode with auto-reload
uvicorn main:app --reload --host 0.0.0.0 --port 8000

# Or run directly
python main.py
```

The API will be available at:
- API: http://localhost:8000
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Project Structure

```
backend/
├── main.py           # FastAPI application entry point
├── config.py         # Configuration and settings
├── database.py       # Database connection and session management
├── models/           # SQLAlchemy models
│   ├── __init__.py
│   └── example.py    # Example model
└── pyproject.toml    # Project dependencies
```

## Adding New Models

1. Create a new file in `models/` directory
2. Import `Base` from `database`
3. Create your model class inheriting from `Base`
4. Import the model in `models/__init__.py`

Example:

```python
from sqlalchemy import Column, Integer, String
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True)
```

## Database Migrations

For production, consider using Alembic for database migrations:

```bash
pip install alembic
alembic init alembic
```

