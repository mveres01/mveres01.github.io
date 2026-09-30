---
layout: page
title: "Automotive Gear Teeth Defect Detection with Domain Constraints"
description: "Faster-RCNN defect detection coupled with physical geometric domain constraints to minimize false positive and false negative predictions."
img: assets/img/gear_teeth_defects.png
importance: 4
category: "Industrial Inspection"
doi: "https://doi.org/10.3390/s21248480"
html: "https://www.mdpi.com/1424-8220/21/24/8480"
pdf: "https://www.mdpi.com/1424-8220/21/24/8480/pdf"
related_publications: true
---

### Overview

Surface defects on precision automotive transmission gears can appear at arbitrary locations across intricate helical tooth profiles. This project developed a proof-of-concept automated vision solution tailored for industrial quality assurance.

{% include figure.liquid loading="eager" path="assets/img/gear_teeth_defects.png" title="Automotive gear defect detection" class="img-fluid rounded z-depth-1" %}

<div class="caption">
    Detection of micro-scale tooth defects using deep neural networks enhanced with geometric priors.
</div>

### Highlights

- **Faster-RCNN Architecture:** Customized two-stage detection network tuned for subtle surface irregularities on machined metal.
- **Domain Knowledge Constraints:** Formulated geometric and structural domain constraints that filter out lighting artifacts, drastically reducing false positive and negative alarms.

**Publication:** [Sensors 2021 Paper](https://www.mdpi.com/1424-8220/21/24/8480)
