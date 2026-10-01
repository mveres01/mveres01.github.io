---
layout: page
title: "Deep Grasp Affordance with Object Intrinsic Features"
description: "Few-shot robotic grasp affordance learning considering unknown mass and center-of-mass distributions using Fanuc manipulators."
img: assets/img/grasp_affordance.png
importance: 5
category: "Robotics and Deep Learning"
date: 2020-07-01
doi: "https://doi.org/10.1109/LRA.2020.3010444"
html: "https://ieeexplore.ieee.org/abstract/document/9144383"
pdf: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9144383"
related_publications: true
---

<link rel="stylesheet" href="{{ '/assets/css/portfolio_custom.css' | relative_url | bust_file_cache }}">

### Overview

When robots manipulate objects, an object's visual geometric centroid often diverges significantly from its true center of mass and inertial parameters. Grasping strategies that ignore mass distribution frequently fail during lift and transfer.

{% include figure.liquid loading="eager" path="assets/img/grasp_affordance.png" title="Fanuc arm collecting grasp affordance data with varied internal weights" class="img-fluid rounded z-depth-1" %}

<div class="caption">
    Robotic manipulation testbed with modular weighted test objects for learning grasp affordances under varying centers of mass.
</div>

### Key Contributions

- **Few-Shot Learning Formulation:** Framed the discovery of stable grasp poses for objects with unknown intrinsic properties as a few-shot learning problem.
- **Real-Robot Experimental Rig:** Built a customized automated collection pipeline using a Fanuc robotic arm and modular modular 3D objects with configurable internal weight distributions.

<div class="project-actions mt-4 pt-3 border-top d-flex gap-2">
  <a href="https://ieeexplore.ieee.org/abstract/document/9144383" target="_blank" class="btn btn-sm btn-outline-primary" role="button">IEEE Xplore Paper</a>
</div>
