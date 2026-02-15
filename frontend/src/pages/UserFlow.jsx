import { useState } from "react";
import IssueForm from "../components/IssueForm";
import AnalysisResult from "../components/AnalysisResult";

export default function UserFlow() {
  const [step, setStep] = useState(1);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (data) => {
    setLoading(true);
    setError(false);
    setStep(2);

    try {
      const res = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          issue: data.description
        })
      });

      if (!res.ok) {
        throw new Error("Server error");
      }

      const result = await res.json();
      setAnalysis(result);

    } catch (err) {
      console.error(err);
      setError(true);
    }

    setLoading(false);
  };

  const goBack = () => {
    setStep(1);
    setAnalysis(null);
    setError(false);
  };

  return (
    <div style={{ padding: "40px" }}>
      {step === 1 && <IssueForm onSubmit={handleSubmit} />}

      {step === 2 && (
        <AnalysisResult
          analysis={analysis}
          loading={loading}
          error={error}
          onBack={goBack}
        />
      )}
    </div>
  );
}
