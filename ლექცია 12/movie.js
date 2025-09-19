// მთავარი ფილმების დატა

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
// ფოტოების გამოსატანი ინფორმაცია
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

// სერჩის ენდფოინთი
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

// ამოღება მთავარი div ს საიდანაც ვხატავთ ყველაფერს
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
// ფუნქციის გამოძახება საიდანაც გადავცემთ ენდფოინთს
getMovies(API_URL);

async function getMovies(url) {
  // ენდფოინთის დაფეჩვა რომ წამოვიღოთ ჩვენთან კლიენტის მხარეს დატა
  const res = await fetch(url);
  // თავისთავად ეს დატა არ არის json ფორმატის და გადავქმნით json სტრუქტურაში
  const data = await res.json();

  // გადავაწოდებთ დატას ახალ ფუნქციას
  showMovies(data.results);
}

function showMovies(movies) {
  // პირველი დივი როცა ავიღეთ თავიდან მივანიჭეთ ცარიელი მდგომარეობა
  main.innerHTML = "";

  // movies არის უკვე ერეი და გადავატარეთ forEach იმის გამო რო არ ვცვლით ერეის და უბრალოდ ვხატავთ
  movies.forEach((movie) => {
    // დესტრუქცია მოვახდინეთ movie ელემენტბის და სათითაოდ ამოვიღეთ ის რაც გვჭირდებოდა
    const { title, backdrop_path, vote_average, overview } = movie;
    // შევქმენით დივ რომლეიც ჩაჯდა main სი
    const movieEl = document.createElement("div");
    // დავამატეთ ზემოთ შექმნილ დივს კლასი movie რომელსაც გავსტილავთ
    movieEl.classList.add("movie");
    // შექმნილ დივში ჩავხატეთ მოცემული html სტრქუტურა
    movieEl.innerHTML = `
            <img src="${IMG_PATH + backdrop_path}" alt="${title}" />
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(
                  vote_average
                )}">${vote_average}</span>
            <div class="overview">
                <h3>overview</h3>
                <p>${overview}</p>
            </div>
            </div>
        `;
    // მთავარ დივს გადავეცით html ს სტრუქტურა რომ ყველფაერი დაეხატა
    main.appendChild(movieEl);
  });
}
// ყოველ avarage votზე გადავცეთ სათითაო ფეერი კლასად
function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== " ") {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});

// TODO : როდესაც დააჭრთ ერთ ფილმს უნდა გახსნათ პოპ აპში ამ ფილმის ინფორამცია
