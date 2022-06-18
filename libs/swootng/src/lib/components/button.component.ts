import { Component, HostBinding, Input } from '@angular/core';
import { ButtonKind, ButtonSize, ThemeColor } from '@swoot/types';

@Component({
  selector: '[swoot-button]',
  templateUrl: 'button.component.html',
})
export class ButtonComponent {
  @Input() color: ThemeColor = 'primary';
  @Input() kind: ButtonKind = 'fill';
  @Input() size: ButtonSize = 'md';

  @HostBinding('class')
  get className() {
    return `
      swoot-button
      swoot-button--${this.color}
      swoot-button--${this.kind}
      swoot-button--${this.size}
    `;
  }
}
