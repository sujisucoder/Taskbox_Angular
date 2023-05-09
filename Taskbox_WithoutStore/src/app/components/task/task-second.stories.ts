
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { action } from '@storybook/addon-actions';

import { TaskSecondComponent } from './task-second.component';


import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


const meta: Meta<TaskSecondComponent> = {

    title: 'TaskBox/TaskSecondComponent',
    component: TaskSecondComponent,
    decorators: [
      moduleMetadata({
        declarations: [TaskSecondComponent],
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

  type Story = StoryObj<TaskSecondComponent>;

  export const SecondDefault: Story = {

  };

  export const Pinned: Story = {

  };
  
  export const Archived: Story = {

  };
  

