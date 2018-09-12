const api = require("./controllers/RESTfuls.js");
const bp = require('body-parser');

module.exports = function(app){
    app.use(bp.json());
    app.get('/tasks', api.getAllTasks);
    app.get('/tasks/:id', api.getOneTask);
    app.post('/tasks', api.createTask);
    app.put('/tasks/:id', api.updateTask); 
    app.delete('/tasks/:id', api.deleteTask);
    return app;
}