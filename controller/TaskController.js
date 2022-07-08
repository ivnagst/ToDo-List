//método da rota
const Task = require ('../models/Task') // quando importamos a tarefa aqui, nós também importamos o mongoose :D 

const getAllTasks = async (req, res) => {
  try { 
    const tasksList = await Task.find() // Pq do [await]? Mais uma vez a async function precisa de aguardar a função realizar alguma tarefa e por fim retornar.
    return res.render("index", {tasksList, task: null, taskDelete: null})
  }
  catch {
    res.status(500).send({error: err.message})
  }  
    return res.render("index");
};

const createTask = async (req, res) => 
{ 
    const task = req.body;

    if(!task.task){ // Se não tiver nada na task, o que vai acontecer? 
        return res.redirect("/") // Respondendo o comnentário acima, ele irá recarregar a página. 
    }
    try{
        await Task.create(task)
        return res.redirect("/")
    } 
    catch (err){ //sem o catch, o try não roda
        res.status(500).send({
            error: err.message
        })
    }
}
const getById =  async (req, res) => {
    try {
        const tasksList = await Task.find();
        if(req.params.method == "update"){   
            const task = await Task.findOne({_id:req.params.id});
            res.render("index", { task, tasksList, taskDelete: null});
        } else {
            const taskDelete = await Task.findOne({_id: req.params.id});
            res.render("index", {task: null, tasksList, taskDelete});
        }             
    } catch (err) {
    res.status(500).send({ error:err.message })    
    }
};
const updateOneTask = async (req, res) => {
    try {
        const task = req.body
        await Task.updateOne({ _id: req.params.id }, task) // Ele procura um ID que vem do parametro. Achou? Dai ele altera o objeto! 
        res.redirect("/")
    } catch (err) {
        res.status(500).send({error:err.message})
    }
}
const deleteOneTask = async (req, res) => {
    try {
        await Task.deleteOne({_id: req.params.id});
        res.redirect("/");
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
}
/* Pq estou utilizando uma FUNÇÃO ASSíNCRONA? 
   Bom, se não utilizar este recurso o código procedural irá executar tudo pela frente, 
   sem esperar outros trechos/linhas de código, e neste caso iremos aguardar */

module.exports = {
    getAllTasks,
    createTask,
    getById,
    updateOneTask,
    deleteOneTask,
};



// Class TaskService
// Teste - [Jest] Framework na TaskService - teste unitário
// Conceito de orientação em objeto
// classe de serviço
// SOLID - ebook
// Design Patterns
// BDD Behaviour
// Arquitetura de camada
// Babel


//Stub