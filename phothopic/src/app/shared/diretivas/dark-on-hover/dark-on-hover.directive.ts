import { Directive, ElementRef, HostListener, Renderer, Input } from "@angular/core";

@Directive ({
    selector: '[darkonHover]'
})
export class DarkOnHoverDirective {

    @Input() brigthness = '80%';

    constructor(private el: ElementRef, private render: Renderer) {}

    @HostListener('mouseover')
    darkOn() {
        this.render.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brigthness})`);
    }
    
    @HostListener('mouseleave')
    darkOff() {
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)'); 
    }
}