var count = 0
var pages =0
let start
let last
let btn_next = document.getElementById("next")
let btn_before = document.getElementById("before")
fetch('/data/data.json')
    .then((response) => response.json())
    .then((json) =>{ 
    count = Object.keys(json).length
    // pages = Math.floor( count/4)
    })


function  load_page(dr) {
  fetch('/data/data.json')
    .then((response) => response.json())
    .then((json) =>{ 
    if (dr==1){
      start = pages*4 
      last = start + 4
      pages = pages +1
    }else{
      pages = pages -1
      start = pages*4 -4
      last = pages*4
      
    }
    if(last > count){
      last = count
      btn_next.disabled = true
    }else{
      btn_next.disabled = false
    }
    if(start <= 0){
      start =0
      btn_before.disabled = true
    }else{
      btn_before.disabled = false
    }
    json = json.slice(start,last)
    // if (length(json)==0){
    //   last = start
    //   start = start-4
    //   json = json.slice(start,last)
    //   pages = pages-1
    // }
    const templateText = $('#book').html();
    const hbTemplate = Handlebars.compile(templateText);
    $('#books').html(hbTemplate(json));   
    
    document.getElementById("numPage").innerHTML = pages
})
}

load_page(1)


btn_next.addEventListener("click", ()=>{
    load_page(1)
  })

  
  btn_before.addEventListener("click", ()=>{
      load_page(-1)
    })
  