const API_URL =
  "https://api.themoviedb.org/3/movie/1311031?api_key=3fd2be6f0c70a2a598f084ddfb75487c";
// ფოტოების გამოსატანი ინფორმაცია
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

// დავშალოთ მთავარი ენდფოინთი
const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
const API_BASE_URL = "https://api.themoviedb.org/3";

// ამოვიღოთ ურლ პარამეტრი

// helper function

function getParams(d) {
  return new URLSearchParams(window.location.search).get(d);
}

const root = document.getElementById("root");

const id = getParams("id");

// CHECK გადამწომება რომ id ნამდვილად გასეტილია

if (!id) {
  root.innerHTML = `<p>Movie Id was not provided</p>`;
} else {
  renderMovie(id).catch((e) => {
    console.error(e);
    root.innerHTML = `<p>Failed to load movie Please try again</p>`;
  });
}

async function renderMovie(movieID) {
  const url = `${API_BASE_URL}/movie/${movieID}?api_key=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch the movie");
  }
  const movie = await res.json();

  const {
    title,
    overview,
    poster_path,
    backdrop_path,
    tagline,
    vote_count,
    genres = [],
  } = movie;

  root.innerHTML = `
  <div class="movie-card">
    <div class="container">
      <a href="#">
        <img src="${IMG_PATH + poster_path}" alt="cover" class="cover" />
      </a>
      
      <div class="hero" 
           style="background-image: url('${IMG_PATH + backdrop_path}');
                  background-size: cover;
                  background-position: center;
                  position: relative;">
        <div class="details">
          <div class="title1">${title}<span>PG-13</span></div>
          <div class="title2">${tagline}</div>    
          
          <fieldset class="rating">
            <!-- ratings markup unchanged -->
          </fieldset>
          
          <span class="likes">${vote_count} likes</span>
        </div>
      </div>
      
      <div class="description">
        <div class="column1">
          ${genres
            .map((genre) => ` <span class="tag">${genre?.name}</span>`)
            .join("")}
        </div>
        <div class="column2">
          <p>
            ${overview}
            <a href="#">read more</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  `;
}

const LAYOUT = [
  {
    row: "A",
    seats: [
      { seat: 1, price: 20 },
      { seat: 2, price: 20 },
      { seat: 3, price: 20 },
      { seat: 4, price: 20 },
      { seat: 5, price: 20 },
      { seat: 6, price: 20 },
      { seat: 7, price: 20 },
      { seat: 8, price: 20 },
      { seat: 9, price: 20 },
      { seat: 10, price: 20 },
      { seat: 11, price: 20 },
      { seat: 12, price: 20 },
      { seat: 13, price: 20 },
      { seat: 14, price: 20 },
      { seat: 15, price: 20 },
      { seat: 16, price: 20 },
    ],
  },
  {
    row: "B",
    seats: [
      { seat: 1, price: 18 },
      { seat: 2, price: 18 },
      { seat: 3, price: 18 },
      { seat: 4, price: 18 },
      { seat: 5, price: 18 },
      { seat: 6, price: 18 },
      { seat: 7, price: 18 },
      { seat: 8, price: 18 },
      { seat: 9, price: 18 },
      { seat: 10, price: 18 },
      { seat: 11, price: 18 },
      { seat: 12, price: 18 },
      { seat: 13, price: 18 },
      { seat: 14, price: 18 },
      { seat: 15, price: 18 },
      { seat: 16, price: 18 },
    ],
  },
  {
    row: "C",
    seats: [
      { seat: 1, price: 18 },
      { seat: 2, price: 18 },
      { seat: 3, price: 18 },
      { seat: 4, price: 18 },
      { seat: 5, price: 18 },
      { seat: 6, price: 18 },
      { seat: 7, price: 18 },
      { seat: 8, price: 18 },
      { seat: 9, price: 18 },
      { seat: 10, price: 18 },
      { seat: 11, price: 18 },
      { seat: 12, price: 18 },
      { seat: 13, price: 18 },
      { seat: 14, price: 18 },
      { seat: 15, price: 18 },
      { seat: 16, price: 18 },
    ],
  },
  {
    row: "D",
    seats: [
      { seat: 1, price: 15 },
      { seat: 2, price: 15 },
      { seat: 3, price: 15 },
      { seat: 4, price: 15 },
      { seat: 5, price: 15 },
      { seat: 6, price: 15 },
      { seat: 7, price: 15 },
      { seat: 8, price: 15 },
      { seat: 9, price: 15 },
      { seat: 10, price: 15 },
      { seat: 11, price: 15 },
      { seat: 12, price: 15 },
      { seat: 13, price: 15 },
      { seat: 14, price: 15 },
      { seat: 15, price: 15 },
      { seat: 16, price: 15 },
    ],
  },
  {
    row: "E",
    seats: [
      { seat: 1, price: 12 },
      { seat: 2, price: 12 },
      { seat: 3, price: 12 },
      { seat: 4, price: 12 },
      { seat: 5, price: 12 },
      { seat: 6, price: 12 },
      { seat: 7, price: 12 },
      { seat: 8, price: 12 },
      { seat: 9, price: 12 },
      { seat: 10, price: 12 },
      { seat: 11, price: 12 },
      { seat: 12, price: 12 },
    ],
  },
  {
    row: "F",
    seats: [
      { seat: 1, price: 12 },
      { seat: 2, price: 12 },
      { seat: 3, price: 12 },
      { seat: 4, price: 12 },
      { seat: 5, price: 12 },
      { seat: 6, price: 12 },
      { seat: 7, price: 12 },
      { seat: 8, price: 12 },
      { seat: 9, price: 12 },
      { seat: 10, price: 12 },
      { seat: 11, price: 12 },
      { seat: 12, price: 12 },
    ],
  },
  {
    row: "G",
    seats: [
      { seat: 1, price: 10 },
      { seat: 2, price: 10 },
      { seat: 3, price: 10 },
      { seat: 4, price: 10 },
      { seat: 5, price: 10 },
      { seat: 6, price: 10 },
      { seat: 7, price: 10 },
      { seat: 8, price: 10 },
      { seat: 9, price: 10 },
      { seat: 10, price: 10 },
      { seat: 11, price: 10 },
      { seat: 12, price: 10 },
    ],
  },
  {
    row: "H",
    seats: [
      { seat: 1, price: 10 },
      { seat: 2, price: 10 },
      { seat: 3, price: 10 },
      { seat: 4, price: 10 },
      { seat: 5, price: 10 },
      { seat: 6, price: 10 },
      { seat: 7, price: 10 },
      { seat: 8, price: 10 },
      { seat: 9, price: 10 },
      { seat: 10, price: 10 },
      { seat: 11, price: 10 },
      { seat: 12, price: 10 },
    ],
  },
];

const MainseatContinaer = document.getElementById("seatContinaer");
const seatContainer = document.createElement("div");
seatContainer.classList.add("seat-container");
seatContainer.style.marginTop = "50px";
seatContainer.style.margin = "auto";
seatContainer.style.width = "80%";
seatContainer.style.border = "2px solid black";
seatContainer.style.padding = "20px";
seatContainer.style.backgroundColor = "#f0f0f0";

// Create screen element
const screen = document.createElement("div");
screen.classList.add("screen");
screen.innerText = "SCREEN";
seatContainer.appendChild(screen);

// Create seats

LAYOUT.forEach(({ row, seats }) => {
  const rowDiv = document.createElement("div");
  rowDiv.classList.add("row");
  rowDiv.style.display = "flex";
  rowDiv.style.alignItems = "center";
  rowDiv.style.marginBottom = "10px";
  rowDiv.style.justifyContent = "center";
  const rowLabel = document.createElement("div");
  rowLabel.classList.add("row-label");
  rowLabel.style.width = "40px";
  rowLabel.style.fontWeight = "bold";
  rowLabel.style.display = "flex";
  rowLabel.style.alignItems = "center";
  rowLabel.style.justifyContent = "center";
  rowLabel.style.marginRight = "10px";
  rowLabel.innerText = row;
  rowDiv.appendChild(rowLabel);

  seats.forEach(({ seat, price }) => {
    const seatDiv = document.createElement("div");
    seatDiv.classList.add("seat");
    seatDiv.style.width = "30px";
    seatDiv.style.height = "30px";
    seatDiv.style.border = "1px solid black";
    seatDiv.style.margin = "5px";
    seatDiv.style.display = "flex";
    seatDiv.style.alignItems = "center";
    seatDiv.style.justifyContent = "center";
    seatDiv.style.cursor = "pointer";
    seatDiv.innerText = seat;

    seatDiv.addEventListener("click", () => {
      if (seatDiv.classList.contains("selected")) {
        seatDiv.classList.remove("selected");
        seatDiv.style.backgroundColor = "";
        seatDiv.removeAttribute("data-selected");
      } else {
        seatDiv.classList.add("selected");
        seatDiv.style.backgroundColor = "green";
        seatDiv.setAttribute("data-selected", price);
      }

      // Calculate total price from selected seats
      const selectedSeats = document.querySelectorAll(".seat.selected");
      const totalPrice = Array.from(selectedSeats).reduce((total, seat) => {
        return total + parseInt(seat.getAttribute("data-selected"));
      }, 0);

      console.log(
        `Selected seats: ${selectedSeats.length}, Total price: $${totalPrice}`
      );
    });

    rowDiv.appendChild(seatDiv);
  });

  seatContainer.appendChild(rowDiv);
});

MainseatContinaer.appendChild(seatContainer);
