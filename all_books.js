const count = 3 
let page = 0
// s = page*count 
// n = s + 3
function loads_books(){
    fetch("/data/data.json")
        .then((res)=>res.json())
        .then((dta)=>{
            let  s = page*count 
            let  n = s + 3
            dta = dta.slice(s,n)
            console.log(dta)
            const temp = $("#onebook").html()
            const htTemp = Handlebars.compile(temp)
            $("#allbooks").html(htTemp(dta))

        })
}
loads_books()