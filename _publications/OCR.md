---
title: "OCR or Not? Rethinking Document Information Extraction in the MLLMs Era with Real-World Large-Scale Datasets"
collection: publications
permalink: /publication/OCR
date: 2026-01-07
excerpt: 'Jiyuan Shen, Peiyue Yuan, Atin Ghosh, Yifan Mai, Daniel Dahlmeier'
venue: European Chapter of the Association for Computational Linguistics (EACL) Industry Track
paperurl: 'https://arxiv.org/abs/2603.02789'
slideurl: '/files/OCR_or_Not_Presentation_Slides.pdf'
selected: true
header:
  teaser: "pubs/OCR_or_not.png"
---


## Abstract

Multimodal Large Language Models (MLLMs) enhance the potential of natural language processing. However, their actual impact on document information extraction remains unclear. In particular, it is unclear whether an MLLM-only pipeline -- while simpler -- can truly match the performance of traditional OCR+MLLM setups. In this paper, we conduct a large-scale benchmarking study that evaluates various out-of-the-box MLLMs on business-document information extraction. To examine and explore failure modes, we propose an automated hierarchical error analysis framework that leverages LLMs to diagnose error patterns systematically. Our findings suggest that OCR may not be necessary for powerful MLLMs, as image-only input can achieve comparable performance to OCR-enhanced approaches. Moreover, we demonstrate that carefully designed schema, exemplars, and instructions can further enhance MLLM performance. We also find that as MLLMs increase in size, their information extraction performance can still improve accordingly, and that general-purpose MLLMs lack task-specific knowledge, highlighting the need for more carefully designed schemas, exemplars, and instructions. We refine our approach and achieve measurable performance improvement by leveraging insights from our error analysis framework.

[Download paper here](https://arxiv.org/abs/2603.02789)
