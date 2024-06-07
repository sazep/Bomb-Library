fetch("/data/new.json")
    .then((res)=>res.json())
    .then((dta)=>{
        const temp = $("#book").html()
        const htTemp = Handlebars.compile(temp)
        $("#new").html(htTemp(dta))
    })