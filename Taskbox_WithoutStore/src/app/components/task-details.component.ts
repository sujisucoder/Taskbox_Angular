
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-details',
  template: `

  `
})
export class TaskDetailComponent {
  @Input()
  task?: any = { title: 'sojem', state: '', id: '' };

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask = new EventEmitter<Event>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTask = new EventEmitter<Event>();
}
