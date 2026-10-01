---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 2
description: Machine Learning Research Engineer &bull; Curriculum Vitae
toc:
  sidebar: left
---

<link rel="stylesheet" href="{{ '/assets/css/portfolio_custom.css' | relative_url | bust_file_cache }}">

<div class="cv-header mb-4 pb-2 border-bottom">
  <div class="d-flex flex-wrap justify-content-end align-items-center">
    <div class="cv-contact-links">
      <a href="https://www.linkedin.com/in/matthew-veres" target="_blank" class="me-3 text-decoration-none"><i class="fa-brands fa-linkedin me-1"></i> matthew-veres</a>
      <a href="https://github.com/mveres01" target="_blank" class="text-decoration-none"><i class="fa-brands fa-github me-1"></i> mveres01</a>
    </div>
  </div>
</div>

<div class="cv-tab-section active" id="tab-experience" data-tab-index="0" markdown="1">

<h2 id="experience">Experience</h2>

<div class="cv-experience-block mb-4">
  <div class="d-flex justify-content-between align-items-baseline">
    <h5 class="mb-1 font-weight-bold text-dark">Machine Learning Research Engineer: Discovery-based Research</h5>
    <span class="badge cv-date-badge">2017 &ndash; Present</span>
  </div>
  <p class="text-muted mb-3">University of Guelph, Guelph, Ontario, Canada</p>

  <div class="cv-subproject mb-3">
    <h6 class="mb-1"><span class="cv-tag">Simulation</span> <strong>Technical Lead</strong> &mdash; Modelling Greenhouse Harvesting Operations in Simulation</h6>
    <ul class="cv-list">
      <li>Built a MuJoCo Real2Sim2Real framework using RGB-D perception to generate approach poses for autonomous tomato harvesting.</li>
      <li>Benchmarked 13 motion planners across 65 crop scenes and 5 performance metrics to determine optimal planners and trajectory approach angles.</li>
      <li>Validated approach poses on a 6-DoF robot arm, demonstrating sim-to-real transfer.</li>
    </ul>
  </div>

  <div class="cv-subproject mb-3">
    <h6 class="mb-1"><span class="cv-tag">Density Estimation</span> <strong>Technical Lead</strong> &mdash; Disease Detection and Scouting in Pear Orchards</h6>
    <ul class="cv-list">
      <li>Developed season-dependent modeling strategies for detecting diseases in a pear orchard, utilizing multi-spectral (RGB/NIR) sensor fusion to improve early-stage scouting.</li>
      <li>Implemented RTK-GPS spatial-data integration to map model inferences to precise physical coordinates as proof of concept for an autonomous field inspection system.</li>
    </ul>
  </div>

  <div class="cv-subproject mb-3">
    <h6 class="mb-1"><span class="cv-tag">Classification</span> <strong>Technical Lead</strong> &mdash; Defect Detection for Manufactured Parts (Industrial Press)</h6>
    <ul class="cv-list">
      <li>Performed root cause analysis for defective parts produced by an industrial press.</li>
      <li>Developed an interactive analytics dashboard (Vue.js) to deliver machine-specific insights.</li>
      <li>Collaborated as a technical consultant to validate findings potentially influencing changes to SOPs across multiple production lines.</li>
    </ul>
  </div>

  <div class="cv-subproject mb-3">
    <h6 class="mb-1"><span class="cv-tag">Semantic Segmentation</span> <strong>ML Engineer</strong> &mdash; Few-Shot Robotic Grasping of Objects with Unknown CoM</h6>
    <ul class="cv-list">
      <li>Adapted, trained, and evaluated a Fully Convolutional Network (FCN) architecture to learn pixel-wise grasp affordances for small, rigid objects with unknown centers of mass.</li>
      <li>Co-developed experimental methodology focused on learning object representations suitable for a robot equipped with a suction-cup end-effector.</li>
    </ul>
  </div>
</div>

<div class="cv-experience-block mb-4 pt-2 border-top">
  <div class="d-flex justify-content-between align-items-baseline">
    <h5 class="mb-1 font-weight-bold text-dark">Machine Learning Research Engineer: Industry-based Research</h5>
    <span class="badge cv-date-badge">2016 &ndash; Present</span>
  </div>
  <p class="text-muted mb-3">University of Guelph, Guelph, Ontario, Canada</p>

  <div class="cv-subproject mb-3">
    <h6 class="mb-1"><span class="cv-tag">Object Detection</span> <strong>Technical Lead</strong> &mdash; Weed Density Estimation for Lima Bean Fields</h6>
    <ul class="cv-list">
      <li>Designed, trained, and validated a multi-stage cascaded detection system for weeds in commercial lima bean fields focused on minimizing label noise in visually-similar weeds.</li>
      <li>Developed visualization tools to translate model outputs into actionable weed-density maps for commercial stakeholders, allowing fine-grained field-wide insight extraction.</li>
    </ul>
  </div>

  <div class="cv-subproject mb-3">
    <h6 class="mb-1"><span class="cv-tag">Scene Understanding</span> <strong>Senior ML Engineer</strong> &mdash; Object Detection in Commercial Greenhouses</h6>
    <ul class="cv-list">
      <li>Co-developed methodology, trained and evaluated models to assess domain generalization performance of object-detection models across different tomato greenhouse environments.</li>
      <li>Provided technical mentorship for a team of MSc and undergraduate researchers, overseeing code quality and project milestones.</li>
    </ul>
  </div>

  <div class="cv-subproject mb-3">
    <h6 class="mb-1"><span class="cv-tag">Object Detection</span> <strong>Senior ML Engineer</strong> &mdash; Real-Time Inspection for Helical Automotive Gears</h6>
    <ul class="cv-list">
      <li>Contributed model training, development, and evaluation for an in-line Vision AI inspection system capable of real-time, full-surface automotive gear inspection (48-52 images) meeting strict manufacturing cycle time requirements (under 7.5s).</li>
      <li>Developed a monitoring system (REST API/Vue.js) to close the loop between model inference and operator feedback, establishing continuous data collection.</li>
    </ul>
  </div>

  <div class="cv-subproject mb-3">
    <h6 class="mb-1"><span class="cv-tag">Simulation</span> <strong>ML Engineer</strong> &mdash; Deep Learning for Intelligent Transportation Systems</h6>
    <ul class="cv-list">
      <li>Implemented scalable optimization simulations supporting offline route generation and Google Cloud fine-tuning to overcome API rate limits.</li>
      <li>Released a PyTorch implementation of a published end-to-end Deep Reinforcement Learning (DRL) framework for learning to solve combinatorial problems on GitHub (<a href="https://github.com/mveres01/pytorch-drl4vrp" target="_blank">500+ Stars</a>).</li>
    </ul>
  </div>

  <div class="cv-subproject mb-3">
    <h6 class="mb-1"><span class="cv-tag">Semantic Segmentation</span> <strong>ML Engineer</strong> &mdash; Automotive Part Grasping via Grasp Affordances</h6>
    <ul class="cv-list">
      <li>Developed a perception model to identify grasp affordance regions for large, semi-rigid automotive components deposited at the end of a conveyor belt attached to a factory press.</li>
      <li>Validated system on multiple part geometries, demonstrating robust real-world performance.</li>
    </ul>
  </div>
</div>

</div>

<div class="cv-tab-section" id="tab-publications" data-tab-index="1" markdown="1">

<h2 id="publications">Publications</h2>

<ol class="cv-numbered-list mb-4">
  <li>
    Holagh, S.G., Bamidele, O.E., <strong>Veres, M.</strong>, Moussa, M., &amp; Ahmed, W.H. Real-time monitoring of two-phase slug flow characteristics via an AI-assisted wall-integrated multi-capacitance sensor. <em>Flow Measurement and Instrumentation</em>, 2026.
  </li>
  <li>
    <strong>Veres, M.</strong>, Tarry, C., Grigg-McGuffin, K., McFadden-Smith, W., &amp; Moussa, M. An Evaluation of Multi-Channel Sensors and Density Estimation Learning for Detecting Fire Blight Disease in Pear Orchards. <em>Sensors</em>, 2024.
  </li>
  <li>
    Haggag, S., <strong>Veres, M.</strong>, Tarry, C., &amp; Moussa, M. Object Detection in Tomato Greenhouses: A Study on Model Generalization. <em>Agriculture</em>, 2024.
  </li>
  <li>
    Idzik, T., <strong>Veres, M.</strong>, Tarry, C., &amp; Moussa, M. A Real-Time Inspection System for Industrial Helical Gears. <em>Sensors</em>, 2023.
  </li>
  <li>
    Allam, A., Moussa, M., Tarry, C., &amp; <strong>Veres, M.</strong> Detecting Teeth Defects on Automotive Gears Using Deep Learning. <em>Sensors</em>, 2021.
  </li>
  <li>
    <strong>Veres, M.</strong>, Cabral, I., &amp; Moussa, M. Incorporating Object Intrinsic Features Within Deep Grasp Affordance Prediction. <em>IEEE Robotics and Automation Letters (RA-L)</em>, 2020.
  </li>
  <li>
    <strong>Veres, M.</strong>, &amp; Moussa, M. Deep Learning for Intelligent Transportation Systems: A Survey of Emerging Trends. <em>IEEE Transactions on Intelligent Transportation Systems</em>, 2019.
  </li>
  <li>
    <strong>Veres, M.</strong>, Moussa, M., &amp; Taylor, G.W. Modeling Grasp Motor Imagery through Deep Conditional Generative Models. <em>IEEE Robotics and Automation Letters (RA-L)</em>, 2017.
  </li>
  <li>
    <strong>Veres, M.</strong>, Lacey, G., &amp; Taylor, G.W. Deep Learning Architectures for Soil Property Prediction. <em>Canadian Conference on Computer and Robot Vision (CRV)</em>, 2015.
  </li>
  <li>
    Tarry, C., Wspanialy, P., <strong>Veres, M.</strong>, &amp; Moussa, M. An Integrated Bud Detection and Localization System for Application in Greenhouse Automation. <em>Canadian Conference on Computer and Robot Vision (CRV)</em>, 2014.
  </li>
</ol>

</div>

<div class="cv-tab-section" id="tab-preprints" data-tab-index="2" markdown="1">

<h2 id="preprints">Preprints</h2>

<ol class="cv-numbered-list mb-4">
  <li>
    <strong>Veres, M.</strong>, Moussa, M., &amp; Taylor, G.W. An Integrated Simulator and Dataset that Combines Grasping and Vision for Deep Learning. <em>arXiv:1702.02103</em>, 2017. [<a href="https://arxiv.org/abs/1702.02103" target="_blank">arXiv</a>] [<a href="https://github.com/mveres01/multi-contact-grasping" target="_blank">Code</a>]
  </li>
</ol>

</div>

<div id="cv-toast" class="cv-swipe-toast"></div>

<script>
(function () {
  const tabIds = ["experience", "publications", "preprints"];
  const tabTitles = ["Experience", "Publications", "Preprints"];
  let currentTabIndex = 0;
  let toastTimer = null;

  function showToast(text) {
    const toast = document.getElementById("cv-toast");
    if (!toast) return;
    toast.innerHTML = text;
    toast.classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("visible");
    }, 1500);
  }

  function updateActivePill(activeId) {
    document.querySelectorAll("#toc-sidebar .toc-link").forEach((link) => {
      const href = link.getAttribute("href");
      if (href === "#" + activeId) {
        link.classList.add("cv-pill-active");
        link.classList.add("is-active-link");
        link.parentElement?.classList.add("is-active-li");
      } else {
        link.classList.remove("cv-pill-active");
        link.classList.remove("is-active-link");
        link.parentElement?.classList.remove("is-active-li");
      }
    });
  }

  function switchToTab(index, shouldScroll = true) {
    if (index < 0 || index >= tabIds.length) return;
    currentTabIndex = index;
    const targetId = tabIds[index];

    if (window.innerWidth < 768) {
      document.querySelectorAll(".cv-tab-section").forEach((sec, idx) => {
        if (idx === index) {
          sec.classList.add("active");
        } else {
          sec.classList.remove("active");
        }
      });

      updateActivePill(targetId);

      if (shouldScroll) {
        const toc = document.getElementById("toc-sidebar");
        const navHeight = document.querySelector("#navbar")?.offsetHeight || 60;
        const targetY = toc ? toc.getBoundingClientRect().top + window.pageYOffset - navHeight - 12 : 0;
        if (window.pageYOffset > targetY + 30) {
          window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
        }
      }

      showToast(`<i class="fa-solid fa-layer-group me-1"></i> ${tabTitles[index]} (${index + 1}/${tabIds.length})`);
    } else {
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const navHeight = document.querySelector("#navbar")?.offsetHeight || 60;
        const targetY = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
        window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
      }
    }
  }

  function setupTocControls() {
    const toc = document.getElementById("toc-sidebar");
    if (!toc) return;

    let list = toc.querySelector(".toc-list");
    if (!list) {
      list = document.createElement("ul");
      list.className = "toc-list";
      tabIds.forEach((id, idx) => {
        const li = document.createElement("li");
        li.className = "toc-list-item" + (idx === currentTabIndex ? " is-active-li" : "");
        const a = document.createElement("a");
        a.className = "toc-link" + (idx === currentTabIndex ? " cv-pill-active is-active-link" : "");
        a.href = "#" + id;
        a.textContent = tabTitles[idx];
        li.appendChild(a);
        list.appendChild(li);
      });
      toc.appendChild(list);
    }

    if (!document.getElementById("cv-section-arrows")) {
      const navControls = document.createElement("div");
      navControls.id = "cv-section-arrows";
      navControls.className = "cv-section-arrows";
      navControls.innerHTML = `
        <button type="button" class="cv-arrow-btn" id="cv-prev-btn" aria-label="Previous section"><i class="fa-solid fa-chevron-left me-1"></i> Prev</button>
        <button type="button" class="cv-arrow-btn" id="cv-next-btn" aria-label="Next section">Next <i class="fa-solid fa-chevron-right ms-1"></i></button>
      `;
      toc.appendChild(navControls);

      document.getElementById("cv-prev-btn")?.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (currentTabIndex > 0) {
          switchToTab(currentTabIndex - 1);
        } else {
          showToast(`<i class="fa-solid fa-check me-1"></i> First section: ${tabTitles[0]}`);
        }
      });

      document.getElementById("cv-next-btn")?.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (currentTabIndex < tabIds.length - 1) {
          switchToTab(currentTabIndex + 1);
        } else {
          showToast(`<i class="fa-solid fa-check me-1"></i> Last section: ${tabTitles[tabIds.length - 1]}`);
        }
      });
    }

    if (window.innerWidth < 768) {
      switchToTab(currentTabIndex, false);
    }
  }

  // Intercept clicks on TOC links for instant mobile tab switching
  document.addEventListener(
    "click",
    function (e) {
      const link = e.target.closest("#toc-sidebar .toc-link");
      if (link) {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          const id = href.substring(1);
          const idx = tabIds.indexOf(id);
          if (idx !== -1 && window.innerWidth < 768) {
            e.preventDefault();
            e.stopPropagation();
            switchToTab(idx);
          }
        }
      }
    },
    true
  );

  // Swipe Gesture Engine (triggers immediately when threshold crossed)
  let touchStartX = 0;
  let touchStartY = 0;
  let touchLastX = 0;
  let touchLastY = 0;
  let touchStartTime = 0;
  let isTracking = false;
  let swipeTriggered = false;

  function onTouchStart(e) {
    if (window.innerWidth >= 768) return;
    const pt = e.touches ? e.touches[0] : e;
    touchStartX = pt.clientX;
    touchStartY = pt.clientY;
    touchLastX = touchStartX;
    touchLastY = touchStartY;
    touchStartTime = Date.now();
    isTracking = true;
    swipeTriggered = false;
  }

  function onTouchMove(e) {
    if (!isTracking || window.innerWidth >= 768) return;
    const pt = e.touches ? e.touches[0] : e;
    touchLastX = pt.clientX;
    touchLastY = pt.clientY;

    const deltaX = touchLastX - touchStartX;
    const deltaY = touchLastY - touchStartY;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);

    // Instant trigger when user slides finger >= 48px horizontally
    if (!swipeTriggered && absX >= 48 && absX > absY * 1.25) {
      swipeTriggered = true;
      if (deltaX < 0) {
        // Swipe Left -> Next Section
        if (currentTabIndex < tabIds.length - 1) {
          switchToTab(currentTabIndex + 1);
        } else {
          showToast(`<i class="fa-solid fa-check me-1"></i> Last section: ${tabTitles[currentTabIndex]}`);
        }
      } else {
        // Swipe Right -> Previous Section
        if (currentTabIndex > 0) {
          switchToTab(currentTabIndex - 1);
        } else {
          showToast(`<i class="fa-solid fa-check me-1"></i> First section: ${tabTitles[0]}`);
        }
      }
    }
  }

  function onTouchEnd() {
    if (!isTracking || window.innerWidth >= 768) return;
    isTracking = false;

    if (!swipeTriggered) {
      const deltaX = touchLastX - touchStartX;
      const deltaY = touchLastY - touchStartY;
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);
      const duration = Date.now() - touchStartTime;

      // Quick flick detection (30px if under 400ms)
      if (duration < 400 && absX >= 30 && absX > absY * 1.2) {
        swipeTriggered = true;
        if (deltaX < 0) {
          if (currentTabIndex < tabIds.length - 1) {
            switchToTab(currentTabIndex + 1);
          } else {
            showToast(`<i class="fa-solid fa-check me-1"></i> Last section: ${tabTitles[currentTabIndex]}`);
          }
        } else {
          if (currentTabIndex > 0) {
            switchToTab(currentTabIndex - 1);
          } else {
            showToast(`<i class="fa-solid fa-check me-1"></i> First section: ${tabTitles[0]}`);
          }
        }
      }
    }
  }

  window.addEventListener("touchstart", onTouchStart, { passive: true });
  window.addEventListener("touchmove", onTouchMove, { passive: true });
  window.addEventListener("touchend", onTouchEnd, { passive: true });
  window.addEventListener("touchcancel", onTouchEnd, { passive: true });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      document.querySelectorAll(".cv-tab-section").forEach((sec) => {
        sec.classList.remove("active");
        sec.style.display = "block";
      });
    } else {
      document.querySelectorAll(".cv-tab-section").forEach((sec, idx) => {
        sec.style.display = "";
        if (idx === currentTabIndex) {
          sec.classList.add("active");
        } else {
          sec.classList.remove("active");
        }
      });
      updateActivePill(tabIds[currentTabIndex]);
    }
  });

  // Watch for tocbot injection into #toc-sidebar
  const tocTarget = document.getElementById("toc-sidebar");
  if (tocTarget) {
    const observer = new MutationObserver(() => {
      setupTocControls();
    });
    observer.observe(tocTarget, { childList: true, subtree: true });
  }

  // Backup timers to ensure controls setup
  [100, 300, 600, 1000].forEach((delay) => setTimeout(setupTocControls, delay));
})();
</script>
