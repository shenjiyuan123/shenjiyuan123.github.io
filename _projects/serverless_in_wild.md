---
title: "Reproducing-serverless-in-the-wild"
collection: projects
permalink: /projects/serverless_in_wild
date: 2022-12-10
---

This is the project of Distributed System, which needs to reproduce the paper of "[Serverless in the Wild: Characterizing and Optimizing the Serverless Workload at a Large Cloud Provider](https://www.usenix.org/conference/atc20/presentation/shahrad)".

{% include toc %}

---

# Reproducing Serverless in the Wild: Characterizing and Optimizing the Serverless Workload at a Large Cloud Provider

Function-as-a-Service (FaaS) for serverless computing has attracted much attention as it is easy to use, cheap, and efficient. Existing cloud providers adopt fixed keep-alive strategies for users to avoid cold starts, that is, applications will be stored in the memory for some time and do not need to be loaded again. However, since different functions have various invocation patterns, it wastes memory in practice. To solve this problem, the FaaS invocation patterns are analyzed and a more efficient hybrid strategy is proposed in [reproduced paper](https://www.usenix.org/conference/atc20/presentation/shahrad). Firstly, we reproduced their findings by characterizing the invocation behaviors based on the public Azure traces. Secondly, we implemented the proposed methods and experiments, which concludes with a thorough technical and visual analysis. Based on the insights from the preliminary experiments, we further propose a heuristic down-sampling strategy to increase reproducibility under the given performance constraints. Last, we elaborate the problems that arose and propose improvements to their proposal. 

Our reproduction code is [open-sourced](https://github.com/andreaskuster/reproducing-serverless-in-the-wild).




