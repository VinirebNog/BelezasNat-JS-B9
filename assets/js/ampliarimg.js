const images = document.querySelectorAll('.zoomable');


images.forEach(image => {
  image.addEventListener('click', function() {
   
    if (this.style.transform === 'scale(2)') {
      this.style.transform = 'scale(1)'; 
    } else {
      this.style.transform = 'scale(2)'; 
    }
  });
});