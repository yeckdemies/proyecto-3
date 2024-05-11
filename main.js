import { createHeader, createMain } from './src/structure';
import './style.css';

const miAPP = document.querySelector('#app');

const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');

miAPP.append(header, main, footer);

createHeader(header);
createMain(main);
