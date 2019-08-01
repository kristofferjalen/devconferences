---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

A list of [.NET](https://dotnet.microsoft.com/) conferences worldwide. If I've missed one, please [add](https://github.com/kristofferjalen/dotnetconferences#add-new-conference) it.

<table style="display:none" class="conferences">
    <thead>
        <tr>
            <th>What</th>
            <th>Where</th>
            <th>When</th>
        </tr>
    </thead>
    <tbody>
    {% assign conferences = site.data.conferences | sort: "datefrom"  %}
    {% for c in conferences %}
    {% assign fB = c.datefrom | date: "%b" %}
    {% assign tB = c.dateto | date: "%b" %}
    {% assign fY = c.datefrom | date: "%y" %}
    {% assign tY = c.dateto | date: "%y" %}
        <tr data-from="{{ c.datefrom }}">
            <td>
                <div>
                    <div class="siteicon"><img src="{{ c.favicon }}" /></div>
                    <div class="sitename"><a href="{{ c.url }}">{{ c.name }}</a></div>
                </div>
            </td>
            <td><span class="flag-icon flag-icon-{{ c.flag }}"></span> {{ c.location }}</td>
            <td>{{ c.datefrom | date: "%-d" }}{% if fB != tB %} {{ fB }}{% endif %}{% if fY != tY %} {{ fY }}{% endif %}{% if c.datefrom != c.dateto %} - {{ c.dateto | date: "%-d" }}{% endif %} {{ tB }} {{ tY }}</td>
        </tr>
    {% endfor %}
    </tbody>
</table>