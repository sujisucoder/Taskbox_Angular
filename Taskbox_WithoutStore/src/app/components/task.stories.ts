
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { action } from '@storybook/addon-actions';

import { TaskComponent } from './task.component';


import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


const meta: Meta<TaskComponent> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
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
    args : {
      task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
      },
    }
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
    args : {

      task:
        {
          ...Default.args?.task,
          state: 'TASK_ARCHIVED'
        }

      
      
    }
  };
  

