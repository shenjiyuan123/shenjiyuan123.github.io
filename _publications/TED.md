---
title: "Talk, Evaluate, Diagnose: User-aware Agent Evaluation with Automated Error Analysis"
collection: publications
permalink: /publication/TED
date: 2026-01-26
excerpt: 'Penny Chong, Harshavardhan Abichandani, Jiyuan Shen, Atin Ghosh, Min Moe, Yifan Mai, Daniel Dahlmeier'
venue: International Conference on Learning Representations (ICLR)
paperurl: 'https://arxiv.org/abs/2603.15483'
codeurl: 'https://github.com/SAP-samples/agent-quality-inspect'
slideurl: '/files/TED_SlideDeck_ICLR2026.pdf'
posterurl: '/files/TED_Poster_ICLR2026_185cmx90cm_landscape_PRINT.pdf'
selected: true
header:
  teaser: "pubs/TED.png"
---


## Abstract

Agent applications are increasingly adopted to automate workflows across diverse tasks. However, due to the heterogeneous domains they operate in, it is challenging to create a scalable evaluation framework. Prior work each employ their own methods to determine task success, such as database lookups, regex match, etc., adding complexity to the development of a unified agent evaluation approach. Moreover, they do not systematically account for the user's role nor expertise in the interaction, providing incomplete insights into agent's performance. To address these shortcomings, we propose the TED framework (Talk, Evaluate, Diagnose). In the Talking stage, we decouple user personas from task instructions and introduce a user-aware agent evaluation framework based on reusable, generic persona templates enabling diverse and systematic creation of test scenarios. In the Evaluation stage, we adapt existing datasets by representing subgoals -- such as tool signatures, and responses -- as natural language grading notes, and evaluate them with LLM-as-a-judge. We propose new metrics that capture not only partial progress and task success, but also the efficiency of task progression -- measured in conversational turns. In the Diagnosis stage, we introduce an automated error analysis tool that examines inconsistencies of both agents and LLM-as-a-judge, automatically identifies errors, and offers actionable feedback. The TED framework reveals new insights regarding agent performance across models and user expertise levels. We also demonstrate potential gains in agent performance with peaks of 8-10% on our proposed metrics after incorporating the identified error remedies into the agent's design.

[Download paper here](https://arxiv.org/abs/2603.15483)

[Code](https://github.com/SAP-samples/agent-quality-inspect)
