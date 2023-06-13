import{_ as s,c as o,o as n,R as a}from"./chunks/framework.324713a9.js";const C=JSON.parse('{"title":"vs code jsconfig 配置","description":"","frontmatter":{},"headers":[],"relativePath":"others/dev-tool/jsconfig文件.md","filePath":"others/dev-tool/jsconfig文件.md"}'),l={name:"others/dev-tool/jsconfig文件.md"},t=a(`<h1 id="vs-code-jsconfig-配置" tabindex="-1">vs code jsconfig 配置 <a class="header-anchor" href="#vs-code-jsconfig-配置" aria-label="Permalink to &quot;vs code jsconfig 配置&quot;">​</a></h1><p><code>jsconfig.json</code>的作用：对 <code>JS 项目</code>目录提供个性化支持：比如路径短写、引入文件自动完成等，能提升开发体验。</p><blockquote><p>配置后需要重启 vs code。<code>jsconfig.json</code> 所在的目录是项目根目录。</p></blockquote><h2 id="配置详情" tabindex="-1">配置详情 <a class="header-anchor" href="#配置详情" aria-label="Permalink to &quot;配置详情&quot;">​</a></h2><p><code>exclude</code> 属性，glob 模式，告诉语言服务哪些文件不是源码文件，能提高 vscode 扫描速度。</p><blockquote><p>如果您的工作区中没有 jsconfig.json，VS Code 将默认排除 node_modules 文件夹。</p></blockquote><p><code>include</code>，属性，指定哪些路径或者文件是项目文件。</p><blockquote><p>这两个属性都是为了提高智能感知的速度。</p></blockquote><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">exclude</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dist</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">include</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src/**/*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><blockquote><p>路径跳转</p></blockquote><p>webpack 配置路径别名，在引入文件时，vscode 无法感知路径的，也<code>无法跳转</code>文件，jsconfig 的别名路径解决这一问题。</p><blockquote><p>只支持 <code>js文件</code> 和 <code>jsx文件</code> 跳转路径，<code>.vue</code> 不支持跳转，配置中发现路径别名也要配置<code>vue.config.js</code>才能找到模块，这样依赖，jsconfig 的配置就鸡肋了。</p></blockquote><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">baseUrl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">paths</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">@component</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./src/component</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">commonjs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">target</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">es6</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><blockquote><p>compilerOptions 选项</p></blockquote><table><thead><tr><th>属性</th><th style="text-align:left;">描述</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th></tr></thead><tbody><tr><td>baseUrl</td><td style="text-align:left;">解析非相对模块名称的基目录</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td></tr><tr><td>paths</td><td style="text-align:left;">指定相对于 baseUrl 选项计算的路径映射</td><td style="text-align:center;">object</td><td style="text-align:center;"></td></tr><tr><td>checkJs</td><td style="text-align:left;">启用 JavaScript 文件的类型检查</td><td style="text-align:center;">boolean</td><td style="text-align:center;">true</td></tr><tr><td>noLib</td><td style="text-align:left;">不包含默认库文件（lib.d.ts）</td><td style="text-align:center;">string -</td><td style="text-align:center;"></td></tr><tr><td>allowSyntheticDefaultImports</td><td style="text-align:left;">允许从没有默认导出的模块进行默认导入。 这不会影响代码发出，只会影响类型检查。</td><td style="text-align:center;">boolean</td><td style="text-align:center;">true</td></tr><tr><td>target</td><td style="text-align:left;">指定要使用的默认库（lib.d.ts）。 值是“es3”，“es5”，“es6”，“es2015”，“es2016”，“es2017”，“es2018”，“esnext”</td><td style="text-align:center;">string</td><td style="text-align:center;">-</td></tr></tbody></table><blockquote><p>jsconfig 与 tsconfig.json 的关系？</p></blockquote><ol><li><p>jsconfig.json 是 tsconfig.json 的后代，后者是 TypeScript 的配置文件。</p></li><li><p>jsconfig.json 相当于 tsconfig.json 的“allowJs”属性设置为 true。</p></li></ol><p>常用的配置选项：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">baseUrl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">paths</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">@component</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./src/components</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">commonjs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">target</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">es6</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">exclude</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dist</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">include</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src/**/*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,19),p=[t];function e(c,D,r,F,y,d){return n(),o("div",null,p)}const u=s(l,[["render",e]]);export{C as __pageData,u as default};
