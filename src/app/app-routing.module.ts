import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { FindComponent } from './find/find.component';
import { ViewComponent } from './view/view.component';

import { IncidentCreateComponent } from './incident/incident-create/incident-create.component';
import { IncidentViewComponent } from './incident/incident-view/incident-view.component';

import { OfficeCreateComponent } from './office/office-create/office-create.component';
import { OfficeViewComponent } from './office/office-view/office-view.component';

import { OrgcreateComponent } from './org/orgcreate/orgcreate.component';
import { OrgviewComponent } from './org/orgview/orgview.component';

import { ResourceCreateComponent } from './resource/resource-create/resource-create.component';
import { ResourceViewComponent } from './resource/resource-view/resource-view.component';

import { ShelterCreateComponent } from './shelter/shelter-create/shelter-create.component';
import { ShelterViewComponent } from './shelter/shelter-view/shelter-view.component';

import { AssertCreateComponent } from './assert/assert-create/assert-create.component';
import { AssertViewComponent } from './assert/assert-view/assert-view.component';

const routes: Routes = [
  { path: '', component: OrgcreateComponent},
  { path: 'find', component: FindComponent},
  { path: 'view', component: ViewComponent},
  { path: 'incident-create', component: IncidentCreateComponent},
  { path: 'incident-view', component: IncidentViewComponent},
  { path: 'office-create', component: OfficeCreateComponent},
  { path: 'office-view', component: OfficeViewComponent},
  { path: 'org-create', component: OrgcreateComponent},
  { path: 'org-view', component: OrgviewComponent},
  { path: 'resource-create', component: ResourceCreateComponent},
  { path: 'resource-view', component: ResourceViewComponent},
  { path: 'shelter-create', component: ShelterCreateComponent},
  { path: 'shelter-view', component: ShelterViewComponent},
  { path: 'assert-create', component: AssertCreateComponent},
  { path: 'assert-view', component: AssertViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
