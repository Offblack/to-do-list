import {
   get,
   DOMInit
} from './../dom.js';
import * as EventActions from './../event-actions.js';



const NavigationInit = () => {

   DOMInit();

   const searchForNote = get().searchTask.addEventListener('input', EventActions.searchSpecifyNote);


   const setActualDate = () => get().pageDate.textContent = EventActions.actualTime();


   const init = () => {
      setActualDate();
   }

   init();
}

export default NavigationInit;