const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        require: true,
    },
    check: {
        type: Boolean,
        require: true,
    },
    date: {
        type:Date,
        default: Date.now(), //Já leu tanto que nem se lembra né? O código ali atrás, é JavaScript, Express ou alguma outra lib? [JS]
    },
})

module.exports = mongoose
    .model("Task", taskSchema)