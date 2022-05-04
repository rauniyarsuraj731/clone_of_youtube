// let API_KEY = "AIzaSyC4i0k81h9pQW_5lWVY11WoHR3reEzJLgE";
let API_KEY = "AIzaSyCY1O8w4FJLw01likVAseJUFgFWK1aemjo";
var searchResultDiv = document.getElementById("search_results_container");
localStorage.setItem("clicked", false);


window.addEventListener("load", async function () {
  try {
    let res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos/?part=snippet&chart=mostPopular&regionCode=IN&maxResults=32&key=${API_KEY}`
    );
    let data = await res.json();
    let videosArray = data.items;
    displayVideos(videosArray);
  } catch (error) {
    console.log("error", error);
  }
});
const searchVideos = async () => {
  localStorage.setItem("clicked", true);

  try {
    let inp = document.getElementById("search_results").value;
    let res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${inp}&type=video&maxResults=25`
    );
    let data = await res.json();
    let videosArray = data.items;
    displayVideos(videosArray);
  } catch (error) {
    console.log("error,", error);
  }
};

const displayVideos = (data) => {
  console.log("Dataaa", data);
  searchResultDiv.innerHTML = "";
  data.forEach((video) => {
    const {
      id: { videoId },
    } = video;
    // const { snippet: { thumbnails:{medium} } } = video
    var images = video.snippet.thumbnails.medium.url;
    var title = video.snippet.title;
    var des = video.snippet.channelTitle;
    let card = document.createElement("div");
    card.setAttribute("id","card")
  

    var image = document.createElement("img");
    image.addEventListener("click", function () {
 
      localStorage.setItem("mainVideo", JSON.stringify(video));
      localStorage.setItem("relatedVedio", JSON.stringify(data));
      window.location.href="searchResult.html"
    });
    image.src = images;

    var para = document.createElement("p");
    para.textContent = title;
    para.style.color = "white";
    para.style.fontSize = "14px";

    var para2 = document.createElement("p");
    para2.textContent = des;
    para2.style.color = "gray";
    para2.style.fontSize = "13px";
    var br = document.createElement("br");
    card.append(image, para, para2);
    searchResultDiv.append(card);
  });
};
