import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAppBackground]'
})
export class AppBackgroundDirective implements OnInit {
  @Input() defaultColor: string = 'transperant';
  @Input('appAppBackground') highlightedColor: string | undefined;
  @HostBinding('style.backgroundColor') backgroundColor: string | undefined;

  ngOnInit(): void {

  }
  @HostListener('mouseover') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightedColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }


}
