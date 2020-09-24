import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  id: string;
  pokes: Pokemon[] = [];
  selectedPokeId: string;
  searchPokeName = '';

  constructor() {
    this.pokes.push(new Pokemon('1', 'un'));
    this.pokes.push(new Pokemon('2', 'deux'));
    this.pokes.push(new Pokemon('3', 'trois'));
    this.pokes.push(new Pokemon('4', 'quatre'));
    this.pokes.push(new Pokemon('5', 'cinq'));
   }

  ngOnInit(): void {
  }

  go(): void {
    console.log(this.selectedPokeId);
  }
}
