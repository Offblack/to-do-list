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


export const taskFullList = [{
      id: 0,
      title: 'Make something awesome',
      status: 'active'
   },
   {
      id: 1,
      title: 'Do it, plan your own',
      status: 'active'
   },
   {
      id: 2,
      title: 'Do it right now',
      status: 'finished'
   }
];

export default get;