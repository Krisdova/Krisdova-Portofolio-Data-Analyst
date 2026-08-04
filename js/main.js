// Mobile menu toggle + navbar shadow on scroll (Vanilla JS)
(function () {
  var btn = document.getElementById("menu-btn");
  var menu = document.getElementById("mobile-menu");
  var open = document.getElementById("icon-open");
  var close = document.getElementById("icon-close");

  if (btn && menu) {
    btn.addEventListener("click", function () {
      var isOpen = !menu.classList.contains("hidden");
      menu.classList.toggle("hidden", isOpen);
      if (open) open.classList.toggle("hidden", !isOpen);
      if (close) close.classList.toggle("hidden", isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.add("hidden");
        if (open) open.classList.remove("hidden");
        if (close) close.classList.add("hidden");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  var navbar = document.getElementById("navbar");
  if (navbar) {
    var onScroll = function () {
      navbar.classList.toggle("shadow-soft", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();
