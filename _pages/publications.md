---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %} 
You can also find my articles on my [Google Scholar]({{ author.googlescholar }}) profile.
{% endif %}

{% include base_path %}

{% assign sorted_pubs = site.publications | sort: "date" | reverse %}
{% for post in sorted_pubs %} 
    {% include archive-single-pub.html %} 
{% endfor %}
