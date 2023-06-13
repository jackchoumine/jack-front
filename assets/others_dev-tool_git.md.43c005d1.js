import{_ as s,c as a,o as n,R as l}from"./chunks/framework.324713a9.js";const h=JSON.parse('{"title":"git 使用","description":"","frontmatter":{},"headers":[],"relativePath":"others/dev-tool/git.md","filePath":"others/dev-tool/git.md"}'),o={name:"others/dev-tool/git.md"},e=l(`<h1 id="git-使用" tabindex="-1">git 使用 <a class="header-anchor" href="#git-使用" aria-label="Permalink to &quot;git 使用&quot;">​</a></h1><h2 id="同一台电脑上管理多-ssh-密钥" tabindex="-1">同一台电脑上管理多 ssh 密钥 <a class="header-anchor" href="#同一台电脑上管理多-ssh-密钥" aria-label="Permalink to &quot;同一台电脑上管理多 ssh 密钥&quot;">​</a></h2><p>使用私钥推送代码到仓库，可免去输入密码等繁琐问题。在同一个设备上管理多个仓库的密钥很必要，比如公司的仓库是 gitlab，个人仓库是 github。</p><ol><li>创建特定密钥对</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./ssh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./ssh</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 在个人主目录创建一个存放密钥的目录</span></span>
<span class="line"><span style="color:#FFCB6B;">ssh-keygen</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rsa</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-C</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">jacksMac@163.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./gitee_id_rsa</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#生成名为 gitee_id_rsa 的密钥对是给码云仓库使用的</span></span></code></pre></div><blockquote><p>名字很重要，我们希望不同的仓库使用不同的密钥。一路回车</p></blockquote><ol start="2"><li>拷贝公钥到码云个人设置</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pbcopy</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./gitee_id_rsa.pub</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># mac 上的命令 window 上用其他</span></span></code></pre></div><blockquote><p>文件内容已经复制到剪切板了，到码云粘贴即可</p></blockquote><p><strong>其他用法：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">pbcopy</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 查看文件内容并复制</span></span>
<span class="line"><span style="color:#FFCB6B;">pbpaste</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">filename</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 粘贴到文件</span></span></code></pre></div><p>window 下的 cmder 的复制粘贴</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">clip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">filename</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 复制到剪切板</span></span>
<span class="line"><span style="color:#FFCB6B;">paste</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">filename</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 粘贴到文件</span></span></code></pre></div><ol start="3"><li>配置 config</li></ol><blockquote><p>使用 config 文件配置私钥和仓库的对应关系。不配置不会成功</p></blockquote><p>config 文件没有后缀名，就叫 config，格式如下</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Host github.com  仓库域名 必需</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#     HostName github.com  仓库有域名 必需</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#     IdentityFile C:\\\\Users\\\\popfisher\\\\.ssh\\\\id_rsa_github # 身份认证文件，私钥路径--绝对路径 window 下路径要 \\\\</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#     PreferredAuthentications publickey # 希望的认证方式 password publickey,keyboard-interactive等</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#     User username1 # 用户名 可选</span></span></code></pre></div><p>我的码云配置</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># gitee</span></span>
<span class="line"><span style="color:#FFCB6B;">Host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gitee.com</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">HostName</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gitee.com</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">IdentityFile</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx/xxx/.ssh/gitee_id_rsa</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 使用绝对路径</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">PreferredAuthentications</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">publickey</span></span></code></pre></div><ol start="4"><li>测试是否认证成功</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ssh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-T</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git@gitee.com</span></span></code></pre></div><p>出现<code>Hi jackzhoumine! You&#39;ve successfully authenticated, but GITEE.COM does not provide shell access.</code> 就表示成功了。</p><p>出现类似 <code>Host key verification failed.</code> 、<code>git@gitee.com: Permission denied (publickey).</code> 就是不成功。</p><p>可能会出现 <code>git@gitee.com: Permission denied (publickey).</code> 执行以下命令:</p><blockquote><p>ssh-add ~/.ssh/gitee_id_rsa</p></blockquote><p><strong>重复以上方式，配置 github 仓库</strong>，最后成功了！</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">╰─$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ssh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-T</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git@github.com</span></span>
<span class="line"><span style="color:#FFCB6B;">Hi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jackchoumine!</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">You</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ve successfully authenticated, but GitHub does not provide shell access.</span></span></code></pre></div><h3 id="可能的报错" tabindex="-1">可能的报错 <a class="header-anchor" href="#可能的报错" aria-label="Permalink to &quot;可能的报错&quot;">​</a></h3><p><code>but GitHub does not provide shell access.</code>，出现这个，使用 https 设置远程的 origin，会推送失败，两种解决办法：</p><p>① 使用 ssh 协议，推荐；</p><p>② 执行<code>git pull origin master --allow-unrelated-histories</code>,再 push。</p><p>最后的 config</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># github</span></span>
<span class="line"><span style="color:#FFCB6B;">Host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">github.com</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">HostName</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">github.com</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">IdentityFile</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/Users/jack/.ssh/github_id_rsa</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">PreferredAuthentications</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">publickey</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># gitee</span></span>
<span class="line"><span style="color:#FFCB6B;">Host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gitee.com</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">HostName</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gitee.com</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">IdentityFile</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/Users/jack/.ssh./gitee_id_rsa</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">PreferredAuthentications</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">publickey</span></span></code></pre></div><blockquote><p>IdentityFile 使用绝对路径</p></blockquote><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h3><p><a href="https://www.cnblogs.com/popfisher/p/5731232.html" target="_blank" rel="noreferrer">Windows 下 Git 多账号配置，同一电脑多个 ssh-key 的管理</a></p>`,36),p=[e];function t(c,i,r,y,C,d){return n(),a("div",null,p)}const D=s(o,[["render",t]]);export{h as __pageData,D as default};
