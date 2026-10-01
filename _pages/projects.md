---
layout: page
title: Projects
permalink: /projects/
description: Applied machine learning and robotics research spanning agriculture, industrial metrology, and robotic manipulation.
nav: true
nav_order: 1
display_categories: [Robotics and Deep Learning, Industrial Inspection, Agri-Food & Robotics]
---

<link rel="stylesheet" href="{{ '/assets/css/portfolio_custom.css' | relative_url | bust_file_cache }}">

<div class="projects">
{% for category in page.display_categories %}
  <div class="project-category-section">
    <div class="project-category-header">
      <div class="project-category-badge"><i class="fa-solid fa-layer-group me-1"></i> Research Focus</div>
      <a id="{{ category | slugify }}" href=".#{{ category | slugify }}" class="text-decoration-none">
        <h2 class="project-category-title">{{ category }}</h2>
      </a>
      <div class="project-category-divider"></div>
    </div>

    {% assign categorized_projects = site.projects | where: "category", category %}
    {% assign sorted_projects = categorized_projects | sort: "date" | reverse %}
    <div class="project-cards-grid">
      {% for project in sorted_projects %}
        <div class="project-showcase-card">
          {% if project.img %}
          <div class="project-card-image-box">
            <a href="{{ project.url | relative_url }}">
              <img src="{{ project.img | relative_url }}" alt="{{ project.title }}" class="project-card-img" loading="lazy" />
            </a>
          </div>
          {% endif %}
          <div class="project-card-info">
            <h3 class="project-card-title">
              <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
            </h3>
            <p class="project-card-description">{{ project.description }}</p>
            <div class="project-card-actions">
              {% if project.doi %}
                <a href="{{ project.doi }}" target="_blank" class="p-btn" role="button">DOI</a>
              {% endif %}
              {% if project.html %}
                <a href="{{ project.html }}" target="_blank" class="p-btn" role="button">HTML</a>
              {% endif %}
              {% if project.pdf %}
                <a href="{{ project.pdf }}" target="_blank" class="p-btn" role="button">PDF</a>
              {% endif %}
              {% if project.arxiv %}
                <a href="{{ project.arxiv }}" target="_blank" class="p-btn" role="button">arXiv</a>
              {% endif %}
              {% if project.code %}
                <a href="{{ project.code }}" target="_blank" class="p-btn" role="button">Code</a>
              {% endif %}
              {% if project.video %}
                <a href="{{ project.video }}" target="_blank" class="p-btn" role="button">Video</a>
              {% endif %}
              <a href="{{ project.url | relative_url }}" class="p-btn p-btn-more" role="button">Details &raquo;</a>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>

  </div>
{% endfor %}

  <div class="project-category-section">
    <div class="project-category-header">
      <div class="project-category-badge"><i class="fa-solid fa-code-branch me-1"></i> Open-Source Software</div>
      <a id="repositories" href=".#repositories" class="text-decoration-none">
        <h2 class="project-category-title">Open-Source Code &amp; Repositories</h2>
      </a>
      <div class="project-category-divider"></div>
    </div>
    <div class="repo-cards-grid">
      <div class="repo-card">
        <div>
          <div class="d-flex align-items-center mb-2">
            <i class="fa-brands fa-github fs-5 me-2 text-primary"></i>
            <h3 class="repo-card-title">
              <a href="https://github.com/mveres01/pytorch-drl4vrp" target="_blank">pytorch-drl4vrp</a>
            </h3>
          </div>
          <p class="repo-card-desc">PyTorch implementation of deep reinforcement learning for the Traveling Salesperson (TSP) and Vehicle Routing Problem (VRP).</p>
        </div>
        <div class="repo-card-footer">
          <span class="badge bg-light text-dark border"><i class="fa-solid fa-code me-1 text-warning"></i> Python &bull; 500+ Stars</span>
          <a href="https://github.com/mveres01/pytorch-drl4vrp" target="_blank" class="p-btn">GitHub</a>
        </div>
      </div>
      <div class="repo-card">
        <div>
          <div class="d-flex align-items-center mb-2">
            <i class="fa-brands fa-github fs-5 me-2 text-primary"></i>
            <h3 class="repo-card-title">
              <a href="https://github.com/mveres01/multi-contact-grasping" target="_blank">multi-contact-grasping</a>
            </h3>
          </div>
          <p class="repo-card-desc">Integrated simulation framework and dataset combining vision and multi-fingered grasping for deep learning.</p>
        </div>
        <div class="repo-card-footer">
          <span class="badge bg-light text-dark border"><i class="fa-solid fa-code me-1 text-primary"></i> Lua / Python</span>
          <a href="https://github.com/mveres01/multi-contact-grasping" target="_blank" class="p-btn">GitHub</a>
        </div>
      </div>
      <div class="repo-card">
        <div>
          <div class="d-flex align-items-center mb-2">
            <i class="fa-brands fa-github fs-5 me-2 text-primary"></i>
            <h3 class="repo-card-title">
              <a href="https://github.com/mveres01/grasping" target="_blank">grasping</a>
            </h3>
          </div>
          <p class="repo-card-desc">Simulation environment and modeling tools for multi-contact robot grasping and affordance analysis.</p>
        </div>
        <div class="repo-card-footer">
          <span class="badge bg-light text-dark border"><i class="fa-solid fa-code me-1 text-primary"></i> Simulation</span>
          <a href="https://github.com/mveres01/grasping" target="_blank" class="p-btn">GitHub</a>
        </div>
      </div>
    </div>
  </div>
</div>

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
