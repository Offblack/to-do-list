import DOM from './dom.js';

export const searchSpecifyNote = element => {

   let searchingTitle = '';

   searchingTitle = element.target.value.toLowerCase();

   console.log(searchingTitle);

   DOM.tasksList.innerHTML = '';

   let taskAfterSearching = [...DOM.taskTitles].filter(title => title.textContent.toLowerCase().includes(searchingTitle));

   taskAfterSearching.forEach(title => {
      DOM.tasksList.appendChild(title.parentNode);
   });
}