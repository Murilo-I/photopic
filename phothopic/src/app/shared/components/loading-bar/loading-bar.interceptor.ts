import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from'@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { LoadingBarService } from './loading-bar.service';

@Injectable({providedIn: 'root'})
export class LoadingBarInterceptor implements HttpInterceptor {

    constructor(private loadingService: LoadingBarService) {  }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(tap(event => {
            if(event instanceof HttpResponse) {
                this.loadingService.stop();
            } else {
                this.loadingService.start();
            }
        }));
    }

}