FROM python:3.12-slim-bookworm

# Install uv
COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv

# Set working directory
WORKDIR /app

# Configure uv to use copy mode instead of hardlinks (fixes warning in Docker)
ENV UV_LINK_MODE=copy

# Copy project definition files first (for better caching)
COPY pyproject.toml uv.lock ./

# Install dependencies (create venv)
RUN uv sync --frozen --no-cache

# Copy the rest of the application code
COPY . .

# Expose port
EXPOSE 8000

# Run the application using uv run (to use the environment)
CMD ["uv", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
