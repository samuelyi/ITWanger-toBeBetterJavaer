import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o,c as l,a as s,d as n,b as t,e}from"./app-dea8ffe7.js";const i={},u=e('<h1 id="_10-4-java-14-新特性" tabindex="-1"><a class="header-anchor" href="#_10-4-java-14-新特性" aria-hidden="true">#</a> 10.4 Java 14 新特性</h1><p>Java 14 的时候，新增了记录 Record、模式匹配 instanceof 等新特性，转正了 Java 12 时的 switch 表达式，我们一起来过一遍。</p><figure><img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xMTc5Mzg5LTA2N2E2NGZiZWY3OTU0MTAucG5n?x-oss-process=image/format,png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_01、下载-jdk-14" tabindex="-1"><a class="header-anchor" href="#_01、下载-jdk-14" aria-hidden="true">#</a> 01、下载 JDK 14</h3><blockquote><p>截止到2023年03月30日，Java 20 已经发布了，不过不是 LTS（长期支持）版本，Java 17、11、8 是目前提供支持的 LTS 版本。</p></blockquote>',5),r={href:"https://jdk.java.net/14/",target:"_blank",rel:"noopener noreferrer"},k=e(`<figure><img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xMTc5Mzg5LTJkM2Q3MGQ4ODQ0NDk1MDEucG5n?x-oss-process=image/format,png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我目前用的是 Windows 操作系统，所以就选择 Windows 版的 zip 包进行下载，完成后记得解压。</p><h3 id="_02、升级-intellij-idea" tabindex="-1"><a class="header-anchor" href="#_02、升级-intellij-idea" aria-hidden="true">#</a> 02、升级 IntelliJ IDEA</h3><blockquote><p>截止到 2023年03月30日，Intellij IDEA 的最新版本是 2023.1。</p></blockquote><p>需要把 IDEA 升级到抢先体验版 2020.1 EAP（如果你当前使用的版本大于此，当然也可以），否则无法支持 Java 14 的新特性。</p><figure><img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xMTc5Mzg5LThhYjFjYmRiNDA3MjBiM2UucG5n?x-oss-process=image/format,png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>社区版的下载地址如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[https://www.jetbrains.com/idea/nextversion/#section=windows](https://www.jetbrains.com/idea/nextversion/#section=windows)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装的时候可以把之前的版本卸载，也可以选择保留。完成后，我们来新建一个 Java 14 的项目。</p><figure><img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xMTc5Mzg5LTBhYWIwYWNiY2RiMzllZGIucG5n?x-oss-process=image/format,png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_01、instanceof" tabindex="-1"><a class="header-anchor" href="#_01、instanceof" aria-hidden="true">#</a> 01、instanceof</h3><p>按照新特性的顺序，我们就先从 instanceof 说起吧。旧式的 instanceof 的用法如下所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OldInstanceOf</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Object</span> str <span class="token operator">=</span> <span class="token string">&quot;Java 14，真香&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>str <span class="token keyword">instanceof</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>str<span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要先使用 instanceof 在 if 条件中判断 str 的类型是否为 String（第一步），再在 if 语句中将 str 强转为字符串类型（第二步），并且要重新声明一个变量用于强转后的赋值（第三步）。</p><p>三个步骤也不算多，但总觉得应该还有更好的语法，这不，Java 14 就想到了这一层。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NewInstanceOf</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Object</span> str <span class="token operator">=</span> <span class="token string">&quot;Java 14，真香&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>str <span class="token keyword">instanceof</span> <span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以直接在 if 条件判断类型的时候添加一个变量，就不需要再强转和声明新的变量了。是不是特别简洁？但模式匹配的 instanceof 在 Java 14 中是预览版的，默认是不启用的，所以这段代码会有一个奇怪的编译错误（Java 14 中不支持模式匹配的 instanceof）。</p><figure><img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xMTc5Mzg5LTg1MTQ4YWI3MjI2ZmM4ZTUucG5n?x-oss-process=image/format,png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>那怎么解决这个问题呢？需要在项目配置中手动设置一下语言的版本。</p><figure><img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xMTc5Mzg5LTdhMzE3MDYwNjk5NTJmMDgucG5n?x-oss-process=image/format,png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>设置完成后，编译错误就随风飘走了。程序输出的结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不错不错，真香。想知道 Java 编译器在背后帮我们做了什么吗？看一下反编译后的字节码就明白了。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NewInstanceOf</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">NewInstanceOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Object</span> str <span class="token operator">=</span> <span class="token string">&quot;Java 14，真香&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> s<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>str <span class="token keyword">instanceof</span> <span class="token class-name">String</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>str<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 if 条件判断前，先声明了变量 s，然后在 if 条件中进行了强转 <code>s = (String)str)</code>，并且判断了 s 和 str 是否相等。确实是一个解放开放者生产力的好特性，强烈希望这个特性在下个版本中转正。</p><h3 id="_02、records" tabindex="-1"><a class="header-anchor" href="#_02、records" aria-hidden="true">#</a> 02、Records</h3>`,26),d={href:"https://javabetter.cn/basic-extra-meal/immutable.html",target:"_blank",rel:"noopener noreferrer"},v=e(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Writer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Writer</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么，对于 Records 来说，一条 Record 就代表一个不变的状态。尽管它会提供诸如 <code>equals()</code>、<code>hashCode()</code>、<code>toString()</code>、构造方法，以及字段的 getter，但它无意替代可变对象的类（没有 setter），以及 Lombok 提供的功能。</p><p>来用 Records 替代一下上面这个 Writer 类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">record</span> <span class="token class-name">Writer</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你看，一行代码就搞定。关键是比之前的代码功能更丰富，来看一下反编译后的字节码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Writer</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>Record</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Writer</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* compiled code */</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* compiled code */</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* compiled code */</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* compiled code */</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* compiled code */</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* compiled code */</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类是 final 的，字段是 private final 的，构造方法有两个参数，<code>toString()</code>、<code>hashCode()</code>、<code>equals()</code> 方法也有了，getter 方法也有了，只不过没有 get 前缀。但是没有 setter 方法，也就是说 Records 确实针对的是不可变对象——鉴定完毕。那怎么使用 Records 呢？</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WriterDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Writer</span> writer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Writer</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;toString：&quot;</span> <span class="token operator">+</span> writer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hashCode：&quot;</span> <span class="token operator">+</span> writer<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name：&quot;</span> <span class="token operator">+</span> writer<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;age：&quot;</span> <span class="token operator">+</span> writer<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Writer</span> writer1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Writer</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;equals：&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>writer<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>writer1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>程序输出的结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>toString：Writer[name=沉默王二, age=18]
hashCode：1130697218
name：沉默王二
age：18
equals：true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不错不错，真香，以后定义不可变类时就简单了，强烈希望这个特性在下个版本中转正。</p><h3 id="_03、switch-表达式" tabindex="-1"><a class="header-anchor" href="#_03、switch-表达式" aria-hidden="true">#</a> 03、switch 表达式</h3>`,12),m={href:"https://mp.weixin.qq.com/s/1BDDLDSKDGwQAfIFMyySdg",target:"_blank",rel:"noopener noreferrer"},g=e(`<p>记得这篇文章发表到掘金的时候，被喷子各种无脑 diss，说：“还以为你有什么技巧，没想到用的是 Java 13，可我们还停留在 Java 8 啊！”这显然是一种固步自封的心态，非常不可取，程序员不应该这样。一个最简单的道理就是，Java 6 当年也很经典，不是被 Java 8 取代了吗？随着时间的推移，Java 8 早晚会被更划时代的新版本取代——总要进步嘛。</p><p>关于 switch 表达式，这里就简单地搬个例子给你瞧瞧：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SwitchDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">enum</span> <span class="token class-name">PlayerTypes</span> <span class="token punctuation">{</span>
        <span class="token constant">TENNIS</span><span class="token punctuation">,</span>
        <span class="token constant">FOOTBALL</span><span class="token punctuation">,</span>
        <span class="token constant">BASKETBALL</span><span class="token punctuation">,</span>
        <span class="token constant">PINGPANG</span><span class="token punctuation">,</span>
        <span class="token constant">UNKNOWN</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">createPlayer</span><span class="token punctuation">(</span><span class="token class-name">PlayerTypes</span><span class="token punctuation">.</span><span class="token constant">BASKETBALL</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">createPlayer</span><span class="token punctuation">(</span><span class="token class-name">PlayerTypes</span> playerType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">switch</span> <span class="token punctuation">(</span>playerType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token constant">TENNIS</span> <span class="token operator">-&gt;</span> <span class="token string">&quot;网球运动员费德勒&quot;</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token constant">FOOTBALL</span> <span class="token operator">-&gt;</span> <span class="token string">&quot;足球运动员C罗&quot;</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token constant">BASKETBALL</span> <span class="token operator">-&gt;</span> <span class="token string">&quot;篮球运动员詹姆斯&quot;</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token constant">PINGPANG</span> <span class="token operator">-&gt;</span> <span class="token string">&quot;乒乓球运动员马龙&quot;</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token constant">UNKNOWN</span> <span class="token operator">-&gt;</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;未知&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了可以使用 <code>-&gt;</code> 的新式语法，还可以作为 return 结果，真香。</p><h3 id="_04、text-blocks" tabindex="-1"><a class="header-anchor" href="#_04、text-blocks" aria-hidden="true">#</a> 04、Text Blocks</h3><p>在文本块（Text Blocks）出现之前，如果我们需要拼接多行的字符串，就需要很多英文双引号和加号，看起来就好像老太婆的裹脚布，非常不雅。如果恰好要拼接一些 HTML 格式的文本（原生 SQL 也是如此）的话，还要通过空格进行排版，通过换行转义符 <code>\\n</code> 进行换行，这些繁琐的工作对于一名开发人员来说，简直就是灾难。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OldTextBlock</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> html <span class="token operator">=</span> <span class="token string">&quot;&lt;html&gt;\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;    &lt;body&gt;\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;        &lt;p&gt;Hello, world&lt;/p&gt;\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;    &lt;/body&gt;\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;&lt;/html&gt;\\n&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Java 14 就完全不同了：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NewTextBlock</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> html <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
              &lt;html&gt;
                  &lt;body&gt;
                      &lt;p&gt;Hello, world&lt;/p&gt;
                  &lt;/body&gt;
              &lt;/html&gt;
              &quot;&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多余的英文双引号、加号、换行转义符，统统不见了。仅仅是通过前后三个英文双引号就实现了。我只能说，香，它真的香！</p><figure><img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xMTc5Mzg5LTU3Njg1YmQzZDdmNzRkMDcuZ2lm" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr>`,12),b={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},y={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},w=s("p",null,[n("微信搜 "),s("strong",null,"沉默王二"),n(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),s("strong",null,"222"),n(" 即可免费领取。")],-1),h=s("figure",null,[s("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1);function f(x,j){const a=c("ExternalLinkIcon");return o(),l("div",null,[u,s("p",null,[n("要想开箱，得先下载 JDK 14（如果你有更高版本，当然也可以），不然拿什么开箱呢，对吧？有 2 处地方可供下载，Oracle 上可以下载商用版， "),s("a",r,[n("jdk.java.net"),t(a)]),n(" 上可以下载开源版。我们就选择后者吧。")]),k,s("p",null,[n("在之前的一篇文章中，我谈到了"),s("a",d,[n("类的不可变性"),t(a)]),n("，它是这样定义的：")]),v,s("p",null,[n("关于 switch 表达式，我在之前的一篇文章中已经详细说明了，点击"),s("a",m,[n("传送门"),t(a)]),n("可以跳转过去看看。两周时间过去了，switch 表达式终于“媳妇熬成婆”，转正了，恭喜恭喜。")]),g,s("p",null,[n("GitHub 上标星 10000+ 的开源知识库《"),s("a",b,[n("二哥的 Java 进阶之路"),t(a)]),n("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),s("a",y,[n("太赞了，GitHub 上标星 10000+ 的 Java 教程"),t(a)])]),w,h])}const W=p(i,[["render",f],["__file","java14.html.vue"]]);export{W as default};
