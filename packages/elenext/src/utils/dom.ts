export function createEl(id: string, cls?: string) {
  const el = document.createElement('div');
  el.id = id;
  if (cls) {
    el.className = cls;
  }
  document.body.appendChild(el);
  return el;
}

export function removeEl(el: HTMLElement) {
  if (el.parentNode) el.parentNode.removeChild(el);
}

export function normalizeClass(value: unknown): string {
  let res = '';
  if (typeof value === 'string') {
    res = value;
  } else if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      res += normalizeClass(value[i]) + ' ';
    }
  } else if (value !== null && typeof value === 'object') {
    for (const name in value) {
      if ((value as Record<string, boolean>)[name]) {
        res += name + ' ';
      }
    }
  }
  return res.trim();
}
