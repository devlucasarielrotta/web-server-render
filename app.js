import express from 'express';
import url from 'url';
import hbs from 'hbs';
import dotenv from 'dotenv';


//const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.',import.meta.url));
dotenv.config();

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials',function (err){})

// servir contenido estático

app.use(express.static('public'));

app.get('/',(req,res) => {
    res.render('home',{
        nombre: 'Lucas Ariel Rotta',
        titulo: 'Node y HBS'
    });
})


app.get('/generic', (req,res) => {
   
    res.render('generic',{
        nombre: 'Lucas Ariel Rotta',
        titulo: 'Generic'
    })
    
})

app.get('/elements', (req,res) => {
   
    res.render('elements',{
        nombre: 'Lucas Ariel Rotta',
        titulo: 'elements'
    })
    
})

app.get('*', (req,res) => {
   
    res.sendFile( __dirname +'public/templates/404.html')

})



app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})