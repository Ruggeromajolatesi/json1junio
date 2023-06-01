fetch('data.json')
.then (response => response.json())
.then (respuesta=>{
    let elemento = document.getElementById("container");
    let codigo_HTML ="";
    codigo_HTML += "<h1>"+respuesta.nombre+"</h1>";
    codigo_HTML += "<h2>"+respuesta.email+"</h2>";
    codigo_HTML += "<ul>";
    respuesta.estudios.forEach(element => {
        codigo_HTML +="<li>"+element.cual+"</li>"+"<li>"+element.ubicacion+"</li>"+"<li>"+element.inicio+"</li>"+"<li>"+element.fine+"</li>"
    });
    codigo_HTML += "</ul>";
    codigo_HTML += "<ul>";
    elemento.innerHTML = codigo_HTML;
    respuesta.softskills.forEach(element => {
        codigo_HTML +="<li>"+element.volume+"</li>"+"<li>"+element.equipo+"</li>"+"<li>"+element.actitud1+"</li>"+"<li>"+element.actitud2+"</li>"+"<li>"+element.actitud3+"</li>"
    });
    codigo_HTML += "</ul>";
    
})
.catch(error=>{
    console.error("error al cargar el archivo: ", error);
});
    

