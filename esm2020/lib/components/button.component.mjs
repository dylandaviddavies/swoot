import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ButtonComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvc3dvb3RuZy9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvc3dvb3RuZy9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPOUQsTUFBTSxPQUFPLGVBQWU7SUFKNUI7UUFLVyxVQUFLLEdBQWUsU0FBUyxDQUFDO1FBQzlCLFNBQUksR0FBZSxNQUFNLENBQUM7UUFDMUIsU0FBSSxHQUFlLElBQUksQ0FBQztLQVdsQztJQVRDLElBQ0ksU0FBUztRQUNYLE9BQU87O3NCQUVXLElBQUksQ0FBQyxLQUFLO3NCQUNWLElBQUksQ0FBQyxJQUFJO3NCQUNULElBQUksQ0FBQyxJQUFJO0tBQzFCLENBQUM7SUFDSixDQUFDOzs0R0FiVSxlQUFlO2dHQUFmLGVBQWUsbUtDUDVCLCtCQUNBOzJGRE1hLGVBQWU7a0JBSjNCLFNBQVM7K0JBQ0UsZ0JBQWdCOzhCQUlqQixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFHRixTQUFTO3NCQURaLFdBQVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdXR0b25LaW5kLCBCdXR0b25TaXplLCBUaGVtZUNvbG9yIH0gZnJvbSAnQHN3b290L3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW3N3b290LWJ1dHRvbl0nLFxuICB0ZW1wbGF0ZVVybDogJ2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNvbG9yOiBUaGVtZUNvbG9yID0gJ3ByaW1hcnknO1xuICBASW5wdXQoKSBraW5kOiBCdXR0b25LaW5kID0gJ2ZpbGwnO1xuICBASW5wdXQoKSBzaXplOiBCdXR0b25TaXplID0gJ21kJztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgc3dvb3QtYnV0dG9uXG4gICAgICBzd29vdC1idXR0b24tLSR7dGhpcy5jb2xvcn1cbiAgICAgIHN3b290LWJ1dHRvbi0tJHt0aGlzLmtpbmR9XG4gICAgICBzd29vdC1idXR0b24tLSR7dGhpcy5zaXplfVxuICAgIGA7XG4gIH1cbn1cbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuIl19