module.exports = {
    title: '主页', 
    description: '产品',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }]
    ],
	base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
		search: true,
        searchMaxSuggestions: 10,
        nav:[ // 导航栏配置
            {text: '风眼官网', link: '/accumulate/' },
            {text: '微博', link: 'https://baidu.com'},
	        {text: '产品入口', link: 'http://192.168.0.105'}
        ],
       sidebar: {
		   "/guide/" : [
		       {
				   title: '指南',
				   collapsable: false,
				   children: ['','quick-start','directory-structure','FAQ']
    	       },
			   {
				   title: '模块描述',
				   collapsable: false,
				   children: ['base-config','base-business']
			   }
		   ]
	   },
	   sidebarDepth: 5,
	   repo: 'https://github.com/shangHaiFengYan/softwareGuide/',
	   editLinks: true,
	   docsRepo: 'https://github.com/shangHaiFengYan/softwareGuide/',
	   docsDir: 'docs',
	   editLinkText: '在GitHub上编辑此页面',
	   lastUpdated: '上次更新'
    },
	plugins: [
	    ['container', {
		  type: 'structure',
		  before: '<pre class="structure-container"><code>',
		  after: '</code></pre>'
		}],
	]
}