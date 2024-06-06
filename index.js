fetch("/data/new.json")
    .then((res) => res.json())
    .then((data) =>{
        const temp = $('#book').html();
        const hb_temp = Handlebars.compile(temp);
        $("#new").html(hb_temp(data));
    });

// fetch("/data/popular.json")
//     .then((res) => res.json())
//     .then((data) =>{
//         const temp = $('#popular').html();
//         const hb_temp = Handlebars.compile(temp);
//         $("#new").html(hb_temp(data));
//     });