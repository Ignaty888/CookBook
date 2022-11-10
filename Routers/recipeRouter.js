const router = require('express').Router();
const RecipePage = require('../view/RecipePage');
const { Dish } = require('../db/models');

router.get('/:idRecipe',async(req,res)=>{
    const {idRecipe}=req.params
    const dish = await Dish.findOne({where:{id:idRecipe}})
    console.log(dish);
    res.renderComponent(RecipePage,{dish})
})
module.exports = router