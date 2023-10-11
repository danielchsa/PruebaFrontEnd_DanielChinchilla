import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { RecipesService } from '../../services/recipes.service';
import { Router } from '@angular/router';

import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  @ViewChild('imgElement') imgElementRef!: ElementRef;
  @ViewChild(ModalComponent) modal!: ModalComponent;

  image: string = '';

  recipeForm: FormGroup = this.fb.group({
    image: [null, [Validators.required]],
    title: ['', [Validators.required, Validators.minLength(2)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    ingredients: this.fb.array([], Validators.required),
    ingredientInput: [''],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private recipeService: RecipesService
  ) {}

  ngOnInit(): void {}

  get ingredientsArray() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  isInvalid(input: string): boolean | null {
    return (
      this.recipeForm.controls[input].errors &&
      this.recipeForm.controls[input].touched
    );
  }

  addIngredient() {
    const newIngredient = this.recipeForm.get('ingredientInput')?.value.trim();
    if (newIngredient !== '') {
      this.ingredientsArray.push(
        this.fb.group({
          ingredient: [newIngredient],
          selected: [false],
        })
      );
      this.recipeForm.get('ingredientInput')?.reset();
    }
  }

  deleteIngredient(index: number) {
    this.ingredientsArray.removeAt(index);
  }

  openModal() {
    if (this.recipeForm.invalid) {
      this.recipeForm.markAllAsTouched();
      return;
    }

    this.modal.open();
  }

  saveRecipe(actionResult: boolean) {
    if (!actionResult) return;

    delete this.recipeForm.value.ingredientInput;
    this.recipeService.addRecipe(this.recipeForm.value);
    this.router.navigate(['/']);
  }

  loadFile() {
    this.imgElementRef.nativeElement.click();
  }

  handleChange(event: any) {
    const file = event.target.files[0];

    if (!file) return;

    const urlImage = URL.createObjectURL(file);
    this.recipeForm.get('image')?.setValue(urlImage);

    this.image = urlImage;
  }
}
