import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/components/common/Home'
import Header from '@/components/common/Header'
import Sidebar from '@/components/common/Sidebar'
import Content from '@/components/common/Content'
// import Page403 from '@/components/pages/CZU403'
import Page404 from '@/components/pages/CZU404'
// import PageSetting from '@/components/pages/Setting'
// import PageBaseTable from '@/components/pages/BaseTable'
import PageBaseForm from '@/components/pages/BaseForm'
// import PageBaseChart from '@/components/pages/BaseChart'
import PageLogin from '@/components/pages/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: PageBaseForm,
        header: Header,
        side: Sidebar
      }
    },
    {
      path: '/login',
      component: PageLogin
    },
    {
      path: '/404',
      components: {
        default: Page404
      }
    },
    {
      path: '/test',
      components: {
        default: Content,
        header: Header
      }
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
//
// routes: [
//   {
//     path: '/',
//     component: Home,
//     children: [
//       {
//         path: '/',
//         name: 'Content',
//         component: Content,
//         meta: '主要显示部分',
//         children: [
//           {
//             path: '/403',
//             name: 'Forbidden',
//             component: Page403,
//             meta: {title: '无权限'}
//           },
//           {
//             path: '/setting',
//             name: 'setting',
//             component: PageSetting,
//             meta: {title: '设置一些东西'}
//           },
//           {
//             path: '/table',
//             name: 'table',
//             component: PageBaseTable,
//             meta: {title: '基础表格'}
//           },
//           {
//             path: '/form',
//             name: 'form',
//             components: PageBaseForm,
//             meta: {title: '基础表单'}
//           },
//           {
//             path: '/chart',
//             name: 'chart',
//             component: PageBaseChart,
//             meta: {title: '基础图表'}
//           }
//         ]
//       }
//     ]
//   },
//   {
//     path: '/404',
//     component: Page404
//   },
//   {
//     path: '/test',
//     components: {
//       default: Content,
//       header: Header
//     }
//   },
//   {
//     path: '*',
//     redirect: '/404'
//   }
// ]
