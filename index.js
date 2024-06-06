fetch('/data/new.json')
    .then((response) => response.json())
    .then((json) =>{ 
      // Object.keys(json).length
      const templateText = $('#template').html();
      const hbTemplate = Handlebars.compile(templateText);
        
        $('#new').html(hbTemplate(json));
})

fetch('/data/popular.json')
    .then((response) => response.json())
    .then((json) =>{ 
  
const templateText = $('#template').html();
const hbTemplate = Handlebars.compile(templateText);
  
  $('#popular').html(hbTemplate(json));
})