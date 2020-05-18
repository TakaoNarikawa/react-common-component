/// <reference types="react" />
import * as _space from "./misc/space";
import * as _style from "./misc/style";
export declare const ContentWrapper: import("react").FC<{
    topMargin?: string | undefined;
    bottomMargin?: string | undefined;
    additionalStyle?: string | undefined;
}>;
export declare const NoBr: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const NoBrs: import("react").FC<{
    words: import("react").ReactNode[];
}>;
export declare const Response: import("react").FC<{
    min?: string | undefined;
    max?: string | undefined;
}>;
export declare const space: typeof _space;
export declare const style: typeof _style;
