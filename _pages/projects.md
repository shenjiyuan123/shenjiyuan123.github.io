---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

{% include base_path %}

{% for projects in site.projects %}
  {% include archive-single.html %}
{% endfor %}
