import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PhotoComment } from '../../photo/photo-comment';
import { PhotoService } from '../../photo/photo.service';

@Component({
    selector: 'app-photo-comments',
    templateUrl: './photo-comments.html',
    styleUrls: ['./photo-comments.css']
})
export class PhotoCommentsComponent implements OnInit {

    @Input() photoId: number; 
    comments$: Observable<PhotoComment[]>;
    formComments: FormGroup;

    constructor(private photoService: PhotoService, private formBuilder: FormBuilder) {  }

    ngOnInit() {
        this.photoService.getComment(this.photoId);
        this.formComments = this.formBuilder.group({
            comment: ['', Validators.maxLength(255)]
        })
    } 

    save() {
        const comment = this.formComments.get('comment').value as string;
        this.comments$ = this.photoService.addComment(this.photoId, comment)
            .pipe(switchMap(() => this.photoService.getComment(this.photoId)))
            .pipe(tap(() => this.formComments.reset()))
    }
}