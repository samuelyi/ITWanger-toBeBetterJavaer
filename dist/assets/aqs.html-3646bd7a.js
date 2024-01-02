const e=JSON.parse('{"key":"v-1df9d2c2","path":"/thread/aqs.html","title":"到底什么是AQS（抽象队列同步器）？","lang":"zh-CN","frontmatter":{"title":"到底什么是AQS（抽象队列同步器）？","shortTitle":"抽象队列同步器AQS","description":"AQS，即AbstractQueuedSynchronizer，是Java并发包java.util.concurrent的核心框架，全称为抽象队列同步器。这是一个用于构建锁和同步器的框架，很多同步类，例如ReentrantLock，Semaphore，CountDownLatch，FutureTask等都使用了AQS。","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,AQS,抽象队列同步器"}],["meta",{"property":"og:url","content":"https://javabetter.cn/thread/aqs.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"到底什么是AQS（抽象队列同步器）？"}],["meta",{"property":"og:description","content":"AQS，即AbstractQueuedSynchronizer，是Java并发包java.util.concurrent的核心框架，全称为抽象队列同步器。这是一个用于构建锁和同步器的框架，很多同步类，例如ReentrantLock，Semaphore，CountDownLatch，FutureTask等都使用了AQS。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-08T12:03:00.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2023-12-08T12:03:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"到底什么是AQS（抽象队列同步器）？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-08T12:03:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"AQS 的数据结构","slug":"aqs-的数据结构","link":"#aqs-的数据结构","children":[]},{"level":2,"title":"AQS 的 Node 节点","slug":"aqs-的-node-节点","link":"#aqs-的-node-节点","children":[]},{"level":2,"title":"AQS 的源码解析","slug":"aqs-的源码解析","link":"#aqs-的源码解析","children":[{"level":3,"title":"获取资源","slug":"获取资源","link":"#获取资源","children":[]},{"level":3,"title":"释放资源","slug":"释放资源","link":"#释放资源","children":[]}]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1648037338000,"updatedTime":1702036980000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":18},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":3},{"name":"Argon","email":"112397278+arglone@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":13.05,"words":3915},"filePathRelative":"thread/aqs.md","localizedDate":"2022年3月23日"}');export{e as data};
