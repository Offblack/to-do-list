import {
   get,
   DOMInit
} from './dom.js'

export const searchSpecifyNote = element => {

   let searchingTitle = '';

   searchingTitle = element.target.value.toLowerCase();

   get().tasksList.innerHTML = '';

   let taskAfterSearching = [...get().taskTitles].filter(title => title.textContent.toLowerCase().includes(searchingTitle));

   taskAfterSearching.forEach(title => {
      get().tasksList.appendChild(title.parentNode);
   });
}

export const actualTime = () => {
   const actualDate = new Date();

   const options1 = {
      weekday: 'long'
   };

   const actualDay = new Intl.DateTimeFormat('en-US', options1).format(actualDate);

   const options2 = {
      month: 'long'
   };
   const actualMonth = new Intl.DateTimeFormat('en-US', options2).format(actualDate);

   const oneDate = `${actualDay}, ${actualDate.getDate()} ${actualMonth}`;

   return oneDate;
}

export const showTasksInput = () => {
   get().downSection.innerHTML = `               
   <div class="back-icon">
   <i class="fas fa-chevron-left"></i>
   </div>
   <div id="adder">
   <input id="add-task" type="text" placeholder="Add...">
   <div class="fas fa-plus-circle add-icon"></div>
   </div>`
   DOMInit();
   get().backIcon.addEventListener('click', hideTasksInput);
}

export const hideTasksInput = () => {
   get().downSection.innerHTML = `               
   What have for today?
   <div class="arrow-icons">
      <i class="fas fa-chevron-right"></i>
      <i class="fas fa-chevron-right"></i>
   </div>`
   DOMInit();
   get().arrowIcons.addEventListener('click', showTasksInput);
}