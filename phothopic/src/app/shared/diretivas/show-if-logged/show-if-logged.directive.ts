import { Directive, OnInit, ElementRef, Renderer } from '@angular/core';

import { UserService } from 'src/app/core/user/user.service';

@Directive({
    selector: '[showIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

    currentDisplay: string;

    constructor(private element: ElementRef,
        private renderer: Renderer,
        private userService: UserService) {  }

    ngOnInit() {
        this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
        this.userService.getUser().subscribe(user => {
            if(user) {
                this.renderer.setElementStyle(this.element.nativeElement, 'display', this.currentDisplay);
            } else {
                this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
                this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
            }
        });
        
        /**
            !this.userService.isLoged() &&
            this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none')
            *CÓDIGO ANTIGO - FUNCIONA
          
            Porém para componentes que são estáticos na troca de rotas, como o header, essa
            lógica não funciona pois o estado atual do componente é o mesmo de antes, logo a
            diretiva não fucionaria corretamente, por isso foi necessário a outra lógica a cima
            que usa um Observable<User> que verifica constantemente se o estado do usuário é
            logado ou não.
         */
    }
}