
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';


import { IntroComponent } from './intro.component';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


const meta: Meta<IntroComponent> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'TaskBox/Private',
    component: IntroComponent,
    includeStories:['introDefaultNew','introDefault'],
    decorators: [
      moduleMetadata({
        declarations: [IntroComponent],
        imports: [
          HttpClientModule,
      MarkdownModule.forRoot({ loader: HttpClient }),
  
        ]
         })
    ],

  
    
  };
  
  export default meta;


  type Story = StoryObj<IntroComponent>;




  export const introDefault: Story = {
    args : {
      task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
      },
    }
  };


  export const introDefaultNew: Story = {
    args : {
      task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
      },
    }
  };

  

  

