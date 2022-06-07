import{_ as e,c as t,o as a,d as s}from"./app.9c3473cb.js";const g='{"title":"\u4E3A\u4EC0\u4E48\u7BA1\u7406\u9762\u677F\u4E2D\u663E\u793A\u7684IP\u548CAgent\u5B9E\u9645IP\u4E0D\u4E00\u81F4\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E3A\u4EC0\u4E48\u7BA1\u7406\u9762\u677F\u4E2D\u663E\u793A\u7684IP\u548CAgent\u5B9E\u9645IP\u4E0D\u4E00\u81F4\uFF1F","slug":"\u4E3A\u4EC0\u4E48\u7BA1\u7406\u9762\u677F\u4E2D\u663E\u793A\u7684ip\u548Cagent\u5B9E\u9645ip\u4E0D\u4E00\u81F4\uFF1F"},{"level":2,"title":"\u5FD8\u8BB0\u67E5\u770B\u5BC6\u7801\\\\\u5220\u9664\u67E5\u770B\u5BC6\u7801","slug":"\u5FD8\u8BB0\u67E5\u770B\u5BC6\u7801-\u5220\u9664\u67E5\u770B\u5BC6\u7801"},{"level":2,"title":"\u9762\u677F\u5B89\u88C5/\u91CD\u542F/\u66F4\u65B0\u5931\u8D25: iptables ......","slug":"\u9762\u677F\u5B89\u88C5-\u91CD\u542F-\u66F4\u65B0\u5931\u8D25-iptables"},{"level":2,"title":"\u9762\u677F\u91CD\u542F\u5931\u8D25\uFF1AInvalid hostPort: nzsiteport \u7B49","slug":"\u9762\u677F\u91CD\u542F\u5931\u8D25\uFF1Ainvalid-hostport-nz-site-port-\u7B49"}],"relativePath":"guide/dashboardq.md"}',n={},i=s(`<h2 id="\u4E3A\u4EC0\u4E48\u7BA1\u7406\u9762\u677F\u4E2D\u663E\u793A\u7684ip\u548Cagent\u5B9E\u9645ip\u4E0D\u4E00\u81F4\uFF1F" tabindex="-1">\u4E3A\u4EC0\u4E48\u7BA1\u7406\u9762\u677F\u4E2D\u663E\u793A\u7684IP\u548CAgent\u5B9E\u9645IP\u4E0D\u4E00\u81F4\uFF1F <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u7BA1\u7406\u9762\u677F\u4E2D\u663E\u793A\u7684ip\u548Cagent\u5B9E\u9645ip\u4E0D\u4E00\u81F4\uFF1F" aria-hidden="true">#</a></h2><p>\u9996\u5148\u89E3\u91CA\u7BA1\u7406\u9762\u677F\u4E2D\u663E\u793A\u7684IP\u662F\u600E\u4E48\u5F97\u5230\u7684\uFF1AAgent\u4F1A\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\u8BF7\u6C42\u4E00\u904DIP-API\uFF0C\u83B7\u53D6\u5230IP\u4FE1\u606F\u540E\u4E0A\u62A5\u5230Dashboard\uFF0C\u76EE\u524D\u4F7F\u7528\u7684IP-API\u53EF\u5728\u6B64\u67E5\u770B\uFF1A<a href="https://github.com/naiba/nezha/blob/master/cmd/agent/monitor/myip.go" target="_blank" rel="noopener noreferrer">myip.go</a>\u3002<br> \u5982\u60A8\u53D1\u73B0\u7BA1\u7406\u9762\u677F\u4E2D\u663E\u793A\u7684IP\u548C\u670D\u52A1\u5546\u63D0\u4F9B\u7ED9\u60A8\u7684IP\u4E0D\u4E00\u81F4\uFF0C\u6700\u5927\u7684\u53EF\u80FD\u662F\u670D\u52A1\u5546\u7ED9\u60A8\u7684\u662F<strong>\u5165\u53E3IP</strong>\uFF0C\u4F46Agent\u6D4B\u8BD5\u7684\u662F\u60A8\u7684<strong>\u51FA\u53E3IP</strong>\u3002\u8FD9\u4E2A\u95EE\u9898\u4E5F\u53EF\u80FD\u4F1A\u51FA\u73B0\u5728\u591A\u7EBF\u670D\u52A1\u5668\u548CIPLC\u4E13\u7EBF\u4E2D\u3002</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u4E3E\u4E2A\u7B80\u5355\u4E5F\u5341\u5206\u5E38\u89C1\u7684\u4F8B\u5B50\uFF0C\u670D\u52A1\u5546\u7ED9\u60A8\u63D0\u4F9B\u7684\u662F\u4E00\u53F0\u9AD8\u9632\u670D\u52A1\u5668\uFF0C\u4E3A\u4E86\u540C\u65F6\u6EE1\u8DB3\u9AD8\u9632\u548C\u4F4E\u7F51\u7EDC\u4E2D\u65AD\u7387\u7684\u76EE\u6807\uFF0C\u63D0\u4F9B\u7ED9\u60A8\u7684IP\u53EF\u80FD\u662F\u7ECF\u8FC7\u6620\u5C04\u540E\u7684\u9AD8\u9632IP\u800C\u5E76\u975E\u60A8\u670D\u52A1\u5668\u7684\u771F\u5B9E\u51FA\u53E3IP</p></div><p>\u60A8\u4E5F\u53EF\u4EE5\u5728Agent\u670D\u52A1\u5668\u4E2D\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u6D4B\u8BD5\u51FA\u53E3IP:</p><div class="language-shell"><pre><code><span class="token function">curl</span> api.myip.la
<span class="token function">curl</span> ip.sb
<span class="token function">curl</span> ip-api.com
</code></pre></div><h2 id="\u5FD8\u8BB0\u67E5\u770B\u5BC6\u7801-\u5220\u9664\u67E5\u770B\u5BC6\u7801" tabindex="-1">\u5FD8\u8BB0\u67E5\u770B\u5BC6\u7801\\\u5220\u9664\u67E5\u770B\u5BC6\u7801 <a class="header-anchor" href="#\u5FD8\u8BB0\u67E5\u770B\u5BC6\u7801-\u5220\u9664\u67E5\u770B\u5BC6\u7801" aria-hidden="true">#</a></h2><p>\u8BF7\u67E5\u770B\u6216\u7F16\u8F91 <code>/opt/nezha/dashboard/data/config.yaml</code> \u6587\u4EF6\u3002<br> \u5BC6\u7801\u4F4D\u4E8E site-viewpassword \u9879\u4E2D\u3002</p><h2 id="\u9762\u677F\u5B89\u88C5-\u91CD\u542F-\u66F4\u65B0\u5931\u8D25-iptables" tabindex="-1">\u9762\u677F\u5B89\u88C5/\u91CD\u542F/\u66F4\u65B0\u5931\u8D25: iptables ...... <a class="header-anchor" href="#\u9762\u677F\u5B89\u88C5-\u91CD\u542F-\u66F4\u65B0\u5931\u8D25-iptables" aria-hidden="true">#</a></h2><p>\u9996\u5148\u5C1D\u8BD5\u91CD\u542Fdocker\u518D\u64CD\u4F5C</p><div class="language-shell"><pre><code>systemctl status <span class="token function">docker</span>
systemctl restart <span class="token function">docker</span>
systemctl status <span class="token function">docker</span>
</code></pre></div><p>\u91CD\u542F\u540E\u5C1D\u8BD5\u91CD\u65B0\u5B89\u88C5\u9762\u677F\u3002<br> \u82E5\u4F9D\u7136\u51FA\u73B0iptables...\u7B49\u9519\u8BEF\uFF0C\u5219\u8003\u8651\u76F4\u63A5\u5173\u95EDiptables\u751A\u81F3\u79FB\u9664iptables\u3002<br> \u8FD9\u4E2A\u95EE\u9898\u4E5F\u53EF\u80FD\u4E0E\u5185\u6838\u6709\u5173\uFF0C\u4E5F\u53EF\u4EE5\u5C1D\u8BD5\u66F4\u6362\u5B98\u65B9\u5185\u6838\u3002</p><h2 id="\u9762\u677F\u91CD\u542F\u5931\u8D25\uFF1Ainvalid-hostport-nz-site-port-\u7B49" tabindex="-1">\u9762\u677F\u91CD\u542F\u5931\u8D25\uFF1AInvalid hostPort: nz_site_port \u7B49 <a class="header-anchor" href="#\u9762\u677F\u91CD\u542F\u5931\u8D25\uFF1Ainvalid-hostport-nz-site-port-\u7B49" aria-hidden="true">#</a></h2><p>\u901A\u5E38\u4E0D\u4F1A\u51FA\u73B0\u8FD9\u4E2A\u60C5\u51B5\uFF0C\u5982\u51FA\u73B0\u53EF\u4EE5\u901A\u8FC7\u5B89\u88C5\u811A\u672C\u4FEE\u6539\u914D\u7F6E\u3002</p>`,13),o=[i];function r(p,l,c,d,h,u){return a(),t("div",null,o)}var b=e(n,[["render",r]]);export{g as __pageData,b as default};
