const express=require('express');

const app= express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine','ejs');
app.listen(3002,() => {
  console.log("Server is running on the port 3002")
}
)   
app.use(express.static('public'));


let products=[];

app.get('/', (req, res) => {
    res.render('index');
  });


app.get('/product', (req, res) => {
  res.render('product',{products:products});
});


app.post('/product',(req,res) => {
    
  const{name,price}=req.body;
  products.push({name:name,price:price});
  res.redirect('/product');
}
);


 app.use('/',(req,res) => {
    res.render('404');
} )