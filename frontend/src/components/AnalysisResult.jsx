export default function AnalysisResult({ analysis, loading, error, onBack }) {
  if (loading) {
    return (
      <div>
        <h2>AI Analysis</h2>
        <p>AI is analyzing your issue...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>Error</h2>
        <p>AI analysis failed. Please try again.</p>
        <button onClick={onBack}>Go Back</button>
      </div>
    );
  }

  if (!analysis) return null;

  return (
    <div>
      <h2>AI Analysis Complete</h2>

      <p><strong>Issue:</strong> {analysis.issueTitle}</p>
      <p><strong>Risk Level:</strong> {analysis.riskLevel}</p>
      <p><strong>Estimated Cost:</strong> {analysis.estimatedCost}</p>
      <p><strong>Time Required:</strong> {analysis.timeRequired}</p>
      <p><strong>Recommended Professional:</strong> {analysis.recommendedProfessional}</p>

      <h4>Why this recommendation?</h4>
      <p>{analysis.explanation}</p>

      <button onClick={onBack}>Analyze Another Issue</button>
    </div>
  );
}
