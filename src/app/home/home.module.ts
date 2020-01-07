import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from './../shared/shared.module';

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations:[
        BannerComponent,
        HomeComponent
    ],
    imports:[
        HomeRoutingModule,
        SharedModule
    ]
})
export class HomeModule {

 }