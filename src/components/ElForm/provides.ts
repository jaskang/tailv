import { InjectionKey, inject } from 'vue';

export interface ElFormProvide {
  size?: 'medium' | 'small' | 'mini';
  disabled?: boolean;
}

export const EL_FORM_INJECTKEY: InjectionKey<ElFormProvide> = Symbol('ElFormProvide');

export function useElForm() {
  const from = inject(EL_FORM_INJECTKEY);
  return { from };
}
