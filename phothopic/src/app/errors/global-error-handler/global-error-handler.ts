import { ErrorHandler, Injectable, Injector } from '@angular/core';
import * as StackTrace from 'stacktrace-js'
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

import { UserService } from 'src/app/core/user/user.service';
import { ServerLogService } from './server-log.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private injector: Injector) {  }

    handleError(error: any) {
        const location = this.injector.get(LocationStrategy);
        const url = location instanceof PathLocationStrategy ?
            location.path() : '';

        const user = this.injector.get(UserService);
        const message = error.message ? error.message : error.toString();
        const serverLog = this.injector.get(ServerLogService)

        const router = this.injector.get(Router)
        if(environment.production) {
            router.navigate(['/error']);
        }

        StackTrace.fromError(error).then(stackFrames => {
            const stack = stackFrames.map(sf => sf.toString()).join('\n');
            
            console.log(message);
            console.log(stack);

            serverLog.log({
                message, url, userName: user.getUserName(), stack: stack
            }).subscribe(
                () => console.log('Error send to server'), 
                err => console.log(`Fail sending error to server \n ${err}`));
        });
    }
}