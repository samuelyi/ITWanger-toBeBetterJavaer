const e=JSON.parse('{"key":"v-80e01c30","path":"/thread/shengchanzhe-xiaofeizhe.html","title":"从根上理解生产者-消费者模式","lang":"zh-CN","frontmatter":{"title":"从根上理解生产者-消费者模式","shortTitle":"生产者-消费者模式","description":"生产者-消费者模式是计算机科学中一种常见的并发设计模式，常用于在生产者和消费者之间传递数据。在这种模式中，两个（或多个）进程共享一个固定大小的缓冲区，作为中间存储。生产者的任务是生成数据、将其放入缓冲区，而消费者的任务是从缓冲区中移除数据并消费它。","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,生产者-消费者,生产者消费者,生产者,消费者"}],["meta",{"property":"og:url","content":"https://javabetter.cn/thread/shengchanzhe-xiaofeizhe.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"从根上理解生产者-消费者模式"}],["meta",{"property":"og:description","content":"生产者-消费者模式是计算机科学中一种常见的并发设计模式，常用于在生产者和消费者之间传递数据。在这种模式中，两个（或多个）进程共享一个固定大小的缓冲区，作为中间存储。生产者的任务是生成数据、将其放入缓冲区，而消费者的任务是从缓冲区中移除数据并消费它。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-08T12:03:00.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2023-12-08T12:03:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"从根上理解生产者-消费者模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-08T12:03:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"wait/notify 的消息通知机制","slug":"wait-notify-的消息通知机制","link":"#wait-notify-的消息通知机制","children":[{"level":3,"title":"1.notify 早期通知","slug":"_1-notify-早期通知","link":"#_1-notify-早期通知","children":[]},{"level":3,"title":"2.等待 wait 的条件发生变化","slug":"_2-等待-wait-的条件发生变化","link":"#_2-等待-wait-的条件发生变化","children":[]},{"level":3,"title":"3. “假死”状态","slug":"_3-假死-状态","link":"#_3-假死-状态","children":[]}]},{"level":2,"title":"wait/notifyAll 实现生产者-消费者","slug":"wait-notifyall-实现生产者-消费者","link":"#wait-notifyall-实现生产者-消费者","children":[]},{"level":2,"title":"await/signalAll 实现生产者-消费者","slug":"await-signalall-实现生产者-消费者","link":"#await-signalall-实现生产者-消费者","children":[]},{"level":2,"title":"BlockingQueue 实现生产者-消费者","slug":"blockingqueue-实现生产者-消费者","link":"#blockingqueue-实现生产者-消费者","children":[]},{"level":2,"title":"生产者-消费者模式的应用场景","slug":"生产者-消费者模式的应用场景","link":"#生产者-消费者模式的应用场景","children":[{"level":3,"title":"01、Excutor 任务执行框架：","slug":"_01、excutor-任务执行框架","link":"#_01、excutor-任务执行框架","children":[]},{"level":3,"title":"02、消息中间件 MQ:","slug":"_02、消息中间件-mq","link":"#_02、消息中间件-mq","children":[]},{"level":3,"title":"03、任务的处理时间比较长的情况下：","slug":"_03、任务的处理时间比较长的情况下","link":"#_03、任务的处理时间比较长的情况下","children":[]}]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1648037338000,"updatedTime":1702036980000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":17},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":20.62,"words":6187},"filePathRelative":"thread/shengchanzhe-xiaofeizhe.md","localizedDate":"2022年3月23日"}');export{e as data};
