export function Circle() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function CircleHalf() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 2a5 5 0 0 1 0 10z" fill="currentColor" />
    </svg>
  );
}

export function Square() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="2.5" y="2.5" width="9" height="9" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
