import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string = 'https://images.pexels.com/photos/28872580/pexels-photo-28872580/free-photo-of-cuenco-de-peras.jpeg'
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement
    elNative.src = this.customImg
  }
  constructor(private elHost: ElementRef) {

  }

}
