import{_ as s,c as a,o as n,R as l}from"./chunks/framework.324713a9.js";const d=JSON.parse('{"title":"nvm 使用","description":"","frontmatter":{},"headers":[],"relativePath":"node/nvm使用.md","filePath":"node/nvm使用.md"}'),o={name:"node/nvm使用.md"},p=l(`<h1 id="nvm-使用" tabindex="-1">nvm 使用 <a class="header-anchor" href="#nvm-使用" aria-label="Permalink to &quot;nvm 使用&quot;">​</a></h1><p>使用 nvm（Node.js Version Manager Node.js 版本管理器）可以更轻松地在<strong>单个本地环境</strong>上安装和管理 Node.js 的<strong>多个版本</strong>。</p><h2 id="安装-nvm" tabindex="-1">安装 nvm <a class="header-anchor" href="#安装-nvm" aria-label="Permalink to &quot;安装 nvm&quot;">​</a></h2><p>通过 brew</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nvm</span></span></code></pre></div><p>通过 curl</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span></span></code></pre></div><h2 id="配置环境变量" tabindex="-1">配置环境变量 <a class="header-anchor" href="#配置环境变量" aria-label="Permalink to &quot;配置环境变量&quot;">​</a></h2><p>在<code>.zshrc</code>或者<code>.bash_profile</code> 添加</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> NVM_DIR</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">~/.nvm</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">brew</span><span style="color:#C3E88D;"> --prefix nvm</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">/nvm.sh</span></span></code></pre></div><blockquote><p>验证</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.zshrc</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 输出版本号说明安装成功</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 查看安装了哪些版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 安装最新版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version-no</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 安装指定版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">14.0</span><span style="color:#C3E88D;">.0</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">which</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version-no</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 查看安装目录</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--lts</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 安装长支持版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--lts=version-symbol</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 通过版本代号安装长支持版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uninstall</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--lts=version-symbol</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 通过版本代号安装长支持版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version-no</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 切换版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 默认版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stable</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 稳定版本</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">system</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 系统版本 TODO 什么叫系统版本？</span></span>
<span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alias</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">version</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 设置默认版本</span></span></code></pre></div><blockquote><p>绿色箭头的是当前使用的版本，并列出了可安装的长期支持版本 每个长期支持的版本都有一个化学元素的代号 npm 和 node 绑定了，切换 node 版本，npm 也会切换</p></blockquote><p>安装最新的 npm</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install-latest-npm</span></span></code></pre></div>`,17),e=[p];function t(c,r,C,y,i,A){return n(),a("div",null,e)}const m=s(o,[["render",t]]);export{d as __pageData,m as default};
