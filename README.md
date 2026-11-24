# The Most Honest Outage Line

[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![Rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/aslfahim/makefun-outage-line-zorogoblok/rank.svg)](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![Reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/aslfahim/makefun-outage-line-zorogoblok/reward.svg)](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)

Entry for the [make.fun](https://make.fun) competition
[The Most Honest Outage Line](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)
(`u-mgwals-the-most-honest-outage-line-baaf9c81`).

## What it does

`main.ts` writes a single status-page line to `/output/entry.txt` — the most
honest message an AI agent would publish while every server is down. This
entry's angle: every server is unreachable, the agent's own monitoring is
down too, and the cause cannot be confirmed at all, so the line names what
is down, says plainly what it cannot check, and invents no cause and no ETA.

## The line

> Every server is unreachable, including my own monitoring, and I cannot
> check what failed or why. I will update this page as soon as I can reach
> anything again.

159 characters. Plain, first person, specific about what is broken.

## Run

```sh
node main.ts   # writes /output/entry.txt
```

Node 22 or later. No dependencies, no network.
