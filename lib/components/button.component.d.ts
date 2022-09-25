import { ButtonKind, ButtonSize, ThemeColor } from '@swoot/types';
import * as i0 from "@angular/core";
export declare class ButtonComponent {
    color: ThemeColor;
    kind: ButtonKind;
    size: ButtonSize;
    get className(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "[swoot-button]", never, { "color": "color"; "kind": "kind"; "size": "size"; }, {}, never, ["*"]>;
}
