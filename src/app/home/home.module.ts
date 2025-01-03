import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '../shared/shared.module';

import { AmazonComponent } from './amazon/amazon.component';
import { DataentryComponent } from './dataentry/dataentry.component';
import { DemopageComponent } from './demopage/demopage.component';
import { HomeComponent } from './home/home.component';
import { LoadProductComponent } from './load-product/load-product.component';


@NgModule({
  declarations: [

    AmazonComponent,
     DataentryComponent,
     DemopageComponent,
     HomeComponent,
     LoadProductComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
