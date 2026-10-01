/**
 * Mobile Page-to-Page Swipe Navigation
 * Enables horizontal swiping between main pages: About -> Projects -> CV
 */
(function () {
  if (typeof window === "undefined") return;

  function initMobileSwipe() {
    if (window.innerWidth >= 768) return;

    // Detect baseurl from current pathname if running in subfolder
    const pathname = window.location.pathname;
    let basePath = "";
    const match = pathname.match(/^(\/[^/]+)?\/(projects|cv)(\/|$)/i);
    if (match && match[1] && match[1] !== "") {
      basePath = match[1];
    } else {
      // Check nav links in DOM
      const sampleLink = document.querySelector('#navbarNav a[href*="/projects"]');
      if (sampleLink) {
        const href = sampleLink.getAttribute("href") || "";
        const pIdx = href.indexOf("/projects");
        if (pIdx > 0) {
          basePath = href.substring(0, pIdx);
        }
      }
    }

    const pages = [
      { name: "About", path: basePath + "/" },
      { name: "Projects", path: basePath + "/projects/" },
      { name: "CV", path: basePath + "/cv/" },
    ];

    // Determine current page index
    const cleanPath = pathname.replace(/\/+$/, "") || "/";
    let currentIndex = 0;
    if (cleanPath.endsWith("/cv")) {
      currentIndex = 2;
    } else if (cleanPath.endsWith("/projects")) {
      currentIndex = 1;
    } else {
      currentIndex = 0;
    }

    // Floating toast feedback element
    let toast = document.getElementById("page-swipe-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "page-swipe-toast";
      toast.className = "page-swipe-toast";
      document.body.appendChild(toast);
    }

    let toastTimer = null;
    function showToast(html) {
      if (!toast) return;
      toast.innerHTML = html;
      toast.classList.add("visible");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toast.classList.remove("visible");
      }, 1400);
    }

    function navigateToPage(targetIdx, direction) {
      const target = pages[targetIdx];
      if (!target) return;

      const arrow = direction === "left" ? '<i class="fa-solid fa-chevron-right ms-1"></i>' : '<i class="fa-solid fa-chevron-left me-1"></i>';
      showToast(direction === "left" ? `Navigating to ${target.name} ${arrow}` : `${arrow} Navigating to ${target.name}`);

      // Smooth subtle slide transition
      const mainEl = document.querySelector(".post, main, article, #content") || document.body;
      if (mainEl) {
        mainEl.style.transition = "opacity 0.18s ease-out, transform 0.18s ease-out";
        mainEl.style.opacity = "0.5";
        mainEl.style.transform = direction === "left" ? "translateX(-28px)" : "translateX(28px)";
      }

      setTimeout(() => {
        window.location.href = target.path;
      }, 160);
    }

    // Gesture tracking variables
    let touchStartX = 0;
    let touchStartY = 0;
    let touchLastX = 0;
    let touchLastY = 0;
    let touchStartTime = 0;
    let isTracking = false;
    let isVerticalScroll = false;
    let swipeTriggered = false;

    function onTouchStart(e) {
      if (window.innerWidth >= 768) return;
      if (!e.touches || e.touches.length !== 1) return;

      const target = e.target;
      if (target && typeof target.closest === "function" && target.closest("pre, code, table, input, textarea, select, .carousel")) {
        return;
      }

      const t = e.touches[0];
      touchStartX = t.clientX;
      touchStartY = t.clientY;
      touchLastX = touchStartX;
      touchLastY = touchStartY;
      touchStartTime = Date.now();
      isTracking = true;
      isVerticalScroll = false;
      swipeTriggered = false;
    }

    function onTouchMove(e) {
      if (!isTracking || swipeTriggered || window.innerWidth >= 768) return;
      if (!e.touches || e.touches.length !== 1) return;

      const t = e.touches[0];
      touchLastX = t.clientX;
      touchLastY = t.clientY;

      const deltaX = touchLastX - touchStartX;
      const deltaY = touchLastY - touchStartY;
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      // Lock as vertical scroll if user moves down/up first
      if (!isVerticalScroll && absY > 28 && absY > absX) {
        isVerticalScroll = true;
        return;
      }

      // Distinct horizontal page swipe
      if (!isVerticalScroll && !swipeTriggered && absX >= 60 && absX > absY * 1.5) {
        swipeTriggered = true;
        if (deltaX < 0) {
          // Swipe Left -> Next Page
          if (currentIndex < pages.length - 1) {
            navigateToPage(currentIndex + 1, "left");
          } else {
            showToast(`<i class="fa-solid fa-check me-1"></i> Already at last page: ${pages[currentIndex].name}`);
          }
        } else {
          // Swipe Right -> Prev Page
          if (currentIndex > 0) {
            navigateToPage(currentIndex - 1, "right");
          } else {
            showToast(`<i class="fa-solid fa-arrow-left me-1"></i> Already at first page: ${pages[0].name}`);
          }
        }
      }
    }

    function onTouchEnd() {
      if (!isTracking || swipeTriggered || window.innerWidth >= 768) {
        isTracking = false;
        return;
      }
      isTracking = false;

      const deltaX = touchLastX - touchStartX;
      const deltaY = touchLastY - touchStartY;
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);
      const duration = Date.now() - touchStartTime;

      // Quick flick detection (absX >= 45px in under 400ms)
      if (!isVerticalScroll && duration < 400 && absX >= 45 && absX > absY * 1.4) {
        swipeTriggered = true;
        if (deltaX < 0) {
          if (currentIndex < pages.length - 1) {
            navigateToPage(currentIndex + 1, "left");
          } else {
            showToast(`<i class="fa-solid fa-check me-1"></i> Already at last page: ${pages[currentIndex].name}`);
          }
        } else {
          if (currentIndex > 0) {
            navigateToPage(currentIndex - 1, "right");
          } else {
            showToast(`<i class="fa-solid fa-arrow-left me-1"></i> Already at first page: ${pages[0].name}`);
          }
        }
      }
    }

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("touchcancel", onTouchEnd, { passive: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMobileSwipe);
  } else {
    initMobileSwipe();
  }
})();
