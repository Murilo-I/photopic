import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoFormComponent } from './photo-form.component';
import { AuthGuard } from 'src/app/core/auth/auth.guard';

const routes: Routes = [
    {path: '', component: PhotoFormComponent, canActivate: [AuthGuard], data:{title:'Photo upload'}}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PhotoFormRoutingModule {

}