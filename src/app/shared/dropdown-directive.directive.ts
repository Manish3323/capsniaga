import { Directive } from '@angular/core';
import { HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveDirective {

  constructor() { }
  @HostBinding('class.open') toggleDown  = false;
  @HostListener('click') toggleDropdown(){
        this.toggleDown = !this.toggleDown;
  }
}
