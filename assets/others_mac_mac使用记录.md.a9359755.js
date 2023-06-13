import{_ as s,c as a,o as n,R as l}from"./chunks/framework.324713a9.js";const E=JSON.parse('{"title":"Mac 使用记录","description":"","frontmatter":{},"headers":[],"relativePath":"others/mac/mac使用记录.md","filePath":"others/mac/mac使用记录.md"}'),p={name:"others/mac/mac使用记录.md"},o=l(`<h1 id="mac-使用记录" tabindex="-1">Mac 使用记录 <a class="header-anchor" href="#mac-使用记录" aria-label="Permalink to &quot;Mac 使用记录&quot;">​</a></h1><h2 id="访达" tabindex="-1">访达 <a class="header-anchor" href="#访达" aria-label="Permalink to &quot;访达&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">option</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">space</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 打开 访达窗口</span></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shift</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 显示或者隐藏相关文件</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 隐藏系统文件夹</span></span>
<span class="line"><span style="color:#FFCB6B;">defaults</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">write</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">com.apple.finder</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">AppleShowAllFiles</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">killall</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Finder</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 显示系统文件家</span></span>
<span class="line"><span style="color:#FFCB6B;">defaults</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">write</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">com.apple.finder</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">AppleShowAllFiles</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">killall</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Finder</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shift</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">g</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 前往任何目录</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 类似 bash here 功能</span></span>
<span class="line"><span style="color:#FFCB6B;">1.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">选中文件夹</span></span>
<span class="line"><span style="color:#FFCB6B;">2.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">服务</span></span>
<span class="line"><span style="color:#FFCB6B;">3.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">新建位于文件夹位置的终端标签页</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 改变打开时的默认窗口大小</span></span>
<span class="line"><span style="color:#FFCB6B;">1.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">打开访达</span></span>
<span class="line"><span style="color:#FFCB6B;">2.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">按住</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">option，同时调整窗口大小和位置</span></span>
<span class="line"><span style="color:#FFCB6B;">3.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">再次打开时，就是调整过的大小和位置了，其他软件，也能这样设置</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如何调整终端打开时的位置</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 参考访达打开时的窗口大小</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 移出到废纸篓</span></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">delete</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 完全删除</span></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">option</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">delete</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 快速预览文件</span></span>
<span class="line"><span style="color:#FFCB6B;">空格健</span></span>
<span class="line"><span style="color:#FFCB6B;">esc</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 退出预览</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看文件夹和文件信息</span></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 退出优盘</span></span>
<span class="line"><span style="color:#FFCB6B;">点击优盘傍边的右上箭头</span></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">E</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 选中优盘</span></span>
<span class="line"><span style="color:#FFCB6B;">选中后点击推出</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">“xx”</span></span></code></pre></div><h2 id="mac-os" tabindex="-1">mac os <a class="header-anchor" href="#mac-os" aria-label="Permalink to &quot;mac os&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ctr</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">com</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">q</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 锁屏</span></span>
<span class="line"><span style="color:#FFCB6B;">ctrl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">空格</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 切换输入法</span></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">空格</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 搜索</span></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">h</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 显示桌面</span></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">c</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 复制</span></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 粘贴</span></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">option</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shift</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 无格式粘贴</span></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">x</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 剪切</span></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">z</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 撤销 删除文件时也可以</span></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shift</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">z</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 重做</span></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">w</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 关闭当前窗口</span></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">q</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 退出程序</span></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">option</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">F</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 退出或者进入全屏</span></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shift</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 全屏截图</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shift</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 部分截图</span></span>
<span class="line"><span style="color:#FFCB6B;">鼠标拖动时，以改变窗口的尺寸，然后可按住以下健，以改变窗口形态</span></span>
<span class="line"><span style="color:#FFCB6B;">空格：固定尺寸，可拖动截图窗口</span></span>
<span class="line"><span style="color:#82AAFF;">shift</span><span style="color:#A6ACCD;">：改变宽或者高</span></span>
<span class="line"><span style="color:#FFCB6B;">option：宽高放缩</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 窗口截图</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># cmd + shift + 4 之后按 空格 可实现窗口截图</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shift</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 录屏</span></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shift</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 给 touch bar 截图</span></span></code></pre></div><h3 id="修改截图保存位置" tabindex="-1">修改截图保存位置 <a class="header-anchor" href="#修改截图保存位置" aria-label="Permalink to &quot;修改截图保存位置&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">defaults</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">write</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">com.apple.screencapture</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/front/jack-picture</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">killall</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SystemUIServer</span></span></code></pre></div><h2 id="终端" tabindex="-1">终端 <a class="header-anchor" href="#终端" aria-label="Permalink to &quot;终端&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 自动补全命令</span></span>
<span class="line"><span style="color:#FFCB6B;">1.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">打开编辑器</span></span>
<span class="line"><span style="color:#FFCB6B;">vim</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.inputrc</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#.inputrc 时终端配置文件</span></span>
<span class="line"><span style="color:#FFCB6B;">2.按</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">粘贴如下文字</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">completion-ignore-case</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">show-all-if-ambiguous</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span></span>
<span class="line"><span style="color:#FFCB6B;">TAB:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">menu-complete</span></span>
<span class="line"><span style="color:#FFCB6B;">3.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">保存退出</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">esc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">再</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:wq</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#新建 tab</span></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">t</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># code 命令打开项目</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 在 .zshrc 追加</span></span>
<span class="line"><span style="color:#82AAFF;">code</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> VSCODE_CWD</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$PWD</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">open</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-n</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">com.microsoft.VSCode</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--args</span><span style="color:#A6ACCD;"> $* </span><span style="color:#89DDFF;">;}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># git status 名称为中文的的文件显示乱码</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置 git 解决</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">core.quotepath</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span></span></code></pre></div><h2 id="rectangle-分屏" tabindex="-1">rectangle 分屏 <a class="header-anchor" href="#rectangle-分屏" aria-label="Permalink to &quot;rectangle 分屏&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ctrl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">option</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">←</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 靠左</span></span>
<span class="line"><span style="color:#FFCB6B;">ctrl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">option</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">→</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 靠右</span></span>
<span class="line"><span style="color:#FFCB6B;">ctrl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">option</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">↑</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 靠上</span></span>
<span class="line"><span style="color:#FFCB6B;">ctrl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">option</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">↓</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 靠下</span></span>
<span class="line"><span style="color:#FFCB6B;">ctrl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">option</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enter</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 全屏</span></span>
<span class="line"><span style="color:#FFCB6B;">ctrl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">option</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">u</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 左上</span></span>
<span class="line"><span style="color:#FFCB6B;">ctrl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">option</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 右上</span></span>
<span class="line"><span style="color:#FFCB6B;">ctrl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">option</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">j</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 左下</span></span>
<span class="line"><span style="color:#FFCB6B;">ctrl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">option</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">k</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 右下</span></span>
<span class="line"><span style="color:#FFCB6B;">ctrl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">option</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">e</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 左边 三分之二</span></span>
<span class="line"><span style="color:#FFCB6B;">ctrl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">option</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">t</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 右边 三分之二</span></span>
<span class="line"><span style="color:#FFCB6B;">ctrl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">option</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">d</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 左边 三分之一</span></span>
<span class="line"><span style="color:#FFCB6B;">ctrl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">option</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">g</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 右边 三分之一</span></span>
<span class="line"><span style="color:#FFCB6B;">ctrl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">option</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">f</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 居中 三分之一</span></span></code></pre></div><h2 id="键盘输入" tabindex="-1">键盘输入 <a class="header-anchor" href="#键盘输入" aria-label="Permalink to &quot;键盘输入&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 输入非直角双引号</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 中文输入法下，按双引号健，输入的却是 按住 shift + &quot; →『』，只按 &quot; → 」「</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如何输入常用的双引号，百度输入法下，去掉直角双引号的勾选</span></span></code></pre></div><h2 id="electron-安装很慢" tabindex="-1">electron 安装很慢 <a class="header-anchor" href="#electron-安装很慢" aria-label="Permalink to &quot;electron 安装很慢&quot;">​</a></h2><p>在 .npmrc 文件中加入 electron 镜像</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">electron_mirror</span><span style="color:#89DDFF;">=</span><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//npm.taobao.org/mirrors/electron/</span></span></code></pre></div><p>重新 npm i</p><h2 id="iina-播放器使用" tabindex="-1">iina 播放器使用 <a class="header-anchor" href="#iina-播放器使用" aria-label="Permalink to &quot;iina 播放器使用&quot;">​</a></h2><p>快捷键</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">space</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 暂停、开始</span></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">→</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 下一个媒体</span></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">←</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 上一个媒体</span></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shift</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 播放列表</span></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> [ </span><span style="color:#676E95;font-style:italic;"># 0.5倍速</span></span>
<span class="line"><span style="color:#FFCB6B;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 2 倍速</span></span>
<span class="line"><span style="color:#FFCB6B;">option</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> [ </span><span style="color:#676E95;font-style:italic;"># 0.9091 倍速</span></span>
<span class="line"><span style="color:#FFCB6B;">option</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cmd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 1.1 倍速</span></span></code></pre></div>`,20),t=[o];function e(c,C,r,y,A,D){return n(),a("div",null,t)}const F=s(p,[["render",e]]);export{E as __pageData,F as default};
