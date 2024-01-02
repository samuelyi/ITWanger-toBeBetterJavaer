const e=JSON.parse('{"key":"v-45b69f9c","path":"/nio/BIONIOAIO.html","title":"一文彻底解释清楚Java 中的NIO、BIO和AIO","lang":"zh-CN","frontmatter":{"title":"一文彻底解释清楚Java 中的NIO、BIO和AIO","shortTitle":"NIO和BIO、AIO的区别","category":["Java核心"],"tag":["Java NIO"],"description":"BIO采用阻塞式 I/O 模型，线程在执行 I/O 操作时被阻塞，无法处理其他任务，适用于连接数较少且稳定的场景。NIO使用非阻塞 I/O 模型，线程在等待 I/O 时可执行其他任务，通过 Selector 监控多个 Channel 上的事件，提高性能和可伸缩性，适用于高并发场景。AIO采用异步 I/O 模型，线程发起 I/O 请求后立即返回，当 I/O 操作完成时通过回调函数通知线程，进一步提高了并发处理能力，适用于高吞吐量场景。","author":"沉默王二","head":[["meta",{"name":"keywords","content":"java,nio,bio,aio"}],["meta",{"property":"og:url","content":"https://javabetter.cn/nio/BIONIOAIO.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"一文彻底解释清楚Java 中的NIO、BIO和AIO"}],["meta",{"property":"og:description","content":"BIO采用阻塞式 I/O 模型，线程在执行 I/O 操作时被阻塞，无法处理其他任务，适用于连接数较少且稳定的场景。NIO使用非阻塞 I/O 模型，线程在等待 I/O 时可执行其他任务，通过 Selector 监控多个 Channel 上的事件，提高性能和可伸缩性，适用于高并发场景。AIO采用异步 I/O 模型，线程发起 I/O 请求后立即返回，当 I/O 操作完成时通过回调函数通知线程，进一步提高了并发处理能力，适用于高吞吐量场景。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-08T12:03:00.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java NIO"}],["meta",{"property":"article:modified_time","content":"2023-12-08T12:03:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一文彻底解释清楚Java 中的NIO、BIO和AIO\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-08T12:03:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\"}]}"]]},"headers":[{"level":3,"title":"Java IO 与 BIO、NIO","slug":"java-io-与-bio、nio","link":"#java-io-与-bio、nio","children":[]},{"level":3,"title":"三种 IO 的区别","slug":"三种-io-的区别","link":"#三种-io-的区别","children":[]},{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1661571088000,"updatedTime":1702036980000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":8},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":4}]},"readingTime":{"minutes":9.26,"words":2779},"filePathRelative":"nio/BIONIOAIO.md","localizedDate":"2022年8月27日"}');export{e as data};
