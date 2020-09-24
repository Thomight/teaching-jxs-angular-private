import { PokeShareInfoService } from './../poke-share-info.service';
import { Component, OnInit } from '@angular/core';
import { PokeAPIServiceService } from '../poke-apiservice.service';
import { PokeDetail, Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServiceService]
})
export class MyComponentComponent implements OnInit {

  id: string;
  pokes: Pokemon[] = [];
  selectedPokeId: string;
  searchPokeName = '';
  pokeDetail: PokeDetail;

  constructor(private pokeService: PokeAPIServiceService, private pokeShareInfoService: PokeShareInfoService) {
    // this.pokes.push(new Pokemon('1', 'un'));
    // this.pokes.push(new Pokemon('2', 'deux'));
    // this.pokes.push(new Pokemon('3', 'trois'));
    // this.pokes.push(new Pokemon('4', 'quatre'));
    // this.pokes.push(new Pokemon('5', 'cinq'));
  }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      data.results.forEach((e, index) => {
        this.pokes.push(new Pokemon((1 + index).toString(), e.name, e.url));
      });
    });
  }

  go(): void {
    // tslint:disable-next-line: triple-equals
    if (this.selectedPokeId != '') {
      this.pokeService.getPokemonInfo(this.selectedPokeId).subscribe(data => this.pokeDetail = data);
      this.pokeShareInfoService.setValue(this.selectedPokeId);
    }
  }

}
