
        fetch("/data/new.json")
            .then((res) => res.json())
            .then((data) => {
                const temp = $('#book').html();
                const hb_temp = Handlebars.compile(temp);
                $("#new").html(hb_temp(data));
            })
            .then((dt)=>{
   

        fetch("/data/popular.json")
            .then((res) => res.json())
            .then((data) => {
                const temp = $('#book').html();
                const hb_temp = Handlebars.compile(temp);
                $("#popular").html(hb_temp(data));
            })
   
        })
        .then((dt)=>{


        let books = document.querySelectorAll(".book")
        for(let bb of books){
            bb.addEventListener("click",function(){
                let id = this.querySelector("p").innerHTML
                localStorage.setItem("book",id)
                window.location.href = "../html/aboutbook.html"
              
            })
        }
       } )

