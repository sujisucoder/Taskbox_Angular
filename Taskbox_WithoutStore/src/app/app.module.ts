import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskSecondComponent } from './components/task/task-second.component'

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { IntroComponent } from './components/intro.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';




@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    IntroComponent,
    TaskListComponent,
    TaskSecondComponent
  ],
  exports: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),

    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
