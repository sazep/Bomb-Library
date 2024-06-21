let b = localStorage.getItem("filebook")
let page = 0
const symb = 500
fetch(b)
    .then((res)=>res.text())
    .then((data)=>{
        localStorage.setItem("textbook",data)
        const temp = $('#readbook').html();
        const hb_temp = Handlebars.compile(temp);
        let d = data.slice(page*symb, page*symb+symb)
        $("#read").html(hb_temp(d))
        
    })