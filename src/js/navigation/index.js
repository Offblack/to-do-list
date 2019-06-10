import {
   get,
   DOMInit
} from './../dom.js';
import * as EventActions from './../event-actions.js';

DOMInit();

const searchForNote = get().searchTask.addEventListener('input', EventActions.searchSpecifyNote);


const setActualDate = () => get().pageDate.textContent = EventActions.actualTime();


const init = () => {
   setActualDate();
}

init();