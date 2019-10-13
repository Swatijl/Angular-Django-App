import {NgModule,} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowDataComponent } from './show-data/show-data.component';
import {HomeComponent} from './home/home.component';
import {NotesComponent} from "./notes/notes.component";
import {SignupComponent} from "./signup/signup.component";

const appRoutes: Routes = [
    {
        path:"",
        component: SignupComponent,
    },
    {
        path:"notes",
        component:NotesComponent,
    },

]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}
