
import {Directive , ElementRef,  HostListener} from '@angular/core';

@Directive({
    selector: '[appAutoGrow]'
}
)
export class AutoGrowDirective {
    constructor(private ele: ElementRef) {
        console.log('AutoGrow constructor');
    }
    @HostListener('focus') onFocus() {
        this.ele.nativeElement.style.width = '500px';
        console.log('AutoGrow focus');
    }
    @HostListener('blur') onBlur() {
        this.ele.nativeElement.style.width = '100px';
        console.log('AutoGrow blur');
    }
}
