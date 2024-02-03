---
layout: article-no-related.njk
meta_title: "DnD 5e Monk Calculators"
meta_description: "Ever wonder exactly how much damage a monk can prevent with deflect missiles, or how many feet a monk can fall with slow fall? Here are some calculators."
author: "Brandon Gregory"
section_name: tools
tags: ['tools']
date: Last Modified
parent:
  name: Tools
  url: /5e-tools/
---

Ever wonder exactly how much damage a monk can prevent with deflect missiles, or how many feet a monk can fall with slow fall? Here are some calculators.

## DnD 5e Monk Deflect Missiles Calculator

Input your Monk level and Dexterity modifier below to see the average and minimum damage you can deflect. Average is just that: roughly a 50% chance of deflecting this much damage or more. Minimum means you’re guaranteed at least this much protection.

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

### Notes of Deflect Missiles

Deflect missiles has two layers of randomness, with a roll to reduce damage in addition to the enemy's damage roll. Let's look at some practical examples.

A skilled archer would probably have maxed Dexterity. With a longbow's average damage (4.5 + Dexterity mod), this would equal 9.5 damage for an average shot. With an average damage reduction roll, even a modestly skilled Monk (level 3, Dexterity modifier 3) could catch the arrow and throw it back.

A hunting rifle does 2d10 + Dexterity modifier damage, for an average of 16. A level 6 Monk with a 5 Dexterity modifer could catch a bullet from the rifle, assuming average rolls.

A Hill Giant's thrown rock attack does 3d10 + 5, or an average of 20.5 damage. With a higher-damage missile like that, it would take a level 10 Monk with a 5 Dexterity modifier to catch this.


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

### Notes on Slow Fall

Fall damage in DnD 5e caps out at 20d6, or 200 feet. This is essentially terminal velocity, so falling from 1000 feet and 200 feet will do the same damage. This means that if a Monk can safely fall 200 feet, he or she can fall safely from any height. With average damage rolls, this happens at level 15, but with the random nature of damage rolls, there's a chance you can negate more damage at earlier levels.