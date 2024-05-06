import{_ as a,o as s,c as e,R as o}from"./chunks/framework.44fd0451.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/dashboard.md","filePath":"guide/dashboard.md","lastUpdated":1715016176000}'),l={name:"guide/dashboard.md"},n=o(`<h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><p>搭建一个哪吒监控，你需要：</p><ol><li>一台可以连接公网的 VPS，防火墙和安全策略需要放行 8008 和 5555 端口，否则会无法访问和无法接收数据。单核 512MB 内存的服务器配置就足以满足大多数使用场景</li><li>一个已经设置好 A 记录，指向 Dashboard 服务器 ip 的域名</li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果你想使用 CDN，请准备两个域名，一个配置好 CDN 用作公开访问，CDN 需要支持 WebSocket 协议；另一个域名不要使用 CDN，用作 Agent 端与 Dashboard 的通信<br> 本文档分别以 &quot;dashboard.example.com&quot; 和 &quot;data.example.com&quot; 两个域名来演示</p></div><ol start="3"><li>一个 Github 账号（或：Gitlab、Gitee）</li></ol><p><strong>本文档将以宝塔面板反代面板的过程作为范例，随着未来版本的变化，部分功能的入口可能会发生改变，本文档仅供参考</strong></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>本项目并不依赖宝塔，你可以选择使用你喜欢的任何服务器面板，或手动安装 NginX 或 Caddy 来配置 SSL 和反代。<br> 如果你认为没有必要使用 80、443 端口来访问 Dashboard，你甚至不需要安装 NginX 就可以直接使用安装脚本安装并运行哪吒监控。</p></div><br><br><h2 id="获取-github-的-client-id-和密钥" tabindex="-1">获取 Github 的 Client ID 和密钥 <a class="header-anchor" href="#获取-github-的-client-id-和密钥" aria-label="Permalink to &quot;获取 Github 的 Client ID 和密钥&quot;">​</a></h2><p>哪吒监控接入 Github、Gitlab、Gitee 作为后台管理员账号</p><ol><li>首先我们需要新建一个验证应用，以 Github 为例，登录 Github 后，打开 <a href="https://github.com/settings/developers" target="_blank" rel="noreferrer">https://github.com/settings/developers</a> ，依次选择“OAuth Apps” - “New OAuth App”<br><code>Application name</code> - 随意填写<br><code>Homepage URL</code> - 填写面板的访问域名，如：&quot;<a href="http://dashboard.example.com" target="_blank" rel="noreferrer">http://dashboard.example.com</a>&quot; （你的域名）<br><code>Authorization callback URL</code> - 填写回调地址，如：&quot;<a href="http://dashboard.example.com/oauth2/callback" target="_blank" rel="noreferrer">http://dashboard.example.com/oauth2/callback</a>&quot; （不要忘记<code>/oauth2/callback</code>）</li><li>点击 “Register application”</li><li>保存页面中的 Client ID，然后点击 “Generate a new client secret“，创建一个新的 Client Secret，新建的密钥仅会显示一次，<strong>请妥善保存</strong></li></ol><h2 id="获取-cloudflare-access-作为-oauth2-提供方" tabindex="-1">获取 Cloudflare Access 作为 OAuth2 提供方 <a class="header-anchor" href="#获取-cloudflare-access-作为-oauth2-提供方" aria-label="Permalink to &quot;获取 Cloudflare Access 作为 OAuth2 提供方&quot;">​</a></h2><p>位于中国大陆的用户可能无法直接连接 Github，如您在使用 Github、Gitlab、Gitee 作为管理员账户登录时遇到问题，您可以优先考虑切换 <a href="/guide/q8.html">使用 Cloudflare Access 作为 OAuth2 提供方</a>作为登录方式</p><p><strong>新建 SaaS-OIDC 应用流程</strong></p><ol><li>前往 <a href="https://one.dash.cloudflare.com" target="_blank" rel="noreferrer">Zero Trust Dashboard</a>，使用 Cloudflare 账号登录；</li><li><code>My Team</code> -&gt; <code>Users</code> -&gt; <code>&lt;具体用户&gt;</code> -&gt; 获取 <code>User ID</code> 并保存；</li><li><code>Access</code> -&gt; <code>Application</code> -&gt; <code>Add an Application</code>；</li><li>选择 <code>SaaS</code>，在 <code>Application</code> 中输入自定义的应用名称（例如 nezha），选择 <code>OIDC</code> 后点击 <code>Add application</code>；</li><li><code>Scopes</code> 选择 <code>openid</code>, <code>email</code>, <code>profile</code>, <code>groups</code>；</li><li><code>Redirect URLs</code> 填写你的 callback 地址，例如 <code>https://dashboard.example.com/oauth2/callback</code>；</li><li>保存 <code>Client ID</code>、<code>Client Secret</code>、<code>Issuer</code> 地址中协议与域名的部分，例如 <code>https://xxxxx.cloudflareaccess.com</code></li></ol><p><strong>如使用此方式，安装 Dashboard 完成后，需要修改配置文件 <code>/opt/nezha/dashboard/data/config.yaml</code>，将 <code>Endpoint</code> 配置修改为之前保存的<code>Issuer</code>地址，例如 <code>https://xxxxx.cloudflareaccess.com</code>，保存后需重启 Dashboard</strong><br><br></p><h2 id="在服务器中安装-dashboard" tabindex="-1">在服务器中安装 Dashboard <a class="header-anchor" href="#在服务器中安装-dashboard" aria-label="Permalink to &quot;在服务器中安装 Dashboard&quot;">​</a></h2><ul><li>在面板服务器中，运行安装脚本：</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/naiba/nezha/master/script/install.sh</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nezha.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nezha.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./nezha.sh</span></span></code></pre></div><p>如果你的面板服务器位于中国大陆，可以使用镜像：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://gitee.com/naibahq/nezha/raw/master/script/install.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nezha.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nezha.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CN=</span><span style="color:#89DDFF;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./nezha.sh</span></span></code></pre></div><ul><li><p>等待 Docker 安装完毕后，分别输入以下值：<br><code>OAuth提供商</code> - github，cloudflare，gitlab，gitee 中选择一个<br><code>Client ID</code> - 之前保存的 Client ID<br><code>Client Secret</code> - 之前保存的 Client Secret<br><code>用户名</code> - OAuth 提供商中的用户名/User ID<br><code>站点标题</code> - 自定义站点标题<br><code>访问端口</code> - 公开访问端口，可自定义，默认 8008<br><code>Agent的通信端口</code> - Agent 与 Dashboard 的通信端口，默认 5555</p></li><li><p>输入完成后，等待拉取镜像<br> 安装结束后，如果一切正常，此时你可以访问域名+端口号，如 “<a href="http://dashboard.example.com:8008" target="_blank" rel="noreferrer">http://dashboard.example.com:8008</a>” 来查看面板</p></li><li><p>将来如果需要再次运行脚本，可以运行：</p></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">./nezha.sh</span></span></code></pre></div><p>来打开管理脚本<br><br><br></p><h2 id="配置反向代理" tabindex="-1">配置反向代理 <a class="header-anchor" href="#配置反向代理" aria-label="Permalink to &quot;配置反向代理&quot;">​</a></h2><ul><li><p>在宝塔面板中新建一个站点，域名填写公开访问域名，如 “<a href="http://dashboard.example.com" target="_blank" rel="noreferrer">http://dashboard.example.com</a>“ ，然后点击“设置”进入站点设置选项，选择“反向代理” - “新建反向代理”</p></li><li><p>自定义一个代理名称，在下方“目标 URL”中填入 <code>http://127.0.0.1</code> 然后点击“保存”</p></li><li><p>打开刚刚新建的反向代理右边的“配置文件”，将配置文件替换为以下内容：</p></li></ul><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#PROXY-START/</span></span>
<span class="line"><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#A6ACCD;">http://127.0.0.1:8008</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">Host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">     Upgrade </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_upgrade</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^/(ws|terminal/.+)$  </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#A6ACCD;">http://127.0.0.1:8008</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_http_version </span><span style="color:#A6ACCD;">1.1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">Upgrade </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_upgrade</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">Connection </span><span style="color:#C3E88D;">&quot;Upgrade&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> proxy_set_header </span><span style="color:#A6ACCD;">Host </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">http_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#PROXY-END/</span></span></code></pre></div><ul><li>点击“保存”<br> 现在，你应该可以直接使用域名，如：“<a href="http://dashboard.example.com" target="_blank" rel="noreferrer">http://dashboard.example.com</a>“ 来访问面板了<br><br></li></ul><h4 id="扩展内容" tabindex="-1">扩展内容： <a class="header-anchor" href="#扩展内容" aria-label="Permalink to &quot;扩展内容：&quot;">​</a></h4><ul><li><p>CaddyServer v1（v2 无需特别配置）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">proxy /ws http://ip:8008 {</span></span>
<span class="line"><span style="color:#A6ACCD;">    websocket</span></span>
<span class="line"><span style="color:#A6ACCD;">    header_upstream -Origin</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy /terminal/* http://ip:8008 {</span></span>
<span class="line"><span style="color:#A6ACCD;">    websocket</span></span>
<span class="line"><span style="color:#A6ACCD;">    header_upstream -Origin</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div></li></ul><br><br><h2 id="在宝塔面板中配置-ssl" tabindex="-1">在宝塔面板中配置 SSL <a class="header-anchor" href="#在宝塔面板中配置-ssl" aria-label="Permalink to &quot;在宝塔面板中配置 SSL&quot;">​</a></h2><p>首先，先暂时关闭反向代理<br> 正如在其他网站中配置 SSL 证书一样，进入站点设置中的 “SSL”，你可以选择自动申请 Let´s Encrypt 证书或手动配置已有的证书<br> 完成 SSL 的设置后，你需要回到 <a href="https://github.com/settings/developers" target="_blank" rel="noreferrer">https://github.com/settings/developers</a> ，编辑之前创建的验证应用程序，将之前我们填入的 &quot;Homepage URL&quot; 和 &quot;Authorization callback URL&quot; 中的域名全部从<code>http</code>改为<code>https</code>，如：&quot;<a href="https://dashboard.example.com" target="_blank" rel="noreferrer">https://dashboard.example.com</a>&quot; 和 &quot;<a href="https://dashboard.example.com/oauth2/callback" target="_blank" rel="noreferrer">https://dashboard.example.com/oauth2/callback</a>&quot; ，<strong>不更改此项可能会导致你无法登录面板后台</strong></p><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><h3 id="启用-https-后-terminal-或-ws-不能正常连接怎么办" tabindex="-1">启用 HTTPS 后 /terminal 或 /ws 不能正常连接怎么办? <a class="header-anchor" href="#启用-https-后-terminal-或-ws-不能正常连接怎么办" aria-label="Permalink to &quot;启用 HTTPS 后 /terminal 或 /ws 不能正常连接怎么办?&quot;">​</a></h3><p>常常是由于证书不完整造成的，请在 agent 运行参数中添加 -d，若 log 中有 x509:certificate signed by unknown authority,更换完整证书则可解决该问题。</p><h3 id="我对面板提供的数据修改-增加功能不满意-我想要自己修改-增加数据怎么办" tabindex="-1">我对面板提供的数据修改/增加功能不满意，我想要自己修改/增加数据怎么办？ <a class="header-anchor" href="#我对面板提供的数据修改-增加功能不满意-我想要自己修改-增加数据怎么办" aria-label="Permalink to &quot;我对面板提供的数据修改/增加功能不满意，我想要自己修改/增加数据怎么办？&quot;">​</a></h3><p>常见于批量插入 Agent 等需求中，可以直接修改数据库。<br> 请注意，数据库中并非什么都可以修改，错误的修改会导致数据混乱无法启动 Dashboard，<strong>请勿随意修改数据库！</strong></p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>再重复一遍，<strong>请勿随意修改数据库！</strong></p></div><p>如需要在数据库中修改数据，请先<strong>停止</strong>面板容器再修改。<br> 数据库类型是 sqlite3，位于 <code>/opt/nezha/dashboard/data/sqlite.db</code>，修改前请备份</p><h3 id="dashboard-会自动更新吗" tabindex="-1">Dashboard 会自动更新吗？ <a class="header-anchor" href="#dashboard-会自动更新吗" aria-label="Permalink to &quot;Dashboard 会自动更新吗？&quot;">​</a></h3><p>Agent通常情况下会自动更新，但Dashboard并不会，需要手动更新。</p><h3 id="如何更新-dashboard" tabindex="-1">如何更新 Dashboard？ <a class="header-anchor" href="#如何更新-dashboard" aria-label="Permalink to &quot;如何更新 Dashboard？&quot;">​</a></h3><p>运行脚本 <code>./nezha.sh</code> ，选择重启面板并更新</p>`,46),t=[n];function p(r,c,d,i,h,C){return s(),e("div",null,t)}const A=a(l,[["render",p]]);export{D as __pageData,A as default};
