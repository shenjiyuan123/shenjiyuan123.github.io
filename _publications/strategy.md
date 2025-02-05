---
title: "An Efficient Training Strategy for Multi-Agent Reinforcement Learning in Card Games"
collection: publications
permalink: /publication/strategy
date: 2022-03-01
excerpt: 'Jiyuan Shen'
venue: International Conference on Artificial Intelligence, Automation and High Performance Computing (AIAHPC)

---

## Abstract

Most of the previous researches on reinforcement learning focused on modifying the learning mechanism of the Markov Decision Process. Researches on training strategy to improve the performance of the MARL algorithm has not received enough attention. Therefore, this paper focuses on the improvement during training process and proposes a gradual promotion training strategy. It is mainly divided into two stages, single combat stage and multi combat stage. Scenario-transfer training, rule-based training, self-playing training and mixed training are used at single combat stage to obtain a strong single agent, namely the pretrain process. At multi combat stage, multi-agent training is introduced, which increases the complexity of the game, so that the strong single agent gradually adapts to the multi-agent task, and the strong multi agent is obtained. This paper combines these two stages of learning tasks with two popular multi-agent reinforcement learning methods, namely Deep Q-learning and Neural Fictitious Self-Play. The experiment found that the gradual promotion training strategy can effectively improve the winning rate and average reward of the agent. Compared with the un-pretrained agent, the average reward is improved by 25% and winning rate is improved by 44%; at the same time, it is an extremely convenient and easy training strategy to implement.



## Citation
```latex
@inproceedings{shen2022efficient,
  title={An efficient training strategy for multi-agent reinforcement learning in card games},
  author={Shen, Jiyuan},
  booktitle={2nd International Conference on Artificial Intelligence, Automation, and High-Performance Computing (AIAHPC 2022)},
  volume={12348},
  pages={770--780},
  year={2022},
  organization={SPIE}
}
```

[Download paper here](https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12348/123482V/An-efficient-training-strategy-for-multi-agent-reinforcement-learning-in/10.1117/12.2641866.full?SSO=1)