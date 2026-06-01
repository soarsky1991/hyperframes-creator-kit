# HyperFrames Creator Kit

<p align="center">
  <b>Proof-first tutorial video workflow for HyperFrames creators and agent builders</b>
</p>

<p align="center">
  <a href="README.md">简体中文</a> · <a href="README.en.md">English</a>
</p>

<p align="center">
  <a href="LICENSE"><img alt="Code license: Apache-2.0" src="https://img.shields.io/badge/code-Apache--2.0-blue.svg"></a>
  <a href="LICENSE-docs"><img alt="Docs license: CC BY 4.0" src="https://img.shields.io/badge/docs-CC--BY--4.0-lightgrey.svg"></a>
  <a href="https://hyperframes.heygen.com/introduction"><img alt="HyperFrames" src="https://img.shields.io/badge/HyperFrames-video-111827.svg"></a>
  <img alt="Status" src="https://img.shields.io/badge/status-v0.1_public_preview-f59e0b.svg">
  <img alt="Language" src="https://img.shields.io/badge/language-ZH_first%20%2B%20EN-10b981.svg">
</p>

**用 HyperFrames、真实录屏和 agent skills，把一次技术操作做成可信、可复现、可发布的教程视频。**

这个仓库关注一个具体问题：教程视频不只要好看，还要让观众看见真实过程、检查结果和可复用交付物。它提供课程、模板、质量审稿清单和一个最小可运行示例，帮助创作者从真实素材开始制作教程。

### 开始使用

- 新手入口：[START_HERE.zh-CN.md](START_HERE.zh-CN.md)
- English start here: [START_HERE.en.md](START_HERE.en.md)
- 可运行示例：[examples/lesson-01-proof-driven-30s-video](examples/lesson-01-proof-driven-30s-video)
- 公开沟通规范：[docs/public-communications.md](docs/public-communications.md)
- 版本就绪度：[docs/release-readiness.md](docs/release-readiness.md)
- 多语言计划：[docs/i18n-roadmap.md](docs/i18n-roadmap.md)
- Agent skill：[skills/hyperframes-creator-kit/SKILL.md](skills/hyperframes-creator-kit/SKILL.md)

### 课程地图

| Lesson | 你会做出什么 | 价值 | 状态 |
|---|---|---|---|
| [01](lessons/lesson-01-proof-driven-30s-video/README.md) | 从真实录屏做 30 秒教程视频 | 建立 proof-first 工作流 | Walkthrough ready |
| [02](lessons/lesson-02-subtitles-and-srt/README.md) | 双轨字幕：内嵌字幕 + SRT | 提高可访问性和复用性 | Draft |
| [03](lessons/lesson-03-audio-motion/README.md) | BGM/SFX/动态文字卡不抢口播 | 提升观看体验 | Draft |
| [04](lessons/lesson-04-ai-broll-with-proof/README.md) | AI B-roll 只做解释，不替代证据 | 保持可信边界 | Draft |
| [05](lessons/lesson-05-publish-pack/README.md) | 封面、标题、SRT、发布文案、风险审稿 | 完成发布前准备 | Draft |

### 快速验证

```bash
git clone https://github.com/soarsky1991/hyperframes-creator-kit.git
cd hyperframes-creator-kit
npm run check
```

运行最小 HyperFrames 示例：

```bash
cd examples/lesson-01-proof-driven-30s-video
npm run check
```

如果你在 Codex 或其他 agent 环境中使用：

```text
Use skills/hyperframes-creator-kit/SKILL.md to build a proof-first HyperFrames tutorial video.
Start with lessons/lesson-01-proof-driven-30s-video/README.md.
```

### 当前状态

这是 `v0.1 public preview`。它已经包含清晰的课程结构、模板、审稿清单和一个可运行示例；还不是完整训练课程。

后续需要补齐：

- 8-12 个真实案例。
- 可公开的录屏、截图和检查输出。
- README 首屏演示 GIF 或短视频。
- 更多课程配套示例和学习者作业入口。
