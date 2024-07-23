import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InAppsComponent } from './in-apps/in-apps.component';
import { EmailsComponent } from './emails/emails.component';

const routes: Routes = [
  { path: 'in-apps', component: InAppsComponent },
  { path: 'emails', component: EmailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule { }
