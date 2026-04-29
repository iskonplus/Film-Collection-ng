import { afterNextRender, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class Autofocus {
  private readonly el = inject(ElementRef<HTMLInputElement>);

  constructor() {
    afterNextRender(() => {
      this.el.nativeElement.focus();
    });
  }
}
