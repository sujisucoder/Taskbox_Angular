
import { moduleMetadata, componentWrapperDecorator, StoryObj, applicationConfig } from '@storybook/angular';

import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import type { Meta } from '@storybook/angular';
import {TaskDetailComponent}  from './task-details.component';
import { action } from '@storybook/addon-actions';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { importProvidersFrom } from '@angular/core';


const metaDetail: Meta<TaskDetailComponent> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'TaskDetailComponent',
  component: TaskDetailComponent,
  

  decorators: [
    moduleMetadata({
      declarations: [TaskDetailComponent],
      imports: [
        HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),

      ]
       })
  ]

};

export default metaDetail;
type StoryDetail = StoryObj<TaskDetailComponent>;


const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};


export const DefaultTask: StoryDetail = {
  render: () => ({
    props: {
      task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
      },
      onPinTask: actionsData.onPinTask,
      onArchiveTask: actionsData.onArchiveTask,
    },
  }),
};
