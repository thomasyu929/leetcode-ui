let imgList = [...document.querySelectorAll('img')];
let len = imgList.length;

const imgLazyLoad = (function() {
  let count = 0;

  return function() {
    let loaded = [];
    
    imgList.forEach((img, i) => {
      let rect = img.getBoundingClientRect();

      if (rect.top < window.innerHeight) {
        // replace src with dataset: data-src 
        img.src = img.dataset.src;
        loaded.push(i);
        count++;

        if (count === len) {
          document.removeEventListener('scroll', imgLazyLoad);
        }
      }
    })

    imgList = imgList.filter((img, i) => !loaded.includes(i))
  }
})();

document.addEventListener('scroll', imgLazyLoad);

// use intersection observer
const imgLazyLoad = function() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target);
      }
    })
  })

  imgList.forEach(img => observer.observe(img));
}