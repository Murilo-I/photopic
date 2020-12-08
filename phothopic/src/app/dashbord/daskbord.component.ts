import { Component, OnInit } from '@angular/core';

import { PhotoService } from '../photos/photo/photo.service';
import { Photo } from '../photos/photo/photo';
import { UserService } from '../core/user/user.service';

@Component({
    templateUrl: './dashbord.component.html',
    styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

    photos: Photo[] = [];
    nomes: string[] = ['flavio','almeida','calopsita','alura','lordhordin'];
    userName: string = '';

    constructor(private photoService: PhotoService, private userService: UserService) {  }

    ngOnInit() {
        for (let index = 0; index < this.nomes.length; index++) {

            this.photoService.listFromUser(this.nomes[index]).subscribe(photos => {
                this.photos[index] = photos[0];
            });
        }
    }
}