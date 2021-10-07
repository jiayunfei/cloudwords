## 自动生成云文字的工具

### 使用 让标题像云彩一样动起来

    npm install cloudword -S
    
    // 在 main.js 里面引用
    import cloudWord from 'cloudWord'

    new cloudWord({
      el: '#cloudWord',
      words: ['one', 'two', 'three'],
      colors: ['red', 'yellow', 'green'],
      onClick(elem) {
        console.log('点击的文字信息：', elem)
      }
    })
### 配置项

|  名称 |      描述              |   类型          |   默认值   | 是否必填 |
|  ----     | ----                  |  ----           | ----  |----  |
|  el       |    dom 容器            | String\|Document|  -        | 是 |
|  words    | 要渲染的标题列表        | Array          |  -       | 是 |
|  colors   | 标题所渲染出来的颜色列表 | Array          |  -       | 否 |
| touchStop | 是否鼠标覆盖停止        | Boolean       | true      | 否 | 
| minSize | 最小字体       | String \| Number       | 14     | 否 | 
| maxSize | 最大字体        | String \| Number        | 26     | 否 | 
| onClick | 自定义点击事件   | Function        |   -  | 否 |

### api 方法

    const cloudWords = new cloudWord({
      el: '#cloudWord',
      words: ['one', 'two', 'three'],
      colors: ['red', 'yellow', 'green']
    })
    // 添加，删除，更新
    cloudWords.addWord('four');
    cloudWords.removeWord(3);
    cloudWords.updateWord(3, 'five');
    // 刷新
    cloudWords.refresh()

### 效果展示
git clone 项目地址 下载到本地
    
    npm install
    npm run serve

打开 http://localhost:3000 就可以查看效果 
