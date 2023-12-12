# 如何预览
建议使用VSCode中的`Live Server`插件运行。安装好该插件后，单击VSCode界面右下角的Go live按钮即可。随后在浏览器运行[http://127.0.0.1:5500/](http://127.0.0.1:5500/)即可查看效果。

注意： 使用`Live Server`插件时，请使用VSCode“文件”标签下的“关闭文件夹”、“打开文件夹”功能，让VSCode保持打开且仅打开一层`datavis-vite`文件夹，否则可能导致地图的json文件无法正常获取。

期望的文件夹目录如下：
```
.
├── README.md
├── css
│   └── main.css
├── data
│   └── data-1528971808162-BkOXf61WX.json
├── index.html
├── js
│   ├── center_map.js
│   ├── data.js
│   ├── left1.js
│   ├── left2.js
│   ├── right1.js
│   └── right2.js
└── lib
    ├── echarts.min.js
    └── jquery.min.js

5 directories, 12 files
```

另外提供Vercel平台的部署链接：[https://datavis-vite.vercel.app/](https://datavis-vite.vercel.app/)