---
layout: page
title: Projects
permalink: /projects/
description: Applied machine learning and robotics research spanning agriculture, industrial metrology, and robotic manipulation.
nav: true
nav_order: 1
display_categories: [Agri-Food & Robotics, Industrial Inspection, Robotics & Deep Learning]
---

<link rel="stylesheet" href="{{ '/assets/css/portfolio_custom.css' | relative_url }}">

<div class="projects">
{% for category in page.display_categories %}
  <a id="{{ category | slugify }}" href=".#{{ category | slugify }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2 g-3 mb-4">
    {% for project in sorted_projects %}
      <div class="col">
        <div class="project-compact-card h-100">
          <div class="project-card-inner d-flex flex-column h-100">
            {% if project.img %}
            <div class="project-thumb-container">
              <a href="{{ project.url | relative_url }}">
                <img src="{{ project.img | relative_url }}" alt="{{ project.title }}" class="project-thumb-img" loading="lazy" />
              </a>
            </div>
            {% endif %}
            <div class="project-content p-3 d-flex flex-column flex-grow-1">
              <h5 class="project-title mb-1">
                <a href="{{ project.url | relative_url }}" class="text-decoration-none text-dark">{{ project.title }}</a>
              </h5>
              <p class="project-desc text-muted mb-3 flex-grow-1">{{ project.description }}</p>
              <div class="project-links d-flex flex-wrap align-items-center">
                {% if project.doi %}
                  <a href="{{ project.doi }}" target="_blank" class="btn btn-sm project-btn" role="button">DOI</a>
                {% endif %}
                {% if project.html %}
                  <a href="{{ project.html }}" target="_blank" class="btn btn-sm project-btn" role="button">HTML</a>
                {% endif %}
                {% if project.pdf %}
                  <a href="{{ project.pdf }}" target="_blank" class="btn btn-sm project-btn" role="button">PDF</a>
                {% endif %}
                {% if project.arxiv %}
                  <a href="{{ project.arxiv }}" target="_blank" class="btn btn-sm project-btn" role="button">arXiv</a>
                {% endif %}
                {% if project.code %}
                  <a href="{{ project.code }}" target="_blank" class="btn btn-sm project-btn" role="button">Code</a>
                {% endif %}
                {% if project.video %}
                  <a href="{{ project.video }}" target="_blank" class="btn btn-sm project-btn" role="button">Video</a>
                {% endif %}
                <a href="{{ project.url | relative_url }}" class="btn btn-sm project-btn project-btn-details" role="button">Details &raquo;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
{% endfor %}

  <a id="repositories" href=".#repositories">
    <h2 class="category">Open-Source Code &amp; Repositories</h2>
  </a>
  <div class="row row-cols-1 row-cols-md-3 g-3 mb-5">
    <div class="col">
      <div class="project-compact-card repo-card h-100 p-3 d-flex flex-column justify-content-between">
        <div>
          <div class="d-flex align-items-center mb-2">
            <i class="fa-brands fa-github fs-5 me-2 text-primary"></i>
            <h6 class="mb-0 font-weight-bold">
              <a href="https://github.com/mveres01/pytorch-drl4vrp" target="_blank" class="text-decoration-none text-dark">pytorch-drl4vrp</a>
            </h6>
          </div>
          <p class="small text-muted mb-3">PyTorch implementation of deep reinforcement learning for the Traveling Salesperson (TSP) and Vehicle Routing Problem (VRP).</p>
        </div>
        <div class="d-flex justify-content-between align-items-center pt-2 border-top">
          <span class="badge bg-light text-dark border"><i class="fa-solid fa-code me-1 text-warning"></i> Python &bull; 500+ Stars</span>
          <a href="https://github.com/mveres01/pytorch-drl4vrp" target="_blank" class="btn btn-sm project-btn">GitHub</a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="project-compact-card repo-card h-100 p-3 d-flex flex-column justify-content-between">
        <div>
          <div class="d-flex align-items-center mb-2">
            <i class="fa-brands fa-github fs-5 me-2 text-primary"></i>
            <h6 class="mb-0 font-weight-bold">
              <a href="https://github.com/mveres01/multi-contact-grasping" target="_blank" class="text-decoration-none text-dark">multi-contact-grasping</a>
            </h6>
          </div>
          <p class="small text-muted mb-3">Integrated simulation framework and dataset combining vision and multi-fingered grasping for deep learning.</p>
        </div>
        <div class="d-flex justify-content-between align-items-center pt-2 border-top">
          <span class="badge bg-light text-dark border"><i class="fa-solid fa-code me-1 text-primary"></i> Lua / Python</span>
          <a href="https://github.com/mveres01/multi-contact-grasping" target="_blank" class="btn btn-sm project-btn">GitHub</a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="project-compact-card repo-card h-100 p-3 d-flex flex-column justify-content-between">
        <div>
          <div class="d-flex align-items-center mb-2">
            <i class="fa-brands fa-github fs-5 me-2 text-primary"></i>
            <h6 class="mb-0 font-weight-bold">
              <a href="https://github.com/mveres01/grasping" target="_blank" class="text-decoration-none text-dark">grasping</a>
            </h6>
          </div>
          <p class="small text-muted mb-3">Simulation environment and modeling tools for multi-contact robot grasping and affordance analysis.</p>
        </div>
        <div class="d-flex justify-content-between align-items-center pt-2 border-top">
          <span class="badge bg-light text-dark border"><i class="fa-solid fa-code me-1 text-primary"></i> Simulation</span>
          <a href="https://github.com/mveres01/grasping" target="_blank" class="btn btn-sm project-btn">GitHub</a>
        </div>
      </div>
    </div>
  </div>
</div>
