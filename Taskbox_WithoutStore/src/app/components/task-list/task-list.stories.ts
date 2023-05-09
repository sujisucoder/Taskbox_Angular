
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular/';

import { CommonModule } from '@angular/common';

import { TaskListComponent } from './task-list.component';
import { TaskComponent } from '../task/task.component';
import { action } from '@storybook/addon-actions';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';


import * as TaskStories from '../task/task.stories';
import { Task } from '../../models/task.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const meta: Meta<TaskListComponent> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'TaskBox/TaskListComponent',
    component: TaskListComponent,
    
    decorators: [
        moduleMetadata({
            //👇 Imports both components to allow component composition with Storybook
            declarations: [TaskListComponent, TaskComponent],
            imports: [
              HttpClientModule,
              MarkdownModule.forRoot({ loader: HttpClient }),
              CommonModule],
        }),
        //👇 Wraps our stories with a decorator
        // componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
        componentWrapperDecorator(
            (story) => `<div style="margin: 3em">${story}</div>`
          ),
    ],
};

export default meta;
type Story = StoryObj<TaskListComponent>;

const actionsData = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
};


export const Template: Story = {
    args: {
        onPinTask: TaskStories.Default.args?.onPinTask,
        onArchiveTask: TaskStories.Default.args?.onArchiveTask,
      }
}

export const DefaultList: Story = {
    args: {
        tasks: [
          {
            ...(TaskStories.Default.args?.['task'] as Task),
            id: '1',
            title: 'Task 1',
          },
          {
            ...(TaskStories.Default.args?.['task'] as Task),
            id: '2',
            title: 'Task 2',
          },
          {
            ...(TaskStories.Default.args?.['task'] as Task),
            id: '3',
            title: 'Task 3',
          },
          {
            ...(TaskStories.Default.args?.['task'] as Task),
            id: '4',
            title: 'Task 4',
          },
          {
            ...(TaskStories.Default.args?.['task'] as Task),
            id: '5',
            title: 'Task 5',
          },
          {
            ...(TaskStories.Default.args?.['task'] as Task),
            id: '6',
            title: 'Task 6',
          },
        ],
      },
};

  
export const WithPinnedTasks: Story = {

args:{
    tasks: [
        ...(DefaultList.args?.['tasks'] as Task[] ).slice(0, 5),
        { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    ],

}
}

export const Loading: Story ={
    args : {
        tasks: [],
        loading: true,
    }

}

export const Empty: Story = {
   args : {
        // Shaping the stories through args composition.
        // Inherited data coming from the Loading story.
        // ...Loading.args,
        ...Loading.args,
        loading: false,
    }
    

}

