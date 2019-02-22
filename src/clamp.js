/**
 * Clamps the given number between min and max values. Returns value if within
 * range, or closest bound.
 */
export default function clamp(val, min, max) {
  if (!val) return value;
  if (max < min) throw new Error('`max` cannot be less than `min`');
  return Math.min(Math.max(val, min), max);
}
