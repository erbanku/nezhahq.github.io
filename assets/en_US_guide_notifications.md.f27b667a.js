import{_ as o,o as s,c as e,R as n}from"./chunks/framework.1625126e.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"en_US/guide/notifications.md","filePath":"en_US/guide/notifications.md","lastUpdated":1687190167000}'),t={name:"en_US/guide/notifications.md"},a=n(`<p>Nezha Monitoring supports monitoring of server load, CPU, memory, hard disk, data transfer, monthly data transfer, number of processes, number of connections, and sends alarm notifications when one of these items reaches a user-set limit.<br><br><br></p><h2 id="flexible-notification-methods" tabindex="-1">Flexible notification methods <a class="header-anchor" href="#flexible-notification-methods" aria-label="Permalink to &quot;Flexible notification methods&quot;">​</a></h2><p><code>#NEZHA#</code> is the panel message placeholder, the panel will automatically replace the placeholder with the actual message when it triggers the notification</p><p>The content of Body is in <code>JSON</code> format：<strong>When the request type is FORM</strong>，the value is in the form of <code>key:value</code>，<code>value</code> can contain placeholders that will be automatically replaced when notified. <strong>When the request type is JSON</strong> It will only do string substitution and submit to the <code>URL</code> directly.</p><p>Placeholders can also be placed inside the URL, and it will perform a simple string substitution when requested.</p><p>Refer to the example below, it is very flexible.</p><ul><li><p><strong>Bark Example</strong></p><ul><li><p>Name: Bark</p></li><li><p>URL: The first part is the key, followed by three matches/: key/: body or/: key/: title/: body or/: key/: category/: title/: body</p></li><li><p>Request method: GET</p></li><li><p>Request Type: Default</p></li><li><p>Body: null</p></li><li><p>Name: Bark</p></li><li><p>URL:/push</p></li><li><p>Request method: POST</p></li><li><p>Request type: FORM</p></li><li><p>Body: <code>{&quot;title&quot;: &quot;#SERVER.NAME#&quot;,&quot;device_key&quot;:&quot;xxxxxxxxx&quot;,&quot;body&quot;:&quot;#NEZHA#&quot;,&quot;icon&quot;:&quot; https://xxxxxxxx/nz.png &quot;}</code></p></li></ul></li><li><p><strong>Telegram Example, contributed by <a href="https://github.com/haitau" target="_blank" rel="noreferrer">@haitau</a></strong></p><ul><li>Name：Telegram Robot message notification</li><li>URL：<a href="https://api.telegram.org/botXXXXXX/sendMessage?chat_id=YYYYYY&amp;text=#NEZHA#" target="_blank" rel="noreferrer">https://api.telegram.org/botXXXXXX/sendMessage?chat_id=YYYYYY&amp;text=#NEZHA#</a></li><li>Request method: GET</li><li>Request type: default</li><li>Body: null</li><li>Notes for this method：The XXXXXX in botXXXXXX is the token provided when you follow the official @Botfather in Telegram and enter /newbot to create a new bot. (In the line after <em>Use this token to access the HTTP API</em>). The &#39;bot&#39; are essential. After creating a bot, you need to talk to the BOT in Telegram (send a random message) before you can send a message by using API. YYYYYY is Telegram user&#39;s ID, you can get it by talking to the bot @userinfobot.</li></ul></li><li><p><strong>Email notification example - Outlook</strong></p><ul><li>Name: MS Mail Notification</li><li>URL：<a href="https://graph.microsoft.com/v1.0/me/microsoft.graph.sendMail" target="_blank" rel="noreferrer">https://graph.microsoft.com/v1.0/me/microsoft.graph.sendMail</a></li><li>Request method: POST</li><li>Request type: JSON</li><li>Header: <code>{&quot;Content-type&quot;:&quot;application/json&quot;, &quot;Authorization&quot;:&quot;Bearer {Token}&quot;}</code></li><li>Body:</li></ul><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">subject</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Server Status Notification</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">body</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">contentType</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#NEZHA#</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">toRecipients</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">emailAddress</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">address</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ADDRESS FOR RECEVING EMAILS</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span></code></pre></div><p>Notes for this method: This method requires calling Microsoft Graph V1.0, you need to go to Microsoft Graph and create your own application, give <code>Mail.Send</code> permission and get the Token, or you can go <a href="https://developer.microsoft.com/en-us/graph/graph-explorer" target="_blank" rel="noreferrer">Microsoft Graph Explorer</a> directly to give permission and get the Token, just replace the Token in the Header with the actual Token.</p></li><li><p><strong>Wechat Work Group bot Example, contributed by <a href="https://github.com/ChowRex" target="_blank" rel="noreferrer">@ChowRex</a></strong></p><p>Support placeholders:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#NEZHA#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">ServerName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#SERVER.NAME#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">ServerIP</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#SERVER.IP#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">ServerIPV4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#SERVER.IPV4#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">ServerIPV6</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#SERVER.IPV6#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">CPU</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#SERVER.CPU#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">MEM</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#SERVER.MEM#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">SWAP</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#SERVER.SWAP#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">DISK</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#SERVER.DISK#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">NetInSpeed</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#SERVER.NETINSPEED#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">NetOutSpeed</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#SERVER.NETOUTSPEED#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">TransferIn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#SERVER.TRANSFERIN#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">TranferOut</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#SERVER.TRANSFEROUT#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">Load1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#SERVER.LOAD1#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">Load5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#SERVER.LOAD5#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">Load15</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#SERVER.LOAD15#</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">TCP_CONN_COUNT</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#SERVER.TCPCONNCOUNT</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  # Invalid</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">UDP_CONN_COUNT</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#SERVER.UDPCONNCOUNT</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  # Invalid</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><blockquote><p>Sorry, this document is <strong>NOT</strong> available in English.</p><p><a href="https://developer.work.weixin.qq.com/document/path/91770#markdown%E7%B1%BB%E5%9E%8B" target="_blank" rel="noreferrer">群机器人配置说明 - 文档 - 企业微信开发者中心</a></p></blockquote><ul><li><p>Name：WechatWork Group bot notification</p></li><li><p>URL：<a href="https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=YOUR_BOT_KEY" target="_blank" rel="noreferrer">https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=YOUR_BOT_KEY</a></p></li><li><p>Request method: POST</p></li><li><p>Request type: JSON</p></li><li><p>Body:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">msgtype</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">markdown</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">markdown</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"># Nezha Notification</span><span style="color:#A6ACCD;">\\n\\n\\&quot;</span><span style="color:#C3E88D;">#NEZHA#</span><span style="color:#A6ACCD;">\\&quot;\\n\\n</span><span style="color:#C3E88D;">&gt; ServerName: </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">#SERVER.NAME#</span><span style="color:#A6ACCD;">\\&quot;\\n</span><span style="color:#C3E88D;">&gt; IP: </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">#SERVER.IP#</span><span style="color:#A6ACCD;">\\&quot;\\n</span><span style="color:#C3E88D;">&gt; IPv4: </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">#SERVER.IPV4#</span><span style="color:#A6ACCD;">\\&quot;\\n</span><span style="color:#C3E88D;">&gt; IPv6: </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">#SERVER.IPV6#</span><span style="color:#A6ACCD;">\\&quot;\\n</span><span style="color:#C3E88D;">&gt; CPU: </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">#SERVER.CPU#</span><span style="color:#A6ACCD;">\\&quot;\\n</span><span style="color:#C3E88D;">&gt; Memory: </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">#SERVER.MEM#</span><span style="color:#A6ACCD;">\\&quot;\\n</span><span style="color:#C3E88D;">&gt; SWAP: </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">#SERVER.SWAP#</span><span style="color:#A6ACCD;">\\&quot;\\n</span><span style="color:#C3E88D;">&gt; Storage: </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">#SERVER.DISK#</span><span style="color:#A6ACCD;">\\&quot;\\n</span><span style="color:#C3E88D;">&gt; Real-time Upload: </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">#SERVER.NETINSPEED#</span><span style="color:#A6ACCD;">\\&quot;\\n</span><span style="color:#C3E88D;">&gt; Real-time Download: </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">#SERVER.NETOUTSPEED#</span><span style="color:#A6ACCD;">\\&quot;\\n</span><span style="color:#C3E88D;">&gt; Total Upload: </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">#SERVER.TRANSFERIN#</span><span style="color:#A6ACCD;">\\&quot;\\n</span><span style="color:#C3E88D;">&gt; Total Download: </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">#SERVER.TRANSFEROUT#</span><span style="color:#A6ACCD;">\\&quot;\\n</span><span style="color:#C3E88D;">&gt; 1m Load: </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">#SERVER.LOAD1#</span><span style="color:#A6ACCD;">\\&quot;\\n</span><span style="color:#C3E88D;">&gt; 5m Load: </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">#SERVER.LOAD5#</span><span style="color:#A6ACCD;">\\&quot;\\n</span><span style="color:#C3E88D;">&gt; 15m Load: </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">#SERVER.LOAD15#</span><span style="color:#A6ACCD;">\\&quot;\\n</span><span style="color:#C3E88D;">&gt; TCP Connections: </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">#SERVER.TCPCONNCOUNT</span><span style="color:#A6ACCD;">\\&quot;\\n</span><span style="color:#C3E88D;">&gt; UDP Connections: </span><span style="color:#A6ACCD;">\\&quot;</span><span style="color:#C3E88D;">#SERVER.UDPCONNCOUNT</span><span style="color:#A6ACCD;">\\&quot;\\n\\n</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>Delete relevant content information as needed</p><p><img src="https://user-images.githubusercontent.com/30169860/223605886-b7736825-24b8-4b6c-8bc9-96ac388599ef.png" alt="Notice Picture"></p></li></ul></li></ul><br><br><h2 id="description-of-notification-rules" tabindex="-1">Description of notification rules <a class="header-anchor" href="#description-of-notification-rules" aria-label="Permalink to &quot;Description of notification rules&quot;">​</a></h2><h3 id="basic-rules" tabindex="-1">Basic Rules <a class="header-anchor" href="#basic-rules" aria-label="Permalink to &quot;Basic Rules&quot;">​</a></h3><ul><li>Type: one or more types can be selected, such as in a rule to select more than one type, you need to <strong>meet all the selected types at the same time</strong> to trigger the notification (see the example later) <ul><li><code>cpu</code>、<code>memory</code>、<code>swap</code>、<code>disk</code></li><li><code>net_in_speed</code> Inbound speed, <code>net_out_speed</code> Outbound speed, <code>net_all_speed</code> Inbound + Outbound speed, <code>transfer_in</code> Inbound Transfer, <code>transfer_out</code> Outbound Transfer, <code>transfer_all</code> Total Transfer</li><li><code>offline</code> Offline monitoring</li><li><code>load1</code>、<code>load5</code>、<code>load15</code> Load</li><li><code>process_count</code> Number of processes <em>Currently, counting the number of processes takes up too many resources and is not supported at the moment</em></li><li><code>tcp_conn_count</code>、<code>udp_conn_count</code> Number of connections</li></ul></li><li>duration：Lasting for a few seconds, the notification will only be triggered when the sampling record reaches 30% or more within a few seconds</li><li>min/max <ul><li>Transfer, network speed, and other values of the same type. Unit is byte (1KB=1024B，1MB = 1024*1024B)</li><li>Memory, hard disk, CPU. units are usage percentages</li><li>No setup required for offline monitoring</li></ul></li><li>cover <code>[{&quot;type&quot;:&quot;offline&quot;,&quot;duration&quot;:10, &quot;cover&quot;:0, &quot;ignore&quot;:{&quot;5&quot;: true}}]</code><ul><li><code>0</code> Cover all, use <code>ignore</code> to ignore specific servers</li><li><code>1</code> Ignore all, use <code>ignore</code> to monitoring specific servers<br> For example: <code>[{&quot;type&quot;:&quot;offline&quot;,&quot;duration&quot;:10, &quot;cover&quot;:0, &quot;ignore&quot;:{&quot;5&quot;: true}}]</code></li></ul></li><li>ignore: Select to ignore specific servers, use with <code>cover</code> with server id and boolean, e.g.: <code>{&quot;1&quot;: true, &quot;2&quot;:false}</code></li></ul><p><strong>Complete examples:</strong></p><blockquote><blockquote><p>Add an offline notification</p></blockquote><ul><li>Name: Offline notification</li><li>Rules: <code>[{&quot;Type&quot;:&quot;offline&quot;,&quot;Duration&quot;:10}]</code></li><li>Enable: √</li></ul></blockquote><blockquote><blockquote><p>Add an notification when the CPU exceeds 50% for 10s <strong>but</strong> the memory usage is below 20% for 20s</p></blockquote><ul><li>Name: CPU and RAM</li><li>Rules: <code>[{&quot;Type&quot;:&quot;cpu&quot;,&quot;Min&quot;:0,&quot;Max&quot;:50,&quot;Duration&quot;:10},{&quot;Type&quot;:&quot;memory&quot;,&quot;Min&quot;:20,&quot;Max&quot;:0,&quot;Duration&quot;:20}]</code></li><li>Enable: √</li></ul></blockquote><blockquote><blockquote><p>Send specific server notifications to specific notification groups</p></blockquote><p>Case:<br> You have four servers, 1, 2, 3, 4, and two different notification groups, A and B<br> 1, 2 The two servers are down for 10 minutes and send a notification to Notification Group A<br> 3, 4 These two servers are down for ten minutes and then send a notification to Notification Group B</p><p>First you need to set up two notification groups, A and B, and then add two alarm rules:</p><p><strong>Rule I:</strong></p><ul><li>Name: 1, 2 Off-line, send notification to group A</li><li>Rules:<code>[{&quot;type&quot;:&quot;offline&quot;,&quot;duration&quot;:600,&quot;cover&quot;:1,&quot;ignore&quot;:{&quot;1&quot;:true,&quot;2&quot;:true}}]</code></li><li>Notification group: A</li><li>Enable: √</li></ul><p><strong>Rule II:</strong></p><ul><li>Name: 3, 4 Off-line, send notification to group B</li><li>Rules:<code>[{&quot;type&quot;:&quot;offline&quot;,&quot;duration&quot;:600,&quot;cover&quot;:1,&quot;ignore&quot;:{&quot;3&quot;:true,&quot;4&quot;:true}}]</code></li><li>Notification group: B</li><li>Enable: √</li></ul></blockquote><p><strong>Using these rules flexibly will help you to make full use of the notification function</strong></p><br><h3 id="special-any-cycle-transfer-notification" tabindex="-1">Special: Any-cycle transfer notification <a class="header-anchor" href="#special-any-cycle-transfer-notification" aria-label="Permalink to &quot;Special: Any-cycle transfer notification&quot;">​</a></h3><p>Can be used as monthly transfer notificatin</p><ul><li><p>type</p><ul><li><code>transfer_in_cycle</code> Inbound transfer during the cycle</li><li><code>transfer_out_cycle</code> Outbound transfer during the cycle</li><li><code>transfer_all_cycle</code> The sum of inbound and outbound transfer during the cycle</li></ul></li><li><p><code>cycle_start</code> Start date of the statistical cycle (can be the start date of your server&#39;s billing cycle), the time format is RFC3339, for example, the format in Beijing time zone is <code>2022-01-11T08:00:00.00+08:00</code></p></li><li><p><code>cycle_interval</code> Interval time cycle (For example, if the cycle is in days and the value is 7, it means that the statistics are counted every 7 days)</p></li><li><p><code>cycle_unit</code> Statistics cycle unit, default <code>hour</code>, optional (<code>hour</code>, <code>day</code>, <code>week</code>, <code>month</code>, <code>year</code>)</p></li><li><p><code>min/max</code>, <code>cover</code>, <code>ignore</code> Please refer to the basic rules to configure</p></li></ul><blockquote><p>Example:</p><blockquote><p>The servers with ID 3 and 4 (defined in the <code>ignore</code>) are counted on the 1st of each month, and a notification is triggered when the monthly outbound transfer reaches 1TB during the cycle.</p></blockquote><p><code>[{&quot;type&quot;:&quot;transfer_out_cycle&quot;,&quot;max&quot;:1099511627776,&quot;cycle_start&quot;:&quot;2022-01-01T00:00:00+08:00&quot;,&quot;cycle_interval&quot;:1,&quot;cycle_unit&quot;:&quot;month&quot;,&quot;cover&quot;:1,&quot;ignore&quot;:{&quot;3&quot;:true,&quot;4&quot;:true}}]</code></p></blockquote><h2 id="description-of-mode-of-triggering-notification" tabindex="-1">Description of mode of triggering notification <a class="header-anchor" href="#description-of-mode-of-triggering-notification" aria-label="Permalink to &quot;Description of mode of triggering notification&quot;">​</a></h2><ul><li>Always triggered: A notification is triggered each time the status reported by the Agent matches the rules of the notification</li><li>Triggered only once: only one notification is triggered when the state changes, such as changing from normal state to abnormal state or abnormal state back to normal state</li></ul><h2 id="set-the-task-to-be-executed-when-notification" tabindex="-1">Set the task to be executed when notification <a class="header-anchor" href="#set-the-task-to-be-executed-when-notification" aria-label="Permalink to &quot;Set the task to be executed when notification&quot;">​</a></h2><p>If you need to perform a task while sending a notification message, you can set those items</p><ul><li><code>Tasks to be triggered in case of failure</code> The task to be executed when the notification status matches the change from &quot;normal&quot; to &quot;failure&quot;, the task should be set in advance in the tasks page</li><li><code>Tasks to be triggered after fault recovery</code> The task to be executed when the notification status matches the change from &quot; failure &quot; to &quot; normal &quot;, the task should be set in advance in the tasks page</li></ul>`,27),l=[a];function p(r,c,i,u,D,y){return s(),e("div",null,l)}const C=o(t,[["render",p]]);export{F as __pageData,C as default};
