

function Star({ filled }) {
  return (
    <span style={{ fontSize: "28px", color: filled ? "#FFC700" : "#F9F1E7" }}>
      ★
    </span>
  )
}

function Rating({ rating }) {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <Star key={i} filled={i < rating} />
      ))}
    </div>
  )
}

export default Rating