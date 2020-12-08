import { NgModule } from "@angular/core";
import { ClickImediatoDirective } from "./click-imediato.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ClickImediatoDirective],
    exports: [ClickImediatoDirective],
    imports: [CommonModule]
})
export class ClickImediatoModule {

}