// 引入 React 和 Suspense 组件，Suspense 用于处理懒加载组件的 fallback 状态
import React, { Suspense } from 'react'
// 引入 react-router-dom 中的 useRoutes 和 Link 组件
import { useRoutes, Link } from 'react-router-dom'
// 引入路由配置文件
import routes from './router'
import { useAppSelector, useAppDispatch, shallowEqualApp } from './store'
import { changMessageAction } from './store/modules/counter'

// 主应用组件
function App() {
  const { count } = useAppSelector((state) => ({
    count: state.counter.count
  }), shallowEqualApp)

  const dispatch = useAppDispatch()
  function handleMessage() {
    dispatch(changMessageAction('哈哈哈'))
    console.log('changemessage')
  }
  return (
    <div className="App">
      {/* 导航栏区域 */}
      <div className='nav'>
        {/* 使用 Link 组件创建导航链接 */}
        <Link to='/discover'>发现音乐</Link>
        <Link to='/mine'>我的音乐</Link>
        <Link to='/focus'>关注</Link>
        <Link to='/download'>下载客户端</Link>
      </div>
      <h2>当前计数：{count}</h2>
      <button onClick={handleMessage}>点我修改count</button>
      {/* 使用 Suspense 包裹路由组件，处理懒加载时的加载状态 */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* 路由内容渲染区域 */}
        <div className='main'>{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

// 导出主应用组件
export default App