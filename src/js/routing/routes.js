import * as view from './view.js';
import appInit from './../tasks/index.js';

import introView from './../../views/intro.html';
import tasksView from './../../views/tasks.html';

export const index = () => {
   view.load(introView).then(() => {
      setTimeout(tasks, 4000)
   })
}

export const tasks = () => {
   view.load(tasksView).then(() => {
      appInit();
   })
}

export const notFound = () => {}