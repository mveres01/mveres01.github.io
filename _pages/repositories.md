---
layout: page
permalink: /repositories/
title: Repositories
description: Open source machine learning and robotics code repositories.
nav: false
---
<link rel="stylesheet" href="{{ '/assets/css/portfolio_custom.css' | relative_url }}">

{% if site.data.repositories.github_repos %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
