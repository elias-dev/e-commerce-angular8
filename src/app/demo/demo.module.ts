import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './components/demo.component';



@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [

    DemoRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class DemoModule { }
