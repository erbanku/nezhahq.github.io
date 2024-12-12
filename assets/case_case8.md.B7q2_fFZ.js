import{_ as e,c as o,o as a,a4 as l}from"./chunks/framework.BmdFiWrL.js";const u=JSON.parse('{"title":"Serverless 哪吒 Telegram 机器人","description":"","frontmatter":{},"headers":[],"relativePath":"case/case8.md","filePath":"case/case8.md","lastUpdated":1733991694000}'),r={name:"case/case8.md"},t=l('<h1 id="serverless-哪吒-telegram-机器人" tabindex="-1">Serverless 哪吒 Telegram 机器人 <a class="header-anchor" href="#serverless-哪吒-telegram-机器人" aria-label="Permalink to &quot;Serverless 哪吒 Telegram 机器人&quot;">​</a></h1><p>贡献者:</p><ul><li><a href="https://codeberg.org/uubulb" target="_blank" rel="noreferrer">uubulb</a></li></ul><p>项目地址：<a href="https://github.com/swkisdust/plain-nezha-bot" target="_blank" rel="noreferrer">https://github.com/swkisdust/plain-nezha-bot</a></p><p>单用户单面板多语言私聊哪吒 Telegram 机器人，可以在 Cloudflare Workers 上部署。</p><p>Inspired by <a href="https://github.com/nezhahq/Nezha-Telegram-Bot-V1" target="_blank" rel="noreferrer">https://github.com/nezhahq/Nezha-Telegram-Bot-V1</a></p><h2 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h2><ol><li>Clone 本项目，运行 <code>npm install</code> 安装依赖。</li><li>用你喜欢的方式创建一个 Workers KV 命名空间，保存下 ID。</li><li>修改 <code>wrangler.toml</code>，将 <code>kv_namespaces</code> 字段改为你创建的 KV 信息。</li><li>修改 <code>wrangler.toml</code> 中的 <code>vars</code>：</li></ol><ul><li><code>NZ_BASEURL</code>：面板地址，例如 <code>https://ops.naibahq.com</code>。</li><li><code>LANG</code>：语言，可选 <code>en</code> <code>zh-CN</code>，默认为 <code>en</code>。</li><li><code>ENDPOINT_PATH</code>：接收 Telegram Webhook 的路由路径，例如 <code>/endpoint</code>。</li></ul><ol start="5"><li>创建以下 Secrets：</li></ol><ul><li><code>TELEGRAM_BOT_TOKEN</code>：从 BotFather 那里获取的机器人 Token。</li><li><code>TELEGRAM_SECRET</code>：Webhook 认证密钥。</li><li><code>TELEGRAM_UID</code>：用户 UID，机器人将不会与除此 UID 外的任何人互动。</li><li><code>PASSWORD</code>：基本认证密码，用于进行 注册 / 取消注册 / 刷新 Token 操作。</li><li><code>NZ_USERNAME</code>：面板用户名，用于初次认证及后续刷新。</li><li><code>NZ_PASSWORD</code>：面板密码，用于初次认证及后续刷新。</li></ul><ol start="6"><li>输入 <code>npx wrangler deploy</code> 部署项目。</li></ol><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>访问 <code>/register</code> 路由注册 Webhook 即可开始使用。</p><p>如暂时不需使用，可以访问 <code>/unregister</code> 删除 Webhook。</p><p>默认每 30 分钟触发一次 Token 刷新操作，可以在 <code>wrangler.toml</code> 中手动修改，或是访问 <code>/refresh</code> 手动刷新。</p>',16),c=[t];function d(s,i,n,h,p,_){return a(),o("div",null,c)}const b=e(r,[["render",d]]);export{u as __pageData,b as default};
