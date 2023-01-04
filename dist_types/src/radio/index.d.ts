import "./index.scss";
export declare const ERadio: import("vue").DefineComponent<{
    disabled: BooleanConstructor;
    checked: BooleanConstructor;
    name: StringConstructor;
    value: (StringConstructor | NumberConstructor)[];
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "onUpdate:checked"[], "onUpdate:checked", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: BooleanConstructor;
    checked: BooleanConstructor;
    name: StringConstructor;
    value: (StringConstructor | NumberConstructor)[];
}>> & {
    "onOnUpdate:checked"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    checked: boolean;
}>;
