import { PokeShareInfoService } from './../poke-share-info.service';
import { PokeDetail } from './../pokemon';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css'],
  providers: []
})
export class PokeDetailComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('detail')
  detail: PokeDetail;

  constructor(private pokeShareInfoService: PokeShareInfoService) {
    this.pokeShareInfoService.getObservable().subscribe(e => console.log('e' + e));
   }

  ngOnInit(): void {
  }

}
