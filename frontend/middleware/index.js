import { applyMiddleware } from 'redux';

import recipe from './recipe';
import shopping_list from './shopping_list';

const RootMiddleware = applyMiddleware(
  recipe,
  shopping_list
);

export default RootMiddleware;