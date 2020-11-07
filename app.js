const express = require('express');
const server = express();
const port = 3000;
server.use(express.json());


server.get('/', (req, res) => res.send('Bem vindo, API Clientes!'));

  const clientes = [
  {
    id: 1,
    name: "Guilherme",
  },
  {
    id: 2,
    name: "Gabriele",
  },
  {
    id: 3,
    name: "Ana Carolina",
  },
 ];
server.listen(port, () => console.log(`Example server listening on port ${port}!`));

server.get("/clientes", (req,res) => {
    res.json(clientes);
});

server.post('/clientes',(req, res) => {
// ass // asim esperamos buscar o name informado dentro do body da requisição
    clientes.push({"id": req.body.id , "name": req.body.name});
    return res.json(clientes); // retorna a informação da variável geeks
})