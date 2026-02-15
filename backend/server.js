import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyzeIssue from "./ai.js";

dotenv.config();

console.log("Loaded key:", process.env.OPENAI_API_KEY);


// 🔍 Debug check — remove after everything works
console.log("Loaded API key:", process.env.OPENAI_API_KEY ? "YES" : "NO");

if (!process.env.OPENAI_API_KEY) {
  console.error("❌ OPENAI_API_KEY is missing in .env file");
}

const app = express();

app.use(cors());
app.use(express.json());

/**
 * POST /analyze
 * Body: { issue: "door broken" }
 */
app.post("/analyze", async (req, res) => {
  try {
    const { issue } = req.body;

    if (!issue) {
      return res.status(400).json({
        error: "Issue is required",
      });
    }

    console.log("📩 Incoming issue:", issue);

    const result = await analyzeIssue(issue);

    return res.json(result);

  } catch (error) {
    console.error("🔥 SERVER ERROR:", error);

    return res.status(500).json({
      issueTitle: "AI Service Unavailable",
      riskLevel: "Medium",
      estimatedCost: "$80 - $200",
      timeRequired: "1-3 hours",
      recommendedProfessional: "General Technician",
      explanation: error.message || "Unknown server error"
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
import OpenAI from "openai";

const test = async () => {
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const models = await client.models.list();
  console.log("API WORKING");
};

test();
fetch("http://localhost:5000/analyze", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ issue: "door broken" })
})
.then(res => res.json())
.then(data => console.log(data));