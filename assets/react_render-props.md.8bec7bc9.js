import{_ as s,c as n,o as a,R as l}from"./chunks/framework.324713a9.js";const A=JSON.parse('{"title":"如何设计一个组件？常见的 React 组件设计模式 --- render-prop","description":"","frontmatter":{},"headers":[],"relativePath":"react/render-props.md","filePath":"react/render-props.md"}'),p={name:"react/render-props.md"},o=l(`<h1 id="如何设计一个组件-常见的-react-组件设计模式-render-prop" tabindex="-1">如何设计一个组件？常见的 React 组件设计模式 --- render-prop <a class="header-anchor" href="#如何设计一个组件-常见的-react-组件设计模式-render-prop" aria-label="Permalink to &quot;如何设计一个组件？常见的 React 组件设计模式 --- render-prop&quot;">​</a></h1><h2 id="render-prop" tabindex="-1">render-prop <a class="header-anchor" href="#render-prop" aria-label="Permalink to &quot;render-prop&quot;">​</a></h2><p><code>render-prop</code>：</p><blockquote><p>将<strong>渲染函数</strong>通过组件的 prop 传入组件内部，组件的使用者就可完全控制渲染的内容，可在组件内部传递相关参数。它是一种重用组件逻辑和状态的方式。</p></blockquote><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Counter</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">render</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Decrement</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">onDecrement</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">setValue</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#89DDFF;">        /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Label</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">计数器</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Count</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">count</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">max</span><span style="color:#89DDFF;">={</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Increment</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">onIncrement</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">setValue</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#89DDFF;">        /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/&gt;</span></span>
<span class="line"><span style="color:#F07178;">    )</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><p>Counter 的实现：</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> styled </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">styled-components</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Counter</span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">render</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">children</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Counter render</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">children</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">StyledCounter</span><span style="color:#89DDFF;">&gt;{</span><span style="color:#82AAFF;">children</span><span style="color:#A6ACCD;">(value)</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#FFCB6B;">StyledCounter</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">StyledCounter</span><span style="color:#89DDFF;">&gt;{</span><span style="color:#A6ACCD;">render </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(value)</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#FFCB6B;">StyledCounter</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> StyledCounter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> styled</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">div</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">  display: inline-flex;</span></span>
<span class="line"><span style="color:#C3E88D;">  border: 1px solid #17a2b8;</span></span>
<span class="line"><span style="color:#C3E88D;">  line-height: 1.5;</span></span>
<span class="line"><span style="color:#C3E88D;">  border-radius: 0.25rem;</span></span>
<span class="line"><span style="color:#C3E88D;">  overflow: hidden;</span></span>
<span class="line"><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Counter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span></code></pre></div><p><code>children</code> 是特殊的 prop，可将一个渲染函数当成 children 传入。</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Counter</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">value1</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&lt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Decrement</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">onDecrement</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">setValue1</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#89DDFF;">        /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Increment</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">onIncrement</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">setValue1</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#89DDFF;">        /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Label</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">计数器</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Count</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">count</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">max</span><span style="color:#89DDFF;">={</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/&gt;</span></span>
<span class="line"><span style="color:#F07178;">    )</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Counter</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>renderProp vs renderChildren</p><p>renderProp 可自由定义 prop 的名字，renderChildren 不能改名字。</p><p>renderProp 可读性不及 renderChildren, renderChildren 可清楚组件的开始和结束。</p><p>renderProp 还能再传递子组件，renderChildren 不能再传递子组件，renderProp 更加灵活。</p><h2 id="关于-renderprop-的疑问" tabindex="-1">关于 renderProp 的疑问 <a class="header-anchor" href="#关于-renderprop-的疑问" aria-label="Permalink to &quot;关于 renderProp 的疑问&quot;">​</a></h2><blockquote><p>renderProp vs renderChildren 该用哪个？</p></blockquote><p><code>renderProp</code>。</p><p>理由：renderProp 更加灵活，可重命名，好的命名极为重要。</p><p>将 renderProp 提取成函数，可解决可读性问题。</p><blockquote><p>什么情况从组件内部给 renderProp 传递参数？从内部传递参数有什么好处吗？不传递参数，也能实现相同的功能。</p></blockquote><p>目前 react 还没遇到必需从内部传递参数的情况。 vue 需要从内部传递参数，使用起来才方便。</p><h2 id="vue-中如何实现-renderprop" tabindex="-1">vue 中如何实现 renderProp? <a class="header-anchor" href="#vue-中如何实现-renderprop" aria-label="Permalink to &quot;vue 中如何实现 renderProp?&quot;">​</a></h2><blockquote><p>把 h 函数作为普通函数的第一个参数，那么这个函数被当成渲染函数，可返回 jsx，再把该函数通过 props 传递给组件，组件的 <code>setup</code> 或者 <code>render</code> 返回这个函数的调用，即可实现在数据里写 jsx，提高组件的可维护性和扩展性。</p></blockquote><p>具体看<a href="https://jackchoumine.github.io/vue2/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8render%E5%87%BD%E6%95%B0%E5%B0%81%E8%A3%85%E9%AB%98%E6%89%A9%E5%B1%95%E7%9A%84%E7%BB%84%E4%BB%B6.html#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-render-%E6%94%B9%E5%96%84%E7%BB%84%E4%BB%B6" target="_blank" rel="noreferrer">如何使用 render 改善组件</a></p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><p><a href="https://medium.com/@mjackson/use-a-render-prop-50de598f11ce" target="_blank" rel="noreferrer">Use a Render Prop!</a></p><p><a href="https://medium.com/merrickchristensen/function-as-child-components-5f3920a9ace9" target="_blank" rel="noreferrer">Function as Child Components</a></p><p><a href="https://kentcdodds.com/blog/when-to-not-use-render-props" target="_blank" rel="noreferrer">When to NOT use Render Props</a></p>`,27),e=[o];function r(t,c,F,y,D,C){return a(),n("div",null,e)}const d=s(p,[["render",r]]);export{A as __pageData,d as default};
