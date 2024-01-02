const t=JSON.parse('{"key":"v-66a4042c","path":"/thread/condition.html","title":"详解 Java Condition 的 await 和 signal 等待通知机制","lang":"zh-CN","frontmatter":{"title":"详解 Java Condition 的 await 和 signal 等待通知机制","shortTitle":"等待通知条件Condition","description":"Condition是Java并发工具包java.util.concurrent.locks中的一个接口，它提供了一种更灵活的线程同步机制。与Object类中的wait(), notify(), 和 notifyAll()方法相比，Condition为多线程间的协调和通信提供了更强大的功能。","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,Condition"}],["meta",{"property":"og:url","content":"https://javabetter.cn/thread/condition.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"详解 Java Condition 的 await 和 signal 等待通知机制"}],["meta",{"property":"og:description","content":"Condition是Java并发工具包java.util.concurrent.locks中的一个接口，它提供了一种更灵活的线程同步机制。与Object类中的wait(), notify(), 和 notifyAll()方法相比，Condition为多线程间的协调和通信提供了更强大的功能。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-08T12:03:00.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2023-12-08T12:03:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"详解 Java Condition 的 await 和 signal 等待通知机制\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-08T12:03:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"Condition 源码分析","slug":"condition-源码分析","link":"#condition-源码分析","children":[{"level":3,"title":"Condition 的 await 方法","slug":"condition-的-await-方法","link":"#condition-的-await-方法","children":[]},{"level":3,"title":"signal/signalAll 实现原理","slug":"signal-signalall-实现原理","link":"#signal-signalall-实现原理","children":[]},{"level":3,"title":"await 与 signal/signalAll","slug":"await-与-signal-signalall","link":"#await-与-signal-signalall","children":[]}]},{"level":2,"title":"Condition使用示例","slug":"condition使用示例","link":"#condition使用示例","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1648037338000,"updatedTime":1702036980000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":17},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":3}]},"readingTime":{"minutes":18.22,"words":5467},"filePathRelative":"thread/condition.md","localizedDate":"2022年3月23日"}');export{t as data};
