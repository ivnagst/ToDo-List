const routes = require("express").Router()
const TaskController = require("../controller/TaskController")

routes.get("/", TaskController.getAllTasks) // rota para nos retornar [get] todas as tasks
routes.post("/create", TaskController.createTask) //rota para criar [post] as tasks
routes.get("/getById/:id/:method", TaskController.getById) //rota para nos retornar com [get] através do ID 
routes.post("/updateOne/:id", TaskController.updateOneTask) //rota para atualizar uma tarefa. Usamos apenas get e post pois nesta estrutura MVC, utilizando ejs, talvez estejamos limitados
routes.get("/updateOne/:id", TaskController.deleteOneTask)

module.exports = routes