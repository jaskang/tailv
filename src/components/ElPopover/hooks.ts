import { onUnmounted } from 'vue';

export function usePopper(id: string) {
  const el = document.createElement('div');
  el.id = id + generateId();
  document.body.appendChild(el);

  onUnmounted(() => {
    if (el.parentNode) el.parentNode.removeChild(el);
  });

  return {
    teleportId: el.id
  };
}
export const generateId = function() {
  return Math.floor(Math.random() * 10000);
};
