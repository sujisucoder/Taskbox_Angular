
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { action } from '@storybook/addon-actions';

import { TaskComponent } from './task.component';


import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


const meta: Meta<TaskComponent> = {

    title: 'TaskBox/TaskComponent',
    component: TaskComponent,
    decorators: [
      moduleMetadata({
        declarations: [TaskComponent],
        imports: [
          HttpClientModule,
      MarkdownModule.forRoot({ loader: HttpClient }),
  
        ]
         })
    ]
    
  };
  
  export default meta;

  export const actionsData = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
  };

  type Story = StoryObj<TaskComponent>;

  export const Default: Story = {

  };

  export const Pinned: Story = {
    args : {  
      task:
        {
          id: '2',
          title: 'Test Task',
          state: 'TASK_INBOX',
        }

      

    }
  };
  
  export const Archived: Story = {

  };
  

