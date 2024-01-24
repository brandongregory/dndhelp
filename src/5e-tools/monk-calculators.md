---
layout: article-no-related.njk
meta_title: "DnD 5e Monk Calculators"
meta_description: "Some brief numbers on the Monk's deflect missiles and slow fall"
author: "Brandon Gregory"
section_name: tools
tags: ['tools']
date: Last Modified
parent:
  name: Tools
  url: /5e-tools/
---

## DnD 5e Monk Deflect Missiles Calculator

Input your Monk level and Dexterity modified below to see the average and minimum damage you can deflect. Average is just that: roughly a 50% chance of deflecting this much damage or more. Minimum means you’re guaranteed at least this much protection.

<form id="deflect-missiles--form">
<table class="table--split">
    <tr>
        <td>Monk Level</td>
        <td><input type="number" min="3" max="20" placeholder="3-20" pattern="/^\d+$/" id="deflect-missiles--monk-level"></td>
    </tr>
    <tr>
        <td>Dexterity Modifier</td>
        <td><input type="number" min="-5" max="8" placeholder="-5-7" pattern="/^\d+$/" id="deflect-missiles--dexterity-modifier"></td>
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
</form>


## DnD 5e Monk Slow Fall Calculator

Shows how many feet you can safely fall with slow fall. Average is the amount of feet you can fall assuming average damage rolls. Max is the amount of feet you can fall with guaranteed 0 damage (maximum damage for all rolls).

Calculations are made by dividing damage by an average roll out of 6 (3.5), or max damage (6). Since damage is added in increments of 10 feet, it’s safe to round the totals up to the next ten minus one. For instance, 52 feet will have the same damage as 59 feet because rounding down to the nearest ten is 50 and neither has hit the next threshold (60).

<form id="slow-fall--form">
<table class="table--split">
    <tr>
        <td>Monk Level</td>
        <td><input type="number" min="4" max="20" placeholder="4-20" pattern="/^\d+$/" id="slow-fall--monk-level"></td>
    </tr>
    <tr>
        <td>Damage Reduction</td>
        <td><span id="slow-fall--damage"></span></td>
    </tr>
    <tr>
        <td>Feet (Average Damage)</td>
        <td><span id="slow-fall--average"></span></td>
    </tr>
    <tr>
        <td>Feet (Max Damage)</td>
        <td><span id="slow-fall--max"></span></td>
    </tr>
</table>
</form>