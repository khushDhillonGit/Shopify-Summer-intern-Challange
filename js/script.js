/*Api_key TFbqKd6Jmte8d4lTGGLcSvw7cqY5huDU5gAXi2qT */

//fetch data from Nasa servers
fetch(
  "https://api.nasa.gov/planetary/apod?count=25&api_key=TFbqKd6Jmte8d4lTGGLcSvw7cqY5huDU5gAXi2qT"
)
  .then((data) => data.json())
  .then((data) => impliment(data));

//section of body to contain cards
const section = document.querySelector(".container");
//count variable to print only 16
let count = 0;

//function to print cards
const impliment = (data) => {
  //looping over data
  for (const { date, explanation, url, title } of data) {
    //to print only valid information
    if (
      count < 16 &&
      date &&
      explanation &&
      title &&
      (url.endsWith("jpg") || url.endsWith("png"))
    ) {
      //increase count
      count++;

      //to divide sentences into array
      let sentences = explanation.split(".");
      //print only two lines
      let str = `${sentences[0]}.${sentences[1]}.`;

      //html card that goes into section
      const html = `
    <div class="card">
    <div class="image">
      <img class="card-image" src="${url}" alt="Picture of ${title}">
    </div>
    <div class="text-area">
      <h3 class="title">${title}</h3>
      <div class="bottom display-none">
      <h6 class="date-taken"> Date: ${date}</h6>
              <p class="explanation">${str}</p>
      </div>
      <button class="show white-text">Read More</button>
      <button class="btn white-text">👍Like</button>
    </div>
    
  </div>
`;
      //card inserted
      section.insertAdjacentHTML("beforeend", html);
    }
  }

  //to set like button
  const buttons = document.getElementsByClassName("btn");
  for (const item of buttons) {
    item.addEventListener("click", function (e) {
      e.currentTarget.classList.toggle("toggle");
    });
  }

  //for read more button
  const show = document.querySelectorAll(".show");
  for (const item of show) {
    item.addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("toggle");
      e.currentTarget.previousElementSibling.classList.toggle("display-none");
    });
  }
};
