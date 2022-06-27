(() => {
  const loadData = (data) => {
    document.querySelector('#list').innerHTML  = data.results.map(people => {
      return `
      <div class="w-full p-6 rounded-lg bg-white border hover:shadow-lg transition h-max" >
        <h1 class="text-2xl font-bold mb-4">${people.name}</h1>
        <div class="mb-4 hidden">
          <p>Gender: ${people.gender}</p>
          <p>Height: ${people.height}</p>
          <p>Mass: ${people.mass}</p>
          <p>Eye color: ${people.eye_color}</p>
          <p>Hair color: ${people.hair_color}</p>
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
    fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(loadData);
  }
})()
