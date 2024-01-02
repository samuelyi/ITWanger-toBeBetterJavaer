import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as d,c as o,a as e,d as t,b as i,e as s}from"./app-dea8ffe7.js";const l={},c=e("h2",{id:"_01、redis-是什么",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_01、redis-是什么","aria-hidden":"true"},"#"),t(" 01、Redis 是什么")],-1),u=e("p",null,[t("Redis 是互联网技术领域中使用最广泛的存储中间件，它是 "),e("strong",null,"Re"),t("mote "),e("strong",null,"Di"),t("ctionary "),e("strong",null,"S"),t("ervice 三个单词中加粗字母的组合。你别说，组合起来后念着挺自然的（😁）。")],-1),p=e("p",null,"Redis 以超高的性能、完美的文档、简洁的源码著称，国内外很多大型互联网公司都在用，比如说阿里、腾讯、GitHub、Stack Overflow 等等。它的版本更新非常的快，功能也越来越强大，最初只是用来作为缓存数据库，现在已经可以用它来实现消息队列（对对对，RocketMQ 你别怕）了。",-1),h=e("p",null,"可以这么说吧，掌握 Redis 已经变成了一项后端工程师必须具备的基础技能。也被二哥归到了 Java 后端四大件之中，不管是校招还是社招，都是面试必问的技术栈。",-1),g={href:"https://javabetter.cn/zhishixingqiu/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/antirez/smallchat",target:"_blank",rel:"noopener noreferrer"},m=s('<figure><img src="https://cdn.tobebetterjavaer.com/stutymore/install-20231211171943.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_02、安装-redis" tabindex="-1"><a class="header-anchor" href="#_02、安装-redis" aria-hidden="true">#</a> 02、安装 Redis</h2><p>Redis 针对不同的操作系统有不同的安装方式，我们每个方式都会讲到，大家稍安勿躁。</p><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3><p>下载地址如下：</p>',5),v={href:"https://github.com/MicrosoftArchive/redis/releases",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"我第一次写这份内容的时候，Windows 最新的版本是 3.2.100。从下图中可以看得出，Redis 的体积非常的轻量级，还不到 6 M。体积越小，让我感觉 Redis 越牛逼，相信你肯定也有这种感觉。",-1),f=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/redis/rumen-a6709cca-d3a3-4381-b110-0ff37d384f27.jpg",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),x=e("p",null,"有两种安装方式，第一种是 MSI（ Microsoft Installer，一种用于安装、维护和删除 Windows 操作系统上的软件的文件格式）的方式，双击运行后安装；第二种是免安装，绿色版，只需要把 zip 包解压就可以了。",-1),R={href:"https://javabetter.cn/mysql/install.html",target:"_blank",rel:"noopener noreferrer"},y=s(`<figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/redis/rumen-f3fc9852-7505-45ed-8ce2-d16f1d888251.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>注意压缩包里面有一份英文版的文档——Windows Service Documentation.docx，是用来教我们如何安装 Redis 服务、如何启动、如何关闭，以及如何使用自定义端口启动服务的，可以简单扫一遍。</p><p>当然了，不扫也没关系，这篇内容替你扫，给大家节省学习的时间成本。</p><p>打开命令行，进入到当前解压后的目录，输入启动命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-server redis.windows.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后你就会看到 Redis 启动后的欢迎画面，左边这个盒子感觉好有艺术感啊！有小伙伴知道是怎么生成的吗？</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/redis/rumen-69b11133-7aac-4f8a-aa1e-9e8af576ad32.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>还有一些其他的提示信息：</p>`,8),k=e("li",null,"Redis 当前的版本号为 3.2.100",-1),j=e("li",null,"端口是 6379",-1),w=e("li",null,"进程 ID，也就是 PID 为 12636",-1),S={href:"http://redis.io",target:"_blank",rel:"noopener noreferrer"},M=e("p",null,[t("嗯哼，"),e("strong",null,"知道为什么 Redis 的默认端口是 6379 吗"),t("？")],-1),z=e("p",null,"据说是手机键盘上“MERZ”的位置决定的，小伙伴们可以打开自己手机上九宫格键盘感受一下。“MERZ”是什么意思呢？据说是“愚蠢”的意思。这？是不是感觉程序员的生活中还是有蛮多神秘色彩的？",-1),O=e("p",null,[t("Windows 上如何停止 Redis 服务呢？可以直接按下 "),e("code",null,"Ctrl+C"),t(" 组合键——粗暴、壁咚（当然可以直接点右上角的叉号）。")],-1),G=e("h3",{id:"macos",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#macos","aria-hidden":"true"},"#"),t(" macOS")],-1),q={href:"https://javabetter.cn/gongju/brew.html",target:"_blank",rel:"noopener noreferrer"},L={href:"https://javabetter.cn/gongju/warp.html",target:"_blank",rel:"noopener noreferrer"},D=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/stutymore/install-20231211194317.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),E=e("p",null,[t("安装完 Redis 后，也可以通过 "),e("code",null,"redis-server"),t(" 命令来启动服务。")],-1),I=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/stutymore/install-20231211194526.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),J=e("p",null,[t("和 "),e("code",null,"brew services start redis"),t(" 不同，这样启动的服务是没有持久化的，也就是说，当你关闭终端后，Redis 服务也就停止了。")],-1),P={href:"https://paicoding.com/",target:"_blank",rel:"noopener noreferrer"},A=s('<p>更轻量级。</p><p>如果使用 <code>brew services start redis</code> 来启动 Redis 的话，可以通过 <code>brew services info redis</code> 来查看 Redis 服务的状态，没启动的时候状态是这样的。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/install-20231211201931.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>想要停止的话，可以使用 <code>brew services stop redis</code> 命令。</p><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h3><p>和 MySQL 一样，Linux 上安装 Redis 同样需要确认是 CentOS 还是 Ubuntu，如何区分参照 MySQL 的帖子。</p>',6),C={href:"https://javabetter.cn/mysql/install.html",target:"_blank",rel:"noopener noreferrer"},H=s(`<h4 id="centos" tabindex="-1"><a class="header-anchor" href="#centos" aria-hidden="true">#</a> CentOS</h4><p>CentOS 默认的仓库中可能不包含 Redis，因此需要启用 EPEL（Extra Packages for Enterprise Linux）仓库。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum install epel-release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 Redis：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum install redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动 Redis 服务：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo systemctl start redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置开机启动：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo systemctl enable redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看 Redis 服务状态：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>service redis status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者 <code>redis-cli ping</code>，如果返回 PONG，则表示 Redis 正在运行。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/install-20231211200025.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h4><p>添加 GPG 密钥：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令从 Redis 的官方网站下载 GPG 密钥，并添加到系统的密钥环中，确保下载的软件包是官方认证的。</p><p>添加 Redis 仓库：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo &quot;deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main&quot; | sudo tee /etc/apt/sources.list.d/redis.list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令创建一个新的源列表文件 redis.list，里面包含了 Redis 的官方仓库。</p><p>更新包列表：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 Redis：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get install redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动 Redis 服务：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo systemctl start redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置开机启动：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo systemctl enable redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看 Redis 服务状态：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-cli ping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同样，如果返回 PONG，则表示 Redis 正在运行。</p><h2 id="_03、连接-redis" tabindex="-1"><a class="header-anchor" href="#_03、连接-redis" aria-hidden="true">#</a> 03、连接 Redis</h2><p>Redis 本身就自带了一个命令行客户端，可以直接通过 <code>redis-cli</code> 命令来连接 Redis 服务。</p><p>然后键入 <code>keys *</code> 命令，就可以看到 Redis 中的所有键值对。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/install-20231211203619.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>但是可能很多小伙伴想要一款图形化的客户端，这样更加直观，更加方便。</p><p>我本机装的是 AnotherRedisDesktopManager，目前在 GitHub 上已经有 27k+ 的 star 了，非常受欢迎。</p>`,37),N={href:"https://github.com/qishibo/AnotherRedisDesktopManager",target:"_blank",rel:"noopener noreferrer"},W={href:"https://javabetter.cn/gongju/choco.html",target:"_blank",rel:"noopener noreferrer"},B={href:"https://javabetter.cn/gongju/brew.html",target:"_blank",rel:"noopener noreferrer"},V=e("blockquote",null,[e("p",null,[t("如果报错不受信任或者移到垃圾箱，执行这个命令后再启动即可:"),e("br"),e("code",null,"sudo xattr -rd com.apple.quarantine /Applications/Another\\ Redis\\ Desktop\\ Manager.app")])],-1),Q=e("p",null,"运行界面如下所示。",-1),U=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/stutymore/install-20231211203817.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),Z=e("h2",{id:"_04、小结",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_04、小结","aria-hidden":"true"},"#"),t(" 04、小结")],-1),F={href:"https://javabetter.cn/redis/rumen.html",target:"_blank",rel:"noopener noreferrer"},T=e("p",null,"这篇也算是给后面 Redis 的教程做好了铺垫，所谓车马未动，粮草先行，正是这个道理。",-1),$=e("hr",null,null,-1),K={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},X={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},Y=e("p",null,[t("微信搜 "),e("strong",null,"沉默王二"),t(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),e("strong",null,"222"),t(" 即可免费领取。")],-1),ee=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function te(ae,ie){const a=r("ExternalLinkIcon");return d(),o("div",null,[c,u,p,h,e("p",null,[t("Redis 的作者是一名意大利小伙，网名 Antirez，长相还是挺帅气的，感兴趣的小伙伴可以搜一下他的履历，搞了很多开源好玩的小玩具，比如说我曾给"),e("a",g,[t("球友们"),i(a)]),t("推荐的 "),e("a",b,[t("smallchat"),i(a)]),t("，一个 200 多行代码的聊天室，经典得很。")]),m,e("p",null,[e("a",v,[t("https://github.com/MicrosoftArchive/redis/releases"),i(a)])]),_,f,x,e("p",null,[t("我们这里选择第二种，MSI 的方式 "),e("a",R,[t("MySQL"),i(a)]),t(" 的时候讲过了，我们换一种口味。")]),y,e("ul",null,[k,j,w,e("li",null,[t("Redis 官方地址为："),e("a",S,[t("http://redis.io"),i(a)])])]),M,z,O,G,e("p",null,[t("macOS 可以直接通过 "),e("a",q,[t("Homebrew"),i(a)]),t("（戳链接了解）来安装 Redis，非常方便。")]),e("p",null,[t("如果有 "),e("a",L,[t("warp 终端"),i(a)]),t("（戳链接了解）的话，会更加智能，直接问它“如何安装 Redis”它就会告诉你安装步骤。")]),D,E,I,J,e("p",null,[t("我平常更喜欢用这种方式，因为 Redis 服务在本地并不需要一直运行。比如说，我在开发"),e("a",P,[t("技术派"),i(a)]),t(" 的时候，因为需要 Redis 作为缓存我就会把 Redis 启动起来，开发完后直接关掉终端也不用操心 Redis 服务没有关闭的事情。")]),A,e("p",null,[e("a",C,[t("如何区分 CentOS 还是 Ubuntu？"),i(a)])]),H,e("blockquote",null,[e("p",null,[e("a",N,[t("https://github.com/qishibo/AnotherRedisDesktopManager"),i(a)])])]),e("p",null,[t("Windows、macOS 都支持，GitHub 首页也有对应的安装教程，支持 Windows 的 "),e("a",W,[t("chocolatey"),i(a)]),t("，也支持 exe 文件。")]),e("p",null,[t("macOS 支持 "),e("a",B,[t("Homebrew"),i(a)]),t(" 安装，也支持 dmg 文件。")]),V,Q,U,Z,e("p",null,[t("好，关于 Redis 的安装，我们就先讲到这里，如果想通过 Java 对 Redis 进行操作的话，我们随后的"),e("a",F,[t("章节"),i(a)]),t("会讲到。")]),T,$,e("p",null,[t("GitHub 上标星 10000+ 的开源知识库《"),e("a",K,[t("二哥的 Java 进阶之路"),i(a)]),t("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),e("a",X,[t("太赞了，GitHub 上标星 10000+ 的 Java 教程"),i(a)])]),Y,ee])}const re=n(l,[["render",te],["__file","install.html.vue"]]);export{re as default};
