const model=require('../models/model.js');

//post: hhtp://localhost:8080/api/categories
async function create_Categories(req,res){
   const Create=new model.Categories({
    type:"Investment",
    color:'#FCBE44',//dark
   })

   await Create.save(function(err){
    if(!err) return res.json(Create);
    return res.status(400).json({message:`Error while creating categories ${err}`});
   });
}

//get: hhtp://localhost:8080/api/categories
async function get_Categories(req,res){
    let data=await model.Categories.find({})

    let filter=await data.map(v=>Object.assign({},{type:v.type,color:v.color}));
    return res.json(filter);
}



module.exports= {
    create_Categories,
    get_Categories
}