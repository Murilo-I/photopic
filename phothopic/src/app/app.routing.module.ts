import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list-resolver';
import { PhotoDetailComponent } from './photos/photo-details/photo-detail.component';
import { DashbordComponent } from './dashbord/daskbord.component';
import { GlobalErrorCompnent } from './errors/global-error-page/global-error.component';

const routes: Routes = [ 
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashbord'
    },

    {path: 'dashbord', component: DashbordComponent, data:{title:'Dashbord'}},

    {path: 'home', loadChildren: './home/home.module#HomeModule'},

    {path: 'user/:userName', component: PhotoListComponent, resolve: {
        photos: PhotoListResolver
    }, data:{title:'Photopic'}},

    {path: 'photo/add', loadChildren: './photos/photo-form/photo-form.module#PhotoFormModule'}, 
    {path: 'photo/:photoId', component: PhotoDetailComponent, data:{title:'Photo detail'}},

    {path: 'error', component: GlobalErrorCompnent, data:{title:'Error'}},
    {path: 'not-found', component: NotFoundComponent, data:{title:'Not found'}},
    {path: '**', redirectTo: 'not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}