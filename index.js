fetch("/data/new.json")
    .then((res)=>res.json())
    .then((data)=>{
        const temp = $("#book").html()
        const htTemp = Handlebars.compile(temp)
        $("#new").html(htTemp(data))
    })

fetch("/data/popular.json")
    .then((res)=>res.json())
    .then((data)=>{
        const temp = $("#book").html()
        const htTemp = Handlebars.compile(temp)
        $("#popular").html(htTemp(data))
    })