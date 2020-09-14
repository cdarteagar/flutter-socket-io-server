const {io} = require('../index');

// Mensajes de sockets
io.on('connection', client => {
  
  console.log("Cliente Conectado");
  
  client.on('disconnect', () => { 
	  console.log("Cliente desconectado");
	  });
	  
  client.on('mensaje', (payload)=>{
    console.log('mensaje', payload);
    io.emit('mensaje',{'Admin':'hola a todos'});
    });	  
	  
});
