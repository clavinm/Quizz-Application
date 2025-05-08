// Define some vibrant colors for variety
const letterColors = {
  A: "#f44336", // Red
  B: "#2196f3", // Blue
  C: "#4caf50", // Green
  D: "#ff9800", // Orange
  E: "#9c27b0", // Purple
  F: "#009688", // Teal
  G: "#e91e63", // Pink
  H: "#3f51b5", // Indigo
  // Add more as needed
};

export const Letter = ({ letter }) => {
  const bgColor = letterColors[letter.toUpperCase()] || "#607d8b"; // default color

  return (
    <div style={{
      padding: "6px 14px",
      backgroundColor: bgColor,
      color: "#fff",
      fontWeight: "bold",
      fontSize: "16px",
      borderRadius: "12px",
      display: "inline-block",
      textAlign: "center",
      minWidth: "32px",
      transition: "transform 0.2s ease",
      boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
    }}>
      {letter.toUpperCase()}
    </div>
  );
};
