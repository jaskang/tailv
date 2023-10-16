import {
  type ComponentOptionsMixin,
  type ComponentOptionsWithObjectProps,
  defineComponent,
  type EmitsOptions,
  type SlotsType,
} from 'vue'

export type OptionValue = string | number
export type OptionItem = { label: string; value: OptionValue; disabled?: boolean }

export function toMultipleVal(val?: OptionValue | OptionValue[]): OptionValue[] | undefined {
  if (typeof val === 'undefined') return undefined
  if (Array.isArray(val)) return val
  return [val] as OptionValue[]
}

export function tsxComponent<
  PropsOptions extends Readonly<ComponentOptionsWithObjectProps>,
  E extends EmitsOptions = {},
  S extends SlotsType = {},
>(
  options: ComponentOptionsWithObjectProps<
    PropsOptions,
    () => JSX.Element, // RawBindings
    {}, // D
    {}, // C
    {}, // M
    ComponentOptionsMixin, // Mixin
    ComponentOptionsMixin, // Extends
    E,
    string, // EE
    {}, // I
    string, // II
    S
  >
) {
  return defineComponent<PropsOptions, {}, {}, {}, {}, {}, {}, E, string, S, {}, string>(options)
}

// export type DefineComponent<
//   PropsOrPropOptions = {},
//   RawBindings = {},
//   D = {},
//   C extends ComputedOptions = ComputedOptions,
//   M extends MethodOptions = MethodOptions,
//   Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
//   Extends extends ComponentOptionsMixin = ComponentOptionsMixin,
//   E extends EmitsOptions = {},
//   EE extends string = string,
//   PP = PublicProps,
//   Props = ResolveProps<PropsOrPropOptions, E>,
//   Defaults = ExtractDefaultPropTypes<PropsOrPropOptions>,
//   S extends SlotsType = {},
// > = ComponentPublicInstanceConstructor<
//   CreateComponentPublicInstance<
//     Props,
//     RawBindings,
//     D,
//     C,
//     M,
//     Mixin,
//     Extends,
//     E,
//     PP & Props,
//     Defaults,
//     true,
//     {},
//     S
//   > &
//     Props
// > &
//   ComponentOptionsBase<
//     Props,
//     RawBindings,
//     D,
//     C,
//     M,
//     Mixin,
//     Extends,
//     E,
//     EE,
//     Defaults,
//     {},
//     string,
//     S
//   > &
//   PP
