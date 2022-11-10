const router = require('express').Router();
const MainPage = require('../view/MainPage');
const {Dish} = require ('../db/models')

router.get('/', async (req, res) => {
  const dishes = await Dish.findAll()

  res.renderComponent(MainPage, { title: 'Start Page', dishes });
})
.post('/',async(req,res)=>{
  const {key} = req.body

  let dishes;
  switch (key) {
    case '1': 
     dishes =  await Dish.findAll({order:[['time','ASC']]})
    break;

    case '2': 
     dishes =  await Dish.findAll({order:[['time','DESC']]})
     break;

    case '3': 
      dishes =  await Dish.findAll({order:[['ingredientCount','ASC']]})
      break;

    case '4': 
     dishes =  await Dish.findAll({order:[['ingredientCount','DESC']]})
      break;
  
    default:
      break;
  }
  
  res.json(dishes);
})


module.exports = router;
