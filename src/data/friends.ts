/**
 * 友情链接数据配置（结构与 Mizuki 同款，便于互相迁移）。
 * 用于管理友情链接页面的数据：src/pages/friends.astro → organisms/FriendSection。
 *
 * 添加友链：在 friendsData 中追加一项即可，页面 / 筛选标签自动生成。
 * tags 会聚合为页面顶部的筛选 chip（OR 命中：选中多个标签时命中任一即显示）。
 */
export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Liang",
		imgurl: "https://img.api.123472.xyz/download/BQACAgUAAyEGAASoGLS9AAICq2roeZovZ0-ZTlQGCF4QFtQTb4-DAALjIgACm8FAV0-liTSomDCwPQQ.jpg",
		desc: "我的主站",
		siteurl: "https://ralsei.uk",
		tags: ["web"],
	},
{
		id: 2,
		title: "七彩李子",
		imgurl: "https://img.api.123472.xyz/download/BQACAgUAAyEGAASoGLS9AAICs2rogbXHHtYNT4b6uF-mj8EMBMd-AAIFIwACm8FAV_UaMG25vDpiPQQ.jpg",
		desc: "会画画的好朋友",
		siteurl: "https://b23.tv/9kU0qHM",
		tags: ["friend"],
	},
];

// 获取所有友情链接数据（稳定顺序，测试可复现）
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据（避免固定排序，按需使用）
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
