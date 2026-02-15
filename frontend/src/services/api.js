export async function analyzeIssue(issue) {
  const response = await fetch("http://localhost:5000/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ issue }),
  });

  if (!response.ok) {
    throw new Error("AI request failed");
  }

  return response.json();
}
