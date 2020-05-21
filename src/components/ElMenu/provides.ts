import { InjectionKey, inject, computed } from 'vue';

type RootMenuType = {
  activeIndex: number;
  isMenuPopup: boolean;
  deep: number;
  mode: string;
  menuTrigger: string;
  collapse: boolean;
  backgroundColor: string;
  activeTextColor: string;
  textColor: string;
  items: any[];
  openedMenus: any[];
  selectIndex: (index: number) => void;
  openMenu: (id: any) => void;
  closeMenu: (id: any) => void;
};
type ParentMenuType = {
  items: any[];
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
