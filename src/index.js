/* eslint-env browser */
import './assets/css/style.css';
const mytitle = document.createElement('div');
mytitle.textContent = 'this is my first poi app.'
mytitle.className = 'mytitle';
const title = document.createElement('h1');

title.textContent = 'Hello Poi!';
title.className = 'title';

const tip = document.createElement('div');
tip.textContent = 'Edit src/index.js and save to reload.';
tip.className = 'tip';

const app = document.getElementById('app');

if (app) {
  app.appendChild(mytitle);
  app.appendChild(title);
  app.appendChild(tip);
}
