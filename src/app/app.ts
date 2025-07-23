import { Component } from '@angular/core';
import { ContadorComponent } from "./contador/contador.component";
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from "./heroes/listado/listado.component";

@Component({
  selector: 'app-root',
  imports: [ContadorComponent, HeroeComponent, ListadoComponent],
  templateUrl: './app.html',
})
export class App {
  // protected readonly title = signal('bases');

}
