import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponentDoRodrigo } from './app.component';
import { CompoUsuarioComponent } from './compo-usuario/compo-usuario.component';

@NgModule({
  declarations: [
    AppComponentDoRodrigo,
    CompoUsuarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponentDoRodrigo]
})
export class AppModuleDoRodrigo { }
