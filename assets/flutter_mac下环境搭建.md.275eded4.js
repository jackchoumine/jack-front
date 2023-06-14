import{_ as s,c as a,o as e,R as n}from"./chunks/framework.324713a9.js";const h=JSON.parse('{"title":"mac 下 flutter 开发环境搭建","description":"","frontmatter":{},"headers":[],"relativePath":"flutter/mac下环境搭建.md","filePath":"flutter/mac下环境搭建.md"}'),l={name:"flutter/mac下环境搭建.md"},o=n(`<h1 id="mac-下-flutter-开发环境搭建" tabindex="-1">mac 下 flutter 开发环境搭建 <a class="header-anchor" href="#mac-下-flutter-开发环境搭建" aria-label="Permalink to &quot;mac 下 flutter 开发环境搭建&quot;">​</a></h1><p>mac 搭建 flutter 环境，需要搭建三个环境：① flutter 环境 ② iOS 环境 ③ android 环境</p><h2 id="flutter-环境" tabindex="-1">flutter 环境 <a class="header-anchor" href="#flutter-环境" aria-label="Permalink to &quot;flutter 环境&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">flutter</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>检查是否安装成功：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">flutter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>出现类似的文字，说明安装成功。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Flutter</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2.0</span><span style="color:#C3E88D;">.5</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">•</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">channel</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">•</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/flutter/flutter.git</span></span>
<span class="line"><span style="color:#FFCB6B;">Framework</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">•</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">revision</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">adc687823a</span><span style="color:#A6ACCD;"> (3 </span><span style="color:#C3E88D;">weeks</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ago</span><span style="color:#A6ACCD;">) • 2021-04-16 09:40:20 -0700</span></span>
<span class="line"><span style="color:#FFCB6B;">Engine</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">•</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">revision</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">b09f014e96</span></span>
<span class="line"><span style="color:#FFCB6B;">Tools</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">•</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Dart</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2.12</span><span style="color:#C3E88D;">.3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>安装 flutter 时遇到错误：</p></blockquote><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl:</span><span style="color:#A6ACCD;"> (56) LibreSSL SSL_read: SSL_ERROR_SYSCALL, errno 60</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><a href="https://stackoverflow.com/questions/24952683/git-push-error-rpc-failed-result-56-http-code-200-fatal-the-remote-end-hun/36843260#36843260" target="_blank" rel="noreferrer">RPC failed; curl 56 LibreSSL SSL_read: SSL_ERROR_SYSCALL, errno 54</a></p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ALL_PROXY</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">socks5://127.0.0.1:1086</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">flutter</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="ios-环境" tabindex="-1">iOS 环境 <a class="header-anchor" href="#ios-环境" aria-label="Permalink to &quot;iOS 环境&quot;">​</a></h2><p>在 app store 里安装 Xcode 即可，<code>10G 的容量，在网络好的时候下载</code>。</p><p>安装 Xcode 包管理器：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gem</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cocoapods</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="android-环境" tabindex="-1">android 环境 <a class="header-anchor" href="#android-环境" aria-label="Permalink to &quot;android 环境&quot;">​</a></h2><p>安装 android-studio</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">android-studio</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>不需要通过 brew 安装 android-sdk，第一次打开 android-studio 会让你下载。</p></blockquote><blockquote><p>科学上网，否则可能下载失败。</p></blockquote><p>启动 android-studio，一路下一步，根据提示配置代理即可。</p><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gq6mubmv3kj30l6084wf8.jpg" alt="提示配置代理"></p><p>接受协议：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">flutter</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">doctor</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--android-licenses</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>一路 y 即可。</p><p>可能遇到错误：</p><blockquote><p><a href="https://stackoverflow.com/a/60529140/6524962" target="_blank" rel="noreferrer">flutter-doctor-error-android-sdkmanager-tool-not-found</a></p></blockquote><p>或者试试这个</p><blockquote><p><a href="https://stackoverflow.com/a/60490042/6524962" target="_blank" rel="noreferrer">Android sdkmanager tool not found</a></p></blockquote><h2 id="检查环境是否就绪" tabindex="-1">检查环境是否就绪 <a class="header-anchor" href="#检查环境是否就绪" aria-label="Permalink to &quot;检查环境是否就绪&quot;">​</a></h2><div class="language-bahs line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bahs</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">flutter doctor</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>提示都是<code>绿勾</code>就表示环境好了。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ol><li><p><a href="https://dev.to/0xdonut/how-to-install-flutter-on-macos-using-homebrew-and-asdf-3loa" target="_blank" rel="noreferrer">How to install Flutter on macOS using homebrew and asdf</a></p></li><li><p><a href="./.html"></a></p></li></ol>`,35),p=[o];function t(r,c,i,d,u,C){return e(),a("div",null,p)}const m=s(l,[["render",t]]);export{h as __pageData,m as default};
