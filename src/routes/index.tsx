import { lazy } from 'react'
import { type RouteProps } from 'react-router-dom'

const Demo1 = lazy(() => import('@/pages/HomePage/page'))

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
    element: <Demo1 />,
  },

]
