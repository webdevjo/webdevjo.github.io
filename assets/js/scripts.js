const scroll_to_top_btn = document.getElementById('scroll-to-top-btn');

const scroll_function = () => {
    let current_scroll_value = window.scrollY;

    if (current_scroll_value > 0) {
        scroll_to_top_btn.className = "scroll-to-top-btn show-btn";
    } else {
        scroll_to_top_btn.className = "scroll-to-top-btn hide-btn";
    }
};

window.addEventListener("scroll", scroll_function);

const scrollToTop = () => {
    const pixels = document.documentElement.scrollTop || document.body.scrollTop;

    if (pixels > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, pixels - pixels / 10);
    }
};

scroll_to_top_btn.onclick = function (e) {
    e.preventDefault();
    scrollToTop();
}