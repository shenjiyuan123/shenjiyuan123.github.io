---
permalink: /
title: ""
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---


## About Me
Hello! I'm SHEN Jiyuan (沈纪元), a Data Scientist at SAP AI Lab. My work focuses on developing automated evaluation pipelines for model performance assessment and providing model and method discovery for performance optimization. Prior to joining SAP, I earned my Master of Engineering (M.Eng.) degree at Nanyang Technological University with the [SCRIPTS scholarship](https://www.ntu.edu.sg/scripts/home). I am fortunate to be supervised by Prof. [LAM, Kwok Yan](https://personal.ntu.edu.sg/kwokyan.lam/) during my studies, where I primarily focused on privacy-preserving federated learning and data-efficient learning techniques.
I obtained my B.Eng. degree with a major in Intelligent Science and Technology (Department of Computer Science and Engineering) from Shanghai University in 2022, under the supervision of Prof. [Xing Wu](https://scholar.google.com/citations?user=rRQ_BQIAAAAJ&hl=en). During my undergraduate studies, I had the opportunity to intern at [Bosch Corporate Research](https://www.bosch.com/), where I was mentored by Dr. Dong Chen and mainly conducted an individual research project on long-video action recognition.


My primary research interests lie in the following directions:
1. **Agent Evaluation Service**: Design, build and maintain an end-to-end agent evaluation platform—spanning synthetic data pipelines (in collaboration), static/dynamic user proxies, metric specification and validation, automated error handling, and stability/consistency analysis.
2. **LLM-Related Technique Benchmarking**: Develop a holistic evaluation framework for large language models, encompassing multi-modal LLM assessment, application-level AI performance evaluation, prompt optimization algorithms, and safety and security evaluation.
3. **Dataset Compression**: Data-efficient Learning, Dataset Distillation, One-shot FL
4. **Federated Learning**: Secure Aggregation, Fast Recovery from Poison Attacks, Model Inversion Attacks
5. **Computer Vision**: Object Detection, Semantic Segmentation, Data Generation, Portrait Beautification

---

## Selected Publications

{% include base_path %}
{% assign selected_pubs = site.publications | sort: "date" | reverse | where: "selected", true %}
{% for post in selected_pubs %}
  {% include archive-single-pub.html %}
{% endfor %}

<p style="text-align: right;"><a href="/publications/">View all publications &rarr;</a></p>

---

## Recent News
* January 26, 2026. 🎉 Our team's research paper [Talk, Evaluate, Diagnose: User-aware Agent Evaluation with Automated Error Analysis](https://openreview.net/forum?id=fHsVNklKOc&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3DICLR.cc%2F2026%2FConference%2FAuthors%23your-submissions)) has been accepted to the main track of International Conference on Learning Representations (ICLR 2026 Poster). The paper presents a holistic framework for agent evaluation, which can greatly help the design, benchmarking, and improvement of intelligent agents. We welcome the community to explore and use our toolkit. [[code]](https://github.com/SAP-samples/agent-quality-inspect)
* January 7, 2026. 🎉 My first author research paper **OCR or Not? Rethinking Document Information Extraction in the MLLMs Era with Real-World Large-Scale Datasets** is accepted by EACL 2026 industry track. I will fly to Morocco to participate in the conference in March and present my paper.
* July 27 to August 1st, 2025. ✈️ I participated in the 63rd Annual Meeting of the Association for Computational Linguistics (ACL 2025) in Vienna, Austria.
* March 27, 2025. 🎉 Our paper [Privacy-Preserving Federated Unlearning with Certified Client Removal](https://ieeexplore.ieee.org/document/10945483) is accepted by IEEE Transactions on Information Forensics & Security.
* January 10, 2025. 🎉 My first author research paper [Towards Efficient and Certified Recovery from Poisoning Attacks in Federated Learning](https://doi.org/10.1109/TIFS.2025.3533907) is accepted by IEEE Transactions on Information Forensics & Security. [[code]](https://github.com/shenjiyuan123/Adaptive_Recovery)
* November 6, 2024. 🎉 My master thesis "Data-efficient and privacy-enhanced knowledge discovery" has been successfully defended. Also, it is now officially recorded in the DR-NTU (Digital Repository of NTU). [[thesis]](https://dr.ntu.edu.sg/handle/10356/180955).
* July 16, 2024. 🎉 Our survey paper [A Survey on Federated Unlearning: Challenges, Methods, and Future Directions](https://dl.acm.org/doi/10.1145/3679014) is accepted by [ACM Computing Surveys](https://dl.acm.org/journal/csur) (Impact Factor: 23.8).
* July 1, 2024. 💼 I started my career as a Data Scientist in SAP AI LAB Singapore. Glad to have a connection with you via [linkedin](https://www.linkedin.com/in/shen-jiyuan/)!

<details>
<summary><strong>Older News</strong></summary>
<ul>
<li>Apr 15 2024. 📃 Our paper "Privacy-Preserving Federated Unlearning with Certified Client Removal" is uploaded. <a href="https://arxiv.org/abs/2404.09724#">[arxiv]</a></li>
<li>March 25, 2024. 👨‍💻 I made a presentation about the development and potential application of Dataset Distillation. <a href="https://docs.google.com/presentation/d/1rzKOw9eNgg4gqXfNcwnSKsAmhilHxxOg/edit?usp=sharing&ouid=105576136034076869833&rtpof=true&sd=true">[slide]</a></li>
<li>March 18, 2024. 🤔 I wrote a reflection about what I've mainly done over the past half year, including my struggles, choices, and rethinking throughout the job pursuit process. <a href="https://zhuanlan.zhihu.com/p/687816066">[zhihu]</a></li>
<li>January 30 - May 15, 2024. 💼 I began my second internship as an IoT Research Intern at the Corporate Research Center of <a href="https://www.bosch.com.sg">Robert Bosch (SEA) Pte Ltd</a>.</li>
<li>January 17, 2024. 🎉 My first author research paper <a href="https://shenjiyuan123.github.io/publication/FLEKD">Effective Intrusion Detection in Heterogeneous Internet-of-Things Networks via Ensemble Knowledge Distillation-based Federated Learning</a> is accepted by <a href="https://icc2024.ieee-icc.org">ICC 2024</a> (oral). <a href="http://shenjiyuan123.github.io/files/ICC24_FLEKD_compressed.pdf">[slide]</a></li>
<li>January 16, 2024. 📃 Our paper "Towards Efficient and Certified Recovery from Poisoning Attacks in Federated Learning" is uploaded. <a href="http://arxiv.org/abs/2401.08216">[arxiv]</a></li>
<li>October 31, 2023. 📃 Our survey paper about the promising field "Federated Unlearning" is uploaded. <a href="https://arxiv.org/abs/2310.10541">[arxiv]</a></li>
<li>October 16, 2023. 📃 My first paper about learning dataset structure (Dataset Distillation) is uploaded. <a href="https://arxiv.org/abs/2310.10541">[arxiv]</a></li>
<li>September, 2023. 🏆 I won the 15th prize in the <a href="https://aistudio.baidu.com/competition/detail/1022/0/leaderboard">Baidu Disk AI Competition: Beauty, Freckles and Acne Removal</a>. <a href="http://shenjiyuan123.github.io/files/beautify_comp.pdf">[report]</a></li>
<li>August 11, 2023. 🎉 I passed the qualification examination (QE).</li>
<li>November, 2022. 🎉 I finished the courseworks and got an average score of 4.17/5.0.</li>
<li>August 8, 2022. 🎉 I became a Master by research student at NTU and received a fully sponsored scholarship from the college.</li>
<li>July 5, 2022. 🎉 I successfully graduated from Shanghai University and won the honor title of outstanding graduate.</li>
<li>January 2022 - July 2022. 💼 I interned as a Visual Algorithm Researcher at the Corporate Research Center of <a href="https://www.bosch.com.cn">Bosch China Investment Co., Ltd</a>.</li>
<li>October 2021. 🎉 One paper is accepted by AIAHPC 2022. <a href="https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12348/123482V/An-efficient-training-strategy-for-multi-agent-reinforcement-learning-in/10.1117/12.2641866.full?SSO=1">[paper]</a></li>
<li>June 2021 - July 2021. 💼 I interned as an Algorithm Engineer at <a href="https://www.gm.com.cn/en/home.html">SAIC General Motors Co., Ltd</a>.</li>
<li>January 2021. 🏆 We won the 2nd national prize in the First Ocean Target Intelligent Perception International Challenge Competition (Top 3/200). <a href="http://shenjiyuan123.github.io/files/ocean_report.pdf">[report]</a> <a href="https://docs.google.com/presentation/d/1se30mVnJGSZinV80DN6nbGNVFiZttqbv/edit?usp=share_link&ouid=105576136034076869833&rtpof=true&sd=true">[slide]</a></li>
<li>November 2020. 🏆 We won the 3rd national prize in the <a href="https://www.heywhale.com/home/competition/5f34b039a5c0e8002d5d008e/leaderboard">Artificial Intelligence Application Competition</a> (Top 9/2100, 无人艇队) and were invited to share project experience in Zhuhai. <a href="http://shenjiyuan123.github.io/files/AIAC_report.pdf">[report]</a></li>
<li>June 2020. 🏆 We won the 2nd prize in the East China Division of the WeChat Applet Application Development Competition of the China University Computer Competition. <a href="https://youtu.be/_Lg85Zdr4nk">[demo]</a></li>
</ul>
</details>
