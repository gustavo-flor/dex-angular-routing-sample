import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DocumentsComponent } from './documents/documents.component';
import { CommunicationsComponent } from './communications/communications.component';


@NgModule({
  declarations: [
    DocumentsComponent,
    CommunicationsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
