import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EditComponent } from "./edit/edit.component";
import { ListComponent } from "./list/list.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from "./main/main.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { SingleComponent } from "./single/single.component";
import { EstateFormComponent } from "./estate-form/estate-form.component";

const appRoutes: Routes = [
  { path: "estates", component: ListComponent },
  { path: "estates/:id", component: SingleComponent },
  { path: "create", component: EstateFormComponent },
  {
    path: "**",
    component: MainComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ListComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SingleComponent,
    EstateFormComponent
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
