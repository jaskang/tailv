import { type PropType } from "vue";
import "./index.scss";
export declare const EButton: import("vue").DefineComponent<{
    type: PropType<"round" | "circle" | "link" | "plain">;
    color: PropType<"primary" | "success" | "warning" | "error">;
    size: PropType<"small" | "large">;
    round: BooleanConstructor;
    disabled: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: PropType<"round" | "circle" | "link" | "plain">;
    color: PropType<"primary" | "success" | "warning" | "error">;
    size: PropType<"small" | "large">;
    round: BooleanConstructor;
    disabled: BooleanConstructor;
}>>, {
    round: boolean;
    disabled: boolean;
}>;
