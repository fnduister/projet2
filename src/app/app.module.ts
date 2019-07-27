import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

//custom controllers
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
  MatInputModule,
  MatGridListModule,
  MatFormFieldModule
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    HeaderController,
    FooterController,
    HomeController,
    DashboardController,
    LoginController,
    PageNotFoundController
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
