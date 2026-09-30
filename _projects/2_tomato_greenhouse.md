---
layout: page
title: "Tomato Greenhouse Object Detection & Robot Harvesting"
description: "Mask-RCNN model generalization across diverse commercial greenhouses, lighting, and cultivars for autonomous agricultural harvesting."
img: assets/img/tomato_greenhouse.jpg
importance: 2
category: "Agri-Food & Robotics"
doi: "https://doi.org/10.3390/agriculture14020173"
html: "https://www.mdpi.com/2077-0472/14/2/173"
pdf: "https://www.mdpi.com/2077-0472/14/2/173/pdf"
related_publications: true
---

<link rel="stylesheet" href="{{ '/assets/css/portfolio_custom.css' | relative_url }}">

### Overview

Commercial production greenhouses present extremely complex visual environments: extreme glare, severe occlusions from dense foliage, variable ripeness stages, and hanging support infrastructure.

{% include figure.liquid loading="eager" path="assets/img/tomato_greenhouse.jpg" title="Tomato greenhouse canopy and fruit clusters" class="img-fluid rounded z-depth-1" %}

<div class="caption">
    Commercial greenhouse canopy environment evaluated across four distinct growing conditions.
</div>

### Key Highlights

- **Dataset Collection:** Collected four distinct datasets across commercial greenhouses under widely differing seasonal, weather, and canopy conditions.
- **Generalization Analysis:** Evaluated the cross-domain robustness of Mask-RCNN instance segmentation models when exposed to new greenhouse sites and unseen cultivars.
- **Robotic Harvesting Precursor:** Serves as the vision backbone for autonomous mobile tomato harvesting robots in commercial production facilities.

**Publication:** [Agriculture 2024 Paper](https://www.mdpi.com/2077-0472/14/2/173) | [CTV News Video Feature](https://kitchener.ctvnews.ca/smart-robot-could-transform-produce-picking-farms-1.6807981)
