import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o,c as l,a as e,d as a,b as t,e as s}from"./app-dea8ffe7.js";const c={},d=s('<h1 id="第六节-栈虚拟机和寄存器虚拟机" tabindex="-1"><a class="header-anchor" href="#第六节-栈虚拟机和寄存器虚拟机" aria-hidden="true">#</a> 第六节：栈虚拟机和寄存器虚拟机</h1><p>本来这节内容是打算直接讲字节码指令的，但讲之前又必须得先讲指令集架构，而指令集架构又分为两种，一种是基于栈的，一种是基于寄存器的。</p><p>那不妨我们这节就单独来讲讲栈虚拟机和寄存器虚拟机，它们有什么不同，以及各自的优缺点。</p><h2 id="栈和寄存器" tabindex="-1"><a class="header-anchor" href="#栈和寄存器" aria-hidden="true">#</a> 栈和寄存器</h2><p>栈（stack），有些地方喜欢称呼它为堆栈，我就很不喜欢，很容易和 heap（堆）搞混，尤其是对于新手来说，简直就是虐心。</p><p>栈是一种非常有用的数据结构，它就像一摞盘子，第一个放在最下面，第二个放在第一个上面，第三个放在第二个上面，最后一个放在最上面。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/vm-stack-register-20231217165356.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>对于这一摞盘子，我们可以做两件事情：</p><ul><li>在最上面放一个新盘子</li><li>把顶部的盘子拿走</li></ul><p>这两件事情做起来很容易，但如果从中间或者底部抽出来一个盘子，就很难办到。如果我们想要拿到最下面的盘子，就必须把它上面的所有盘子都拿走，像这样的一个操作，我们称之为后进先出，也就是“Last In First Out”（简称 LIFO）——最后的一个进的，最先出去。</p><p>对于栈这样一个数据结构来说，它有两个常见的动作：</p><ul><li>push，中文释义有很多种，我个人更喜欢叫它“压入”，非常形象。当我们要把一个元素放入栈的顶部，这个动作就叫做 push。</li><li>pop，同样的，我个人更喜欢叫它“弹出”，带有很强烈的动画效果，有没有？当我们要从栈中移除一个元素时，这个动作就叫做 pop。</li></ul><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/vm-stack-register-20231217165521.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>对于上面这幅图来说，3 这个元素最后放进去，却是最先被移除的——遵循 LIFO 的原则。</p><p>寄存器（Register）是中央处理器（CPU）内用来暂存指令、数据和地址的存储器，也是 CPU 中读写最快的存储器。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/vm-stack-register-20231221150449.png" alt="图片来源于cxuan" tabindex="0" loading="lazy"><figcaption>图片来源于cxuan</figcaption></figure><p>从硬件层面来说，栈位于内存当中，而寄存器位于 CPU 当中，这也是为什么，我们通常会说，基于寄存器架构的虚拟机会比基于栈的虚拟机快的原因。</p><h2 id="基于栈的虚拟机" tabindex="-1"><a class="header-anchor" href="#基于栈的虚拟机" aria-hidden="true">#</a> 基于栈的虚拟机</h2>',18),p={href:"https://javabetter.cn/jvm/what-is-jvm.html",target:"_blank",rel:"noopener noreferrer"},u=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/seven-04.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),h={href:"https://javabetter.cn/jvm/bytecode.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://javabetter.cn/jvm/how-run-java-code.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://javabetter.cn/jvm/jit.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://javabetter.cn/jvm/zijiema-zhiling.html",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,"方法调用和执行过程中的数据（如局部变量和中间结果）会存储在栈（操作数栈，下面会讲）中，字节码指令操作这些数据，然后执行程序逻辑。",-1),_={href:"https://javabetter.cn/jvm/how-run-java-code.html",target:"_blank",rel:"noopener noreferrer"},f=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/stutymore/how-run-java-code-20231031143842.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),k=e("p",null,"main 方法被执行的时候，JVM 会创建一个栈帧（Stack Frame），通过存储局部变量表、操作数栈、动态链接、方法出口等信息来支撑和完成方法的执行，栈帧就是虚拟机栈中的子单位。",-1),j=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/stutymore/vm-stack-register-20231221152005.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),x={href:"https://javabetter.cn/jvm/stack-frame.html",target:"_blank",rel:"noopener noreferrer"},w=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/stutymore/vm-stack-register-20231222175706.png",alt:"图片来源于网络，作者浣熊say",tabindex:"0",loading:"lazy"}),e("figcaption",null,"图片来源于网络，作者浣熊say")],-1),y=e("p",null,"虚拟机栈是线程私有的，每个线程都有自己的 Java 虚拟机栈。方法调用时都会创建一个新的栈帧，该栈帧被推入虚拟机栈，成为当前活动栈帧。",-1),z=e("ul",null,[e("li",null,"入栈：方法调用时，虚拟机栈会为这个方法分配一个栈帧，这个栈帧被压入虚拟机栈，成为当前的活动栈帧。PC 寄存器指向当前栈帧的指令，执行方法的指令序列从该地址开始。"),e("li",null,"出栈：方法执行完成后，对应的栈帧会被移除，控制权回到前一个栈帧，前一个栈帧中的返回值成为当前活动栈帧的一个操作数，继续执行。")],-1),J=e("p",null,"其中的操作数栈（Operand Stack）也是一种栈结构，用于保存方法执行时的中间结果、参数和返回值。当一个方法刚刚开始执行的时候，这个方法的操作数栈是空的。",-1),L={href:"https://javabetter.cn/jvm/zijiema-zhiling.html",target:"_blank",rel:"noopener noreferrer"},I=e("p",null,"另外，操作数栈的内容是临时的，它的生命周期和方法的生命周期是一样的，当方法执行结束后，操作数栈也会被销毁。",-1),M=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/stutymore/vm-stack-register-20231221152930.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),V={href:"https://www.zhihu.com/question/35777031",target:"_blank",rel:"noopener noreferrer"},O=s(`<blockquote><p>VM 当初设计的时候非常重视代码传输和存储的开销，因为假定的应用场景是诸如手持设备、机顶盒之类的嵌入式应用，所以要代码尽量小；外加基于栈的实现更简单（无论是在源码编译器的一侧还是在虚拟机的一侧），而且主要设计者 James Gosling 的个人经验上也对这种做法非常熟悉（例如他之前实现过 PostScript 的虚拟机，也是基于栈的指令集），所以就选择了基于栈。</p></blockquote><p>我们简单来看一下基于栈的虚拟机方法执行的过程，以下面的代码为例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">33</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">44</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> c <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code>javap -c Main</code> 命令可以查看对应的字节码，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Compiled from &quot;Main.java&quot;
public class com.github.paicoding.forum.test.javabetter.jvm.Main {
  public static void main(java.lang.String[]);
    Code:
       0: bipush        33
       2: istore_1
       3: bipush        44
       5: istore_2
       6: iload_1
       7: iload_2
       8: iadd
       9: istore_3
      10: return
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们用图来说明指令执行的过程，大致如下。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/zijiema-zhiling-20231216165442.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>iload_0 将 33 压入操作数栈中</li><li>iload_1 将 44 压入操作数栈中</li><li>iadd 将操作数栈中的 33 和 44 弹出，相加后将结果 77 压入操作数栈中</li><li>istore_2 将栈顶的 77 弹出，存入局部变量表中下标为 2 的位置</li></ul>`,8),q={href:"https://javabetter.cn/jvm/zijiema-zhiling.html",target:"_blank",rel:"noopener noreferrer"},N=e("h2",{id:"基于寄存器的虚拟机",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#基于寄存器的虚拟机","aria-hidden":"true"},"#"),a(" 基于寄存器的虚拟机")],-1),P={href:"https://www.lua.org/about.html",target:"_blank",rel:"noopener noreferrer"},S=s(`<blockquote><p>5.0 之前的 Lua 其实是用基于栈的指令集，到 5.0 才改为用基于寄存器的。出于两点考虑，一是减少数据移动次数，降低数据迁移带来的拷贝开销；二是减少虚拟指令条数，提高指令执行效率。</p></blockquote><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/zijiema-zhiling-20231216163225.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>好，我们就基于 lua 来看一下基于寄存器的虚拟机方法执行的过程。</p><p>第一步，安装 lua，这里我用的是 macOS，直接用 brew 安装就好了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> lua
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),B={href:"http://lua-users.org/wiki/BuildingLuaInWindowsForNewbies",target:"_blank",rel:"noopener noreferrer"},F=e("p",null,"也可以通过 Lua for Windows 来完成安装：",-1),R={href:"https://github.com/rjpcomputing/luaforwindows/releases",target:"_blank",rel:"noopener noreferrer"},C=s(`<p>我们来编写一段简单的 lua 代码，保存为 example.lua。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> a <span class="token operator">=</span> <span class="token number">33</span>
<span class="token keyword">local</span> b <span class="token operator">=</span> <span class="token number">44</span>
<span class="token keyword">local</span> c <span class="token operator">=</span> a <span class="token operator">+</span> b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后查看字节码指令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>luac <span class="token parameter variable">-l</span> example.lua
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果如下：</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/vm-stack-register-20231221162729.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>main &lt;example.lua:0,0&gt; (6 instructions at 0x600002144080)
0+ params, 3 slots, 1 upvalue, 3 locals, 0 constants, 0 functions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这是函数的描述，表示这是 example.lua 文件中的主函数。它包含 6 条指令。函数不接受参数（0+ params），有 3 个本地变量槽位（3 slots），1 个闭包变量（1 upvalue），3 个本地变量（3 locals），没有常量（0 constants）和内部函数（0 functions）。</p><p>接下来是具体的指令：</p><ol><li>VARARGPREP 0：准备变长参数，用于处理传入的参数。</li><li>LOADI 0 33：将整数 33 加载到寄存器 0。</li><li>LOADI 1 44：将整数 44 加载到寄存器 1。</li><li>ADD 2 0 1：将寄存器 0 和寄存器 1 中的值相加，并将结果存放在寄存器 2。对应于脚本中两个数值的加法操作。</li><li>MMBIN 0 1 6; **add：这是一个元方法（metamethod）调用，用于处理加法操作。这指示 Lua 虚拟机查找并执行 <code>**add</code> 元方法。元方法是 Lua 中用于重载标准操作符的特殊方法。</li><li>RETURN 3 1 1; 0 out：返回操作，将寄存器 3 中的值作为返回值。<code>1 1</code> 表示从寄存器 3 返回一个值，<code>0 out</code> 指没有额外的返回值。</li></ol><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>基于栈的优点是可移植性更好、指令更短、实现起来简单，但不能随机访问栈中的元素，完成相同功能所需要的指令数也比寄存器的要多，需要频繁的入栈和出栈。</p><p>基于寄存器的优点是速度快，有利于程序运行速度的优化，但操作数需要显式指定，指令也比较长。</p><hr>`,14),D={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},A={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},E=e("p",null,[a("微信搜 "),e("strong",null,"沉默王二"),a(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),e("strong",null,"222"),a(" 即可免费领取。")],-1),H=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function G(U,W){const n=r("ExternalLinkIcon");return o(),l("div",null,[d,e("p",null,[a("前面我们讲 JDK 的"),e("a",p,[a("发展历程"),t(n)]),a("时，提到了 Hotspot VM，它是血缘最正统的 Java 虚拟机。")]),u,e("p",null,[a("HotSpot VM 是基于栈的一种虚拟机，当 Java 程序运行时，HotSpot VM 加载编译后的"),e("a",h,[a("字节码文件"),t(n)]),a("（也就是.class 文件），其"),e("a",m,[a("解释器"),t(n)]),a("或"),e("a",g,[a("JIT"),t(n)]),a("编译器会读取文件中的"),e("a",v,[a("字节码指令"),t(n)]),a("，将它们解释（或编译）为机器码。")]),b,e("p",null,[a("下面这幅图我们之前在讲"),e("a",_,[a("JVM 是如何运行 Java 代码"),t(n)]),a("的时候讲过。")]),f,k,j,e("p",null,[e("a",x,[a("栈帧"),t(n)]),a("本身也是一种栈结构，用于支持虚拟机进行方法调用和方法执行，遵循 LIFO 的原则，每个栈帧都包含了一个方法的运行信息，每个方法从调用到执行完成的过程，就对应着一个栈帧在虚拟机栈中入栈和出栈的过程。")]),w,y,z,J,e("p",null,[a("在方法执行的过程中，操作数栈被用于执行各种"),e("a",L,[a("字节码指令"),t(n)]),a("。例如，将两个数字相加的指令会从操作数栈中弹出两个数字，将它们相加，然后将结果压入操作数栈中。")]),I,M,e("p",null,[a("R 大曾在"),e("a",V,[a("知乎的贴子"),t(n)]),a("里提到过：")]),O,e("p",null,[a("关于字节码指令的具体释义，我们放到"),e("a",q,[a("下一节"),t(n)]),a("去细讲，这里主要是带大家体会一下基于栈的虚拟机和基于寄存器的虚拟机之间的差别。")]),N,e("p",null,[a("那除了有基于栈的虚拟机实现，当然也有基于寄存器的虚拟机实现，比如 LuaVM，负责执行 "),e("a",P,[a("Lua 语言"),t(n)]),a("，一门轻量级的脚本语言，可戳链接了解。")]),S,e("blockquote",null,[e("p",null,[a("Windows 用户可以查看这个文档："),e("a",B,[a("http://lua-users.org/wiki/BuildingLuaInWindowsForNewbies"),t(n)])])]),F,e("blockquote",null,[e("p",null,[e("a",R,[a("https://github.com/rjpcomputing/luaforwindows/releases"),t(n)])])]),C,e("p",null,[a("GitHub 上标星 10000+ 的开源知识库《"),e("a",D,[a("二哥的 Java 进阶之路"),t(n)]),a("》第一版 PDF 终于来了！包括 Java 基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM 等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),e("a",A,[a("太赞了，GitHub 上标星 10000+ 的 Java 教程"),t(n)])]),E,H])}const Q=i(c,[["render",G],["__file","vm-stack-register.html.vue"]]);export{Q as default};
