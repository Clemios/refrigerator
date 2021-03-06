import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-recipes-cards',
  templateUrl: './recipes-cards.component.html',
  styleUrls: ['./recipes-cards.component.scss']
})
export class RecipesCardsComponent implements OnInit {

  @Input('recipes') recipes: any[]
  @Output() onRecipeDeleted: EventEmitter<any> = new EventEmitter<any>()
  @Output() onRecipeGet: EventEmitter<any> = new EventEmitter<any>()

  isFlipped = false

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getRecipe(recipeId) {
    this.router.navigate(['/recipes', recipeId])
  }

  deleteRecipe(recipeId) {
    this.onRecipeDeleted.emit(recipeId)
  }

}
