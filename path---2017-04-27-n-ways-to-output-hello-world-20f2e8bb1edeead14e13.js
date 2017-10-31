webpackJsonp([0xae8112a621d1],{400:function(n,o){n.exports={data:{markdownRemark:{tableOfContents:'<ul>\n<li><a href="#alert">alert()</a></li>\n<li><a href="#documentwrite">document.write()</a></li>\n<li><a href="#documentwriteln">document.writeln()</a></li>\n<li><a href="#function-constructor">Function constructor</a></li>\n<li><a href="#function-declaration">Function declaration</a></li>\n<li><a href="#arrow-function">Arrow Function</a></li>\n<li><a href="#promise">Promise</a></li>\n<li><a href="#%E5%8F%83%E8%80%83%E8%B3%87%E6%96%99">參考資料</a></li>\n</ul>',internal:{content:'---\ntitle: Hello World的四+N種方法\ntags:\n  - JavaScript\ndate: 2017-04-27 14:34\n---\n\n在這些時候，我可以附和著笑，老闆是決不責備的。而且老闆見了他，也每每這樣問他，引人發笑。他自己知道不能和他們談天，便只好向孩子說話。有一回對我說道：「你讀過書麼？」我略略點一點頭。他說：「讀過書，。。。我便考你一考。代碼的Hello World，怎樣寫的？」他等了許久，很懇切的說道：「不能寫罷？。。。我教給你，記著！這些字應該記著。將來做老闆的時候，Debug要用。」我暗想我和老闆的等級還很遠呢，而且我們老闆也從不將代碼上傳；又好笑，又不耐煩，懶懶的答他道：「誰要你教，不就是用alert輸出嘛」他顯出極高興的樣子，將兩個指頭的長指甲敲著鍵盤，點頭說：「對呀對呀！。。。Hello World有四樣寫法，你知道麼？」我愈不耐煩了，努著嘴走遠。他剛用指甲蘸了酒，想在鍵盤上打字，見我毫不熱心，便又歎一口氣，顯出極惋惜的樣子。\n\n## alert()\n`alert("Hello, World!!");`\n\n## document.write()\n直接輸出`Hello, World!`到document:\n`document.write(\'Hello, World!\');`\n\n## document.writeln()\n在現有的document上增加`Hello, World!`這一行：\n\n`document.writeln(\'Hello, World!\');`\n\n## Function constructor\n使用Function constructor, 以及 Immediately-Invoked Function Expression (IIFE):\n```\nnew Function ([arg1[, arg2[, ...argN]],] functionBody);\n(new Function (\'console.log("Hello, World")\'))();\n```\n\n順帶一提，以下三種寫法，結果都是一樣的。\n```\nnew Function("a", "b", "c", "return a+b+c;"); // 每一個arugument都用,分開\nnew Function("a, b, c", "return a+b+c;");      \nnew Function("a,b", "c", "return a+b+c;");\n```\n\n輸出：\n```\nfunction anonymous(a, b, c\n/*``*/) {\nreturn a+b+c;\n}\n```\n\n## Function declaration\n```\nfunction sayHello() {\n  console.log(\'Hello, World!\');\n}\n\nsayHello(); // Hello, World!\nsayHello    // function sayHello() {\n        //   console.log(\'Hello, World!\');\n        // }\n```\n\n## Arrow Function\n```\n() => { console.log(\'Hello, World!\')};\n(() => { console.log(\'Hello, World!\')})(); // Hello, World!\n```\n\n## Promise\n先定義一個Promise：\n```\nvar helloPromise = new Promise(function(resolve){\n    resolve("Hello, World!");\n});\n```\n如果resolve成功的話，就會輸出"Hello, World!":\n```\nhelloPromise.then(function (value) {\n  console.log(value);\n}).catch(function (error) {\n  console.log(error);\n}); // Hello, World!\n```\n\n當然，你也可以利用Arrow Function這樣寫：\n```\nlet helloPromise = new Promise((resolve) => {\n  resolve("Hello, World!");\n});\n\nhelloPromise.then((value) => {\n  console.log(value);\n}).catch((error) => {\n  console.log(error);\n});\n```\n\n有幾回，鄰舍孩子聽得笑聲，也趕熱鬧，圍住了他。他便給他們看代碼，一人一段。孩子看完代碼，仍然不散，眼睛都望著屏幕。他著了慌，伸開五指將屏幕罩住，彎腰下去說道：「不多了，我已經不多了。」直起身又看一看代碼，自己搖頭說：「不多不多！多乎哉？不多也。」於是這一群孩子都在笑聲裏走散了。\n\n他是這樣的使人快活，可是沒有他，別人也便這麼過。\n\n自此以後，又長久沒有看見爪哇文。到了年關，掌櫃取下粉板說：「爪哇文還欠十九行代碼呢！」到第二年的端午，又說「爪哇文還欠十九行代碼呢！」到中秋可是沒有說，再到年關也沒有看見他。\n\n## 參考資料\n[Function constructor - ECMAScript® 2018 Language Specification](https://tc39.github.io/ecma262/#sec-function-p1-p2-pn-body)\n'},frontmatter:{title:"Hello World的四+N種方法"}}},pathContext:{slug:"/n-ways-to-output-hello-world/"}}}});
//# sourceMappingURL=path---2017-04-27-n-ways-to-output-hello-world-20f2e8bb1edeead14e13.js.map