const express = require ('express');
const app = express();
const path = require ('path');

const staticFolder = path.resolve(__dirname, "./public");
app.use(express.static(staticFolder));

app.listen (3000, function (){
console.log('Servidor en el puerto 3000');

});

app.get ('/', function(req, res){
res.sendFile(path.resolve(__dirname, 'views/home.html'));

});

