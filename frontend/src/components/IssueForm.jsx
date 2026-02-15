import { useState } from "react";

export default function IssueForm({ onSubmit }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description.trim()) return;

    onSubmit({ description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Describe your issue</h2>

      <textarea
        rows="4"
        style={{ width: "100%", marginBottom: "10px" }}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Analyze Issue</button>
    </form>
  );
}
