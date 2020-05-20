import { InjectionKey, inject } from 'vue';

export const ElGlobalConfigSymbol: InjectionKey<{
  size?: 'medium' | 'small' | 'mini';
}> = Symbol();

export function useGlobal() {
  return inject(ElGlobalConfigSymbol, null);
}

export const ElRowSymbol: InjectionKey<number> = Symbol();
export const ElFormSymbol: InjectionKey<any> = Symbol();
export const ElFormItemSymbol: InjectionKey<any> = Symbol();
