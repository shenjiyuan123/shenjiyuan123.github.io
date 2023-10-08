---
title: "Deepfake Detection"
collection: projects
permalink: /projects/deepfake-detection
date: 2022-06-10
---

This is my undergraduate thesis project. It's about deepfake detection based on frequency analysis and graft attention.

{% include toc %}

---

# Graduate Thesis of Deepfake Detection

Based on the previous research on the use of frequency domain analysis in Deepfake detection, this paper proposes two Deepfake detection algorithms. The first is an algorithm based on frequency domain analysis and two-stream network, which mainly improves the previous simple frequency domain transformation method. Specifically, by using learnable frequency filters for frequency-domain feature extraction, the use of two-stream networks, feature fusion and multi-task learning modes greatly improves the generalization and interpretability of the model. The second algorithm makes some improvements on the basis of the former. When greatly reducing the amount of model parameters, it also ensures the feasibility of pre-training on large-scale datasets under weakly supervision. In particular, the multi-model image fusion attention mechanism proposed in this paper is the first to apply the graft idea to the field of Deepfake detection, and the proposed module also well simulates the human instinction to observe things. By combining the multi-stream network, the idea of travelling from the global to the local information and then back to the global is realized. In other words, the idea follows the process of starting from the time domain, querying the local frequency domain statistical information, and finally returning to the time domain information filtered in the frequency domain. Experiments show that using this method reduces the number of model parameters by about ten times, and at the same time, the convergence speed and the accuracy of the model are also significantly improved. 

## Algorithm based on frequency domain analysis and two-stream network

The first algorithm that based on frequency domain analysis and two-stream network.
<center><img src="../files/chap03_framework.png" style="zoom: 80%;" /></center>

## Algorithm based on multi-model graft attention network


The second algorithm that based on multi-model graft attention network.
<center><img src="../files/chap04_framework2.png" style="zoom: 80%;" /></center>

## Abalation experiments

<center><img src="../files/exp_tab_en.png" style="zoom: 80%;" /></center>


---

Code is [here](https://github.com/shenjiyuan123/Graduate_thesis).

Full paper is [here](http://shenjiyuan123.github.io/files/Deepfake_Detection_Research.pdf).

