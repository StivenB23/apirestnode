const express = require('express')
const app = express();
const animalsRoutes = require('./routes/animalsRoutes')

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use('/api/v1',animalsRoutes);
app.use((req, res, next)=>{
   res.status(404).json({
      message: 'Not found'
   });
})
app.listen(PORT, ()=>{
   console.log("Server run ") 
})