const head1 = document.querySelector(".head1"),
  banner = document.querySelector(".banner"),
  button = document.querySelector("button");

const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;
  if (scrollPosition > 90) {
    banner.style.backgroundSize = "110%";
    head1.style.opacity = 0;
    head1.style.translate = "0 -50px";
    head1.style.scale = "0.9";
    button.style.opacity = 0;
    button.style.translate = "0 -50px";
    button.style.scale = "0.8";
  } else {
    banner.style.backgroundSize = "100%";
    head1.style.opacity = 1;
    head1.style.translate = 0;
    head1.style.scale = 1;
    button.style.opacity = 1;
    button.style.translate = 0;
    button.style.scale = 1;
  }
};

document.addEventListener("scroll", onScroll);
