# 短剧成稿师 · DeepSeek Harness

这是免费公开的短剧与漫剧剧本写作技能。安装后可用“帮我写前三集短剧剧本”“按大纲续写第 5 集”等请求调用。

## 插件安装

在 Harness 的 Discover 页面启用 **Custom plugin indexes**，添加本仓库提供的 `index.json` 地址，再安装「短剧成稿师」。也可在仓库目录执行：

```sh
dsh plugin --profile demo add ./drama-script-writer
```

插件会把 `drama-script-writer` 加入技能目录。可用 `dsh --profile demo --dump-config` 检查配置层。

## 直接安装技能

把 `drama-script-writer/SKILL.md` 放在项目的 `.dsh/skills/drama-script-writer/SKILL.md`，或用户目录 `~/.dsh/skills/drama-script-writer/SKILL.md`。Harness 会从这些目录发现技能。

本技能不调用外部服务，也不需要 API 密钥。源码见 `drama-script-writer/`。
