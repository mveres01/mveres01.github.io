---
layout: page
title: Projects
permalink: /projects/
description: Applied machine learning and robotics research spanning agriculture, industrial metrology, and robotic manipulation.
nav: true
nav_order: 1
display_categories: [Agri-Food & Robotics, Industrial Inspection, Robotics & Deep Learning]
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
