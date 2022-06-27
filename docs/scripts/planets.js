(() => {
  const loadData = (data) => {
    console.log(data);
    document.querySelector('#list').innerHTML  = data.results.map(planet => {
      return `
      <div class="w-full p-6 rounded-lg bg-white border hover:shadow-lg transition h-max" >
        <h1 class="text-2xl font-bold mb-4">${planet.name}</h1>
        <div class="mb-4 hidden">
          <p>Climate: ${planet.climate}</p>
          <p>Diameter: ${planet.diameter} m</p>
          <p>Gravity: ${planet.gravity}</p>
          <p>Orbital period: ${planet.orbital_period}</p>
          <p>Rotation period: ${planet.rotation_period}</p>
          <p>Population: ${planet.population}</p>
          <p>Surface water: ${planet.surface_water}</p>
          <p>Terrain: ${planet.terrain}</p>
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
    fetch('https://swapi.dev/api/planets/')
    .then(response => response.json())
    .then(loadData);
  }
})()
