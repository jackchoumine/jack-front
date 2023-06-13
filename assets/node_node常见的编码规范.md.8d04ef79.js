import{_ as s,c as a,o as e,R as o}from"./chunks/framework.324713a9.js";const F=JSON.parse('{"title":"node 常见的编码规范","description":"","frontmatter":{},"headers":[],"relativePath":"node/node常见的编码规范.md","filePath":"node/node常见的编码规范.md"}'),n={name:"node/node常见的编码规范.md"},l=o(`<h1 id="node-常见的编码规范" tabindex="-1">node 常见的编码规范 <a class="header-anchor" href="#node-常见的编码规范" aria-label="Permalink to &quot;node 常见的编码规范&quot;">​</a></h1><h2 id="总是使用异步函数" tabindex="-1">总是使用<code>异步函数</code> <a class="header-anchor" href="#总是使用异步函数" aria-label="Permalink to &quot;总是使用\`异步函数\`&quot;">​</a></h2><p>node 最大的两个优势是非阻塞和异步运行。异步函数能充分发挥 node 的优势，而同步函数会阻塞主线程。</p><h2 id="使用-commonjs-模块规范" tabindex="-1">使用 CommonJS 模块规范 <a class="header-anchor" href="#使用-commonjs-模块规范" aria-label="Permalink to &quot;使用 CommonJS 模块规范&quot;">​</a></h2><p>JS 的模块规范在 node 还在试验阶段，node 模块规范使用 CommonJS。 ##不在函数内部 <code>require</code>模块</p><p>CommonJS 规范加载模块是<code>同步</code>的，在函数内部加载模块，先加载再使用，只加载一次，下次使用缓存。在函数内部加载模块可能会阻塞函数执行，另一个问题，加载模块错误，不容易发现错误。 解决办法是在<strong>文件顶部</strong>加载要使用的模块。</p><h2 id="使用-module-exports导出模块-不用-exports" tabindex="-1">使用 <code>module.exports</code>导出模块,不用 exports <a class="header-anchor" href="#使用-module-exports导出模块-不用-exports" aria-label="Permalink to &quot;使用 \`module.exports\`导出模块,不用 exports&quot;">​</a></h2><h2 id="记得保存-this的引用" tabindex="-1">记得保存 <code>this</code>的引用 <a class="header-anchor" href="#记得保存-this的引用" aria-label="Permalink to &quot;记得保存 \`this\`的引用&quot;">​</a></h2><p>当上下文改变时，this 值会改变，在函数内部使用 this 时，需要事先保存 this。 使用 <code>self</code>、<code>_this</code>、<code>that</code>保存 this。</p><p>另一个不需要事先保存 this 的方法是使用箭头函数。</p><h2 id="使用严格模式-use-strict" tabindex="-1">使用严格模式 （<em>use strict</em>） <a class="header-anchor" href="#使用严格模式-use-strict" aria-label="Permalink to &quot;使用严格模式 （_use strict_）&quot;">​</a></h2><h2 id="检查回调函数是不是一个函数" tabindex="-1">检查回调函数是不是一个函数 <a class="header-anchor" href="#检查回调函数是不是一个函数" aria-label="Permalink to &quot;检查回调函数是不是一个函数&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> callback </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">function</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">callback</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="error-作为回调函数的第一个参数" tabindex="-1">error 作为回调函数的第一个参数 <a class="header-anchor" href="#error-作为回调函数的第一个参数" aria-label="Permalink to &quot;error 作为回调函数的第一个参数&quot;">​</a></h2><h2 id="总是在回调函数中检查-error" tabindex="-1">总是在回调函数中检查 error <a class="header-anchor" href="#总是在回调函数中检查-error" aria-label="Permalink to &quot;总是在回调函数中检查 error&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (error) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//do something</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//no error</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//do something</span></span></code></pre></div><h2 id="记得处理可能的异常" tabindex="-1">记得处理可能的异常 <a class="header-anchor" href="#记得处理可能的异常" aria-label="Permalink to &quot;记得处理可能的异常&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> parsedJSON </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">parsedJSON</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">json</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> (err) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// handle err</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (parsedJSON) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// use parsedJSON</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="使用-jsdoc-注释函数" tabindex="-1">使用 JSDoc 注释函数 <a class="header-anchor" href="#使用-jsdoc-注释函数" aria-label="Permalink to &quot;使用 JSDoc 注释函数&quot;">​</a></h2><p>parma author example returns</p><p>如何描述参数是一个回调和返回值是一个函数呢？</p><h2 id="使用进程管理器-如pm2、forever、upstart" tabindex="-1">使用进程管理器，如<code>pm2</code>、<code>forever</code>、<code>upstart</code> <a class="header-anchor" href="#使用进程管理器-如pm2、forever、upstart" aria-label="Permalink to &quot;使用进程管理器，如\`pm2\`、\`forever\`、\`upstart\`&quot;">​</a></h2>`,22),t=[l];function p(r,c,i,d,h,y){return e(),a("div",null,t)}const u=s(n,[["render",p]]);export{F as __pageData,u as default};
