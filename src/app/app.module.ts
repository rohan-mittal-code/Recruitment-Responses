import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
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
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { PanelManagementComponent } from './panel-management/panel-management.component';
@NgModule({
  declarations: [
    AppComponent,
    CseComponent,
    EceComponent,
    DesignComponent,
    EditorialComponent,
    ManagementComponent,
    PhotographyComponent,
    CseDetailsComponent,
    NavbarComponent,
    PanelManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path: '', component: CseComponent},
      {path: 'cse', component: CseComponent},
      {path: 'ece', component: EceComponent},
      {path: 'photography', component: PhotographyComponent},
      {path: 'editorial', component: EditorialComponent},
      {path: 'management', component: ManagementComponent},
      {path: 'design', component: DesignComponent},
      {path: 'cse/:id', component: CseDetailsComponent},
      {path: 'panels', component: PanelManagementComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
