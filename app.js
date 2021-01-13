let Emitter = require('./emitter.js');

let emtr = new Emitter();

emtr.on('greet',function(){
    console.log('Hello 1 ')
})

emtr.on('greet',function(){
    console.log('Hello 2 ')
})

emtr.emit('greet');
