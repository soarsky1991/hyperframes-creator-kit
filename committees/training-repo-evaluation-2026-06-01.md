# Training Repo Evaluation Committee

日期：2026-06-01

问题：从培训 repo 的视角看，`hyperframes-creator-kit` 做完了吗？

结论：**没有做完。当前是可以公开的 v0.1 training seed，不是完整培训 repo。**

## 委员会设置

| 委员会 | 评估问题 | 权重 |
|---|---|---:|
| Positioning Committee | 名字、承诺、受众是否清楚 | 15 |
| Curriculum Committee | 是否有课程路径、章节递进、练习 | 20 |
| Case Library Committee | 是否有足够真实案例 | 20 |
| Proof Asset Committee | 是否有录屏、截图、输出、检查证据 | 15 |
| HyperFrames QA Committee | 是否有 runnable example、check、render 验证 | 10 |
| Growth Packaging Committee | README、badge、quickstart、贡献入口是否能传播 | 10 |
| Integrity Committee | 是否避免假结果、隐私泄露、夸大宣传 | 10 |

## 当前评分

| 维度 | 分数 | 说明 |
|---|---:|---|
| Positioning | 13/15 | `proof-driven HyperFrames tutorial video` 足够清楚 |
| Curriculum | 12/20 | 有 5 课地图，但 lesson 02-05 仍偏草案 |
| Case Library | 5/20 | 只有 Lesson 01 接近完整，缺真实案例库 |
| Proof Asset | 6/15 | 已建立 proof-first 标准，但仓库还没有公开可复用素材 |
| HyperFrames QA | 3/10 | 暂无可运行 mini composition 和 CI |
| Growth Packaging | 8/10 | README、Start Here、贡献入口、分析文档已具备 |
| Integrity | 9/10 | 明确不把 AI B-roll 冒充真实证据 |

总分：**56/100**

## 判定

| 状态 | 是否达成 |
|---|---|
| 可公开 seed | 是 |
| 可做 GitHub 爆款雏形 | 是 |
| 可称为完整培训 repo | 否 |
| 可称为生产级 HyperFrames 课程 | 否 |

## 完整培训 repo 的最低标准

### 必须有 8-12 个案例

建议案例：

1. 真实录屏转 30 秒教程。
2. 双语字幕和 SRT 交付。
3. BGM/SFX ducking。
4. Seedance B-roll 只做解释镜头。
5. 失败 render 修复复盘。
6. 封面和标题 A/B。
7. X/Bilibili/Xiaohongshu 发布包。
8. 竖屏和横屏变体。
9. 口播 A-roll + 屏幕录制组合。
10. 从 GitHub issue 生成教程。
11. 从课程讲义生成视频脚本。
12. 完整毕业项目。

### 每个案例必须有

- Learner promise。
- Proof asset 类型。
- 制作步骤。
- HyperFrames 注意事项。
- 验收清单。
- 发布包。
- 风险审稿。

### 至少 3 个案例必须有真实素材

包括：

- 录屏或截图。
- 检查输出。
- 生成后的视频截图。
- 发布包样例。

## 下一步建议

1. 先公开 `v0.1`，把定位占住。
2. 立刻补一个真正可跑的 Lesson 01 mini project。
3. 再补 4 个案例，形成 `5 lessons in 5 days` 的传播节奏。
4. 每个案例都配一个 issue，让别人能请求/补充自己的工作流。
5. 等有 3 个真实案例后，再推 Reddit、HN 或英文技术社区。
