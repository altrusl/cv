let links = document.querySelectorAll("#header nav span");
let articles = document.querySelectorAll("#main article");
let scrollTos = document.querySelectorAll("#main .scrollTo");
let linksArray = Array.prototype.slice.call(links);
let main = document.querySelector("#main");
// articles.forEach(article => {
//     // addCloseSign(article);    
// });


document.body.addEventListener("click", (event) => {
    if (!event.target.closest('#main') && !linksArray.includes(event.target)) {
        console.log("outside");
        closeArticle();
    }
});

scrollTos.forEach(scrollTo => {
    scrollTo.addEventListener("click", (event) => {
        // const el = document.querySelector(scrollTo.dataset.target);
        // scrollTo.closest(".article-content").scrollTop = el.offsetTop - 100;
        let h = document.querySelector(".projects-bar").offsetHeight;
        scrollToElm(
            scrollTo.closest(".article-content"),
            document.querySelector(scrollTo.dataset.target),
            0.8, 
            // 0);
            -20 - h);
    });
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


document.addEventListener('keydown', function (e) {
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


/////////////

function scrollToElm(container, elm, duration, shift) {
    var pos = getRelativePos(elm);
    scrollTo(container, pos.top, duration, shift); // duration in seconds
}

function getRelativePos(elm) {
    var pPos = elm.parentNode.getBoundingClientRect(), // parent pos
        cPos = elm.getBoundingClientRect(), // target pos
        pos = {};

    pos.top = cPos.top - pPos.top + elm.parentNode.scrollTop,
        pos.right = cPos.right - pPos.right,
        pos.bottom = cPos.bottom - pPos.bottom,
        pos.left = cPos.left - pPos.left;

    return pos;
}

function scrollTo(element, to, duration, shift, onDone) {
    // var start = element.scrollTop + shift,
    var start = element.scrollTop,
        change = to - start,
        startTime = performance.now(),
        val, now, elapsed, t;

    function animateScroll() {
        now = performance.now();
        elapsed = (now - startTime) / 1000;
        t = (elapsed / duration);

        element.scrollTop = start + (change + shift)* easeInOutQuad(t);

        if (t < 1)
            window.requestAnimationFrame(animateScroll);
        else
            onDone && onDone();
    };

    animateScroll();
}

function easeInOutQuad(t) {
    return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
};