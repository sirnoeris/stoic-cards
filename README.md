# Stoic — Daily Wisdom

A mobile-first micro-learning web app for Stoic philosophy. Browse curated quotes, tap to reveal explanations and real-world scenarios, then test your understanding with quick comprehension checks.

**[Try it live →](https://sirnoeris.github.io/stoic-cards/)**

## Features

- **50 verified Stoic quotes** from Epictetus, Marcus Aurelius, and Seneca — with exact source references
- **3 audience modes**: Everyone (universal life scenarios), Teens (school, social media, growing up), and Parents (patience, presence, letting go)
- **150 unique cards** — each quote has mode-specific explanations, scenarios, and quiz questions
- **Shuffled every session** — Fisher-Yates randomisation so you never see the same order twice
- **Score tracking** — running tally of correct answers as you go
- **Completion screen** — tiered reward (Stoic Sage, Devoted Student, Growing Mind, Just Beginning) with your score and option to retry
- **Skip freely** — navigate between cards at any pace, no need to answer before moving on
- Tap-to-expand explanations with core meaning and modern scenarios
- Multiple-choice comprehension checks with kind feedback
- Light/dark mode with system preference detection
- Swipe navigation on mobile, keyboard arrows on desktop
- Clean, minimalist design optimised for phone screens

## Modes

| Mode | Audience | Scenarios |
|------|----------|-----------|
| Everyone | General | Work, relationships, daily life, personal growth |
| Teens | Ages 13–19 | School, social media, peer pressure, friendships, self-worth |
| Parents | Caregivers | Patience, modelling behaviour, letting go of control, being present |

## Sources

Quotes are drawn from primary Stoic texts with verified references:

- **Epictetus** (15 quotes) — Enchiridion, Discourses
- **Marcus Aurelius** (20 quotes) — Meditations
- **Seneca** (15 quotes) — Letters to Lucilius, On the Shortness of Life, On Anger, De Beneficiis

## Stack

- Vanilla HTML, CSS, JavaScript — no frameworks, no build step
- Zodiak (display) + Satoshi (body) from Fontshare
- Express static server for local dev
- Hosted on GitHub Pages

## Run locally

```bash
npm install express
node server.js
# Open http://localhost:5000
```

Or just open `index.html` directly in a browser — no server required for the app itself.

## License

MIT
