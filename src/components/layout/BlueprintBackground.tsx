/**
 * A fixed, full-viewport backdrop: a faint technical-drawing grid (nodding
 * to surgical-instrument blueprints) with a soft red glow anchored near the
 * top. Sits behind every section at z-0 so content always reads on top.
 */
export function BlueprintBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-blueprint-grid bg-grid opacity-60" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 bg-radial-fade" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
    </div>
  );
}
