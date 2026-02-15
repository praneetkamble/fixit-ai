function WorkerRecommendation({ analysis }) {
  const confidencePercent = Math.round(analysis.confidence * 100);

  return (
    <div>
      <h3>Recommended Professional</h3>

      <p><strong>Skill:</strong> {analysis.skills[0]}</p>
      <p><strong>AI Confidence:</strong> {confidencePercent}%</p>
      <p><strong>First-time resolution rate:</strong> 92%</p>

      {analysis.confidence < 0.75 && (
        <p style={{ color: "orange" }}>
          ⚠ Low confidence. Human review recommended.
        </p>
      )}

      <button>Confirm Booking</button>
    </div>
  );
}

export default WorkerRecommendation;
