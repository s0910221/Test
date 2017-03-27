import {ModuleWithProviders} from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { Lesson1Component } from "./lesson1/lesson1.component";
import { Lesson2Component } from "app/lesson2/lesson2.component";
import { Lesson3Component } from "app/lesson3/lesson3.component";
import { Lesson4Component } from "app/lesson4/lesson4.component";
import { Lesson5Component } from "app/lesson5/lesson5.component";
import { Lesson6Component } from "app/lesson6/lesson6.component";

export const router:Routes = [
    {path:'',redirectTo:'lesson1', pathMatch:'full'},
    {path:'lesson1',component:Lesson1Component},
    {path:'lesson2',component:Lesson2Component},
    {path:'lesson3',component:Lesson3Component},
    {path:'lesson4',component:Lesson4Component},
    {path:'lesson5',component:Lesson5Component},
    {path:'lesson6',component:Lesson6Component},
    // {path:'**',component:NotFound}
    // 什麼頁面都找不到時觸發
];

export const routes:ModuleWithProviders = RouterModule.forRoot(router);