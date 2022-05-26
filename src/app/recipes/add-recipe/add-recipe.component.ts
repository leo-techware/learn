import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, ContentChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recipe } from '../shared/models/recipes';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  @Output() recipeAdded = new EventEmitter<Recipe>();
  @ViewChild('chiledRef') chiledRef: any = ElementRef;
  @ContentChild('contentParagraph') paragraph: any = ElementRef;

  recipeForm: any = FormGroup;
  chiledName: string = '';
  dataSubmitted: Boolean = false;

  constructor(private fromBuilder: FormBuilder) { }
  get f() { return this.recipeForm.controls; }

  ngOnInit(): void {
    this.recipeForm = this.fromBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    })
  }

  whoIamI() {
    alert("I am add recipe component");
  }

  onSumbit() {
    this.dataSubmitted = true;
    this.recipeAdded.emit(this.recipeForm.value);
  }
  alertElementContent() {
    alert(this.paragraph.nativeElement.textContent)
  }

}
