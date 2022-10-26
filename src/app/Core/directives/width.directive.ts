import {Directive, ElementRef,OnInit} from '@angular/core';


@Directive({
  selector: '[appWidth]'
})
export class WidthDirective implements OnInit{

  constructor(private el: ElementRef) { }

  ngOnInit() {
    console.log(this.el.nativeElement.offsetWidth)
  }

  checkWidth(){

    console.log(this.el.nativeElement.offsetWidth)
  }

  ngOnChanges() {
    this.checkWidth();
  }
}
