import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule} from 'angularfire2/firestore';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';
// import { environment } from '../environments/environment';
// import * as firebase from 'firebase';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirectiveDirective } from './shared/dropdown-directive.directive';
import { SlateComponent } from './slate/slate.component';
import { CanvasComponent } from './canvas/canvas.component';
import { CanvasService } from './canvas/canvas.service';
import {FormsModule} from '@angular/forms';
import { PlayerComponent } from './player/player.component';
import { InstructorComponent } from './instructor/instructor.component';
import { UserService } from './shared/user.service';
import { StarboardComponent } from './starboard/starboard.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirectiveDirective,
    SlateComponent,
    CanvasComponent,
    PlayerComponent,
    InstructorComponent,
    StarboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule.enablePersistence(),
    // AngularFireDatabaseModule,
    // AngularFireAuthModule,
  ],
  providers: [UserService, CanvasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
