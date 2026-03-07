import { Routes } from '@angular/router';
import { Workbook } from './workbook/workbook';
import { Practice } from './practice/practice';

export const routes: Routes = [
    { path: '', redirectTo: '/workbook', pathMatch: 'full' },
    { path: 'workbook', component: Workbook },
    { path: 'practice', component: Practice },
];
