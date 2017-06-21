import {Component, Input, OnInit} from '@angular/core';
import {PlanetaStarWarsInterface} from "../../../../Interfaces/PlanetaStarWars";

@Component({
  selector: 'app-diameter',
  templateUrl: './diameter.component.html',
  styleUrls: ['./diameter.component.css']
})
export class DiameterComponent implements OnInit {

  @Input() diameterPlanet:PlanetaStarWarsInterface;
  constructor() { }

  ngOnInit() {
  }

}
