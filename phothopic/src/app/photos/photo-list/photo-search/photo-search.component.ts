import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime } from 'rxjs/operators';

@Component ({
    selector: 'app-photo-search',
    templateUrl: './photo-search.component.html'
})
export class PhotoSearchComponent implements OnInit, OnDestroy {

    debounce: Subject<string> = new Subject<string>();
    @Output() onTyping = new EventEmitter<string>();
    @Input() value: string = '';

    constructor() {  }

    ngOnInit() {
        this.debounce.pipe(debounceTime(300))
        .subscribe(filter => this.onTyping.emit(filter)) // => == Arrow Function
    }

    ngOnDestroy() {
        this.debounce.unsubscribe();
    }
}

/*
subscribe do Subject diferente do HttpClient dura pra sempre, ocupando a memória
por isso é boa prática na destruição do componente(mudar página) fazer um unsubscribe
*/
