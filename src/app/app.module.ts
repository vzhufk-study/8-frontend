import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ListComponent } from "./list/list.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from "./main/main.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { SingleComponent } from "./single/single.component";
import { EstateFormComponent } from "./estate-form/estate-form.component";
import { DeleteComponent } from "./delete/delete.component";

const appRoutes: Routes = [
  { path: "estates", component: ListComponent },
  { path: "estates/:id", component: SingleComponent },
  { path: "create", component: EstateFormComponent },
  { path: "edit/:id", component: EstateFormComponent },
  { path: "delete/:id", component: DeleteComponent },
  {
    path: "**",
    component: MainComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SingleComponent,
    EstateFormComponent,
    DeleteComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    // other imports here,
    BrowserModule,

    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
