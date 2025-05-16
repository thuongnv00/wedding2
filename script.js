// Optional: Click to expand image
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = 0;
    modal.style.left = 0;
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.innerHTML = `<img src="${img.src}" style="max-width:90%; max-height:90%;">`;

    modal.addEventListener('click', () => document.body.removeChild(modal));
    document.body.appendChild(modal);
  });
});

//Scrolldown
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const boxTop = sec.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      sec.classList.add("visible");
    }
  });
});

// galleries
// document.querySelectorAll('.gallery-wrap').forEach(container => {
//   const gallery = container.querySelector('.gallery');
//   container.querySelector('.prev').addEventListener('click', () => {
//     gallery.scrollBy({ left: -220, behavior: 'smooth' });
//   });
//   container.querySelector('.next').addEventListener('click', () => {
//     gallery.scrollBy({ left: 220, behavior: 'smooth' });
//   });
// });

document.querySelectorAll('.gallery-wrap').forEach(galleryWrap => {
  const gallery = galleryWrap.querySelector('.gallery');
  const images = gallery.querySelectorAll('img');
  const imagesPerView = 3;
  const imageWidth = images[0].clientWidth + 20; // 200 + margin
  let currentGroup = 0;
  const totalGroups = Math.ceil(images.length / imagesPerView);

  function updateCarousel() {
    const offset = currentGroup * imageWidth * imagesPerView;
    gallery.style.transform = `translateX(-${offset}px)`;
  }

  galleryWrap.querySelector('.next').addEventListener('click', () => {
    if (currentGroup < totalGroups - 1) {
      currentGroup++;
      updateCarousel();
    }
  });

  galleryWrap.querySelector('.prev').addEventListener('click', () => {
    if (currentGroup > 0) {
      currentGroup--;
      updateCarousel();
    }
  });

  window.addEventListener('resize', () => {
    updateCarousel();
  });
});

