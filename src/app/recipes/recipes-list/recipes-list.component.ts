import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../shared/models/recipes';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Input() recipe!: Recipe;

  constructor() { }

  ngOnInit(): void {
  }
}
