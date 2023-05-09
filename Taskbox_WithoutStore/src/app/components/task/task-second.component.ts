
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
  
  <markdown class="variable-binding" [data]="markdown"></markdown>




////////////////////
  


  
  `, 
})
export class TaskSecondComponent {

    markdown = `## Markdown __rulez__!
    ---
    
    ### Syntax highlight
    \`\`\`typescript
    const language = 'typescript';
    \`\`\`
    
    ### Lists
    1. Ordered list
    2. Another bullet point
       - Unordered list
       - Another unordered bullet
    
    ### Blockquote
    > Blockquote to the max`;
}