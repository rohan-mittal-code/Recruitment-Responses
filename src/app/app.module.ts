import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CseComponent } from './cse/cse.component';
import { EceComponent } from './ece/ece.component';
import { DesignComponent } from './design/design.component';
import { EditorialComponent } from './editorial/editorial.component';
import { ManagementComponent } from './management/management.component';
import { PhotographyComponent } from './photography/photography.component';
import { RouterModule } from '@angular/router';
import { CseDetailsComponent } from './cse-details/cse-details.component';
@NgModule({
  declarations: [
    AppComponent,
    CseComponent,
    EceComponent,
    DesignComponent,
    EditorialComponent,
    ManagementComponent,
    PhotographyComponent,
    CseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'cse', component: CseComponent},
      {path: 'ece', component: EceComponent},
      {path: 'photography', component: PhotographyComponent},
      {path: 'editorial', component: EditorialComponent},
      {path: 'management', component: ManagementComponent},
      {path: 'design', component: DesignComponent},
      {path: 'cse/:id', component: CseDetailsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
