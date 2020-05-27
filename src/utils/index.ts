export * from './dom';
export * from './uniqueId';
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
      if (value[name]) {
        res += name + ' ';
      }
    }
  }
  return res.trim();
}
