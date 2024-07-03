const count = 500
let page = 0
let file = localStorage.getItem("filebook")
function load_text(){
    fetch(file)
        .then((res) => res.text())
        .then((data) => {
            // allbooks = data.length
            let s = page*count 
            let n = s+count
            data = data.slice(s,n)
            const temp = $('#textbook').html();
            const hb_temp = Handlebars.compile(temp);
            $("#read").html(hb_temp(data));
            document.querySelector(".page").innerHTML = page + 1
        })

}
load_text()