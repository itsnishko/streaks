import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivityComponent } from "./activity/activity.component";
import { RecordComponent } from './record/record.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ActivityComponent, RecordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'streaks';
}
