import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavigationComponent } from './template/navigation/navigation.component';
import { FooterComponent } from './template/footer/footer.component';
import { AbootComponent } from './template/aboot/aboot.component';
import { NotFoundComponent } from './template/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './template/contact/contact.component';
import { HomeComponent } from './template/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCardComponent,
    NavigationComponent,
    FooterComponent,
    AbootComponent,
    NotFoundComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatFormFieldModule,
    NgbModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
