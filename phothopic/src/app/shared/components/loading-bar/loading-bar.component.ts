import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from './loading-bar.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-loading-bar',
    templateUrl: './loading-bar.component.html',
    styleUrls: ['./loading-bar.component.css']
})
export class LoadingBarComponent implements OnInit {

    loading$: Observable<string>;

    constructor(private loadingService: LoadingBarService) {  }

    ngOnInit() {
        this.loading$ = this.loadingService.getLoading()
            .pipe(map(loadingBatType => loadingBatType.valueOf()));
    }
}