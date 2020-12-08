import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
    templateUrl: './photo-detail.component.html'
})
export class PhotoDetailComponent implements OnInit {  

    photo$: Observable<Photo>;
    photoId: number;
    userLogged: boolean;

    constructor(private route: ActivatedRoute, private photoService: PhotoService,
        private alertService: AlertService, private router: Router, private userService: UserService) {  }

    ngOnInit() {
        this.photoId = this.route.snapshot.params.photoId;
        this.photo$ = this.photoService.findById(this.photoId);
        this.photo$.subscribe(() => {}, err => {
            this.router.navigate(['/not-found']);
        });

        this.userLogged = this.userService.isLoged();
    }

    remove() {
        if(confirm('This photo will be removed')) {
            this.photoService.removePhoto(this.photoId)
            .subscribe(() => {
                this.alertService.success('Photo removed successfully', true);
                this.router.navigate(['/user', this.userService.getUserName()], {replaceUrl: true})
            },
                err => this.alertService.warning('Could not delete the photo', true)); 
        }
    }

    like(photo: Photo) {
        this.photoService.like(photo.id).subscribe(liked => {
            if(liked) {
                this.photo$ = this.photoService.findById(photo.id);
            }
        });
    }
}