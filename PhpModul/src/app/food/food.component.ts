import { Component, OnInit } from '@angular/core';
import { Food } from './Food';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  public useableFood: Food[];
  constructor() { }

  ngOnInit(): void {
    this.useableFood = this.getFood();
  }


  public getFood(): Food[]{
    let foodarray: Food[];
    const food1: Food = {
      name: 'Ghackets & Hörnli',
      price: 20,
      recipe: "https://www.bettybossi.ch/de/Rezept/ShowRezept/BB_BBZD110415_0022B-40-de"
    }
    const food2: Food = {
      name: 'Poulet mit Kräutersauce',
      price: 20,
      recipe: "Link xxx"
    }
    const food3: Food = {
      name: 'sasas',
      price: 20,
      recipe: "asasas"
    }
    foodarray.push(food1, food2, food3);
    return foodarray;
  }
}
