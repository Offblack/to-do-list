import {
   DOMInit,
   get
} from './../dom.js';
import * as EventActions from './../event-actions.js';

EventActions.listInit();
DOMInit();


get().arrowIcons.addEventListener('click', EventActions.showTasksInput);