MainVideo = JSON.parse(localStorage.getItem("mainVideo"));
recommendVideo = JSON.parse(localStorage.getItem("relatedVedio"));
clicked = (localStorage.getItem("clicked"));
// console.log(recommendVideo)
let playVideos=document.getElementsByClassName("containerDiv")[0]

  let iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${MainVideo.id}`;
 console.log(clicked,"utubehi")
    if(clicked=="true"){
      iframe.src = `https://www.youtube.com/embed/${MainVideo.id.videoId}`;
      localStorage.setItem("clicked", false);

    }else{
      iframe.src = `https://www.youtube.com/embed/${MainVideo.id}`;
    }

    iframe.width = "560px";
    iframe.height = "515px";
    iframe.allowfullscreen = "true";
    iframe.style.border = "none";
    iframe.setAttribute("allowfullscreen", true);

    playVideos.append(iframe)
    let tag=document.getElementsByClassName("tag")[0]
    let h3=document.createElement("h3")
    h3.textContent=MainVideo.snippet.title
    let hr=document.createElement("hr")
    tag.append(h3,hr)


let video_info=document.getElementsByClassName("video_info")[0]
let parentbar=document.getElementsByClassName("right-side-bar")[0]
    recommendVideo.map((ite)=>{

        let images = ite.snippet.thumbnails.medium.url;
        let title = ite.snippet.title;
        let des = ite.snippet.channelTitle;
        let image = document.createElement("img");
        image.src=images

        
        let card=document.createElement("div")
        card.setAttribute("class","video_info")
        let leftdiv=document.createElement("div")
        leftdiv.setAttribute("class","side-video-list")

        let para=document.createElement("p")
        para.textContent=des
        para.style.color="gray"

         let para2=document.createElement("p")
        para2.textContent=title
         card.append(para2,para)
         leftdiv.append(image,card)

         parentbar.append(leftdiv)

    })