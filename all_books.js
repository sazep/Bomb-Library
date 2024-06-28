const count = 3
let page = 0
function load_books(){
    fetch("/data/data.json")
        .then((res) => res.json())
        .then((data) => {
            let s = page*count 
            let n = s+3
            data = data.slice(s,n)
            const temp = $('#onebook').html();
            const hb_temp = Handlebars.compile(temp);
            $("#allbooks").html(hb_temp(data));
        })
}
load_books()





















