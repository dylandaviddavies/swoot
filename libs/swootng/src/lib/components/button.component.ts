import { Component, HostBinding, Input } from '@angular/core';
import { ButtonKind, ThemeColor } from '@swoot/types';

@Component({
  selector: '[swoot-button]',
  templateUrl: 'button.component.html',
})
export class ButtonComponent {
  @Input() color: ThemeColor = 'primary';
  @Input() kind: ButtonKind = 'fill';

  @HostBinding('class')
  get classes() {
    return `
      swoot-button
      swoot-button--${this.color}
      swoot-button--${this.kind}
    `;
  }
}
