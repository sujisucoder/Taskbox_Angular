
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
id4([4. In cmd type ng new Taskbox_WithoutStore])--> id5([Created a new Branch StorybookInstall using git branch StorybookInstall])
id5 --> id6([Installing Storybook using npx storybooklatest init on Stackblitz terminal was failed so I created a clone on my local computer and Successfully installed Storybook through powershell.story was available on port localhost:6060 ])
id6 --> id7([ljjhjjjjhj])

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