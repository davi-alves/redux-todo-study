import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import todoApp from './reducer';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/TodoList';
import FilterLink from './components/FilterLink';
import Footer from './components/Footer';

const TodoApp  = () => (
  <div>
    <AddTodo/>
    <VisibleTodoList/>
    <Footer/>
  </div>
);

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp/>
  </Provider>,
  document.getElementById('root')
);