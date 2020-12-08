import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

import { LoadingBarType } from './loding-bar-type';

@Injectable({providedIn: 'root'})
export class LoadingBarService {

    loadingSubject = new Subject<LoadingBarType>();

    getLoading() {
        return this.loadingSubject.asObservable().pipe(startWith(LoadingBarType.STOPPED));
    }

    start() {
        this.loadingSubject.next(LoadingBarType.LOADING);
    }

    stop() {
        this.loadingSubject.next(LoadingBarType.STOPPED);
    }
}