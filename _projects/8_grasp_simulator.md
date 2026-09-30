---
layout: page
title: "Integrated Robot Grasping Simulator & Multimodal Dataset"
description: "Automated simulation platform for physical multi-fingered grasp-and-lift trials with simultaneous multimodal vision data acquisition."
img: assets/img/grasp_simulator.png
importance: 8
category: "Robotics & Deep Learning"
date: 2017-02-01
arxiv: "https://arxiv.org/abs/1702.02103"
html: "https://arxiv.org/abs/1702.02103"
pdf: "https://arxiv.org/pdf/1702.02103.pdf"
code: "https://github.com/mveres01/multi-contact-grasping"
related_publications: true
---

<link rel="stylesheet" href="{{ '/assets/css/portfolio_custom.css' | relative_url }}">

### Overview

Training deep learning models for robotic grasp synthesis requires substantial quantities of labeled physical interaction data. Acquiring tens of thousands of real-world trials is often prohibitively slow and wear-intensive.

{% include figure.liquid loading="eager" path="assets/img/grasp_simulator.png" title="Simulation platform with synthetic Kinect RGB-D and segmentation streams" class="img-fluid rounded z-depth-1" %}

<div class="caption">
    Integrated physics simulation with automated sensory capture (RGB, depth, object masks, and gripper kinematic telemetry).
</div>

### Highlights

- **Automated Grasp-and-Lift Pipeline:** Automated evaluation of multi-fingered grasp stability through dynamic grasp, lift, and shake sequences.
- **Multimodal Sensory Streams:** Simultaneously captured RGB, depth maps, contact normals, and instance segmentation masks.

**Links:** [arXiv Preprint](https://arxiv.org/abs/1702.02103) | [GitHub Repository](https://github.com/mveres01/multi-contact-grasping)
