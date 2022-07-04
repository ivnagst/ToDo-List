const express = require('express')
const path = require("path");
const routes = require('./routes/routes');
const connectToDb = require("./database/db")

connectToDb();
const app = express();
const port = 3000;


app.set("view engine", ".ejs")
app.use(express.static(path.join(__dirname, "public"))) // Permite que sejam buscados nos seus devidos caminhos o style.css e o script.js do front end
app.use(routes)

// ROTA       // callback
app.get("/home",  (req, res) => {
  res.render("index");
})

app.listen(port, () => 
    console.log(`Servidor rodando em http://localhost:${port}`)
)