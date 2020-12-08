import { Directive, Input, ElementRef, Renderer, OnInit } from '@angular/core';

import { Photo } from '../photo/photo';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
    selector: '[ableDelete]'
})
export class OnlyPhotoOwnerDirective implements OnInit {

    @Input() ownedPhoto: Photo;

    constructor(private element:ElementRef, private render:Renderer, private userService:UserService) {  }

    ngOnInit() {
        this.userService.getUser().subscribe(user => {
            if(!user || user.id != this.ownedPhoto.userId) {
                this.render.setElementStyle(this.element.nativeElement, 'display', 'none');
            }
        })
    }
}