function toggleSearchBar() {
    var searchBar = document.getElementById("search-bar");
    searchBar.style.display = (searchBar.style.display === "block") ? "none" : "block";
  }
  
  function search() {
    var searchTerm = document.getElementById("search-input").value;
    // Xử lý tìm kiếm theo sản phẩm cần tìm
    console.log("Tìm kiếm sản phẩm: " + searchTerm);
  }

  // tắt tìm kiếm
  function closeSearch() {
    var searchBar = document.getElementById("search-bar");
    searchBar.style.display = "none";
  }
  

  
  function scrollToBottom() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  }
  
  var carouselImages = document.querySelectorAll('.carousel-image');
  var dots = document.querySelectorAll('.dot');
  var currentImageIndex = 0;
  
  function showImage(index) {
    carouselImages[currentImageIndex].style.display = 'none';
    dots[currentImageIndex].classList.remove('active');
  
    currentImageIndex = index;
  
    carouselImages[currentImageIndex].style.display = 'block';
    dots[currentImageIndex].classList.add('active');
  }
  
  function nextImage() {
    var newIndex = (currentImageIndex + 1) % carouselImages.length;
    showImage(newIndex);
  }
  
  function previousImage() {
    var newIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
    showImage(newIndex);
  }
  
  dots.forEach(function(dot, index) {
    dot.addEventListener('click', function() {
      showImage(index);
    });
  });
  
  // Tự động chuyển ảnh sau một khoảng thời gian
  setInterval(nextImage, 5000); // Điều chỉnh thời gian chuyển ảnh (ms)
  
  function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  }
  
  