import {Component, Input, OnInit} from '@angular/core';
import {PlanetaStarWarsInterface} from "../../../../Interfaces/PlanetaStarWars";

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnInit {
  @Input() terrenoPlanet:PlanetaStarWarsInterface;
  constructor() { }

  ngOnInit() {
  }

}
