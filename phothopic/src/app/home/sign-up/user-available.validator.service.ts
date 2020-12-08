import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';

import { SignupService } from './signup.service';

@Injectable()
export class UserAvailableValidatorService {

    constructor(private sigupService: SignupService) {  }

    checkUserAvailable() {

        return (control: AbstractControl) => {
            
            return control.valueChanges.pipe(debounceTime(300))
                .pipe(switchMap(userName => this.sigupService.checkUserNameTaken(userName)))
                .pipe(map(isTaken => isTaken ? {userAvailable: true} : null ))
                .pipe(first());
        }   
    }
}