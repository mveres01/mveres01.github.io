---
layout: about
title: About
permalink: /
subtitle: Machine Learning Engineer & Researcher &bull; University of Guelph

profile:
  align: right
  image: prof_pic.jpg
  image_circular: true # crops the image to make it circular
  more_info: >
    <p class="font-weight-bold mb-0">College of Engineering</p>
    <p class="text-muted mb-0">University of Guelph</p>

selected_papers: false # removed publications from about page
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true
  scrollable: false
  limit: 5

latest_posts:
  enabled: false
---

<link rel="stylesheet" href="{{ '/assets/css/portfolio_custom.css' | relative_url | bust_file_cache }}">

I’m a Machine Learning Engineer and Researcher focused on computer vision, robotics, and industrial automation. My work blends academic R&D and spans collaborations with industry partners, from high-throughput factory inspection systems to autonomous agricultural scouting.

### What I Focus On

- **Computer Vision & Deep Learning:** Object detection, semantic segmentation, and domain generalization under real-world shifts (lighting, weather, sensor noise).
- **Simulation & Robotics:** Grasp pose estimation, MuJoCo simulation.
- **End-to-End Systems:** Full machine-learning pipelines from data collection to model training, validation, and deployment.
- **Open Source:** Creator of a popular PyTorch deep reinforcement learning framework for vehicle routing (500+ GitHub Stars).

### Background & Opportunities

I speak English (native) and Korean (TOPIK Level 5). I'm open to roles in Canada or South Korea (as well as global opportunities that bridge the two).

<div id="page-swipe-toast" class="page-swipe-toast"></div>

<script>
(function () {
  if (typeof window === "undefined") return;

  function initMobileSwipe() {
    if (window.innerWidth >= 768) return;

    const pathname = window.location.pathname;
    let basePath = "";
    const match = pathname.match(/^(\/[^/]+)?\/(projects|cv)(\/|$)/i);
    if (match && match[1] && match[1] !== "") {
      basePath = match[1];
    } else {
      const sampleLink = document.querySelector('#navbarNav a[href*="/projects"]');
      if (sampleLink) {
        const href = sampleLink.getAttribute("href") || "";
        const pIdx = href.indexOf("/projects");
        if (pIdx > 0) basePath = href.substring(0, pIdx);
      }
    }

    const pages = [
      { name: "About", path: basePath + "/" },
      { name: "Projects", path: basePath + "/projects/" },
      { name: "CV", path: basePath + "/cv/" },
    ];

    const cleanPath = pathname.replace(/\/+$/, "") || "/";
    let currentIndex = 0;
    if (cleanPath.endsWith("/cv")) {
      currentIndex = 2;
    } else if (cleanPath.endsWith("/projects")) {
      currentIndex = 1;
    } else {
      currentIndex = 0;
    }

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

      const arrow =
        direction === "left"
          ? '<i class="fa-solid fa-chevron-right ms-1"></i>'
          : '<i class="fa-solid fa-chevron-left me-1"></i>';
      showToast(
        direction === "left"
          ? `Navigating to ${target.name} ${arrow}`
          : `${arrow} Navigating to ${target.name}`
      );

      const mainEl = document.querySelector(".post, main, article, #content") || document.body;
      if (mainEl) {
        mainEl.style.transition = "opacity 0.18s ease-out, transform 0.18s ease-out";
        mainEl.style.opacity = "0.5";
        mainEl.style.transform = direction === "left" ? "translateX(-28px)" : "translateX(28px)";
      }

      setTimeout(() => {
        window.location.href = target.path;
      }, 150);
    }

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
      if (
        target &&
        typeof target.closest === "function" &&
        target.closest("pre, code, table, input, textarea, select, .carousel")
      ) {
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

      if (!isVerticalScroll && absY > 28 && absY > absX) {
        isVerticalScroll = true;
        return;
      }

      if (!isVerticalScroll && !swipeTriggered && absX >= 55 && absX > absY * 1.35) {
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

      if (!isVerticalScroll && duration < 400 && absX >= 40 && absX > absY * 1.3) {
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
</script>
