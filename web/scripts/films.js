(() => {
  const loadData = (data) => {
    console.log(data);
    document.querySelector('#list').innerHTML  = data.results.map(film => {
      return `
      <div class="w-full p-6 rounded-lg bg-white border hover:shadow-lg transition h-max" >
        <h1 class="text-2xl font-bold mb-4">${film.title}</h1>
        <div class="mb-4 hidden">
          <p>Director: ${film.director}</p>
          <p>Producer: ${film.producer}</p>
          <br><p>Description: <br>${film.opening_crawl}</p>
        </div>
        <button class="show text-blue-500">Show detail</button>
      </div>
      `
    }).join('')
    
    document.querySelectorAll('.show').forEach(elm => {
      elm.onclick = (e) => {
        if (e.target.innerText == 'Show detail') {
          e.target.previousElementSibling.classList.remove('hidden');
          e.target.innerText = 'Hide detail';
        } else {
          e.target.previousElementSibling.classList.add('hidden');
          e.target.innerText = 'Show detail';
        }
      }
    })

  }

  document.body.onload = () => {
    fetch('https://swapi.dev/api/films/')
    .then(response => response.json())
    .then(loadData);
  }
})()
