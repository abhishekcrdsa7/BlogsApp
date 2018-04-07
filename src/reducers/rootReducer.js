import { combineReducers } from 'redux';
import reducerPosts from './reducer_posts';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  fetchPosts : reducerPosts,
  form: formReducer
});

export default rootReducer;