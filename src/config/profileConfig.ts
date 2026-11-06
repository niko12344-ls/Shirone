import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "assets/images/avatar.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Liang",
	bio: "暂时没有哦",
	links: [
{
    name: "Telegram",
    icon: "fa6-brands:telegram",
    url: "https://t.me/niko6525",
  },
  {
    name: "QQ",
    icon: "fa6-brands:qq",
    url: "https://qm.qq.com/q/UegFRoKqEU",
  },
  {
    name: "Email",
    icon: "material-symbols:mail-outline-rounded",
    url: "mailto:ralsei@ralsei.uk",
  },
  {
    name: "RSS",
    icon: "fa6-solid:rss",
    url: "https://blog.ralsei.uk/rss.xml",
  },
],
});
