/**
 * Clamps the given number between min and max values. Returns value if within
 * range, or closest bound.
 */
export default function clamp(val: number, min: number, max: number): number {
  if (!val) return val;
  if (max < min) throw new Error('`max` cannot be less than `min`');
  return Math.min(Math.max(val, min), max);
}
