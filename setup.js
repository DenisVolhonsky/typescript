import chai, { expect } from 'chai';
const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}


global.window = window;
window.expect = expect;
global.document = window.document;
global.window.requestAnimationFrame = (cb) => {
  return setTimeout(cb, 0);
};
global.window.cancelAnimationFrame = (cb) => {
  return setTimeout(cb, 0);
}
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);