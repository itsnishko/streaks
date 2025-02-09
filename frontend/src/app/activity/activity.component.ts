import { Component } from '@angular/core';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {
  constructor(private activityService: ActivityService) {}

  trackNewActivity(): void {
    this.activityService.createNewActivity().subscribe(
      response => {
        console.log('Activity created successfully:', response);
      },
      error => {
        console.error('Error creating activity:', error);
      }
    );
  }
}
