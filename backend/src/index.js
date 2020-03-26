const express = require('express'); //importando as funcionalidades do express
const cors = require('cors');
const routes = require('./routes');

const app = express(); //criando aplicacao dentro da variavel app

app.use(cors());

app.use(express.json()); //transformar json em algo entedivel para a requisicao

app.use(routes);

// Rota / Recurso

/**
 * metodos http:
 * 
 * GET: buscar/listar uma informacao do backend
 * POST: criar uma informacao no backend
 * put: alterar uma informacao no backend
 * delete: deletar uma informacao no backend
 */

 /**
  * tipos de parametros:
  * 
  * query params: parametros nomeados enviados na rota apos o "?" (filtros,paginacao)
  * route params: parametros utilizados para identificar recursos
  * request body: corpo da requisicao, utilizado para criar ou alterar recursos
  * 
  */


app.listen(3333); //localhost/3333 porta de acesso