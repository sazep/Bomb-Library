
let book = localStorage.getItem("book")
fetch("/data/data.json")
    .then((res) => res.json())
    .then((data) => {
        for(let bb of data){
            if(bb["id"]== +book){
                book = bb
                break
            }
        }
        const temp = $('#aboutbook').html();
        const hb_temp = Handlebars.compile(temp);
        $("#book").html(hb_temp(book))
        localStorage.removeItem("book")
}).then((dt)=>{

    document.getElementById("download").addEventListener('click', () => {
   
    const file ="../book/" +book['file']
    const element = document.createElement('a');
      
    element.setAttribute('href', 'data:text/plain;charset=utf-8');
    element.setAttribute('download', file);
   
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  })

  document.getElementById("read").addEventListener('click', () => {
   const b = "/book/"+book['file']

    localStorage.setItem("filebook",b)
    window.location.href = "read.html"
    
})
})