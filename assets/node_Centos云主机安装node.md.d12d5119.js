import{_ as s,c as n,o as a,R as e}from"./chunks/framework.324713a9.js";const y=JSON.parse('{"title":"Centos 云主机安装 node","description":"","frontmatter":{},"headers":[],"relativePath":"node/Centos云主机安装node.md","filePath":"node/Centos云主机安装node.md"}'),l={name:"node/Centos云主机安装node.md"},o=e(`<h1 id="centos-云主机安装-node" tabindex="-1">Centos 云主机安装 node <a class="header-anchor" href="#centos-云主机安装-node" aria-label="Permalink to &quot;Centos 云主机安装 node&quot;">​</a></h1><p>xShell 登录云主机 新建一个文件夹安装：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mkdir node</span></span>
<span class="line"><span style="color:#A6ACCD;">cd node </span><span style="color:#676E95;font-style:italic;">//进入 node 目录</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>安装</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">curl </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">silent </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">location </span><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//rpm.nodesource.com/setup_8.x | sudo bash -</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo yum </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">y install nodejs</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>看到 Installed: nodejs.x86_64 2:8.11.3-1nodesource</p><p>Complete!</p><p>就是安装好了。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">node </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">v</span></span>
<span class="line"><span style="color:#A6ACCD;">v8</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">11.3</span></span>
<span class="line"><span style="color:#A6ACCD;">npm </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">v</span></span>
<span class="line"><span style="color:#F78C6C;">5.6</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h1 id="nvm-安装" tabindex="-1">nvm 安装 <a class="header-anchor" href="#nvm-安装" aria-label="Permalink to &quot;nvm 安装&quot;">​</a></h1><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">curl </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">o</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>V0.33.11，是想要安装的版本，可选择其他。</p><p>重启终端就可用了。</p>`,13),p=[o];function t(r,c,i,d,C,m){return a(),n("div",null,p)}const b=s(l,[["render",t]]);export{y as __pageData,b as default};
