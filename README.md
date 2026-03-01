# Todo API

RESTful API for the Todo application built with Node.js, Express, TypeScript, and MongoDB.

---

## Tech Stack

- **Node.js** — Runtime
- **Express** — Web framework
- **TypeScript** — Type safety
- **MongoDB** — Database
- **Mongoose** — ODM
- **Morgan** — HTTP request logger

---

## Project Structure

```
Todo-api/
├── dist/
└── src/
    ├── config/         # Database and environment config
    ├── controllers/    # Route handlers
    ├── interfaces/     # TypeScript interfaces
    ├── models/         # Mongoose schemas
    ├── repositories/   # Database access layer
    ├── routes/         # Express route definitions
    ├── services/       # Business logic
    ├── utils/          # Helper utilities
    ├── validators/     # Request validation
    ├── app.ts
    └── server.ts
```

---

## Getting Started

### Prerequisites

- Node.js >= 18
- MongoDB (local or Atlas)

### Installation

```bash
git clone <your-repo-url>
cd Todo-api
npm install
```

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/todo-db
```

### Scripts

```bash
npm run dev      # Development with ts-node
npm run build    # Compile TypeScript
npm start        # Run compiled output
```

---

## API Endpoints

Base URL: `http://localhost:5000/api`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/todos` | Get all todos (paginated) |
| POST | `/todos` | Create a new todo |
| PATCH | `/todos/:id` | Update todo title or status |
| DELETE | `/todos/:id` | Delete a todo |

### Query Parameters

`GET /todos` accepts the following query params:

| Param | Type | Default | Description |
|---|---|---|---|
| `page` | number | 1 | Page number |
| `limit` | number | 5 | Items per page |

---

## Architecture

```
Request → Controller → Service → Repository → MongoDB
```

- **Controller** — Handles HTTP layer, parses query params and body
- **Service** — Business logic
- **Repository** — All Mongoose queries, returns plain objects