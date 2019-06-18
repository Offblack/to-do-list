import page from 'page';
import * as Routes from './routes.js';

page('/', Routes.index)
page('/tasks', Routes.tasks)
page('*', Routes.notFound)
page()