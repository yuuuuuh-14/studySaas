import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkbookComponent } from './workbook/workbook.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'workbook', component: WorkbookComponent },
  { path: 'practice', component: PracticeComponent },
  { path: '**', redirectTo: '' }
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkbookComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


