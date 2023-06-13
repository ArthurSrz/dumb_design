window.addEventListener('load', function() {
    var image = document.getElementById('image90s');
    var width = 10;
    var height = 10;
    
    function enlargeImage() {
        width += 10;
        height += 10;
        image.style.width = width + '%';
        image.style.height = height + '%';
        
        if (width >= 100 && height >= 100) {
            clearInterval(enlargeInterval);
        }
    }
    
    var enlargeInterval = setInterval(enlargeImage, 1000); // Adjust the interval as desired
});
