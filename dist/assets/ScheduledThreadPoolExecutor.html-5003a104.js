const e=JSON.parse('{"key":"v-17464182","path":"/thread/ScheduledThreadPoolExecutor.html","title":"深入剖析Java定时任务ScheduledThreadPoolExecutor","lang":"zh-CN","frontmatter":{"title":"深入剖析Java定时任务ScheduledThreadPoolExecutor","shortTitle":"ScheduledThreadPoolExecutor","description":"ScheduledThreadPoolExecutor是Java并发包java.util.concurrent中的一个类，它是ThreadPoolExecutor的扩展，主要用于周期性的执行任务。它配备了一个特定的队列DelayedWorkQueue，用于保持那些需要被延迟执行的任务。","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,ScheduledThreadPoolExecutor,定时任务"}],["meta",{"property":"og:url","content":"https://javabetter.cn/thread/ScheduledThreadPoolExecutor.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"深入剖析Java定时任务ScheduledThreadPoolExecutor"}],["meta",{"property":"og:description","content":"ScheduledThreadPoolExecutor是Java并发包java.util.concurrent中的一个类，它是ThreadPoolExecutor的扩展，主要用于周期性的执行任务。它配备了一个特定的队列DelayedWorkQueue，用于保持那些需要被延迟执行的任务。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-08T12:03:00.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2023-12-08T12:03:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"深入剖析Java定时任务ScheduledThreadPoolExecutor\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-08T12:03:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"使用案例","slug":"使用案例","link":"#使用案例","children":[]},{"level":2,"title":"类结构","slug":"类结构","link":"#类结构","children":[{"level":3,"title":"01、scheduleAtFixedRate","slug":"_01、scheduleatfixedrate","link":"#_01、scheduleatfixedrate","children":[]},{"level":3,"title":"02、scheduleWithFixDelay","slug":"_02、schedulewithfixdelay","link":"#_02、schedulewithfixdelay","children":[]}]},{"level":2,"title":"主要方法","slug":"主要方法","link":"#主要方法","children":[{"level":3,"title":"schedule","slug":"schedule","link":"#schedule","children":[]},{"level":3,"title":"scheduleAtFixedRate","slug":"scheduleatfixedrate","link":"#scheduleatfixedrate","children":[]},{"level":3,"title":"scheduleWithFixedDelay","slug":"schedulewithfixeddelay","link":"#schedulewithfixeddelay","children":[]},{"level":3,"title":"delayedExecute","slug":"delayedexecute","link":"#delayedexecute","children":[]}]},{"level":2,"title":"DelayedWorkQueue","slug":"delayedworkqueue","link":"#delayedworkqueue","children":[{"level":3,"title":"take","slug":"take","link":"#take","children":[]},{"level":3,"title":"offer","slug":"offer","link":"#offer","children":[]}]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1648037338000,"updatedTime":1702036980000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":18},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":3}]},"readingTime":{"minutes":19.04,"words":5711},"filePathRelative":"thread/ScheduledThreadPoolExecutor.md","localizedDate":"2022年3月23日"}');export{e as data};
