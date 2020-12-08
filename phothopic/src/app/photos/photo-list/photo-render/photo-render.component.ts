import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-photo-render',
  templateUrl: './photo-render.component.html',
  styleUrls: ['./photo-render.component.css']
})
export class PhotoRenderComponent implements OnChanges {

  @Input() photos: Photo [] = []
  rows: any[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if(changes.photos)
        this.rows = this.groupColumns(this.photos);
}

  groupColumns(photos: Photo[]) {
    const newRows = [];

    for(let index = 0; index < photos.length; index+=3) {
        newRows.push(photos.slice(index, index + 3));
    }
    return newRows;
}

}
