---
template: page-sidebar
title: "Experiment Groups"
---

# Experiment Groups

<h4><p>You can put experiments in two different types of groups: **overlapping** and **mutually exclusive**. </p>

<p>To get started, create a Group in your project and mark it appropriately. When you create experiments ensure you have placed them in the correct group. </p></h4>

### Overlapping group

An overlapping group allows experiments to be brought together for organization or categorization. For example, grouping pricing tests that would not have the potential interaction effects together. This allows for teams to track types of experiments they are running with Optimizely. A user can be in multiple experiments within the same overlapping group. User bucketing is done at the experiment level, similar to non-grouped experiments.

### Mutually Exclusive

Developers should leverage mutually exclusive groups to bring experiments together to eliminate the interaction effects between experiments. You should create mutually exclusive experiments to ensure that certain groups of experiments never collide for the same user.  A user can be in at most one experiment per mutually exclusive group. User bucketing is first performed at the group level, where the user is bucketed into an experiment and will not be introduced to new experiments.


