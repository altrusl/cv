let links = document.querySelectorAll("#header nav a");
let articles = document.querySelectorAll("#main article");
let linksArray = Array.prototype.slice.call(links);
let main = document.querySelector("#main");
// articles.forEach(article => {
//     // addCloseSign(article);    
// });


document.body.addEventListener("click", (event) => {
    if(!event.target.closest('#main') && !linksArray.includes(event.target)) {
        console.log("outside");
        closeArticle();
    }     
});

links.forEach(link => {
    link.addEventListener("click", (event) => {
        console.log(event.target.getAttribute("href"));
        main.classList.remove("empty");
        articles.forEach(article => {
            if (article == document.querySelector(event.target.getAttribute("href"))) {                
                article.style.display = "block";
                setTimeout(() => {
                    article.classList.add("visible");
                }, 100);
            } else {
                article.classList.remove("visible");
                setTimeout(() => {
                    article.style.display = "none";
                }, 300);
            }
        });
        
    });
});

document.querySelector(".close-sign").addEventListener("click", (e) => {
    closeArticle();      
});

function closeArticle() {
    main.classList.add("empty");
    articles.forEach(article => {
        if (article.classList.contains("visible")) {
            article.classList.remove("visible");
            setTimeout(() => {
                article.style.display = "none";
            }, 300);
        }
    });  
}


document.addEventListener('keydown', function(e) {
    let keyCode = e.keyCode;
    if (keyCode === 27) {
        closeArticle();
    }
});

// function addCloseSign(article) {
//     let cs = document.createElement("div");
//     cs.classList.add("close-sign");
//     cs.innerHTML = "&#x274c;";
//     article.appendChild(cs);
//     cs.addEventListener("click", function(e) {
//         article.classList.remove("visible");
//         setTimeout(() => {
//             article.style.display = "none";
//         }, 300);
//     });
// }