
function suitable_Corses(mass_Courses, price_Range)
  {
    let corses = []
    mass_Courses.forEach(element => {
      if ( element.prices[0] >= price_Range[0] && price_Range[1] == null) corses.push(element)
      else if (element.prices[1] == null ) return
      else if ( element.prices[0] >= price_Range[0] && element.prices[1] <= price_Range[1]) corses.push(element)
  })
    return corses
  }

function range (){
  let list_Suitable_Corses = [
  ]
  for (let i = 0; i < arguments.length; i++){
    list_Suitable_Corses.push(
      {range: arguments[i],
      cours: suitable_Corses(courses, arguments[i] ) 
    })
  }
  return list_Suitable_Corses
}

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

let courses = [
  { name: "Courses in England", prices: [0, 100] }, 
  { name: "Courses in Germany", prices: [500, null] }, 
  { name: "Courses in Italy", prices: [100, 200] }, 
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

let info  = range( requiredRange1, requiredRange2, requiredRange3)

let div = document.createElement('div')
div.className = "alert"


info.forEach(element =>{
  element.range , element.cours.forEach(element1 =>{ div.innerHTML += ' Приемлемый диапозон цен : ' 
  + element.range[0]+ ',' +element.range[1] + ' Название курса : ' + element1.name+ ' Стоимость : ' + element1.prices[0] +','+ element1.prices[1] + '<br>'})
  // element.rage  не работает (значение null заменяется на пустоту)
  document.body.append(div)

})

//сортировка по начальной цене
function sort_Courses(mass_Courses){
  let index_min = 0 
  for (let i = 0; i < mass_Courses.length; i++){
    let isIt = false
    let min = mass_Courses[i]
    for (let j = i+1; j < mass_Courses.length; j++){
      if (mass_Courses[j].prices[0] == null) { 
        min = mass_Courses[j]
        index_min = j
        isIt = true
      }
      else if (min.prices[0] > mass_Courses[j].prices[0]) { 
        min = mass_Courses[j]
        index_min = j
        isIt = true
      }
      else if (min.prices[0] == mass_Courses[j].prices[0] && min.prices[1] > mass_Courses[j].prices[1]) { 
        min = mass_Courses[j]
        index_min = j
        isIt = true
      }
    }
    if (isIt){
    mass_Courses[index_min] = mass_Courses[i]
    mass_Courses[i] = min
    }

  }
  return mass_Courses
}

sort_Courses(courses).forEach(element => {
  div.innerHTML += ('Название ' +element.name+' Цена курса '+element.prices[0] +' '+ element.prices[1] + '<br>')
  document.body.append(div)
})

