# Backend Wizards — Stage 0 Task

## API Integration & Data Processing Assessment

This project implements a GET endpoint that integrates with the Genderize API, processes the response, and returns a structured result.

---

## 🚀 Endpoint

```
GET /api/classify?name={name}
```

Example:

```
/api/classify?name=john
```

---

## ✅ Success Response

```json
{
  "status": "success",
  "data": {
    "name": "john",
    "gender": "male",
    "probability": 0.99,
    "sample_size": 1234,
    "is_confident": true,
    "processed_at": "2026-04-01T12:00:00Z"
  }
}
```

---

## ❌ Error Responses

### 400 Bad Request

```json
{
  "status": "error",
  "message": "Name query parameter is required"
}
```

### 422 Invalid Input

```json
{
  "status": "error",
  "message": "Name must be a string"
}
```

### 422 No Prediction

```json
{
  "status": "error",
  "message": "No prediction available for the provided name"
}
```

### 500 Server Error

```json
{
  "status": "error",
  "message": "Internal server error"
}
```

---

## ⚙️ Processing Logic

* Extract:

  * gender
  * probability
  * count → sample_size
* Compute:

  * is_confident = true when:

    * probability ≥ 0.7
    * sample_size ≥ 100
* Generate:

  * processed_at → UTC ISO 8601 timestamp

---

## 🌐 External API

```
https://api.genderize.io/?name={name}
```

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* Axios
* CORS

---

## 📦 Installation

```bash
git clone <your-repo-link>
cd gender-api
npm install
```

---

## ▶️ Run Project

```bash
npm run dev
```

or

```bash
node app.js
```

---

## 🌍 CORS

CORS is enabled:

```
Access-Control-Allow-Origin: *
```

---

## 🧪 Testing

Open in browser or Postman:

```
http://localhost:3000/api/classify?name=john
```

---

## 📁 Project Structure

```
gender-api/
│
├── app.js
├── package.json
└── README.md
```

---

## 🚀 Deployment

Supported platforms:

* Vercel
* Railway
* Heroku
* AWS


