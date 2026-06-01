# Public Communications

Languages: [Chinese](public-communications.md) · [English](public-communications.en.md)

This project separates internal planning from public-facing copy. Public documentation should address creators, developers, and learners. It should explain what the project does, what is currently implemented, how to verify it, and how to contribute.

## Principles

- Explain the use case without inflated marketing claims.
- State the current status without implying a finished full course.
- Show verification paths, demos, checks, and limitations.
- Keep AI visuals as explanatory material, not a substitute for real workflow proof.
- Keep human review in the loop for privacy, copyright, platform rules, and subtitles.

## Review Roles

| Role | Review focus |
|---|---|
| Editorial Lead | README, lesson copy, and release notes are clear and restrained |
| Proof Reviewer | Real screen recording, screenshot, output, or capture plan exists |
| Technical Reviewer | HyperFrames examples and check commands run |
| Risk Reviewer | Privacy, secret, account, copyright, and claim risks are reviewed |
| Translation Reviewer | Chinese and English match without breaking commands or filenames |

## Before Publishing

Check that the copy treats readers as learners, states limitations clearly, avoids internal planning language, and passes `npm run check:public-language`.
