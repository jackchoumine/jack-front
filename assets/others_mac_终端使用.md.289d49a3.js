import{_ as s,c as a,o as l,R as o}from"./chunks/framework.324713a9.js";const A=JSON.parse('{"title":"终端使用","description":"","frontmatter":{},"headers":[],"relativePath":"others/mac/终端使用.md","filePath":"others/mac/终端使用.md"}'),e={name:"others/mac/终端使用.md"},n=o(`<h1 id="终端使用" tabindex="-1">终端使用 <a class="header-anchor" href="#终端使用" aria-label="Permalink to &quot;终端使用&quot;">​</a></h1><ol><li>处理路径中的空格</li></ol><blockquote><p>使用<code>\\ </code> 转义。</p></blockquote><ol start="2"><li>软连接</li></ol><p>软链接：快捷方式，方便访问嵌套深的目录。</p><p>软连接在磁盘上显示为<code>带箭头</code>的图标。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ln</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">longPath</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shortPath</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 创建</span></span>
<span class="line"><span style="color:#FFCB6B;">ln</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/Users/jackchou/Library/Application</span><span style="color:#A6ACCD;">\\ </span><span style="color:#C3E88D;">Support/Code</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vscode</span></span>
<span class="line"><span style="color:#FFCB6B;">ll</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 查看是否成功 显示如下就成功了</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># vscode -&gt; /Users/jackchou/Library/Application Support/Code</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vscode</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 即可进入 /Users/jackchou/Library/Application Support/Code</span></span>
<span class="line"><span style="color:#FFCB6B;">unlink</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shortPath</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 删除软链接</span></span>
<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shortPath</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 删除软连接 删除软连接不会对目标目录造成影响</span></span></code></pre></div><blockquote><p>另外一种实现快捷切换的方式： alias</p></blockquote><p>在 <code>.zprofile</code> 中:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">alias</span><span style="color:#A6ACCD;"> vscode</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cd /Users/jackchou/Library/Application\\ Support/Code</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><p>刷新: <code>source ~/.zprofile</code> 后，<code>vscode</code> 进入该目录。</p><blockquote><p>bin 目录 和脚本的关系？</p></blockquote><p>脚本配置文件 .zsh ?</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> $SHELL </span><span style="color:#676E95;font-style:italic;"># 查看当前使用的脚本</span></span>
<span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/shells</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 查看系统支持哪些脚本</span></span>
<span class="line"><span style="color:#FFCB6B;">chsh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/bin/zsh</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 切换到 zsh</span></span></code></pre></div><p>脚本和配置文件是什么关系？</p><p><a href="https://blog.csdn.net/zhangliangzi/article/details/77886233" target="_blank" rel="noreferrer">Shell、Bash，与终端配置文件</a></p><p>使用不同的脚本，其配置文件不同，需要设置环境变量、路径别名等信息是，在配置文件中设置。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">/bin/bash</span><span style="color:#A6ACCD;"> =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bash</span><span style="color:#A6ACCD;"> =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.bash_profile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">/bin/zsh</span><span style="color:#A6ACCD;"> =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zsh</span><span style="color:#A6ACCD;"> =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.zprofile</span></span></code></pre></div><blockquote><p>我当前的 mac 系统是 Big Sur，默认使用 zsh，配置文件是 <code>.zprofile</code>。 macOS Catalina(10.15.x) 以下版本，zsh 的配置文件是 <code>.bash_profile</code>。</p></blockquote><p><a href="https://yirenliu.cn/archives/m1homebrew" target="_blank" rel="noreferrer">更多阅读</a></p><blockquote><p>raw.githubusercontent.com 和 github.com 是什么关系？</p></blockquote><ol start="3"><li>查看 ip 信息</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ifconifg</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enO</span></span></code></pre></div><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gpwawq6x6sj31340gejtr.jpg" alt=""></p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><p><a href="https://towardsdatascience.com/the-ultimate-guide-to-your-terminal-makeover-e11f9b87ac99" target="_blank" rel="noreferrer">mac</a></p><p><a href="https://www.jianshu.com/p/ba08713c2b19" target="_blank" rel="noreferrer">终端打造</a></p><p><a href="https://zhuanlan.zhihu.com/p/90508170" target="_blank" rel="noreferrer">mac M1 芯片安装 homebrew</a></p><p><a href="https://blog.csdn.net/a1228136188/article/details/109092435" target="_blank" rel="noreferrer">Mac 终端界面美化(Item2+zsh+Oh-My-Zsh+agnoster-Powerlevel10k 主题)</a></p><p><a href="https://brew.idayer.com/guide/change-source/" target="_blank" rel="noreferrer">镜像助手</a></p>`,30),p=[n];function t(c,r,i,C,y,h){return l(),a("div",null,p)}const D=s(e,[["render",t]]);export{A as __pageData,D as default};
