import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appAutoFocus]'
})
export class AppAutoFocusDirective implements OnInit {
    private _autofocus;
    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        if (this._autofocus || typeof this._autofocus === 'undefined') {
            this.el.nativeElement.focus();
        }
    }

    @Input() set autofocus(condition: boolean) {
        this._autofocus = condition !== false;
    }
}
