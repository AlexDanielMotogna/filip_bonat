import { lazy } from 'react'
import { type RouteProps } from 'react-router-dom'

const Demo1 = lazy(() => import('@/pages/demo-1/page'))
const Demo2 = lazy(() => import('@/pages/demo-2/page'))
const Demo3 = lazy(() => import('@/pages/demo-3/page'))
const Demo4 = lazy(() => import('@/pages/demo-4/page'))
const Demo5 = lazy(() => import('@/pages/demo-5/page'))
const Demo6 = lazy(() => import('@/pages/demo-6/page'))
const Demo7 = lazy(() => import('@/pages/demo-7/page'))
const BlogSingle = lazy(() => import('@/pages/blog-single/page'))
const Preview = lazy(() => import('@/pages/preview/page'))

export type RoutesProps = {
  path: RouteProps['path']
  name: string
  element: RouteProps['element']
  exact?: boolean
}

export const routes: RoutesProps[] = [
  {
    path: '/',
    name: 'Index',
    element: <Preview />,
  },
  {
    path: '/demo-1',
    name: 'Index 1',
    element: <Demo1 />,
  },
  {
    path: '/demo-2',
    name: 'Index 2',
    element: <Demo2 />,
  },
  {
    path: '/demo-3',
    name: 'Index 3',
    element: <Demo3 />,
  },
  {
    path: '/demo-4',
    name: 'Index 4',
    element: <Demo4 />,
  },
  {
    path: '/demo-5',
    name: 'Index 5',
    element: <Demo5 />,
  },
  {
    path: '/demo-6',
    name: 'Index 6',
    element: <Demo6 />,
  },
  {
    path: '/demo-7',
    name: 'Index 7',
    element: <Demo7 />,
  },
  {
    path: '/blog-single',
    name: 'Index 8',
    element: <BlogSingle />,
  },
]
