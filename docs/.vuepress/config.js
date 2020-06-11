module.exports = {
    title: 'cz-ui', // 设置网站标题
    description: '单组件与基于Element的业务组件', //描述
    dest: './build', // 设置输出目录
    port: 1234, //端口
    themeConfig: { //主题配置
        nav: [{
            text: '主页',
            link: '/'
        }, // 导航条
        ],
        // 为以下路由添加侧边栏
        sidebar: {
            '/components/': [{
                collapsable: false,
                children: [
                    'button'
                ]
            }]
        }
    }
}