import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { Router } from '@angular/router';

import { UserAvailableValidatorService } from './user-available.validator.service';
import { SignupService } from './signup.service';
import { NewUser } from './new-user';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { userNotEqualPass } from './user-not-equal-pass.validator';

@Component({
    templateUrl: './signup.component.html',
    providers: [UserAvailableValidatorService]
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;
    @ViewChild('focusEmail') focusEmail: ElementRef;

    constructor(private formBuilder: FormBuilder, private signupService: SignupService,
         private userAvailable: UserAvailableValidatorService, private router: Router,
            private platformDetector: PlatformDetectorService) { }

    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]
            ],
            fullName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]
            ],    
            userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30),
                            LowerCaseValidator], 
                    this.userAvailable.checkUserAvailable()
            ],
            password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]
            ],
        }, {
            validator: userNotEqualPass
        });

        this.platformDetector.isPlatformBrowser() &&
                    this.focusEmail.nativeElement.focus();
    }

    signup() {
        const newUser = this.signupForm.getRawValue() as NewUser;
        this.signupService.signup(newUser).subscribe(() => this.router.navigate(['']));

        /*
            Em caso de validação apos submissão do form =>
            if(this.signupForm.valid && !this.signupForm.pending) 
            além de retirar o código que desabilidta o botão no template
         */
    }
}