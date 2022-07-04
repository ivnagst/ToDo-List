//método da rota
const Task = require ('../models/Task') // quando importamos a tarefa aqui, nós também importamos o mongoose :D 

const getAllTasks = (req, res) => {
    return res.render("index");
};

const createTask = async (req, res) => { 
    const task = req.body;

    if(!task.task){ // Se não tiver nada na task, o que vai acontecer? 
        return res.redirect("/") // Respondendo o comnentário acima, ele irá recarregar a página. 
    }

    try {
        await Task.create(task)
        return res.redirect("/")
    } catch (err){ //sem o catch, o try não roda
        res.status(500).send({
            error: err.message
        })
    }
}
/* Pq estou utilizando uma FUNÇÃO ASSíNCRONA? 
   Bom, se não utilizar este recurso o código procedural irá executar tudo pela frente, 
   sem esperar outros trechos/linhas de código, e neste caso iremos aguardar */

module.exports = {
    getAllTasks,
    createTask,
};

