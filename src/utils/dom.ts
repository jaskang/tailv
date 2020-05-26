export function createEl(id: string, cls?: string) {
  const el = document.createElement('div');
  el.id = id;
  if (cls) {
    el.className = cls;
  }
  document.body.appendChild(el);
  return el;
}

export function removeEl(el) {
  if (el.parentNode) el.parentNode.removeChild(el);
}
