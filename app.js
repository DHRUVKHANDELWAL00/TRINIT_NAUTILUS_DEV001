const express=require('express');
const app=express()
const port=3000;

//static files
app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))
app.use('/js',express.static(__dirname+'public/js'))
app.use('/img',express.static(__dirname+'public/img'))

app.set('views','./views')
app.set('view engine','ejs')
app.get('',(req,res)=>{
  res.render('index',{ text:  'this is ejs'})
})
app.get('/registerngo',(req,res)=>{
  res.render('registerngo',{ text:  'this is ejs'})
})
app.get('/registerphil',(req,res)=>{
  res.render('registerphil',{ text:  'this is ejs'})
})
app.get('/donate',(req,res)=>{
  res.render('donate',{ text:  'this is ejs'})
})










//listen on port 3000
app.listen(port,()=>console.info(`listening on port ${port}`))
