import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    
    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2
    ) {}

    @HostListener('mouseover')
    onMouseOver() {
        this.renderer.addClass(
            this.elementRef.nativeElement,
            'open'
        )
    }

    @HostListener('mouseout')
    onMouseOut() {
        this.renderer.removeClass(
            this.elementRef.nativeElement,
            'open'
        )
    }
}