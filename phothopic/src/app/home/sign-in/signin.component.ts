import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
    
    fromUrl: string;
    loginForm: FormGroup;
    @ViewChild('focusUserName') focusUserName: ElementRef;

    constructor(private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetector: PlatformDetectorService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => this.fromUrl = params.fromUrl); 
        //serve ['fromUrl'] também já q foi em quem definiu esse nome dinâmicamente

        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.platformDetector.isPlatformBrowser() &&
            this.focusUserName.nativeElement.focus();
    }

    login() {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.authService.authenticate(userName, password)
            .subscribe(() => this.fromUrl ? 
                this.router.navigateByUrl(this.fromUrl) : this.router.navigate(['user', userName]),
            err => {
                window.alert('User or password invalid')
                this.loginForm.reset();
            });
    }
}