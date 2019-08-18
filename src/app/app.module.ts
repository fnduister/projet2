import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { environment } from "src/environments/environment";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

//custom controllers
import { BreadcrumbController } from "./shared/breadcrumb/breadcrumb.controller";
import { HeaderController } from "./shared/header/header.controller";
import { FooterController } from "./shared/footer/footer.controller";
import { HomeController } from "./components/home/home.controller";
import { DashboardController } from "./components/dashboard/dashboard.controller";
import { LoginController } from "./components/login/login.controller";
import { PageNotFoundController } from './components/page-not-found/page-not-found.controller';

//material design modules
import {
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatSelectModule,
  MatCheckboxModule,
  MatInputModule,
  MatGridListModule,
  MatFormFieldModule,
  MatIconModule
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    HeaderController,
    FooterController,
    HomeController,
    DashboardController,
    LoginController,
    PageNotFoundController,
    BreadcrumbController
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
