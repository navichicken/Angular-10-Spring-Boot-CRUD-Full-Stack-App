import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoListComponent } from './modules/alumno-list/alumno-list.component';
import { CreateAlumnoComponent } from './modules/create-alumno/create-alumno.component';
import { FormsModule} from '@angular/forms';
import { UpdateAlumnoComponent } from './modules/update-alumno/update-alumno.component';
import { AlumnoDetailsComponent } from './modules/alumno-details/alumno-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoListComponent,
    CreateAlumnoComponent,
    UpdateAlumnoComponent,
    AlumnoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
