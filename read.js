var t
fetch('/book/Death Note.txt')
    .then((response) => {return response.text()})
    .then((data) =>{ 
  t = dtat
 document.getElementById("#book").innerHtml = t
})

