import initModel from './Model';
import update from './Model';
import app from './App';
import view from './App';

const node = document.getElementById('app');

app(initModel, update, view, node);