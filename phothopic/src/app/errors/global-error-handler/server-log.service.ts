import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { ServerLog } from './server-log';

@Injectable({providedIn: 'root'})
export class ServerLogService {

    constructor(private httpClient: HttpClient, ) {  }

    log(log: ServerLog) {
        return this.httpClient.post(`${environment.ServerUrl}infra/log`, log);
    }
}