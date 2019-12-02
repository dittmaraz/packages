import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/Dashboard'
import NewPackage from '../components/NewPackage'
import ViewPackage from '../components/ViewPackage'
import EditPackage from '../components/EditPackage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },  {
      path: '/new',
      name: 'new-package',
      component: NewPackage
    },  {
      path: '/edit/:package_id',
      name: 'edit-package',
      component: EditPackage
    },  {
      path: '/:package_id',
      name: 'view-package',
      component: ViewPackage
    }
  ]
})
