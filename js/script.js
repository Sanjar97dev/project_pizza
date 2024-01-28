

const list = document.querySelector('.pizza-list')
const sushiList=document.querySelector('.sushi-list')
const snacksList=document.querySelector('.snacks-list')
const dessertList=document.querySelector('.dessert-list')
const drinksList=document.querySelector('.drinks-list')
const souseList=document.querySelector('.souse-list')
const comboList=document.querySelector('.combo-list')
const modalLeft=document.querySelector('.modal-left')

const urlFoods='https://65ac2f01fcd1c9dcffc7b274.mockapi.io/pizzas';
// const urlFoods='https://65b4f6fd41db5efd28672164.mockapi.io/getFoods';

async function SaleDatabtn(){
    const res = await fetch(urlFoods)
    const data =await res.json()
    const filterSaleData = data.filter(obj=>obj.id>=45 && obj.id<=52)
    renderComboList(filterSaleData)
    document.getElementById('sale').scrollIntoView({
        behavior:"smooth"
    })
}

//Бул пиццанын маалыматтары
async function pizzaDataBtn() {
    const res = await fetch(urlFoods);
    const data = await res.json();
    const filterPizzaData = data.filter(obj => obj.id >= 0 && obj.id <= 8);
    renderPizzList(filterPizzaData);
    document.getElementById('pizza').scrollIntoView({
        behavior:'smooth'
    })
}


//Бул сушинин маалыматтары
async function sushiDatabtn(){
    const res = await fetch(urlFoods)
    const data = await res.json()
    console.log(data);
    const filterSushiData= data.filter(obj=>obj.id>=9 && obj.id<=16)
    renderSushiList(filterSushiData)
    document.getElementById('sushi').scrollIntoView({
        behavior: 'smooth'
    })
}



//Бул закусканын маалыматтары
async function snacksDatabtn(){
    const res =await fetch(urlFoods)
    const data = await res.json()
    const filterSnacksData=data.filter(obj=>obj.id>=17 && obj.id<=24)
    renderSnacksiList(filterSnacksData)
    document.getElementById('snacks').scrollIntoView({
        behavior:"smooth"
    })
}

//Бул дессерттердин маалыматтары
async function dessertDatabtn(){
    const res = await fetch(urlFoods)
    const data = await res.json()
    const filterDessertData=data.filter(obj=>obj.id>=25 && obj.id<=32)
    renderDessertList(filterDessertData)
    document.getElementById('dessert').scrollIntoView({
        behavior: "smooth"
    })
}

//Бул суусундуктардын маалыматтары
async function drinksDatabtn(){
    const res= await fetch(urlFoods)
    const data = await res.json()
    const filterDrinksData = data.filter(obj=>obj.id>=33 && obj.id<=40)
    renderDrinksList(filterDrinksData)
    document.getElementById('drinks').scrollIntoView({
        behavior:"smooth"
    })
}

//Бул соустардын маалыматтары
async function souseDatabtn(){
    const res = await fetch(urlFoods)
    const data = await res.json()
    const filterSouseData = data.filter(obj=>obj.id>=41 && obj.id<=44)
    renderSouseList(filterSouseData)
    document.getElementById('souse').scrollIntoView({
        behavior:"smooth"
    })
}

//Бул комбонун маалыматтары
async function komboDatabtn(){
    const res = await fetch(urlFoods)
    const data =await res.json()
    const filterSaleData = data.filter(obj=>obj.id>=45 && obj.id<=52)
    renderComboList(filterSaleData)
    document.getElementById('combo').scrollIntoView({
        behavior:"smooth"
    })
}

// end


function renderPizzList(arr){
    list.innerHTML=''
    list.style=''
    arr.forEach(obj => {
        list.innerHTML+=`
        <div class='list-block'>
        <div>
            <img src='${obj.img}'>
        </div>
            <div class='foodtext-list'>
            <h3>${obj.name}</name>
            <p>${obj.ingridients}</p>
        <div class='price-block'>
            <button type="button" class="btn btn-warning">Применить</button>
            <h4>от ${obj.price}сом</h4>
        </div>
        </div>
        </div>
        `
    });

   
};

function renderSushiList(arr){
    sushiList.innerHTML='';
    sushiList.style='';
    console.log(arr);
     arr.forEach(obj=>{
        sushiList.innerHTML+=`
        <div class='list-block'>
        <div>
            <img src='${obj.img}'>
        </div>
            <div class='foodtext-list'>
            <h3>${obj.name}</name>
            <p>${obj.ingridients}</p>
        <div class='price-block'>
            <button type="button" class="btn btn-warning">Применить</button>
            <h4>от ${obj.price}сом</h4>
        </div>
        </div>
        </div>
        `
    });
}

//Бул закусканын listi
function renderSnacksiList(arr){
    snacksList.innerHTML='';
    snacksList.style='';
     arr.forEach(obj=>{
        snacksList.innerHTML+=`
        <div class='list-block'>
        <div>
            <img src='${obj.img}'>
        </div>
            <div class='foodtext-list'>
            <h3>${obj.name}</name>
            <p>${obj.ingridients}</p>
        <div class='price-block'>
            <button type="button" class="btn btn-warning">Применить</button>
            <h4>от ${obj.price}сом</h4>
        </div>
        </div>
        </div>
        `
    });
}
//end

//Бул дессерттердин листи
function renderDessertList(arr){
    dessertList.innerHTML='';
    dessertList.style='';
     arr.forEach(obj=>{
        dessertList.innerHTML+=`
        <div class='list-block'>
        <div>
            <img src='${obj.img}'>
        </div>
            <div class='foodtext-list'>
            <h3>${obj.name}</name>
            <p>${obj.ingridients}</p>
        <div class='price-block'>
            <button type="button" class="btn btn-warning">Применить</button>
            <h4>от ${obj.price}сом</h4>
        </div>
        </div>
        </div>
        `
    });
}
// end

//Бул напитоктордун листи
function renderDrinksList(arr){
    drinksList.innerHTML='';
    drinksList.style='';
     arr.forEach(obj=>{
        drinksList.innerHTML+=`
        <div class='list-block'>
        <div>
            <img src='${obj.img}'>
        </div>
            <div class='foodtext-list'>
            <h3>${obj.name}</name>
            <p>${obj.ingridients}</p>
        <div class='price-block'>
            <button type="button" class="btn btn-warning">Применить</button>
            <h4>от ${obj.price}сом</h4>
        </div>
        </div>
        </div>
        `
    });
}
// end

//Бул соустардын листи
function renderSouseList(arr){
    souseList.innerHTML='';
    souseList.style='';
     arr.forEach(obj=>{
        souseList.innerHTML+=`
        <div class='list-block'>
        <div>
            <img src='${obj.img}'>
        </div>
            <div class='foodtext-list'>
            <h3>${obj.name}</name>
            <p>${obj.ingridients}</p>
        <div class='price-block'>
            <button type="button" class="btn btn-warning">Применить</button>
            <h4>от ${obj.price}сом</h4>
        </div>
        </div>
        </div>
        `
    });
}
// end

//Бул комболордун листи
function renderComboList(arr){
    comboList.innerHTML='';
    comboList.style='';
     arr.forEach(obj=>{
        comboList.innerHTML+=`
        <div class='list-block'>
        <div>
            <img src='${obj.img}'>
        </div>
            <div class='foodtext-list'>
            <h3>${obj.name}</name>
            <p>${obj.ingridients}</p>
        <div class='price-block'>
            <button type="button" class="btn btn-warning">Применить</button>
            <h4>от ${obj.price}сом</h4>
        </div>
        </div>
        </div>
        `
    });
}
// end

async function searchByData(){
    const searchInput=document.getElementById('searchInput').value.toLowerCase()

    if(searchInput !==""){
    list.innerHTML='';
    list.style='';
    const res=await fetch(urlFoods)
    const data=await res.json()
    const filterSearch=data.filter(obj=>obj.name.toLowerCase().includes(searchInput))
    if (filterSearch.length>0) {
        renderPizzList(filterSearch)
    } else {
        list.style.backgroundColor = 'red';
        list.innerText='К сожалению, у нас нет ни одного из этих блюд.'
    }
        }  else {
            list.style.backgroundColor = 'red';
            list.innerText='Пожалуйста, заполните поля'
    }
}





// Pizza modal
const pizzaModal = document.querySelectorAll("#myModal")[0];
const pizzaBtn = document.querySelectorAll("#myBtn")[0];
const pizzaClose = document.querySelectorAll(".close")[0];

pizzaBtn.onclick = function() {
  pizzaModal.style.display = "block";
};

pizzaClose.onclick = function() {
  pizzaModal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == pizzaModal) {
    pizzaModal.style.display = "none";
  }
};

// Sushi modal
const sushiModal = document.querySelectorAll("#myModal")[1];
const sushiBtn = document.querySelectorAll("#myBtn")[1];
const sushiClose = document.querySelectorAll(".close")[1];

sushiBtn.onclick = function() {
  sushiModal.style.display = "block";
};

sushiClose.onclick = function() {
  sushiModal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == sushiModal) {
    sushiModal.style.display = "none";
  }
};


pizzaDataBtn()
sushiDatabtn()
snacksDatabtn()
dessertDatabtn()
drinksDatabtn()
souseDatabtn()
komboDatabtn()

//фильтир болуму

// end









