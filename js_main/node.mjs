import { EventEmitter } from 'events';
const eventEmitter = new EventEmitter();

// listen to the event

eventEmitter.on('myEvent', () => {
  console.log('Data Received');
});

eventEmitter.emit('myEvent');

// eventEmitter.on('myEvent', () => {
//   console.log('Listener 1');
// });

// eventEmitter.emit('myEvent');

// eventEmitter.on('myEvent', () => {
//   console.log('Listener 2');
// });
