import { EventEmitter } from 'events';
import express from 'express';
const eventEmitter = new EventEmitter();

// listen to the event

// const app = express();
// app.set('eventEmitter', eventEmitter);

// //access it from any module of the application

// eventEmitter.on('myEvent', () => {
//   console.log('Data Received');
// });

// eventEmitter.emit('myEvent');

// eventEmitter.on('myEvent', () => {
//   console.log('Listener 1');
// });

// eventEmitter.emit('myEvent');

// eventEmitter.on('myEvent', () => {
//   console.log('Listener 2');
// });

// console.log(app.get('eventEmitter'));

// eventEmitter.on('myEvent', (data) => {
//   console.log(data);
// });

// console.log('Statement A');
// eventEmitter.emit('myEvent', 'Statement B');
// console.log('Statement C');

eventEmitter.on('myEvent', (data) => {
  console.log(data, '- FIRST');
});

console.log('Statement A');

eventEmitter.on('myEvent', (data) => {
  console.log(data, '- SECOND');
});

eventEmitter.emit('myEvent', 'Emitted Statement');

console.log('Statement B');
