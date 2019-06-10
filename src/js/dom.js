let DOM = {};

export const DOMInit = () => {
   DOM = {
      searchTask: document.querySelector('#search-task'),
      tasksList: document.querySelector('.tasks-list'),
      allTask: document.querySelectorAll('.one-task'),
      taskTitles: document.querySelectorAll('.task-title'),
      pageDate: document.querySelector('#page-date'),
      arrowIcons: document.querySelector('.arrow-icons'),
      downSection: document.querySelector('.motivational-quotes'),
      backIcon: document.querySelector('.back-icon')
   }
}

export const get = () => {
   return DOM;
}

export default get;