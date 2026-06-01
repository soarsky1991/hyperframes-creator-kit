# HyperFrames Creator Kit

<p align="center">
  <b>Proof-driven AI tutorial video training repo for HyperFrames creators and agent builders</b>
</p>

<p align="center">
  <a href="#zh-cn">简体中文</a> · <a href="#english">English</a>
</p>

<p align="center">
  <a href="LICENSE"><img alt="Code license: Apache-2.0" src="https://img.shields.io/badge/code-Apache--2.0-blue.svg"></a>
  <a href="LICENSE-docs"><img alt="Docs license: CC BY 4.0" src="https://img.shields.io/badge/docs-CC--BY--4.0-lightgrey.svg"></a>
  <a href="https://hyperframes.heygen.com/introduction"><img alt="HyperFrames" src="https://img.shields.io/badge/HyperFrames-video-111827.svg"></a>
  <img alt="Status" src="https://img.shields.io/badge/status-v0.1_training_seed-f59e0b.svg">
  <img alt="Language" src="https://img.shields.io/badge/language-ZH_first%20%2B%20EN-10b981.svg">
</p>

<a id="zh-cn"></a>

## 简体中文

**用 HyperFrames、真实录屏和 agent skills，把一次技术操作做成可信、可复现、可发布的 AI 教程视频。**

很多 AI 视频教程的问题不是不够炫，而是没有证据：没有真实录屏，没有失败修复，没有字幕交付，没有发布前审稿，也没有可以被别人复现的案例。本仓库把这些东西组织成训练营式课程。

### 先看这里

- 新手入口：[START_HERE.zh-CN.md](START_HERE.zh-CN.md)
- English start here: [START_HERE.en.md](START_HERE.en.md)
- 增长包装手册：[docs/viral-repo-packaging-analysis.zh-CN.md](docs/viral-repo-packaging-analysis.zh-CN.md)
- Growth playbook: [GROWTH_PLAYBOOK.zh-CN.md](GROWTH_PLAYBOOK.zh-CN.md) · [GROWTH_PLAYBOOK.en.md](GROWTH_PLAYBOOK.en.md)
- 培训 repo 完成度评估：[committees/training-repo-evaluation-2026-06-01.md](committees/training-repo-evaluation-2026-06-01.md)
- Agent skill：[skills/hyperframes-creator-kit/SKILL.md](skills/hyperframes-creator-kit/SKILL.md)
- i18n roadmap：[docs/i18n-roadmap.md](docs/i18n-roadmap.md)
- Governance：[GOVERNANCE.md](GOVERNANCE.md)

### 课程地图

| Lesson | 你会做出什么 | 关键爆款因子 | 当前状态 |
|---|---|---|---|
| [01](lessons/lesson-01-proof-driven-30s-video/README.md) | 从真实录屏做 30 秒教程视频 | build-from-proof, quick win | Ready as walkthrough |
| [02](lessons/lesson-02-subtitles-and-srt/README.md) | 双轨字幕：内嵌字幕 + SRT | saveable checklist | Draft lesson |
| [03](lessons/lesson-03-audio-motion/README.md) | BGM/SFX/动态文字卡不抢口播 | sensory polish | Draft lesson |
| [04](lessons/lesson-04-ai-broll-with-proof/README.md) | Seedance/GPT 图像只做解释，不替代证据 | integrity hook | Draft lesson |
| [05](lessons/lesson-05-publish-pack/README.md) | 封面、标题、SRT、发布文案、风险审稿 | publishable output | Draft lesson |

### 这个 repo 的钩子

1. **名字即承诺**：Creator Kit，不是散乱素材库。
2. **痛点强**：解决“AI 视频看起来漂亮但不可信”的焦虑。
3. **先给结果**：10 分钟入口和第一个 30 秒教程案例。
4. **可收藏**：课程表、清单、模板、评分卡。
5. **可参与**：缺案例、缺平台清单、失败复现都能作为小贡献。
6. **可信边界**：AI 生成素材必须服务教学，不能冒充真实操作证据。

### 快速使用

```bash
git clone https://github.com/soarsky1991/hyperframes-creator-kit.git
cd hyperframes-creator-kit
```

如果你在 Codex 或其他 agent 环境中使用：

```text
Use skills/hyperframes-creator-kit/SKILL.md to build a proof-driven HyperFrames tutorial video.
Start with lessons/lesson-01-proof-driven-30s-video/README.md.
```

### 当前是否“做完”

委员会结论：**没有。**

它现在适合作为 `v0.1 training seed` 公开发布，用来收集关注、案例需求和贡献；但如果按“培训 repo”标准，还需要至少 8-12 个可验证案例、示例素材、渲染截图、CI 检查、课程结业项目和真实学员作业。

这不是坏事。爆款教程 repo 往往先用清晰定位和第一批案例抢占心智，再通过 issue、PR、课程周更持续增长。

<a id="english"></a>

## English

**A proof-driven training repo for turning real technical workflows into HyperFrames AI tutorial videos.**

This is not a generic AI video template dump. It is a course-style repository for creators who want tutorials that are credible, reproducible, subtitled, reviewed, and publish-ready.

Start with:

- [START_HERE.zh-CN.md](START_HERE.zh-CN.md)
- [START_HERE.en.md](START_HERE.en.md)
- [GROWTH_PLAYBOOK.zh-CN.md](GROWTH_PLAYBOOK.zh-CN.md) · [GROWTH_PLAYBOOK.en.md](GROWTH_PLAYBOOK.en.md)
- [skills/hyperframes-creator-kit/SKILL.md](skills/hyperframes-creator-kit/SKILL.md)
- [committees/training-repo-evaluation-2026-06-01.md](committees/training-repo-evaluation-2026-06-01.md)
- [docs/i18n-roadmap.md](docs/i18n-roadmap.md)

### Lesson Map

| Lesson | What you build | Viral hook | Status |
|---|---|---|---|
| [01](lessons/lesson-01-proof-driven-30s-video/README.md) | A 30-second tutorial from real screen evidence | proof-first quick win | Ready as walkthrough |
| [02](lessons/lesson-02-subtitles-and-srt/README.md) | Burned-in captions plus SRT handoff | saveable checklist | Draft |
| [03](lessons/lesson-03-audio-motion/README.md) | BGM, SFX, and motion cards without hiding narration | sensory polish | Draft |
| [04](lessons/lesson-04-ai-broll-with-proof/README.md) | AI B-roll that explains but does not fake proof | integrity hook | Draft |
| [05](lessons/lesson-05-publish-pack/README.md) | Cover, title, SRT, copy, and risk review | publishable output | Draft |

### Positioning

The bigger idea is:

```text
Build your own AI video workflow from real proof assets.
```

This is broader than a HyperFrames tutorial and more trustworthy than a generic AI video automation repo.

Status: `v0.1 training seed`, not a finished full course.

Licenses: code, scripts, examples, templates, and skills use Apache-2.0; docs and curriculum text use CC BY 4.0.
