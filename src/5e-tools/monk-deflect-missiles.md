---
layout: article-no-related.njk
meta_title: "DnD 5e Monk Deflect Missiles Calculator"
meta_description: "Some brief numbers on the Monk's deflect missiles"
author: "Brandon Gregory"
section_name: tools
tags: ['tools']
date: Last Modified
parent:
  name: Tools
  url: /5e-tools/
---

Input your Monk level and Dexterity modified below to see the average and minimum damage you can deflect. Average is just that: roughly a 50% chance of doing this or better. Minimum means you’re guaranteed at least this much.

<table>
    <tr>
        <td>Monk Level</td>
        <td><input type="number" min="3" max="20" placeholder="3-20" id="deflect-missiles--monk-level"></td>
    </tr>
    <tr>
        <td>Dexterity Modifier</td>
        <td><input type="number" min="-5" max="8" placeholder="" id="deflect-missiles--dexterity-modifier"></td>
    </tr>
    <tr>
        <td>Average</td>
        <td><span id="deflect-missiles--average-damage"></span></td>
    </tr>
    <tr>
        <td>Minimum</td>
        <td><span id="deflect-missiles--minimum-damage"></span></td>
    </tr>
</table>
