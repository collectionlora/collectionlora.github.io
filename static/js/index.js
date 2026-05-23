document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.navbar-burger');
  var menu = document.getElementById('flowNavMenu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  }

  document.querySelectorAll('.flow-navbar .navbar-menu .navbar-item').forEach(function (el) {
    el.addEventListener('click', function () {
      if (burger) burger.classList.remove('is-active');
      if (menu) menu.classList.remove('is-active');
    });
  });

  var copyBtn = document.getElementById('copy-bibtex');
  var bibtexEl = document.getElementById('bibtex-code');
  var toast = document.getElementById('copy-bibtex-toast');
  if (copyBtn && bibtexEl) {
    copyBtn.addEventListener('click', function () {
      var text = bibtexEl.innerText;
      function ok() {
        if (toast) {
          toast.textContent = 'Copied to clipboard.';
          setTimeout(function () { toast.textContent = ''; }, 2500);
        }
      }
      function fail() {
        if (toast) toast.textContent = 'Copy failed—select the BibTeX text manually.';
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(ok).catch(fail);
      } else {
        fail();
      }
    });
  }
});
