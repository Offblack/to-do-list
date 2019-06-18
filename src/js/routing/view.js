import * as DOM from './../dom';

const getTemplate = url => new Promise(resolve => resolve(url));

const render = html => {
   DOM.DOMInit();
   DOM.get().viewContainer.innerHTML = html
};

export const load = view => new Promise((resolve, reject) => {
   getTemplate(view).then(html => {
      render(html);
      resolve()
   })
});