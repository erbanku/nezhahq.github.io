import{_ as s,o as a,c as n,R as l}from"./chunks/framework.1625126e.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/settings.md","filePath":"guide/settings.md","lastUpdated":1687190167000}'),o={name:"guide/settings.md"},p=l(`<h2 id="站点标题" tabindex="-1">站点标题 <a class="header-anchor" href="#站点标题" aria-label="Permalink to &quot;站点标题&quot;">​</a></h2><p>你可以在此项中自定义你的站点标题 <br></p><h2 id="管理员列表" tabindex="-1">管理员列表 <a class="header-anchor" href="#管理员列表" aria-label="Permalink to &quot;管理员列表&quot;">​</a></h2><ul><li><p>如果你修改了自己的 Github, Gitlab, Jihulab 或 Gitee 的用户名，可以在此项中同步修改，否则无法登录，多个用户请用逗号隔开: <code>user1,user2</code></p></li><li><p>如需更改管理员账户，请前往 <code>/opt/nezha/dashboard/data/config.yaml</code> ，重新设置新的管理员 <code>Client ID</code> 和 <code>Client Secret</code><br></p></li></ul><h2 id="主题" tabindex="-1">主题 <a class="header-anchor" href="#主题" aria-label="Permalink to &quot;主题&quot;">​</a></h2><p>在这里选择主页主题，如果选项中没有某个已存在的主题，请更新面板 <br></p><h2 id="language" tabindex="-1">Language <a class="header-anchor" href="#language" aria-label="Permalink to &quot;Language&quot;">​</a></h2><p>哪吒监控目前支持以下语言：</p><ul><li>简体中文</li><li>English</li><li>Español</li></ul><p><a href="https://crowdin.com/project/nezha" target="_blank" rel="noreferrer"><img src="https://badges.crowdin.net/nezha/localized.svg" alt="Crowdin"></a><br> 我们欢迎您对翻译进行勘误和贡献更多语言 <br></p><h2 id="自定义代码" tabindex="-1">自定义代码 <a class="header-anchor" href="#自定义代码" aria-label="Permalink to &quot;自定义代码&quot;">​</a></h2><p>改 LOGO、改色调、加统计代码等。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>自定义代码仅在游客首页生效，管理面板不生效<br> 由于不同主题的代码不同，如确需修改管理面板中的内容，请自行前往 Docker 中研究修改</p></div><br><h4 id="默认主题更改进度条颜色示例" tabindex="-1">默认主题更改进度条颜色示例 <a class="header-anchor" href="#默认主题更改进度条颜色示例" aria-label="Permalink to &quot;默认主题更改进度条颜色示例&quot;">​</a></h4><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ui</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">fine</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">progress</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">bar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pink </span><span style="color:#F78C6C;">!important</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h4 id="daynight-主题更改进度条颜色、修改页脚示例-来自-hyt-allen-xu-tech-fever" tabindex="-1">DayNight 主题更改进度条颜色、修改页脚示例（来自 <a href="https://github.com/hyt-allen-xu" target="_blank" rel="noreferrer">@hyt-allen-xu</a> <a href="https://github.com/tech-fever" target="_blank" rel="noreferrer">@tech-fever</a>） <a class="header-anchor" href="#daynight-主题更改进度条颜色、修改页脚示例-来自-hyt-allen-xu-tech-fever" aria-label="Permalink to &quot;DayNight 主题更改进度条颜色、修改页脚示例（来自 [@hyt-allen-xu](https://github.com/hyt-allen-xu)  [@tech-fever](https://github.com/tech-fever)）&quot;">​</a></h4><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ui</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">fine</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">progress</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">progress-bar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">00a7d0 </span><span style="color:#F78C6C;">!important</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onload</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">avatar</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">img</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">footer</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">div.footer-container</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">footer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">©2021 你的名字 &amp; Powered by 你的名字</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">footer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">visibility</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">visible</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">avatar</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">你的图片连接</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">avatar</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">visibility</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">visible</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h4 id="默认主题修改-logo、修改页脚示例-来自-ilay1678" tabindex="-1">默认主题修改 LOGO、修改页脚示例（来自 <a href="https://github.com/iLay1678" target="_blank" rel="noreferrer">@iLay1678</a>） <a class="header-anchor" href="#默认主题修改-logo、修改页脚示例-来自-ilay1678" aria-label="Permalink to &quot;默认主题修改 LOGO、修改页脚示例（来自 [@iLay1678](https://github.com/iLay1678)）&quot;">​</a></h4><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">right</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">menu</span><span style="color:#89DDFF;">&gt;</span><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#B2CCD6;">visibility</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">footer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">is-size-7</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#B2CCD6;">visibility</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">item</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">img</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#B2CCD6;">visibility</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onload</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">avatar</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.item img</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">footer</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">div.is-size-7</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">footer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Powered by 你的名字</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">footer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">visibility</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">visible</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">avatar</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">你的方形logo地址</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">avatar</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">visibility</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">visible</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h4 id="hotaru-主题更改背景图片示例" tabindex="-1">hotaru 主题更改背景图片示例 <a class="header-anchor" href="#hotaru-主题更改背景图片示例" aria-label="Permalink to &quot;hotaru 主题更改背景图片示例&quot;">​</a></h4><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">hotaru-cover</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">https://s3.ax1x.com/2020/12/08/DzHv6A.jpg</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="前台查看密码" tabindex="-1">前台查看密码 <a class="header-anchor" href="#前台查看密码" aria-label="Permalink to &quot;前台查看密码&quot;">​</a></h2><p>如果你不想直接展示你的主页，你可以在这里设置一个查看密码<br> 设置密码后，需要输入密码才可以访问主页<br><br></p><h2 id="未接入-cdn-的面板服务器域名-ip" tabindex="-1">未接入 CDN 的面板服务器域名/IP <a class="header-anchor" href="#未接入-cdn-的面板服务器域名-ip" aria-label="Permalink to &quot;未接入 CDN 的面板服务器域名/IP&quot;">​</a></h2><p>此项设置是使用一键脚本安装 Agent 的前提，详情请查看<a href="/guide/agent.html#准备工作">这里</a><br></p><h2 id="ip-变更提醒" tabindex="-1">IP 变更提醒 <a class="header-anchor" href="#ip-变更提醒" aria-label="Permalink to &quot;IP 变更提醒&quot;">​</a></h2><p>如果你希望当某个服务器的ip发生变更时收到通知，可以在这里进行设置</p><h4 id="覆盖范围" tabindex="-1">覆盖范围 <a class="header-anchor" href="#覆盖范围" aria-label="Permalink to &quot;覆盖范围&quot;">​</a></h4><p>在这里选择一条规则，来确定需要监控哪些服务器，可以根据自己的需求进行选择</p><h4 id="特定服务器" tabindex="-1">特定服务器 <a class="header-anchor" href="#特定服务器" aria-label="Permalink to &quot;特定服务器&quot;">​</a></h4><p>配合覆盖范围的设置，在这里设置选定规则的排除项</p><h4 id="提醒发送至指定的通知分组" tabindex="-1">提醒发送至指定的通知分组 <a class="header-anchor" href="#提醒发送至指定的通知分组" aria-label="Permalink to &quot;提醒发送至指定的通知分组&quot;">​</a></h4><p>选择通知方式，通知方式请提前在 “报警” 页内设置<br><br></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>设置完成后，勾选启用时，通知生效</strong></p></div><br><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>IP变更通知默认打码，如果你不希望打码，可以勾选 “通知信息IP不打码”</p></div>`,37),e=[p];function t(r,c,D,F,y,i){return a(),n("div",null,e)}const A=s(o,[["render",t]]);export{h as __pageData,A as default};
