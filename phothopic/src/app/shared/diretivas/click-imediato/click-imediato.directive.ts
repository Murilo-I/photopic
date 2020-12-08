import { Directive, ElementRef, OnInit } from "@angular/core";
import { PlatformDetectorService } from "src/app/core/platform-detector/platform-detector.service";

@Directive({
    selector: '[clickImediato]'
})
export class ClickImediatoDirective implements OnInit {

    constructor(private element: ElementRef, 
        private platformDetector: PlatformDetectorService) {  }
        
    ngOnInit() {        
        this.platformDetector.isPlatformBrowser &&
        this.element.nativeElement.click(); 
    }
}