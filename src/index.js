import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import PostsIndex from './components/posts_index';
import Promise from 'redux-promise';
import PostNew from './components/post_new';
import PostShow from './components/post_show';
const storeWithMiddleware = applyMiddleware(Promise)(createStore);

ReactDOM.render(
  <div>
    <Provider store={storeWithMiddleware(rootReducer)}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/posts/new' component={PostNew}/>
            <Route path='/posts/:id' component={PostShow}/>
            <Route path='/' render={() => <PostsIndex />}/>
          </Switch>
            <Route exact path='/' render={() => <Redirect to='/posts' />}/>
        </div>
      </BrowserRouter>
    </Provider>
  </div>
  ,document.getElementById('root'));
registerServiceWorker();
