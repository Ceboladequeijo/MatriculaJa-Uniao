/* CONST, definição de variáveis constantes */
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'; //

const app = express();
const PORT = 3000

app.use(express.static("public"))
app.use(express.json());
app.use(morgan('dev'));
app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    preflightContinue: false,
  })
);

//importing routes
import InvestRoute from './src/routes/investments.route.js'

//using route
app.use('/dados', InvestRoute)

//rendering pages
app.get("/home", (req, res) => {
  res.sendFile('index.html', {root:'public/html'})
})

app.get("/escola", (req, res) => {
  const id = req.params.id
  res.sendFile('info-escola.html', {root:'public/html'})
})

app.get("/login", (req, res) => {
  res.sendFile('login.html', {root:'public/html'})
})

app.get("/escolas", (req, res) => {
  res.sendFile('visualiz-escolas.html', {root:'public/html'})
})

app.get("/cadastro", (req, res) => {
  res.sendFile('cadastro.html', {root:'public/html'})
})

//app.use(( error, req, res, next ) => {
//	const statusCode = error.statusCode || 500;
 // const message = error.message || 'Internal Server Error';
//
 // res.sendFile('404.html', {root:'public/html'})
//});

//route not find
app.get("/*", (req, res, next) => {
    console.log("Página não encontrada 404")
    res.sendFile('404.html', {root:'public/html'})
})

app.listen(PORT, ()=> {
  console.log(`server running on port ${PORT}`)
})