import {
  InjectionKey,
  inject,
  computed,
  reactive,
  onMounted,
  onUnmounted,
  readonly,
  provide,
  toRefs,
  ToRefs,
  watchEffect
} from 'vue';
import { ElMenuOptions } from './ElMenu';

export interface RootMenuType {
  state: ElMenuOptions;
  open: (id: symbol) => void;
  close: (id: symbol) => void;
  select: (index: number) => void;
}

export type ParentMenuType = ToRefs<{
  id: symbol;
  items: any[];
  deep: number;
  isRoot: boolean;
  isActive: boolean;
  isOpen: boolean;
  style: any;
  icon: 'el-icon-arrow-down' | 'el-icon-arrow-right';
  placement: 'bottom-start' | 'right-start';
}>;

const ELROOTMENU_KEY: InjectionKey<RootMenuType> = Symbol('ElRootMenu');
const ElPARENTMENU_KEY: InjectionKey<ParentMenuType> = Symbol('ElParentMenu');

export function useElMenuContext() {
  const root = inject(ELROOTMENU_KEY, null);
  const parent = inject(ElPARENTMENU_KEY, null);

  return {
    root,
    parent
  };
}
export function useElMenu(state: ElMenuOptions) {
  const id = Symbol('ElSubMenu');
  provide(ELROOTMENU_KEY, {
    state: state,
    open(id: symbol) {
      if (state.openedMenus.indexOf(id) === -1) {
        state.openedMenus.push(id);
      }
    },
    close(id: symbol) {
      const menuIndex = state.openedMenus.indexOf(id);
      if (menuIndex >= 0) {
        state.openedMenus.splice(menuIndex, 1);
      }
    },
    select(index: number) {
      state.activeIndex = index;
    }
  });

  const pvState: ToRefs<{
    id: symbol;
    items: any[];
    deep: number;
    isRoot: boolean;
    isActive: boolean;
    isOpen: boolean;
    style: any;
    icon: 'el-icon-arrow-down' | 'el-icon-arrow-right';
    placement: 'bottom-start' | 'right-start';
  }> = toRefs(
    reactive({
      id: id,
      items: state.items,
      deep: 0,
      isRoot: true,
      isActive: false,
      isOpen: false,
      style: state.mode !== 'horizontal' ? { paddingLeft: '20px' } : {},
      icon: 'el-icon-arrow-down',
      placement: 'right-start'
    })
  );
  provide(ElPARENTMENU_KEY, pvState);
}
export function useElSubMenu() {
  const id = Symbol('ElSubMenu');
  const { root, parent } = useElMenuContext();

  const pvState: ToRefs<{
    id: symbol;
    items: any[];
    deep: number;
    isRoot: boolean;
    isActive: boolean;
    isOpen: boolean;
    style: any;
    icon: 'el-icon-arrow-down' | 'el-icon-arrow-right';
    placement: 'bottom-start' | 'right-start';
  }> = toRefs(
    reactive({
      id: id,
      items: [],
      deep: parent.deep.value + 1,
      isRoot: false,
      isActive: computed<boolean>(() => pvState.items.value.some(item => item.isActive)),
      isOpen: computed(() => {
        return root.state.openedMenus.indexOf(id) !== -1;
      }),
      style: computed(() => {
        const style: any = {
          backgroundColor: root.state.backgroundColor,
          borderBottomColor: pvState.isActive.value ? root.state.activeTextColor : 'transparent',
          color: pvState.isActive.value ? root.state.activeTextColor : root.state.textColor
        };
        if (root.state.mode !== 'horizontal') {
          style.color = root.state.textColor;
          style.paddingLeft = (parent.deep.value + 1) * 20 + 'px';
        }
        return style;
      }),
      icon: computed(() =>
        (root.state.mode === 'horizontal' && parent.isRoot) || (root.state.mode === 'vertical' && !root.state.collapse)
          ? 'el-icon-arrow-down'
          : 'el-icon-arrow-right'
      ),
      placement: computed(() => (root.state.mode === 'horizontal' && parent.isRoot ? 'bottom-start' : 'right-start'))
    })
  );
  provide(ElPARENTMENU_KEY, pvState);
  return { root, parent, state: pvState };
}

export function useElMenuItem() {
  const id = Symbol('ElMenuItem');
  const { root, parent } = useElMenuContext();

  const state: ToRefs<Readonly<{
    id: symbol;
    index: number;
    isActive: boolean;
    style: any;
  }>> = toRefs(
    readonly(
      reactive({
        id: id,
        index: computed(() => root.state.items.indexOf(id)),
        isActive: computed(() => state.index.value !== -1 && state.index.value === root.state.activeIndex),
        style: computed(() => {
          const style: any = {
            color: state.isActive.value ? root.state.activeTextColor : root.state.textColor,
            backgroundColor: root.state.backgroundColor
          };
          if (root.state.mode === 'vertical') {
            style.paddingLeft = (parent.deep.value + 1) * 20 + 'px';
          }
          if (root.state.mode === 'horizontal') {
            style.borderBottomColor = state.isActive.value ? root.state.activeTextColor : 'transparent';
          }
          return style;
        })
      })
    )
  );

  onMounted(() => {
    if (parent.deep.value >= 0) {
      if (parent.items.value.indexOf(id) === -1) {
        parent.items.value.push(id);
      }
    }

    if (root.state.items.indexOf(id) === -1) {
      root.state.items.push(id);
    }
  });
  onUnmounted(() => {
    if (parent.deep.value >= 0) {
      if (parent.items.value.indexOf(id) === -1) {
        const indexWithParent = parent.items.value.indexOf(id);
        parent.items.value.splice(indexWithParent, 1);
      }
    }
    if (state.index.value >= 0) {
      root.state.items.splice(state.index.value, 1);
    }
  });
  return { root, parent, state };
}
