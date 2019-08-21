import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginController } from "./components/login/login.controller";
import { HomeController } from "./components/home/home.controller";
import { PageNotFoundController } from "./components/page-not-found/page-not-found.controller";
import { DashboardController } from "./components/dashboard/dashboard.controller";
import { AuthGuard } from "./auth/auth.guard";
import { CustomTableComponent } from "./shared/custom-table/custom-table.controler";

const routes: Routes = [
  {
    path: "",
    component: HomeController,
    canActivate: [AuthGuard],
    children: [{ path: "", component: DashboardController }]
  },
  { path: "login", component: LoginController },
  { path: "not-found", component: PageNotFoundController },
  { path: "table", component: CustomTableComponent },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
