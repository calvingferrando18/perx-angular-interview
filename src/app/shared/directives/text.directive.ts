import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appText]'
})
export class TextDirective implements AfterViewInit {
  @Input() appText!: string;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.el.nativeElement.textContent = this.appText;
  }
}
