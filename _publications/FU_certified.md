---
title: "Privacy-Preserving Federated Unlearning with Certified Client Removal"
collection: publications
permalink: /publication/FU_certified
date: 2025-03-27
excerpt: 'Ziyao Liu, Huanyi Ye, Yu Jiang, Jiyuan Shen, Jiale Guo, Ivan Tjuawinata, Kwok-Yan Lam'
venue: IEEE Transactions on Information Forensics & Security
paperurl: 'https://arxiv.org/abs/2404.09724'
header:
  teaser: "pubs/FU_certified.png"
---


## Abstract

In recent years, Federated Unlearning (FU) has gained attention for addressing the removal of a client's influence from the global model in Federated Learning (FL) systems, thereby ensuring the "right to be forgotten" (RTBF). State-of-the-art methods for unlearning use historical data from FL clients, such as gradients or locally trained models. However, studies have revealed significant information leakage in this setting, with the possibility of reconstructing a user's local data from their uploaded information. Addressing this, we propose Starfish, a privacy-preserving federated unlearning scheme using Two-Party Computation (2PC) techniques and shared historical client data between two non-colluding servers. Starfish builds upon existing FU methods to ensure privacy in unlearning processes. To enhance the efficiency of privacy-preserving FU evaluations, we suggest 2PC-friendly alternatives for certain FU algorithm operations. We also implement strategies to reduce costs associated with 2PC operations and lessen cumulative approximation errors. Moreover, we establish a theoretical bound for the difference between the unlearned global model via Starfish and a global model retrained from scratch for certified client removal. Our theoretical and experimental analyses demonstrate that Starfish achieves effective unlearning with reasonable efficiency, maintaining privacy and security in FL systems.

[Download paper here](https://arxiv.org/abs/2404.09724)
