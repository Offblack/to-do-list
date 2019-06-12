import {
   get,
   DOMInit,
   taskFullList
} from './dom.js'

import axios from './axios';

axios.get('/tasks')
   .then(function (response) {
      // handle success
      console.log(response);
   })

export const listInit = () => {
   taskFullList.forEach(oneTask => {
      get().tasksList.innerHTML += `<ul class="one-task ${oneTask.status === 'finished' ? 'finished-task' : ''}">
         <span class="task-check-icon"><i class="fas fa-check"></i></span>
         <p class="task-title">${oneTask.title}</p>
         <i class="far fa-clock timer-icon"></i>
         <span class="task-delete-icon" data-key="${oneTask.id}"><i class="fas fa-times"></i></span>
      </ul>`;
   });
   DOMInit();
   [...get().taskDeleteIcons].forEach(oneDelete => oneDelete.addEventListener('click', deleteOneTask));
   [...get().taskCheckIcons].forEach(oneDelete => oneDelete.addEventListener('click', finishOneTask));
}

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

const finishOneTask = function () {
   this.parentNode.classList.toggle('finished-task');
}

const deleteOneTask = function () {

   const index = this.dataset.key;

   if (taskFullList.length === 1) taskFullList.length = 0;

   taskFullList.splice(index, 1);
   get().tasksList.innerHTML = '';
   listInit();

}

const addNewTask = e => {

   e.preventDefault();

   const newIndex = taskFullList.length;
   const newTitle = get().addInput.value.trim();

   const newOneTask = {
      id: newIndex,
      title: newTitle,
      status: 'active'
   }

   if (newTitle) taskFullList.push(newOneTask);

   get().tasksList.innerHTML = '';
   listInit();
   get().addInput.value = '';
}

export const showTasksInput = () => {
   get().downSection.innerHTML = `               
   <div class="back-icon">
   <i class="fas fa-chevron-left"></i>
   </div>
   <div id="adder">
   <form class="add-form">
   <input id="add-input" type="text" placeholder="Add...">
   <button class="add-button">
   <i class="fas fa-plus-circle add-icon"></i>
   </button>
   </form>
   </div>`
   DOMInit();
   get().backIcon.addEventListener('click', hideTasksInput);
   get().addForm.addEventListener('submit', addNewTask);
}

const hideTasksInput = () => {
   get().downSection.innerHTML = `               
   What have for today?
   <div class="arrow-icons">
      <i class="fas fa-chevron-right"></i>
      <i class="fas fa-chevron-right"></i>
   </div>`
   DOMInit();
   get().arrowIcons.addEventListener('click', showTasksInput);
}