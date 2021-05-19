import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { LineDonationComponent } from './line-donation/line-donation.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';



const appRoutes: Routes = [
  { path: 'LineDonation', component: LineDonationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LineDonationComponent,
    
  ],
  imports: [
    BsDropdownModule,
    TooltipModule,
    ModalModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
