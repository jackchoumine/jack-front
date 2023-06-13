import{_ as s,c as n,o as a,R as l}from"./chunks/framework.324713a9.js";const i=JSON.parse('{"title":"node 学习笔记 --- util 模块","description":"","frontmatter":{},"headers":[],"relativePath":"node/node学习笔记util模块.md","filePath":"node/node学习笔记util模块.md"}'),o={name:"node/node学习笔记util模块.md"},p=l(`<h1 id="node-学习笔记-util-模块" tabindex="-1">node 学习笔记 --- util 模块 <a class="header-anchor" href="#node-学习笔记-util-模块" aria-label="Permalink to &quot;node 学习笔记 --- util 模块&quot;">​</a></h1><p>util 是 node 的核心模块，提供一些常用的工具函数，弥补 JS 过于精简的不足。</p><h2 id="inherits-constructor-baseconstructor" tabindex="-1">inherits(constructor,baseConstructor) <a class="header-anchor" href="#inherits-constructor-baseconstructor" aria-label="Permalink to &quot;inherits(constructor,baseConstructor)&quot;">​</a></h2><p>实现原型继承，JS 通过复制原型实现继承。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// test.1.js</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> util </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">util</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Base</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">base</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">birth</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1994</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">sayHello</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">Base</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showName</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Sub</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sub</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">util</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">inherits</span><span style="color:#A6ACCD;">(Sub</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Base)</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> oBase </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Base</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(oBase)</span></span>
<span class="line"><span style="color:#A6ACCD;">oBase</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showName</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">oBase</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sayHello</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">//Base 构造函数上的函数</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> oSub </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Sub</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">oSub</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showName</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// Base 原型上的函数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//console.log(oSub); // 报错，没继承构造函数上的函数</span></span>
<span class="line"><span style="color:#A6ACCD;">oSub</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sayHello</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Base</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">name:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">base</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">birth:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1994</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sayHello:</span><span style="color:#A6ACCD;"> [Function] }</span></span>
<span class="line"><span style="color:#FFCB6B;">base</span></span>
<span class="line"><span style="color:#FFCB6B;">hello</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">base</span></span>
<span class="line"><span style="color:#FFCB6B;">sub</span></span>
<span class="line"><span style="color:#FFCB6B;">Sub</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">name:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sub</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">}</span></span></code></pre></div><h2 id="inspect-object-showhidden-depth-colors-输出对象的字符串格式-常用于调试错误" tabindex="-1">inspect(object,[showHidden],[depth],[colors]) 输出对象的字符串格式，常用于调试错误 <a class="header-anchor" href="#inspect-object-showhidden-depth-colors-输出对象的字符串格式-常用于调试错误" aria-label="Permalink to &quot;inspect(object,[showHidden],[depth],[colors]) 输出对象的字符串格式，常用于调试错误&quot;">​</a></h2><ul><li>object 需要转换成字符串的对象；</li><li>showHidden 为<code>true</code>,输出更多隐藏信息；</li><li>depth 最大的递归层数；</li><li>colors,为 <code>true</code>,带颜色输出。</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// test.1.js</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> util </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">util</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Base</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">base</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">birth</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1994</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">inObj</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    location</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">成都</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    books</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">JS入门</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">sayHello</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">Base</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showName</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> oBase </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Base</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(util</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">inspect</span><span style="color:#A6ACCD;">(oBase</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">))</span></span></code></pre></div><p>运行结果：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Base</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">name:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">base</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">birth:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1994</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">inObj:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">location:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">成都</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">books:</span><span style="color:#A6ACCD;"> [ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">JS入门</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> [length]: 1 ] },</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">sayHello:</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Function</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">]</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">]</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">arguments</span><span style="color:#89DDFF;">]</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">caller</span><span style="color:#89DDFF;">]</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">]</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span><span style="color:#A6ACCD;"> [constructor]: </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">Circular</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> } }</span></span></code></pre></div><h2 id="format-format-args-格式化字符串" tabindex="-1">format(format[,...args]) 格式化字符串 <a class="header-anchor" href="#format-format-args-格式化字符串" aria-label="Permalink to &quot;format(format[,...args]) 格式化字符串&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// test.1.js</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> util </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">util</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Base</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">base</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">birth</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1994</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">inObj</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    location</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">成都</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    books</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">JS入门</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">sayHello</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">Base</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showName</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> oBase </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Base</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> formateBase </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> util</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">format</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%s %d ---- %j%%一个百分号</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">991</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> oBase)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(formateBase)</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">hello</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">991</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">----</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">base</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">birth</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:1994,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">inObj</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">location</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">成都</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">books</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">JS入门</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">]}}%一个百分号</span></span></code></pre></div><h2 id="其他工具函数" tabindex="-1">其他工具函数 <a class="header-anchor" href="#其他工具函数" aria-label="Permalink to &quot;其他工具函数&quot;">​</a></h2><ul><li>isArray()</li><li>isRegExp()</li><li>isDate()</li><li>isError()</li><li>debug()</li></ul>`,16),e=[p];function t(c,r,D,y,F,C){return a(),n("div",null,e)}const u=s(o,[["render",t]]);export{i as __pageData,u as default};
