import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { InAppsComponent } from './in-apps/in-apps.component';
import { EmailsComponent } from './emails/emails.component';


@NgModule({
  declarations: [
    InAppsComponent,
    EmailsComponent
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule
  ]
})
export class NotificationModule { }
