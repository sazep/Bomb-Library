var count = 0
fetch('/data/data.json')
    .then((response) => response.json())
    .then((json) =>{ 
    count = Object.keys(json).length
    json = json.slice(0,3)
      const templateText = $('#book').html();
      const hbTemplate = Handlebars.compile(templateText);
        
        $('#books').html(hbTemplate(json));
})