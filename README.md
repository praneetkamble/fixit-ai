  # 🚀 FixIt AI  
### AI-Powered Smart Home Repair Assistant  
> Built for AI for Bharat Hackathon

---

## 🏆 Problem Statement

Home maintenance issues are often misdiagnosed, overpriced, or delayed due to lack of technical knowledge and immediate expert access. Users need a fast, reliable, and intelligent system to assess repair problems and receive actionable guidance.

---

## 💡 Solution Overview

**FixIt AI** is an AI-powered assistant that analyzes home repair problems and provides:

- 🔎 Issue identification  
- ⚠ Risk level assessment  
- 💰 Cost estimation  
- ⏱ Time required  
- 👷 Recommended professional  
- 🧾 Clear explanation  

The system converts natural language input into structured, decision-ready repair intelligence.

---

## 🧠 How It Works

1. User enters a home repair issue (e.g., "Door hinge broken")
2. Frontend sends request to backend API
3. Backend calls OpenAI model
4. AI returns structured JSON response
5. Results are displayed in a clean UI

---

## ⚙ Tech Stack

### 🔹 Frontend
- React (Vite)
- Tailwind CSS
- Component-based architecture

### 🔹 Backend
- Node.js
- Express.js
- OpenAI API (gpt-4o-mini)

### 🔹 AI Integration
- Structured prompt engineering
- JSON-based AI responses
- Error handling with fallback system

---

## 🏗 Architecture Flow

User  
⬇  
Frontend (React UI)  
⬇  
Backend API (Node + Express)  
⬇  
OpenAI Model  
⬇  
Structured JSON Response  
⬇  
Smart Recommendation Display  

---

## ✨ Key Features

- ✅ AI-powered issue diagnosis  
- ✅ Risk classification (Low / Medium / High)  
- ✅ Estimated repair cost  
- ✅ Estimated repair time  
- ✅ Professional recommendation  
- ✅ Clean modern interface  
- ✅ Modular scalable architecture  

---

## 🎯 Unique Selling Proposition (USP)

Unlike traditional repair consultation methods:

- Provides instant AI diagnosis
- Converts simple text into structured repair insights
- Reduces uncertainty in cost and safety risks
- Can scale to urban and rural communities
- Extendable to image upload & multilingual support

---

## 📂 Project Structure

```
AI-FOR-BHARAT/
│
├── backend/
│   ├── server.js
│   ├── ai.js
│   ├── package.json
│   └── .env (ignored)
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── package.json
│
├── requirements.md
├── design.md
├── tasks.md
└── README.md
```

---

## 🚀 How To Run Locally

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/fixit-ai.git
cd fixit-ai
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file inside backend folder:

```
OPENAI_API_KEY=your_api_key_here
PORT=5000
```

Run backend:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open browser at:

```
http://localhost:5173
```

---

## 🔐 Environment Variables

```
OPENAI_API_KEY=your_openai_api_key
PORT=5000
```

---

## 📈 Future Enhancements

- 🔹 Image-based issue detection  
- 🔹 Technician marketplace integration  
- 🔹 Multilingual AI support  
- 🔹 Predictive maintenance alerts  
- 🔹 Mobile app deployment  

---

## 👨‍💻 Team Details

**Team Name:** ACE  
**Team Leader:** Praneet Prashant Kamble  

---

## 🏁 Hackathon Submission Includes

- ✅ requirements.md  
- ✅ design.md  
- ✅ Working frontend & backend  
- ✅ AI-powered structured analysis  
- ✅ GitHub repository  

---

## 🌟 Vision

To make intelligent repair diagnostics accessible to every household in India — reducing uncertainty, improving safety, and enabling informed repair decisions through AI.

---

Made with ❤️ for AI for Bharat Hackathon
