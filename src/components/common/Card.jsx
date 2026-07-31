function Card({ children, className = '' }) {
  return (
    <div
      className={`bg-white rounded-lg border border-black/5 shadow-sm hover:shadow-md transition-shadow overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
