var url = "https://api.themoviedb.org/3/genre/movie/list?api_key=704bd3935947752adbb2e6021fffa6dd&language=en-US"

fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
   console.log(data.genres[4]);
   document.querySelector("div.genre1").innerHTML+=data.genres[0].name;
   document.querySelector("div.peliculas1").innerHTML+= data.genres[1].name;
   document.querySelector("div.peliculas2").innerHTML+= data.genres[2].name;
   document.querySelector("div.pelis1").inneHTML+= data.genres[3].name;
   document.querySelector("div.pelis2").inneHTML+= data.genres[4].name;
   document.querySelector("div.pelis3").inneHTML+= data.genres[5].name;

  })
  .catch(function(error){
    console.log(error);
  })
