fetch("/data/new.json")
<<<<<<< HEAD
    .then((res) => res.json())
    .then((data) => {
        const temp = $('#book').html();
        const hb_temp = Handlebars.compile(temp);
        $("#new").html(hb_temp(data));
    })
    .catch((error) => console.error('Error:', error));
=======
    .then((res)=>res.json())
    .then((dta)=>{
        const temp = $("#book").html()
        const htTemp = Handlebars.compile(temp)
        $("#new").html(htTemp(dta))
    })
>>>>>>> af54d717da75904c1092ddeec7b79c047278556b
