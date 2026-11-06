/**
 * 时间线页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/timelineConfig.ts 控制。
 */
import type { TimelineItem } from "@/types/timelineConfig";

export const timelineData: TimelineItem[] = [
	{
  title: "从 Rin 迁移至 Shirone",
  date: "2026-11-06",
  description: "将个人博客从 Rin 迁移至 Shirone，开启新的博客阶段。",
  tags: ["博客", "迁移"],
},
];

/** 获取所有时间线数据列表 */
export function getTimelineList(): TimelineItem[] {
	return timelineData;
}
