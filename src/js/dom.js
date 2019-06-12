let DOM = {};

export const DOMInit = () => {
   DOM = {
      searchTask: document.querySelector('#search-task'),
      tasksList: document.querySelector('.tasks-list'),
      allTask: document.querySelectorAll('.one-task'),
      taskTitles: document.querySelectorAll('.task-title'),
      taskCheckIcons: document.querySelectorAll('.task-check-icon'),
      taskDeleteIcons: document.querySelectorAll('.task-delete-icon'),
      pageDate: document.querySelector('#page-date'),
      arrowIcons: document.querySelector('.arrow-icons'),
      downSection: document.querySelector('.motivational-quotes'),
      backIcon: document.querySelector('.back-icon'),
      addForm: document.querySelector('.add-form'),
      addInput: document.querySelector('#add-input')
   }
}

export const get = () => {
   return DOM;
}

export default get;