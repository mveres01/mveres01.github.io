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

## Experience

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

---

## Publications

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

---

## Preprints

<ol class="cv-numbered-list mb-4">
  <li>
    <strong>Veres, M.</strong>, Moussa, M., &amp; Taylor, G.W. An Integrated Simulator and Dataset that Combines Grasping and Vision for Deep Learning. <em>arXiv:1702.02103</em>, 2017. [<a href="https://arxiv.org/abs/1702.02103" target="_blank">arXiv</a>] [<a href="https://github.com/mveres01/multi-contact-grasping" target="_blank">Code</a>]
  </li>
</ol>
