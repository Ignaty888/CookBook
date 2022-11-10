const router = require('express').Router();
const RecipePage = require('../view/RecipePage');
const { Dish, FavoriteDish } = require('../db/models');

router.get('/:idRecipe',async(req,res)=>{
    const {idRecipe}=req.params
    const dish = await Dish.findOne({where:{id:idRecipe}})
    res.renderComponent(RecipePage,{dish})
})
.post ('/:idRecipe', async(req,res)=>{
    const {idRecipe}=req.params
    const {id}=res.locals.user
    
    const like = await FavoriteDish.create({user_id:id, dish_id: idRecipe})
    res.json({message: 'success'})
}).delete('/:idRecipe', async(req,res)=>{
    const {idRecipe}=req.params
    const {id}=res.locals.user
    const disLike = await FavoriteDish.destroy({where:{user_id:id, dish_id: idRecipe}})
    res.json({message:'dislike'})

})
module.exports = router