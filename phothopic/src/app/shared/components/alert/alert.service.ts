import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

import { Alert, AlertType } from './alert';

@Injectable({providedIn: 'root'})
export class AlertService {

    alertSubject: Subject<Alert> = new Subject<Alert>();
    keepAlertAfterChangeRoute = false;  

    constructor(router: Router) {
        router.events.subscribe(event => {
            if(event instanceof NavigationStart) {
                if(this.keepAlertAfterChangeRoute) {
                    this.keepAlertAfterChangeRoute = false;
                } else {
                    this.clear();
                }
            }
        });
      }
    
    success(message:string, keepAlertAfterChangeRoute: boolean = false) {
        this.alert(AlertType.SUCCESS, message, keepAlertAfterChangeRoute);
    }
    warning(message:string, keepAlertAfterChangeRoute: boolean = false) {
        this.alert(AlertType.WARNING, message, keepAlertAfterChangeRoute);
    }
    danger(message:string, keepAlertAfterChangeRoute: boolean = false) {
        this.alert(AlertType.DANGER, message, keepAlertAfterChangeRoute);
    }
    info(message:string, keepAlertAfterChangeRoute: boolean = false) {
        this.alert(AlertType.INFO, message, keepAlertAfterChangeRoute);
    }
    
    private alert(alertType: AlertType, message:string, keepAlertAfterChangeRoute: boolean) {
        this.keepAlertAfterChangeRoute = keepAlertAfterChangeRoute;
        this.alertSubject.next(new Alert(alertType, message));
    }

    getAlert() {
        return this.alertSubject.asObservable();
    }

    clear() {
        this.alertSubject.next(null);
    }
}