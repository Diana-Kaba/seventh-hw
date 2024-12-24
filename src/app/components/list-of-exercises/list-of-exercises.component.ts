import { Component } from '@angular/core';
import { GetExercisesService } from '../../shared/get-exercises.service';
import { Exercise } from '../../shared/exercise';

@Component({
  selector: 'app-list-of-exercises',
  templateUrl: './list-of-exercises.component.html',
  styleUrl: './list-of-exercises.component.css'
})
export class ListOfExercisesComponent {
  exercises!: Exercise[];

  constructor(private api: GetExercisesService) {}

  ngOnInit() {
    this.api.getExercises().subscribe((data: Exercise[]) => {
      this.exercises = data;
      console.log(data);
    });
  }
}
