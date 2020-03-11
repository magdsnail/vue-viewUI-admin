const BaseLayOut = () => import('@/components/layout/BaseLayout.vue');

export default [
    {
        path: '/login',
        name: 'login',
        meta: {
            hideInMenu: true,
            title: '登录'
        },
        component: () => import('@/views/user/Login.vue')
    },
    {
		path: '/',
		name: 'main',
		redirect: '/',
		component: BaseLayOut,
		meta: {
			index: '1',
			icon: 'ios-analytics',
			title: "服务总览"
		},
		children: [
			{
				path: '',
				name: 'appManin',
				component: () => import('@/views/Home.vue'),
				meta: {
					index: '1-1',
					hideInMenu: true,
					title: '服务总览'
				}
			}
		]
	},
    {
        path: '/service',
        name: 'service',
        redirect: '/service/serviceFrame',
        component: BaseLayOut,
        meta: {
            index: '5',
            icon: 'md-sad',
            title: "服务管理"
        },
        children: [
            {
                path: 'serviceFrame',
                name: 'serviceFrame',
                component: () => import('@/views/service/Types.vue'),
                meta: {
                    index: '5-1',
                    hideInMenu: true,
                    title: "服务列表"
                }
            }
        ]
    },
    {
        path: '/setting',
        name: 'setting',
        component: BaseLayOut,
        meta: {
            index: '30',
            icon: 'ios-settings',
            title: "系统设置"
        },
        children: [
            {
                path: 'password',
                name: "setPassword",
                component: () => import('@/views/setting/Password.vue'),
                meta: {
                    index: '30-1',
                    title: "更新密码"
                }
            }
        ]
    }
]