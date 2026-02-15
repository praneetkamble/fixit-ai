import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY) {
  console.error("❌ OPENAI_API_KEY is NOT loaded");
  process.exit(1);
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function analyzeIssue(issue) {
  const prompt = `
Return ONLY valid JSON in this exact format:

{
  "issueTitle": "",
  "riskLevel": "Low | Medium | High",
  "estimatedCost": "",
  "timeRequired": "",
  "recommendedProfessional": "",
  "explanation": ""
}

Problem: ${issue}
`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a professional home repair AI." },
        { role: "user", content: prompt }
      ],
      temperature: 0.3
    });

    let text = response.choices[0].message.content.trim();

    if (text.startsWith("```")) {
      text = text.replace(/```json|```/g, "").trim();
    }

    return JSON.parse(text);

  } catch (error) {
    console.error("AI ERROR:", error.message);

    return {
      issueTitle: "AI Service Unavailable",
      riskLevel: "Medium",
      estimatedCost: "$80 - $200",
      timeRequired: "1-3 hours",
      recommendedProfessional: "General Technician",
      explanation: error.message
    };
  }
}
