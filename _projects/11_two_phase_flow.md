---
layout: page
title: "AI-Assisted Two-Phase Slug Flow Monitoring"
description: "Wall-integrated multi-capacitance sensor paired with deep learning for real-time hydrodynamic characterization in metallic pipelines."
img: assets/img/two_phase_flow_system.jpg
importance: 5
category: "Industrial Inspection"
doi: "https://doi.org/10.1016/j.flowmeasinst.2026.103519"
html: "https://doi.org/10.1016/j.flowmeasinst.2026.103519"
pdf: "https://doi.org/10.1016/j.flowmeasinst.2026.103519"
related_publications: true
---

<link rel="stylesheet" href="{{ '/assets/css/portfolio_custom.css' | relative_url }}">

### Overview

Real-time monitoring of two-phase gas-liquid slug flow in metallic pipelines is critical across industrial processes, energy systems, and offshore infrastructure. Traditional diagnostics often struggle in opaque metallic pipes where optical access is unavailable and invasive probes disturb flow dynamics.

{% include figure.liquid loading="eager" path="assets/img/two_phase_flow_system.jpg" title="Experimental vertical flow loop facility and multi-capacitance monitoring setup" class="img-fluid rounded z-depth-1 mb-2" %}

<div class="caption text-muted mb-4 text-center">
  Experimental vertical two-phase flow loop facility at the University of Guelph equipped with wall-integrated multi-capacitance sensor electrodes and real-time DAQ instrumentation.
</div>

### Key Highlights

- **Non-Intrusive Sensing:** Coupled a non-intrusive, wall-integrated multi-capacitance sensor with advanced signal processing to acquire spatial-temporal permittivity profiles without obstructing fluid flow.
- **Deep Learning Inversion:** Deployed a 1D convolutional neural network (CNN) under a semantic segmentation paradigm to identify Taylor bubbles and liquid slugs from void fraction signals with high IoU (94.4%).
- **Experimental Validation:** Validated on a vertical gas-liquid flow loop facility using air-water and CO2-water systems in collaboration with Dr. Shahriyar Ghazanfari Holagh, Dr. Wael Ahmed, and Dr. Medhat Moussa.

<div class="project-actions mt-4 pt-3 border-top d-flex gap-2">
  <a href="https://doi.org/10.1016/j.flowmeasinst.2026.103519" target="_blank" class="btn btn-sm btn-outline-primary" role="button">DOI Paper</a>
  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7487634747632820224/" target="_blank" class="btn btn-sm btn-outline-secondary" role="button">LinkedIn Post</a>
</div>

