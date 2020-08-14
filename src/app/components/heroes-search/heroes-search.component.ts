import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-heroes-search',
  templateUrl: './heroes-search.component.html',
  styleUrls: ['./heroes-search.component.css']
})
export class HeroesSearchComponent implements OnInit {

  heroes: Heroe[] = [];
  termino:string = '';
  constructor(private _heroesService:HeroesService, private activatedRoute:ActivatedRoute, private router:Router) {

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(this.termino);
    });
    
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe', idx]);
  }

}
