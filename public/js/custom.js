// 这里编写自定义js脚本；将被静态引入到页面中
//每日诗词 自动替换id为jinrishici-sentence的span内容
<script src="https://sdk.jinrishici.com/v2/browser/jinrishici.js" charset="utf-8"></script>
<script type="text/javascript">
  jinrishici.load(function(result) {
    // 自己的处理逻辑
    console.log(result)
  });
</script>
