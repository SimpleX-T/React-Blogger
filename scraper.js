// const axios = require("axios");
// const cheerio = require("cheerio");

// const url = "https://react.dev/blog";

// axios.get(url).then((response) => {
// 	const $ = cheerio.load(response.data);

// 	const postContainer = $(".flex-col.gap-5").find(".block");
// 	const postEl = postContainer.find("justify-between");
// 	const postTitleDiv = postEl.find(".flex-row");
// 	const postTitle = postTitleDiv.find(".flex-1");
// });

// console.log(postContainer);
// console.log(postTitle);

// postContainer.each((i, post) => {
// 	const postTitle = postTitleDiv.find(".flex-1").text();

// 	// console.log("Post Title: ", postTitle);
// });
//     .each((i, el) => {
// 		const quoteText = $(el).find(".text").text().trim();
// 		const author = $(el).find(".author").text().trim();

// 		// console.log("Quote: ", quoteText);
// 		// console.log("Author: ", author);
// 		// console.log("_---_");
// 	});
// })
// .catch((err) => {
// 	console.error("Error: ", err.message);
// });
// import axios from "axios";
// import { Cheerio } from "cheerio";

// const url = "https://react.dev/blog";

// const postArr = [];

// (async () => {
// 	try {
// 		const response = await axios.get(url);
// 		const $ = Cheerio.load(response.data);

// 		const postContainers = $(".flex-col.gap-5 .block");

// 		postContainers.each((i, postContainer) => {
// 			const postTitle = $(postContainer)
// 				.find(".flex-row .flex-1")
// 				.text()
// 				.trim();

// 			const postDate = $(postContainer)
// 				.find(".text-tertiary")
// 				.text()
// 				.trim();
// 			const postDescription = $(postContainer)
// 				.find(".text-secondary")
// 				.text()
// 				.trim();

// 			postArr.push({
// 				id: i + 1,
// 				date: postDate,
// 				title: postTitle,
// 				description: postDescription,
// 			});
// 		});

// 		console.log(postArr); // You can use or log postArr here or perform further actions with the data
// 	} catch (err) {
// 		console.error("Error: ", err.message);
// 	}
// })();

// const url = "https://react.dev/blog";

// const postArr = [];

// async () => {
// 	fetch(url)
// 		.then((response) => {
// 			if (!response.ok) {
// 				throw new Error("Network response was not ok");
// 			}
// 			return response.text();
// 		})
// 		.then((html) => {
// 			const parser = new DOMParser();
// 			const doc = parser.parseFromString(html, "text/html");

// 			const postContainers = doc.querySelectorAll(
// 				".flex-col.gap-5 .block"
// 			);

// 			postContainers.forEach((postContainer, i) => {
// 				const postTitle = postContainer
// 					.querySelector(".flex-row .flex-1")
// 					.textContent.trim();
// 				const postDate = postContainer
// 					.querySelector(".text-tertiary")
// 					.textContent.trim();
// 				const postDescription = postContainer
// 					.querySelector(".text-secondary")
// 					.textContent.trim();

// 				postArr.push({
// 					id: i + 1,
// 					date: postDate,
// 					title: postTitle,
// 					description: postDescription,
// 				});
// 			});

// 			console.log(postArr); // You can use or log postArr here or perform further actions with the data
// 		})
// 		.catch((error) => {
// 			console.error(
// 				"There was a problem with the fetch operation:",
// 				error
// 			);
// 		});

// 	const div = document.getElementById("root");
// 	console.log(div);

// 	console.log(postArr);

// 	postArr.map((post) => {
// 		console.log(post);
// 		const html = `<div class="post-container">
//                         <h1 class="title">${post.title}</h1>
//                         <span>${post.date}</span>
//                         <p>${post.description}</p>
//                     </div>`;

// 		div.insertAdjacentHTML("beforeend", html);
// 	});
// };

const url = "https://react.dev/blog";
const postArr = [];

async function fetchDataAndDisplay() {
	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		const html = await response.text();

		const parser = new DOMParser();
		const doc = parser.parseFromString(html, "text/html");

		const postContainers = doc.querySelectorAll(".flex-col.gap-5 .block");

		postContainers.forEach((postContainer, i) => {
			const postTitle = postContainer
				.querySelector(".flex-row .flex-1")
				.textContent.trim();
			const postDate = postContainer
				.querySelector(".text-tertiary")
				.textContent.trim();
			const postDescription = postContainer
				.querySelector(".text-secondary")
				.textContent.trim();

			postArr.push({
				id: i + 1,
				date: postDate,
				title: postTitle,
				description: postDescription,
			});
		});

		const div = document.getElementById("root");

		postArr.forEach((post) => {
			const html = `<div class="post-container">
                            <h1 class="title">${post.title}</h1>
                            <span class="date">${post.date}</span>
                            <p class="desc">${post.description}</p>
                        </div>`;

			div.insertAdjacentHTML("beforeend", html);
		});
	} catch (error) {
		console.error("There was a problem with the fetch operation:", error);
	}
}

// Call the async function
fetchDataAndDisplay();

document.querySelector(".toggle-switch").addEventListener("click", () => {
	document.body.classList.toggle("dark-mode");
});

// const searchInput = document.querySelector("form input");

// searchInput.addEventListener("change", (e) => {
//   let searchArr = postArr.map((post) => {
//     console.log()
// 		post.title
// 			.toLowerCase()
// 			.includes(searchInput.ariaValueMax.toLowerCase());
// 	});
// 	console.log(searchArr);
// });
