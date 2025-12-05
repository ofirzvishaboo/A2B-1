# A2B Services - AI Solutions for Small Businesses

A professional website for A2B Services, a company that supplies AI services to small businesses including WhatsApp AI chatbots with inventory management and other automation features.

## 🚀 Features

- **WhatsApp AI Chatbot** - Intelligent chatbots that handle customer inquiries 24/7
- **Inventory Management** - Real-time inventory tracking integrated with chatbot
- **Smart Automation** - Automate repetitive tasks and order processing
- **Analytics Dashboard** - Track sales, customer interactions, and inventory levels
- **Order Notifications** - Automated confirmations and shipping updates
- **Secure & Reliable** - Enterprise-grade security with 99.9% uptime guarantee

## 🛠️ Tech Stack

### Frontend
- **React 19** & **Vite** - Modern, fast frontend tooling
- **CSS3** - Responsive design with custom animations and gradients

### Backend
- **Python 3.12**
- **FastAPI** - High-performance async API framework
- **PostgreSQL** - Robust relational database
- **SQLAlchemy (Async)** - ORM for database interactions
- **Pydantic** - Data validation
- **uv** - Fast Python package and project manager
- **Docker** - Containerization for easy deployment

## 📦 Quick Start (Docker)

The easiest way to run the project is using Docker Compose.

1. **Clone the repository**
   ```bash
   git clone https://github.com/ofirzvishaboo/A2B-1.git
   cd A2B-1
   ```

2. **Setup Environment Variables**
   Copy the sample environment file to `.env` in the backend directory:
   ```bash
   cp backend/env.sample backend/.env
   ```
   *Note: You can edit `backend/.env` to change the API Key or Database credentials if needed.*

3. **Run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

   This will start:
   - **Frontend**: [http://localhost:5173](http://localhost:5173)
   - **Backend API**: [http://localhost:8000](http://localhost:8000)
   - **Database**: PostgreSQL on port 5432

## 📚 API Documentation

Once the backend is running, you can access the interactive API documentation:

- **Swagger UI**: [http://localhost:8000/docs](http://localhost:8000/docs)
- **ReDoc**: [http://localhost:8000/redoc](http://localhost:8000/redoc)

### Authentication
Some endpoints (like `GET /api/contact`) are protected. To access them:
1. Open Swagger UI.
2. Click the **Authorize** button.
3. Enter your `ADMIN_API_KEY` (from `.env`) into the `X-API-Key` field.

## 🔧 Manual Installation

If you prefer running without Docker:

### Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies using `uv` (or pip):
   ```bash
   uv sync
   # or
   pip install -e .
   ```
3. Ensure you have a PostgreSQL database running and update `backend/.env` with the correct `DATABASE_URL`.
4. Run the server:
   ```bash
   uv run uvicorn main:app --reload
   ```

### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## 🎨 Design Features

- Modern light blue gradient theme
- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Professional UI/UX

## 📝 License

This project is open source and available under the MIT License.
