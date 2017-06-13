import {Component, Input, OnInit} from '@angular/core';
import {PlanetaStarWarsInterface} from "../../../../Interfaces/PlanetaStarWars";

@Component({
  selector: 'app-orbital-period',
  templateUrl: './orbital-period.component.html',
  styleUrls: ['./orbital-period.component.css']
})
export class OrbitalPeriodComponent implements OnInit {
  @Input() periodoOrbitalPlanet:PlanetaStarWarsInterface;
  constructor() { }

  ngOnInit() {
  }

}
