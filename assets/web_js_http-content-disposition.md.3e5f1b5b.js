import{_ as s,c as a,o as n,R as e}from"./chunks/framework.324713a9.js";const m=JSON.parse('{"title":"http header Content-Disposition 学习","description":"","frontmatter":{},"headers":[],"relativePath":"web/js/http-content-disposition.md","filePath":"web/js/http-content-disposition.md"}'),o={name:"web/js/http-content-disposition.md"},t=e(`<h1 id="http-header-content-disposition-学习" tabindex="-1">http header Content-Disposition 学习 <a class="header-anchor" href="#http-header-content-disposition-学习" aria-label="Permalink to &quot;http header Content-Disposition 学习&quot;">​</a></h1><p>Content-Disposition 在响应头中，告诉浏览器如何处理返回的内容，在表单提交中，说明表单字段信息。</p><h2 id="在响应头中" tabindex="-1">在响应头中 <a class="header-anchor" href="#在响应头中" aria-label="Permalink to &quot;在响应头中&quot;">​</a></h2><p>用在响应头中，告诉浏览器如何处理返回的内容。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">&#39;Content-Disposition&#39;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">inline</span><span style="color:#89DDFF;">&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>预览，返回的内容替换当前页面，可使用<code>a</code>标签的<code>target=&quot;_blank&quot;</code>打开新标签。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">&#39;Content-Disposition&#39;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">attachment</span><span style="color:#89DDFF;">&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>下载，使用 a 访问，会把路径作为名字，文件后缀名浏览器自动识别。</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">&#39;Content-Disposition&#39;</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">attachment;filename=filename</span><span style="color:#89DDFF;">&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>下载，指定文件名字。</p><blockquote><p>文件名含有中文，使用<code>encodeURIComponent</code>编码，否则报错。</p></blockquote><p>Invalid character in header content [&quot;Content-Disposition&quot;]。</p><h2 id="在请求头中" tabindex="-1">在请求头中 <a class="header-anchor" href="#在请求头中" aria-label="Permalink to &quot;在请求头中&quot;">​</a></h2><p>页面上有表单，并且我们选择的表单提交方式为 <code>multipart/form-data</code> 时，<code>Content-Disposition </code>会出现在请求体中。</p><p>可能会这样出现：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Content-Disposition:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">form-data</span></span>
<span class="line"><span style="color:#FFCB6B;">Content-Disposition:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">form-data</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fieldName</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">Content-Disposition:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">form-data</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fieldName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> filename</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">filename.jpg</span><span style="color:#89DDFF;">&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://tva1.sinaimg.cn/large/008vxvgGly1h8bxww4n74j31200e4402.jpg" alt=""></p><p><a href="https://github.com/jackchoumine/crud-node" target="_blank" rel="noreferrer">实例代码</a></p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><p><a href="https://juejin.cn/post/6844903911740932110" target="_blank" rel="noreferrer">Hi gays, 你造 Content-Disposition 吗？</a></p>`,20),p=[t];function l(i,r,c,d,h,D){return n(),a("div",null,p)}const C=s(o,[["render",l]]);export{m as __pageData,C as default};
