import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsComponent } from './documents/documents.component';
import { CommunicationsComponent } from './communications/communications.component';

const routes: Routes = [
  { path: 'documents', component: DocumentsComponent },
  { path: 'communications', component: CommunicationsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
