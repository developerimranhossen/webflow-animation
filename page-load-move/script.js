window.addEventListener('load', function() {
    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.style.opacity = '0'; // Start fade out

    loadingOverlay.addEventListener('transitionend', function() {
      document.body.removeChild(loadingOverlay);
    });
  });