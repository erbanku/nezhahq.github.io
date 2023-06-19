import{_ as e,o as t,c as a,R as n}from"./chunks/framework.1625126e.js";const m=JSON.parse('{"title":"Servers","description":"","frontmatter":{},"headers":[],"relativePath":"en_US/guide/servers.md","filePath":"en_US/guide/servers.md","lastUpdated":1687190167000}'),r={name:"en_US/guide/servers.md"},o=n('<h1 id="servers" tabindex="-1">Servers <a class="header-anchor" href="#servers" aria-label="Permalink to &quot;Servers&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>The Servers area is responsible for managing the Agent, the most basic area in Nezha Monitoring, and the basis for other functions.</p><h2 id="add-a-server" tabindex="-1">Add a server <a class="header-anchor" href="#add-a-server" aria-label="Permalink to &quot;Add a server&quot;">​</a></h2><p>The first step is to add a servers, which can be customized with names, groups, display index and notes.<br> Servers in the same group will be displayed in groups in supported themes, and notes will only be displayed in the admin panel, no need to worry about leaking information.</p><h2 id="install-agent" tabindex="-1">Install Agent <a class="header-anchor" href="#install-agent" aria-label="Permalink to &quot;Install Agent&quot;">​</a></h2><p>Please refer to the previous article: <a href="/en_US/guide/agent.html">Install Agent</a><br> We recommend using one-click installation, that is, <strong>after configuring the communication domain name</strong>, click the button on the column <strong>one-click installation</strong> and copy it to the monitored servers for installation.</p><h2 id="forced-updates" tabindex="-1">Forced Updates <a class="header-anchor" href="#forced-updates" aria-label="Permalink to &quot;Forced Updates&quot;">​</a></h2><p>The flags related to the update of the Agent are: <code>--disable-auto-update</code> and <code>--disable-force-update</code>. Please refer to <a href="/en_US/guide/agent.html#customize-agent">Customize Agent</a><br> By default, the Agent is updated automatically, but when the user turns off automatic updates, the specified servers can also be selected for forced updates.<br> This feature does not take effect when <code>-disable-force-update</code> is turned on.</p><h2 id="data-list" tabindex="-1">Data List <a class="header-anchor" href="#data-list" aria-label="Permalink to &quot;Data List&quot;">​</a></h2><ul><li>Version number: Record the current version of Agent</li><li>Secret: Used when configuring the Agent</li><li>One-Click Installation: A more convenient way to install Agent</li><li>Manage: WebShell on the left, Edit in the middle, Delete on the right</li></ul><h2 id="webshell" tabindex="-1">Webshell <a class="header-anchor" href="#webshell" aria-label="Permalink to &quot;Webshell&quot;">​</a></h2><p>This feature does not take effect when <code>disable-command-execute</code> is turned on.<br> Both Linux and Windows are available and can be pasted using Ctrl+Shift+V.<br> For connection failure, please refer to <a href="/en_US/guide/q4.html">Real-time channel disconnection/online terminal connection failure</a>.<br> Note that in theWebShell function, the Agent also connects to the <strong>Domain names for public access</strong> via WebSocket, not via grpc.</p>',13),i=[o];function s(l,d,c,h,u,f){return t(),a("div",null,i)}const b=e(r,[["render",s]]);export{m as __pageData,b as default};
