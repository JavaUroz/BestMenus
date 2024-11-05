import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent implements OnInit{

  // @Output() callbackData: EventEmitter<any> = new EventEmitter()
  // src: string = ''

  constructor(){}

  ngOnInit(): void {
    
  }

  // callSearch(term: string): void{
  //   if(term.length >= 3){
  //     this.callbackData.emit(term)
  //     console.log('termino de callSearch...',term)
  //   }
  // }
}
