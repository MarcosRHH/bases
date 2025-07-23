import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = '';

  deleteHero(): void {
    this.heroeBorrado = this.heroes.pop() || '';
    console.log('Borrando un heroe...');
  }

  deleteAllHeroes(): void {
    this.heroes = [];
    console.log('Borrando...');
  }
}