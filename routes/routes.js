const routes = require("express").Router()
const TaskController = require("../controller/TaskController")

routes.get("/", TaskController.getAllTasks) // rota para nos retornar [get] todas as tasks
routes.post("/create", TaskController.createTask) //rota para criar [post] as tasks


module.exports = routes