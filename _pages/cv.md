---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Full version can be downloaded here: [Chinese](http://shenjiyuan123.github.io/files/resume_cn.pdf), [English](http://shenjiyuan123.github.io/files/resume_en.pdf).

Education
======
* Research Master in Singapore, Nanyang technological University, 2022-
* B.S. in China, Shanghai University, 2018-2022

Work experience
======
* Jan-June 2022: Algorithm Intern 
  * Corporate Research, Bosch
  * Projects: [Know your motion](http://shenjiyuan123.github.io/posts/2022/06/AS_video/)
  * Supervisor: PhD. Dong Chen

* July-Aug 2021: IT Intern
  * SAIC General Motors Co., Ltd.
  * Duties included: 
    * Convert from SAS to Python
    * Vehicle parts automatic inspection
  * Supervisor: Lin Lin
  
Skills
======
Python, c++


<!-- Publications
======
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Projects
======
  <ul>{% for post in site.projects %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul> -->

Publications
======
  <ul>{% assign sorted_publications = site.publications | sort: "date" | reverse %}
    {% for post in sorted_publications %}
      {% include archive-single-cv.html %}
    {% endfor %}</ul>

Projects
======
  <ul>{% assign sorted_projects = site.projects | sort: "date" | reverse %}
    {% for post in sorted_projects %}
      {% include archive-single-cv.html %}
    {% endfor %}</ul>


Honors & Awards
======
* 2022 Shanghai University Outstanding Graduate
* 2020 Shanghai University Academic Excellence Scholarship

Service
======
* Volunteer in DFRWS 2023 APAC
