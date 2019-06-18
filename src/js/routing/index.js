import page from 'page';
import * as Routes from './routes.js';

page.base('/to-do-list')
page('/', Routes.index)
page('/tasks', Routes.tasks)
page('*', Routes.notFound)
page()