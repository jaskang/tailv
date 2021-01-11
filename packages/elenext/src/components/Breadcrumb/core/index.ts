import { InjectionKey, Ref } from 'vue'
import { ParentProvide } from '../../../hooks/useParent'

export interface BreadcrumbProvide {
  separator: Ref<string>
}
export const Breadcrumb_IJK: InjectionKey<ParentProvide<BreadcrumbProvide>> = Symbol('BreadcrumbProvide')
