let title = document.querySelector('.title1');
let overview = document.querySelector('.overview1');
let rating = document.querySelector('.average_vote1');
let release_date = document.querySelector('.release_date1');

let title1 = document.querySelector('.title2');
let overview1 = document.querySelector('.overview2');
let rating1 = document.querySelector('.average_vote2');
let release_date1 = document.querySelector('.release_date2');

let title2 = document.querySelector('.title3');
let overview2 = document.querySelector('.overview3');
let rating2 = document.querySelector('.average_vote3');
let release_date2 = document.querySelector('.release_date3');


let slider1 = document.querySelector('.slider1')
let slider2 = document.querySelector('.slider2')
let slider3 = document.querySelector('.slider3')
const moviesContainer = document.querySelector(".movies");
let baseImgUrl = 'https://image.tmdb.org/t/p/original'

const movies = () => {
	fetch("https://api.themoviedb.org/3/movie/popular?api_key=3353494538b7b20f0794eeed963d293f&language=en-US&page=1")

		.then(res => res.json())
		.then(data => {
			const movies = data.results
			console.log(movies)

			// document.querySelector('#overview').innerHTML = data.results[0].overview
			slider1.style.background = `linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0)), url('${baseImgUrl + data.results[0].backdrop_path}')`
			slider1.style.backgroundRepeat = "no-repeat";
			slider1.style.backgroundPosition = "center center";
			slider1.style.backgroundSize = "cover";
			title.textContent = data.results[0].original_title
			overview.textContent = data.results[0].overview
			release_date.textContent = `Release Date: ${data.results[0].release_date}`
			rating.textContent = `Rating: ${data.results[0].vote_average}/10`

			slider2.style.background = `linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0)), url('${baseImgUrl + data.results[1].backdrop_path}')`
			slider2.style.backgroundRepeat = "no-repeat";
			slider2.style.backgroundPosition = "center center";
			slider2.style.backgroundSize = "cover";
			title1.textContent = data.results[1].original_title
			overview1.textContent = data.results[1].overview
			release_date1.textContent = `Release Date: ${data.results[1].release_date}`
			rating1.textContent = `Rating: ${data.results[1].vote_average}/10`

			slider3.style.background = `linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0)), url('${baseImgUrl + data.results[2].backdrop_path}')`
			slider3.style.backgroundRepeat = "no-repeat";
			slider3.style.backgroundPosition = "center center";
			slider3.style.backgroundSize = "cover";
			title2.textContent = data.results[2].original_title
			overview2.textContent = data.results[2].overview
			release_date2.textContent = `Release Date: ${data.results[2].release_date}`
			rating2.textContent = `Rating: ${data.results[2].vote_average}/10`

			moviesContainer.innerHTML = movies.map(movie => `
			<div class="swiper-slide">
			  <img src='${baseImgUrl + movie.backdrop_path}' class='w-20 rounded-md'/>
			  <p>${movie.title}</p>
			</div>
		  `).join("");
		});
}

movies()

