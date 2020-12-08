import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  hasMore: boolean = true;
  currentPage: number = 1
  userName: string = '';
  filter: string = '';

  constructor(private activatedRoute:ActivatedRoute,
      private service:PhotoService) {}

  //nome do método é padrão obrigatório, o import facilita mas não é obrg
  ngOnInit() {
    /*
      this.userName = this.activatedRoute.snapshot.params.userName;
      this.photos = this.activatedRoute.snapshot.data.photos;

      O código desse jeito faz com que mesmo mudando o params userName, a rota
      não seje atualizada, pois como o angular está aceitando user/**, acontece 
      esse bug. Por isso é necessário usar o subscribe que use um observable e
      diz que de fato a rota mudou.
    */
   
    this.activatedRoute.params.subscribe(params => {
      this.userName = params.userName;
      this.photos = this.activatedRoute.snapshot.data.photos; //serve ['photos'] também 
    })
  }

  load() {
    this.service.listFromUserPaginated(this.userName, ++this.currentPage)
        .subscribe(photos => {
          this.filter = '';
          this.photos = this.photos.concat(photos);
          if(!photos.length) {
            this.hasMore = false; 
          }
        })
  }
}
