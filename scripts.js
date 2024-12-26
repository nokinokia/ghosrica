// Salin teks ke clipboard
document.getElementById('copy-button').addEventListener('click', function() {
    var copyText = document.getElementById('copy-text').textContent;
    var textarea = document.createElement('textarea');
    textarea.value = copyText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Teks telah disalin: ' + copyText);
  });
  
  // Tambahkan animasi fade-in pada elemen dengan ID copy-text
  window.addEventListener('scroll', function() {
    var fadeTarget = document.getElementById('copy-text');
    var distanceFromTop = fadeTarget.getBoundingClientRect().top;
    if (distanceFromTop < window.innerHeight) {
      fadeTarget.classList.add('fade-in');
    }
  });
  