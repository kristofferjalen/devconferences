---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

A list of software developer conferences in Europe, US and elsewhere. [Add](add) missing ones.

<table class="conferences">
    <thead>
        <tr>
            <th>What</th>
            <th>Where</th>
            <th>When</th>
        </tr>
    </thead>
    <tbody>
    {% assign conferences = site.data.conferences | where_exp: 'post', 'post.datefrom >= site.time' | sort: "datefrom"  %}
    {% for c in conferences %}
    {% assign fB = c.datefrom | date: "%b" %}
    {% assign tB = c.dateto | date: "%b" %}
    {% assign fY = c.datefrom | date: "%Y" %}
    {% assign tY = c.dateto | date: "%Y" %}
        <tr data-from="{{ c.datefrom }}">
            <td>
                <div>
                    <div class="icon"><img src="{{ c.favicon }}" /></div>
                    <div><a href="{{ c.url }}" target="_blank" rel="noopener noreferrer">{{ c.name }}</a></div>
                </div>
            </td>
            <td>
                <div>
                    <div class="icon"><span class="flag-icon flag-icon-{{ c.flag }}"></span></div>
                    <div>{{ c.location }}</div>
                </div>
            </td>
            <td>{{ c.datefrom | date: "%-d" }}{% if fB != tB %} {{ fB }}{% endif %}{% if fY != tY %} {{ fY }}{% endif %}{% if c.datefrom != c.dateto %} - {{ c.dateto | date: "%-d" }}{% endif %} {{ tB }} {{ tY }}</td>
        </tr>
    {% endfor %}
    </tbody>
</table>