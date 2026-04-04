---
title: "Dataset Distillation Survey"
collection: projects
permalink: /projects/dd_survey
date: 2024-03-25
excerpt: "A comprehensive survey on dataset distillation methods and their applications in data-efficient learning."
---

{% include toc %}

---

# An Introduction to Dataset Distillation and its Application

Training large AI models typically requires large-scale datasets, making the training and parameter-tuning process both time-consuming and costly. **Dataset Distillation (DD)** addresses this problem by carefully synthesizing a very small number of highly representative and informative samples from real-world datasets, offering a promising perspective for data-efficient learning.

This survey provides a comprehensive introduction to the field of dataset distillation, covering:

- **Foundational concepts** and problem formulation of dataset distillation
- **Core methods**: performance matching, parameter matching, distribution matching, and trajectory matching
- **Applications**: continual learning, neural architecture search, federated learning, and privacy preservation
- **Challenges and future directions** in scaling DD to larger datasets and more complex tasks

---

## Resources

Full survey slides (pdf): [An Introduction to Dataset Distillation and its Application](/files/An%20Introduction%20to%20Dataset%20Distillation%20and%20its%20Application.pdf)

Presentation slides (pptx): [Dataset Distillation Presentation](https://docs.google.com/presentation/d/1rzKOw9eNgg4gqXfNcwnSKsAmhilHxxOg/edit?usp=sharing&ouid=105576136034076869833&rtpof=true&sd=true)

Related publication: [AST: Effective Dataset Distillation through Alignment with Smooth and High-Quality Expert Trajectories](/publication/IMTT)

Related code: [AST Implementation](https://github.com/shenjiyuan123/AST-Alignment-with-Smooth-Expert)
