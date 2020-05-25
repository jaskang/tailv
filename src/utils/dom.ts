export function createEl(id: string) {
  const popperEl = document.createElement('div');
  popperEl.id = id;
  document.body.appendChild(popperEl);
  return popperEl;
}

export function removeEl(el) {
  if (el.parentNode) el.parentNode.removeChild(el);
}
