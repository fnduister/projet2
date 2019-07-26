import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginController } from "./components/login/login.controller";
import { HomeController } from "./components/home/home.controller";
import { DashboardController } from "./components/dashboard/dashboard.controller";

const routes: Routes = [
  {
    path: "",
    component: HomeController,
    children: [{ path: "", component: DashboardController }]
  },
  { path: "login", component: LoginController }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
