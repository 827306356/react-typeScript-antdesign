// 引入 React 的 lazy 函数，用于组件的懒加载
import { lazy } from "react"
// 引入 react-router 中的 Navigate 和 RouteObject
import { Navigate, RouteObject } from "react-router"

// 使用 lazy 动态导入各个页面组件，实现代码分割和懒加载
const Mine = lazy(() => import('@/pages/mine'))        // 我的页面

const Discover = lazy(() => import('@/pages/discover')) // 发现页面
const Album = lazy(() => import('@/pages/discover/c-views/album'))
const Artist = lazy(() => import('@/pages/discover/c-views/artist'))
const Djradio = lazy(() => import('@/pages/discover/c-views/djradio'))
const Ranking = lazy(() => import('@/pages/discover/c-views/ranking'))
const Songs = lazy(() => import('@/pages/discover/c-views/songs'))
const Recommend = lazy(() => import('@/pages/discover/c-views/recommend'))

const Focus = lazy(() => import('@/pages/focus'))      // 关注页面
const Download = lazy(() => import('@/pages/download')) // 下载页面

// 定义路由配置数组，类型为 RouteObject[]
const routes: RouteObject[] = [
  {
    path: '/',                    // 根路径
    element: <Navigate to="/mine" /> // 重定向到 /mine 路径
  },
  {
    path: '/mine',                // 我的页面路径
    element: <Mine />             // 渲染 Mine 组件
  },
  {
    path: '/discover',            // 发现页面路径
    element: <Discover />,         // 渲染 Discover 组件
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
    ]
  },
  {
    path: '/focus',               // 关注页面路径
    element: <Focus />            // 渲染 Focus 组件
  },
  {
    path: '/download',            // 下载页面路径
    element: <Download />         // 渲染 Download 组件
  }
]

// 导出路由配置
export default routes