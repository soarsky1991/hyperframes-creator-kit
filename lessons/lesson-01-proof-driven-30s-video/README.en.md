# Lesson 01: From Real Screen Recording to a 30-Second Tutorial Video

Languages: [Chinese](README.md) · [English](README.en.md)

Goal: use HyperFrames to turn a real workflow recording into a 30-second tutorial video. This first lesson prioritizes trust, clarity, and reproducibility over complex animation.

## Output Structure

| Time | Visual | Teaching job |
|---:|---|---|
| 0-3s | Final result or before/after | Show what the learner gets |
| 3-8s | Input asset or problem scene | Make the problem concrete |
| 8-20s | Real screen recording plus step cards | Show the key operation |
| 20-26s | Output plus check command | Prove the workflow passed |
| 26-30s | Reuse checklist | Give the viewer a next step |

## Required Proof Asset

Use at least one real proof asset:

- Screen recording: operation, preview, render, or local check.
- Screenshot: input, process, or output.
- Terminal output: lint, preview, render, or other validation.

Do not use fake terminals, fake data, unauthorized media, or screenshots containing secrets.

## Agent Prompt

```text
Using the HyperFrames Creator Kit workflow, build a 30-second tutorial composition.

Requirements:
- Use the real proof asset as the trust anchor.
- Add 5 timed text cards: Result, Input, Steps, Check, Reuse.
- Keep all visible timed elements as clips.
- Add subtitles or an SRT handoff.
- Run the local check command after editing.
- Produce a publishing pack with title, cover direction, and risk review.
```

## Passing Standard

Mark the case `ready` only when it has:

- Real proof asset.
- Complete 30-second teaching arc.
- Check record.
- Publishing pack.
- Risk review.
