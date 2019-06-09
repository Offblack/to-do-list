import DOM from './../dom.js';
import * as EventActions from './../event-actions.js';

const searchForNote = DOM.searchTask.addEventListener('input', EventActions.searchSpecifyNote);