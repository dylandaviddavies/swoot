import * as i0 from '@angular/core';
import { Component, Input, HostBinding, NgModule } from '@angular/core';

class ButtonComponent {
    constructor() {
        this.color = 'primary';
        this.kind = 'fill';
        this.size = 'md';
    }
    get className() {
        return `
      swoot-button
      swoot-button--${this.color}
      swoot-button--${this.kind}
      swoot-button--${this.size}
    `;
    }
}
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: ButtonComponent, selector: "[swoot-button]", inputs: { color: "color", kind: "kind", size: "size" }, host: { properties: { "class": "this.className" } }, ngImport: i0, template: "<ng-content></ng-content>\r\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: '[swoot-button]', template: "<ng-content></ng-content>\r\n" }]
        }], propDecorators: { color: [{
                type: Input
            }], kind: [{
                type: Input
            }], size: [{
                type: Input
            }], className: [{
                type: HostBinding,
                args: ['class']
            }] } });

class ButtonModule {
}
ButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ButtonModule, declarations: [ButtonComponent], exports: [ButtonComponent] });
ButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ButtonModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ButtonComponent],
                    exports: [ButtonComponent],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonModule };
//# sourceMappingURL=swoot-swootng.mjs.map
