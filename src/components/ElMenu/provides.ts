import { InjectionKey, inject, computed } from 'vue';

type RootMenuType = {
  state: {
    items: any[];
    activeIndex: number;
  };
  deep: number;
  mode: string;
  backgroundColor: string;
  activeTextColor: string;
  textColor: string;
  selectIndex: (index: number) => void;
};
type ParentMenuType = {
  state: {
    items: any[];
  };
  deep: number;
  isRoot: boolean;
};
const ElRootMenuInjectionKey: InjectionKey<RootMenuType> = Symbol('ElRootMenu');
const ElParentMenuInjectionKey: InjectionKey<ParentMenuType> = Symbol('ElParentMenu');

export function useElMenu() {
  const rootMenu = inject(ElRootMenuInjectionKey, null);
  const parentMenu = inject(ElParentMenuInjectionKey, null);

  const paddingStyle = rootMenu?.mode !== 'vertical' ? {} : { paddingLeft: (parentMenu.deep + 1) * 20 + 'px' };

  return { rootMenu, parentMenu, paddingStyle, rootKey: ElRootMenuInjectionKey, parentKey: ElParentMenuInjectionKey };
}
