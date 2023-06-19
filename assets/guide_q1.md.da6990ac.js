import{_ as s,o as a,c as n,R as l}from"./chunks/framework.1625126e.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/q1.md","filePath":"guide/q1.md","lastUpdated":1687190167000}'),p={name:"guide/q1.md"},o=l(`<h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><p><strong>你可以选择 CloudFlare 的 workers 进行反代，但大陆的网络你懂的，这里介绍用你自己服务器反代方式</strong><br> 搭建一个 TGbot api 反代，你需要：<br> 1.一个不受 GFW 封锁的服务器(且安装好 Nginx)<br> 2.一个域名(提前申请 SSL 证书) <br></p><h2 id="nginx-配置" tabindex="-1">NGINX 配置 <a class="header-anchor" href="#nginx-配置" aria-label="Permalink to &quot;NGINX 配置&quot;">​</a></h2><p>编辑你 Nginx 的配置文件,在 http{} 中加上如下配置</p><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># http强制跳转到htpps</span></span>
<span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">[::]:80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">yourDomainName</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># Enforce HTTPS</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">301</span><span style="color:#A6ACCD;"> https://</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">server_name</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">request_uri;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## https</span></span>
<span class="line"><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">443 ssl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">[::]:443 ssl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">yourDomainName</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">## ssl密钥路径自己改改</span></span>
<span class="line"><span style="color:#89DDFF;">	ssl_certificate </span><span style="color:#A6ACCD;">server.pem</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">	ssl_certificate_key </span><span style="color:#A6ACCD;">server.key</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">## root非必要</span></span>
<span class="line"><span style="color:#89DDFF;">	root </span><span style="color:#A6ACCD;">/var/www/tgbot/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">## dns必须写，不然会报502错误</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> resolver </span><span style="color:#A6ACCD;">8.8.8.8</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">## 以bot开头的请求都会被正则匹配到</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~*</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^/bot </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">	proxy_buffering </span><span style="color:#A6ACCD;">off</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#89DDFF;"> proxy_pass </span><span style="color:#A6ACCD;"> https://api.telegram.org</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">request_uri</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#89DDFF;"> proxy_http_version </span><span style="color:#A6ACCD;">1.1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">## 和上面root一样非必要，这个主要是用来确认服务器状态的。也可以改成return 403</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/</span><span style="color:#A6ACCD;">{ </span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">	try_files </span><span style="color:#A6ACCD;">/</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">uri /index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">## no log no fix</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> error_log </span><span style="color:#A6ACCD;">   /var/log/tg.log </span><span style="color:#89DDFF;"> error;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p><code>yourDomainName</code> - 你准备的域名<br><code>ssl_certificate</code> - SSL 证书路径<br><code>ssl_certificate_key</code> - SSL 证书路径<br><br></p><h2 id="使用方式" tabindex="-1">使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;">​</a></h2><p>🎉然后执行 <code>systemctl restart nginx</code> 回到 Nezha 将原来的<a href="https://api.telegram.org/" target="_blank" rel="noreferrer">https://api.telegram.org/</a> 替换为 <a href="https://yourDomainName/" target="_blank" rel="noreferrer">https://yourDomainName/</a> ,即可正常推送消息 <br></p><h2 id="防止盗用" tabindex="-1">防止盗用 <a class="header-anchor" href="#防止盗用" aria-label="Permalink to &quot;防止盗用&quot;">​</a></h2><p><code>serverIp</code> - Agent 的 ip 地址,你系统安装的哪个就用哪个命令,ufw iptables 都可.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#ubuntu</span></span>
<span class="line"><span style="color:#FFCB6B;">ufw</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">allow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">proto</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tcp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">serverIp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">any</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">port</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">443</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#centos</span></span>
<span class="line"><span style="color:#FFCB6B;">iptables</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-I</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INPUT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tcp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--dport</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">443</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-j</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DROP</span></span>
<span class="line"><span style="color:#FFCB6B;">iptables</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-I</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INPUT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">serverIp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tcp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--dport</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">443</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-j</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ACCEPT</span></span></code></pre></div>`,11),e=[o];function t(r,c,C,y,D,A){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
