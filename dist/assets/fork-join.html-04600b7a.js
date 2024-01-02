const e=JSON.parse('{"key":"v-6d64b820","path":"/thread/fork-join.html","title":"深入理解Java并发编程之Fork/Join框架","lang":"zh-CN","frontmatter":{"title":"深入理解Java并发编程之Fork/Join框架","shortTitle":"Fork/Join","description":"Fork/Join 框架是 Java 7 中引入的一个强大的并行执行任务框架，旨在利用多核处理器的能力。该框架是基于\\"分而治之\\"的原理：一个大任务通常可以分解为一些小任务，这些小任务可以进一步分解，直到它们变得足够小而可以并行执行。","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,ForkJoin,ForkJoinPool,ForkJoinTask"}],["meta",{"property":"og:url","content":"https://javabetter.cn/thread/fork-join.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"深入理解Java并发编程之Fork/Join框架"}],["meta",{"property":"og:description","content":"Fork/Join 框架是 Java 7 中引入的一个强大的并行执行任务框架，旨在利用多核处理器的能力。该框架是基于\\"分而治之\\"的原理：一个大任务通常可以分解为一些小任务，这些小任务可以进一步分解，直到它们变得足够小而可以并行执行。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-08T12:03:00.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2023-12-08T12:03:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"深入理解Java并发编程之Fork/Join框架\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-08T12:03:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"什么是分治任务模型","slug":"什么是分治任务模型","link":"#什么是分治任务模型","children":[]},{"level":2,"title":"Fork/Join 的使用","slug":"fork-join-的使用","link":"#fork-join-的使用","children":[]},{"level":2,"title":"ForkJoinPool","slug":"forkjoinpool","link":"#forkjoinpool","children":[]},{"level":2,"title":"与ThreadPoolExecutor的比较","slug":"与threadpoolexecutor的比较","link":"#与threadpoolexecutor的比较","children":[]},{"level":2,"title":"模拟 MapReduce 统计单词数量","slug":"模拟-mapreduce-统计单词数量","link":"#模拟-mapreduce-统计单词数量","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1648037338000,"updatedTime":1702036980000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":16},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":3}]},"readingTime":{"minutes":14.22,"words":4267},"filePathRelative":"thread/fork-join.md","localizedDate":"2022年3月23日"}');export{e as data};
