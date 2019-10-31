import $ from 'jquery';
import './styles/index.css';
import shoppingList from './scripts/shopping-list';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
