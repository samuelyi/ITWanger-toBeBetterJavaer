import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,d as s,b as t,e}from"./app-dea8ffe7.js";const i={},u=e(`<h1 id="_3-8-java语法基础练习题" tabindex="-1"><a class="header-anchor" href="#_3-8-java语法基础练习题" aria-hidden="true">#</a> 3.8 Java语法基础练习题</h1><h3 id="翻转整数" tabindex="-1"><a class="header-anchor" href="#翻转整数" aria-hidden="true">#</a> 翻转整数</h3><p>给定一个 32 位有符号整数，将整数中的数字进行反转。</p><p>示例 1:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: 123
输出: 321
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: -123
输出: -321
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果反转后整数溢出那么就返回 0。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReverseInteger</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">123</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">reverse</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> rev <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 用于存储反转后的结果</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">int</span> pop <span class="token operator">=</span> x <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 获取 x 的最后一位数字</span>
			x <span class="token operator">/=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 移除 x 的最后一位数字</span>

			<span class="token comment">// 检查溢出：如果 rev &gt; Integer.MAX_VALUE/10 或 rev &lt; Integer.MIN_VALUE/10，则会溢出</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>rev <span class="token operator">&gt;</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span> <span class="token operator">/</span> <span class="token number">10</span> <span class="token operator">||</span> <span class="token punctuation">(</span>rev <span class="token operator">==</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span> <span class="token operator">/</span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span> pop <span class="token operator">&gt;</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span> <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>rev <span class="token operator">&lt;</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MIN_VALUE</span> <span class="token operator">/</span> <span class="token number">10</span> <span class="token operator">||</span> <span class="token punctuation">(</span>rev <span class="token operator">==</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MIN_VALUE</span> <span class="token operator">/</span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span> pop <span class="token operator">&lt;</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MIN_VALUE</span> <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

			rev <span class="token operator">=</span> rev <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> pop<span class="token punctuation">;</span> <span class="token comment">// 将 pop 添加到 rev 的最后</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> rev<span class="token punctuation">;</span> <span class="token comment">// 返回反转后的整数</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),r={href:"https://paicoding.com/column/7/7",target:"_blank",rel:"noopener noreferrer"},k=e(`<p>这道题其实很好的考察了 int 的基本数据类型、取余和除法运算符，以及 if 和 while 语句的使用。</p><h3 id="字符串转换整数" tabindex="-1"><a class="header-anchor" href="#字符串转换整数" aria-hidden="true">#</a> 字符串转换整数</h3><p>请你来实现一个 parseInt 方法，使其能将字符串转换成整数。</p><p>示例 1（正数）:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: &quot;42&quot;
输出: 42
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2（带空格的负数）:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: &quot;   -42&quot;
输出: -42
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 3（带非数字的字符）:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: &quot;4193 with words&quot;
输出: 4193
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 4（超出 int 范围）:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入: &quot;91283472332&quot;
输出: 2147483647
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StringToInteger</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token string">&quot;42&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token string">&quot;   -42&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> str3 <span class="token operator">=</span> <span class="token string">&quot;4193 with words&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> str4 <span class="token operator">=</span> <span class="token string">&quot;91283472332&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span>str3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span>str4<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 用于遍历字符串</span>
        <span class="token keyword">int</span> sign <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 用于标记正负号</span>
        <span class="token keyword">int</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 用于存储转换后的整数</span>

        <span class="token comment">// 1. 跳过前面的空格</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">)</span> index<span class="token operator">++</span><span class="token punctuation">;</span>

        <span class="token comment">// 2. 检查正负号</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token char">&#39;+&#39;</span> <span class="token operator">||</span> str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token char">&#39;-&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            sign <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token char">&#39;+&#39;</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
            index<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 3. 转换数字</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> digit <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token char">&#39;0&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 获取当前字符对应的数字</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>digit <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> digit <span class="token operator">&gt;</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">// 如果不是数字则退出循环</span>
            <span class="token comment">// 检查溢出：如果 total &gt; Integer.MAX_VALUE/10 或 total == Integer.MAX_VALUE/10 且 digit &gt; Integer.MAX_VALUE%10，则会溢出</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>total <span class="token operator">&gt;</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span> <span class="token operator">/</span> <span class="token number">10</span> <span class="token operator">||</span> <span class="token punctuation">(</span>total <span class="token operator">==</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span> <span class="token operator">/</span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span> digit <span class="token operator">&gt;</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span> <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> sign <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span> <span class="token operator">:</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MIN_VALUE</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            total <span class="token operator">=</span> total <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> digit<span class="token punctuation">;</span> <span class="token comment">// 将 digit 添加到 total 的最后</span>
            index<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> total <span class="token operator">*</span> sign<span class="token punctuation">;</span> <span class="token comment">// 返回转换后的整数</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),d={href:"https://paicoding.com/column/7/8",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"trim()",-1),v=n("code",null,"charAt()",-1),b={href:"https://javabetter.cn/string/string-source.html",target:"_blank",rel:"noopener noreferrer"},g=n("h3",{id:"总结",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),s(" 总结")],-1),h=n("p",null,"经过这些练习题的练习，我想你就能完全掌握 Java 的语法知识了。",-1),_=n("hr",null,null,-1),x={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},f={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},w=n("p",null,[s("微信搜 "),n("strong",null,"沉默王二"),s(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),n("strong",null,"222"),s(" 即可免费领取。")],-1),y=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function A(I,L){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[s("这道题其实是 LeetCode 的第 7 题，如果你想看看更多的解题思路，可以看看这篇文章："),n("a",r,[s("LeetCode 7. 整数反转"),t(a)]),s("，我放在技术派的《二哥的 LeetCode 刷题笔记》专栏中。")]),k,n("p",null,[s("这道题其实是 LeetCode 的第 8 题，如果你想看看更多的解题思路，可以看看这篇文章："),n("a",d,[s("LeetCode 8. 字符串转换整数 (atoi)"),t(a)]),s("，我放在技术派的《二哥的 LeetCode 刷题笔记》专栏中。")]),n("p",null,[s("这道题其实很好的字符与整数之间的转换，以及 if 和 while 语句的使用。超纲的内容就是字符串的处理，比如说去空格（"),m,s("），比如说取字符（"),v,s("），但这些我们在"),n("a",b,[s("后面的章节"),t(a)]),s("中都会讲到。")]),g,h,_,n("p",null,[s("GitHub 上标星 10000+ 的开源知识库《"),n("a",x,[s("二哥的 Java 进阶之路"),t(a)]),s("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),n("a",f,[s("太赞了，GitHub 上标星 10000+ 的 Java 教程"),t(a)])]),w,y])}const M=p(i,[["render",A],["__file","basic-exercise.html.vue"]]);export{M as default};
