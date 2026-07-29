# BDLNow Copy Analysis

## Core Story

The New York Fed screen proves the model can be public, but it still reads like a tool for economists. The key number is hard to scan, confidence is expressed through statistical mechanics, and the reader has to work to understand whether the estimate matters.

BDLNow solves that by designing around three simple reader questions:

1. Where is Canada's GDP growth now?
2. What changed the estimate this week?
3. Can I trust the model over time?

## Problem To Solution Map

| NY Fed friction | BDLNow response | Copy angle |
| --- | --- | --- |
| The estimate is buried in text or revealed through chart interaction. | Put the current nowcast directly on the chart with plain-language summary text. | Make the answer visible before asking users to interpret the model. |
| Probability bands require statistical confidence to understand. | Use the Bloomberg Survey Range as a familiar benchmark. | Replace statistical abstraction with a consensus frame. |
| The model's credibility is not obvious to non-experts. | Show actual GDP, current nowcasts, and historical nowcast points together. | Let users judge the model's track record in one view. |

## Ready-To-Use Page Copy

### Hero

**Headline**
Making Canada's real-time GDP estimate readable beyond the economics team

**Body**
BDLNow is the Business Data Lab's weekly nowcast of Canada's GDP growth. The model uses 45 economic indicators to estimate growth months before official Statistics Canada data is released. I redesigned the experience so journalists, policy teams, and business leaders could understand the current estimate, what moved it, and how much confidence to place in it.

### Problem

**Headline**
The model was credible. The answer was not easy to find.

**Body**
Official quarterly GDP data arrives roughly 60 days after the quarter ends. By then, many hiring, investment, and policy decisions are already in motion. The BDL model could estimate growth in real time, but the interface needed to translate that model into something a non-economist could read quickly and trust.

**Problem Cards**

**01 - The 60-day blind spot**
GDP is one of the clearest signals of economic direction, but the official number arrives after many decisions have already been made.

**02 - Expert-first presentation**
The reference experience explained uncertainty through probability bands, intervals, and statistical language. That worked for specialists, but created friction for public readers.

**03 - Missing interpretation**
A number alone was not enough. Users needed to know whether the estimate was high or low, what changed it, and whether the model had been reliable before.

**Design Mission**
Turn an economist-facing model into a public product that explains the number, the movement, and the confidence behind it.

### Research / Comparative Audit

**Headline**
The NY Fed gave us the benchmark and the warning sign.

**Body**
I used the New York Fed Staff Nowcast as a comparative audit because BDLNow is based on the same model family. The NY Fed page proved that a nowcast could be made public, but it also showed why public does not automatically mean readable.

When colleagues outside the economics team reviewed the screen, they struggled to identify the current GDP estimate quickly. Even after finding it, the probability bands and interval tables made the estimate feel technical instead of actionable.

**Audit Insight**
The issue was not the model. It was the hierarchy. The interface foregrounded statistical structure before it answered the reader's first question: "What is the estimate right now?"

### NY Fed vs BDLNow

**NY Fed**
The current estimate is visually underplayed. It sits inside a dense chart system, supported by probability bands, a density curve, and interval tables. The reader can access the information, but only after understanding how to read the model.

**BDLNow**
The current estimate is visible immediately. The chart pairs the nowcast with the Bloomberg Survey Range, so readers can judge the estimate against professional consensus without needing to understand confidence intervals.

**Bridge Copy**
Same model logic. Different communication strategy. BDLNow moves from "how the model works" to "what the reader needs to know first."

### Design

**Headline**
Conclusion first, evidence one layer deeper.

**Body**
I organized the platform around the order people naturally ask questions. The first view answers where GDP growth stands today. The second explains what moved the estimate. The third shows how the nowcast compares with actual GDP over time.

### Section 1 - Weekly GDP Nowcast

**Question It Answers**
Where is GDP growth now?

**Copy**
The weekly nowcast makes the current GDP estimate visible as soon as the page loads. The purple line shows BDLNow's estimate over time, while the Bloomberg Survey Range gives readers an immediate consensus benchmark. Instead of asking users to interpret probability bands, the chart shows whether the estimate sits inside or outside the range of professional forecasters.

**Feature Cards**

**Estimate and consensus in one view**
BDLNow's line and the Bloomberg range appear together, so users can read the estimate and its context without switching views.

**Exact value on hover**
Each data point reveals the nowcast value and release date, supporting deeper inspection without hiding the main trend.

**Trend visible at a glance**
The full quarter is shown on load, making the direction of the economy readable before users interact with the chart.

### Section 2 - Impact Analysis

**Question It Answers**
What moved the estimate this week?

**Copy**
Impact Analysis turns a model output into an explanation. The stacked bars show how each category of incoming data pushed the nowcast up or down. The data-release table below lets users inspect the specific indicators behind each weekly move, including descriptions, transformation methods, and sources.

**Feature Cards**

**Grouped by meaning**
Indicators are organized into categories such as Consumption, Production, Financial, Labour, and Other, so readers can understand economic drivers instead of decoding source datasets.

**Expandable release table**
Each row can expand to show what the indicator measures, how it was transformed, and where the data came from.

**Movement, not just measurement**
The section explains why the estimate changed, not only what the new number is.

### Section 3 - Actual And Nowcast Quarterly GDP Growth

**Question It Answers**
Can I trust the model?

**Copy**
The quarterly view places official GDP and BDLNow estimates in the same chart. Light blue bars show actual historical GDP growth, purple bars show current nowcasted quarters, and historical nowcast dots show what the model estimated before official data arrived. This gives readers a quick way to judge the model's track record.

**Feature Cards**

**Actuals and estimates together**
Users can compare official GDP and nowcasted quarters without moving between charts.

**Historical nowcast dots**
Past nowcast points reveal how the model performed before the final official number was published.

**Trust through comparison**
The chart supports confidence by showing model behavior over time, not just the latest estimate.

### Outcome

**Headline**
A public nowcast that people can actually read.

**Body**
BDLNow launched as a free public tool for tracking Canada's GDP growth before official quarterly data is released. The final product makes the latest estimate, weekly drivers, and model history available in one experience, updated every Monday without editorial adjustment or a paywall.

**Metric Copy**

**About 60 days earlier**
BDLNow gives decision-makers a credible estimate while official GDP data is still being prepared.

**Updated every Monday**
The estimate refreshes as new economic indicators are released, keeping the signal current through the quarter.

**45 indicators**
The model draws from retail, employment, housing, commodity, and financial-market data to avoid relying on a single signal.

### Learning

**Headline**
Designing the interface meant learning the model.

**Body**
This project taught me that data visualization is not only a layout problem. To design the right hierarchy, I had to understand what the model was estimating, what moved the number each week, and what level of confidence a reader could reasonably take from it.

The strongest design decision was to stop treating the chart as the explanation. The explanation had to be built into the structure: current estimate first, drivers second, credibility third.
