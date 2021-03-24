let url = 'http://mylogger.io/login';
const eventEmitter = require('events');
const emitter = new eventEmitter();

function log(message){

    console.log(__filename);
    console.log(__dirname);
    console.log(message);
    emitter.emit('messageLogged', [id : 2, activity : "coding always", url : "http://login.io/login"])
}
module.exports.log =log;




