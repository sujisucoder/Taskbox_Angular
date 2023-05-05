
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  template: `
         <markdown 
      mermaid
      ngPreserveWhitespaces >
<pre class="mermaid">
graph TD;
id1([1. Started with google searching for stackblitz.com]) -->  id2([2.Selected a blank Nodejs project ])
id2-->  id3([3.imported  a Blank repository which was created already])
id3 -->id4([4. In cmd type ng new Taskbox_WithoutStore])
id4 --> id5([hkjhkjh])




</pre>

</markdown>
  `,
})
export class TaskComponent {
  @Input() task: any;

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask = new EventEmitter<Event>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTask = new EventEmitter<Event>();
}