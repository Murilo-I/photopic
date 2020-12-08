import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-err-message',
    templateUrl: './err-message.component.html'    
})
export class ErrMessagesComponent {

    @Input() message = '';
}