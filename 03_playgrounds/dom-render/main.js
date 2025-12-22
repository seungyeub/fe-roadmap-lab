const t0 = performance.now();

window.addEventListener('DOMContentLoaded', () => {
  const t1 = performance.now();
  const el = document.getElementById('status');
  if (el) el.textContent = `DOMContentLoaded after ${(t1 - t0).toFixed(1)} ms`;
});

window.addEventListener('load', () => {
  const t2 = performance.now();
  console.log(`window.load after ${(t2 - t0).toFixed(1)} ms`);
});
