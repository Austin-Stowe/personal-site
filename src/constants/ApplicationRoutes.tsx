import { Route } from 'react-location'
import { faHome, faPooStorm, IconDefinition } from '@fortawesome/free-solid-svg-icons'

type IApplicationRoute = Route & {
    title: string;
    icon: IconDefinition;
}

const ApplicationRoutes: IApplicationRoute[] = [
    {
        title: 'Home',
        icon: faHome,
        path: '/',
        element: () => import('components/HomePage').then((module) => (<module.default />))
    }
]

export default ApplicationRoutes
