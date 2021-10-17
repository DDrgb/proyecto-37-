var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;

//crea aquí las variables feed y lastFed 
var feedDog
var lastFed

function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  //crea aquí el boton Alimentar al perro
  feeddog=createButton("Dar Alimento");
  feeddog.position(950,95);
  feeddog.mousePressed(feedDog);



  addFood=createButton("Agregar Alimento");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  foodObj.display();

  //escribe el código para leer el valor de tiempo de alimentación de la base de datos
  
 
 
 // if(lastFed>=12){

    //text("ultima hora en que se aliemnto: 1 PM",350,30)

 //escribe el código para mostrar el texto lastFed time aquí
  //}else if (lastFed==0){
    //text("ultima hora en que se aliemnto: 12 PM",350,30)
  //} else if (lastFed<012){
    //text("ultima hora en que se aliemnto: 10 PM",350,30)
  //}

  }
 
  drawSprites();


//función para leer la Existencia de alimento
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
  dog.addImage(happyDog);
  var food_stock_val=foodObj.getFoodStock();
  if(food_stock_val<=0){
    foodObj.updateFoodStock(food_stock_val*0);
  }else{
    foodObj.updateFoodStock(food_stock_val-1);
  }
  //escribe el código aquí para actualizar las existencia de alimento, y la última vez que se alimentó al perro
  database.ref('/').update({
    food: count
  });
}

//funcón para agregar alimento al almacén
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
