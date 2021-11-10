import { EventEmitter } from 'events';
import express from 'express';
import { createReadStream } from 'fs';
import path from 'path';
const eventEmitter = new EventEmitter();

// listen to the event

//----------------------------------------------------------
// Maintaining a Single Event-Emitter Instance Applicationwide
// const app = express();
// app.set('eventEmitter', eventEmitter);

// //access it from any module of the application
// console.log(app.get('eventEmitter'));

// Publishing Events and Listening to Them

// eventEmitter.on('myEvent', () => {
//   console.log('Data Received');
// });

// eventEmitter.emit('myEvent');

///------------------------------------------------------------/

// eventEmitter.on('myEvent', () => {
//   console.log('Listener 1');
// });

// eventEmitter.emit('myEvent');

// eventEmitter.on('myEvent', () => {
//   console.log('Listener 2');
// });

// eventEmitter.on('myEvent', (data) => {
//   console.log(data);
// });

//-------------------------------------------------------------------------/

// The events raised by event emitters are
// synchronously executed by the listeners in the current event loop’s iteration.
// console.log('Statement A');
// eventEmitter.emit('myEvent', 'Statement B');
// console.log('Statement C');

// eventEmitter.on('myEvent', (data) => {
//   console.log(data, '- FIRST');
// });

// console.log('Statement A');

// eventEmitter.on('myEvent', (data) => {
//   console.log(data, '- SECOND');
// });

// eventEmitter.emit('myEvent', 'Emitted Statement');

// console.log('Statement B');
//====================================================================

// Where NodeJS Internally uses Event Emitters

// let chunkIndex = 0;
// const readStream = createReadStream('./data.txt');

// readStream.on('open', () => {
//   console.log('Started Reading...');
// });

// readStream.on('end', () => {
//   console.log('Completed Reading...');
// });

// readStream.on('data', (chunk) => {
//   console.log('Chunk: ' + ++chunkIndex);
//   console.log('-----------------------------------------');
//   console.log(chunk);
//   console.log('\n');
// });

//console.log(import.meta.url);
// process.on('exit', () => console.log('Exit'));
// process.on('beforeExit', () => console.log('Before Exit'));
// process.on('uncaughtException', () => {
//   console.log('Exception');
//   process.exit();
// });
// throw new Error('Test Error');

// eventEmitter.on('myEvent', (data) => {
//   console.log(data, '- ON');
// });

// eventEmitter.once('myEvent', (data) => {
//   console.log(data, '- ONCE');
// });

// eventEmitter.emit('myEvent', 'Emitted Statement');
// eventEmitter.emit('myEvent', 'Emitted Statement');
// eventEmitter.emit('myEvent', 'Emitted Statement');

// eventEmitter.on('myEvent', (data) => console.log(data, '- ON'));
// eventEmitter.on('myEvent2', (data) => console.log(data, '- ON'));
// eventEmitter.once('myEvent3', (data) => console.log(data, '- ONCE'));

// console.log(eventEmitter.eventNames());
// eventEmitter.emit('myEvent3', 'EVENT');
// console.log(eventEmitter.eventNames());

// removeListener()
// function func1() {
//   console.log('EVENT TRIGGERED');
// }

// eventEmitter.on('myEvent', func1);
// eventEmitter.on('myEvent2', func1);

// console.log(eventEmitter.eventNames());
// eventEmitter.removeListener('myEvent', func1);
// console.log(eventEmitter.eventNames());

// // removeAllListeners()
// function func1() {
//   console.log('EVENT TRIGGERED');
// }

// eventEmitter.on('myEvent', func1);
// eventEmitter.on('myEvent2', func1);

// eventEmitter.removeAllListeners();
// console.log(eventEmitter.eventNames());

console.log(parseInt('100', 2));

const arr = [1, 2, 3, 4];

const newArr = arr.filter((e) => e % 2);
console.log(10 + 'aaa');
