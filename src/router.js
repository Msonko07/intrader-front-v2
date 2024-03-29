import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/pages',
      component: () => import('@/views/pages/Index'),
      children: [
        {
          name: 'Lock',
          path: 'lock',
          meta: { requiresAuth: true },
          component: () => import('@/views/pages/Lock'),
        },
        {
          name: 'Login',
          path: 'login',
          component: () => import('@/views/pages/Login'),
        },
        {
          name: 'Pricing',
          path: 'pricing',
          meta: { requiresAuth: true },
          component: () => import('@/views/pages/Pricing'),
        },
        {
          name: 'Register',
          path: 'register',
          component: () => import('@/views/pages/Register'),
        },
      ],
    },
    {
      path: '/',
      meta: { requiresAuth: true },
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Accueil',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Pages
        {
          name: 'Projets',
          path: 'projects/:sector/:name',
          component: () => import('@/views/dashboard/pages/ProjectHome'),
        },
        {
          name: 'Tous les projets',
          path: 'projects/all-projects',
          component: () => import('@/views/dashboard/pages/AllProjects'),
        },
        {
          name: 'Projets en attente d\'assignés',
          path: 'projects/assigned-projects',
          component: () => import('@/views/dashboard/pages/ProjectAssigned'),
        },
        {
          name: 'Projets à analyser',
          path: 'projects/analysis-projects',
          component: () => import('@/views/dashboard/pages/ProjectAnalysed'),
        },
        {
          name: 'Revue projets',
          path: 'reviews/all',
          component: () => import('@/views/dashboard/pages/AllReviews'),
        },
        {
          name: 'Revue en attente d\'assignation',
          path: 'reviews/assigned',
          component: () => import('@/views/dashboard/pages/ReviewAssigned'),
        },
        {
          name: 'Mes revue projets',
          path: 'reviews/to-reviews',
          component: () => import('@/views/dashboard/pages/ProjectToReview'),
        },
        {
          name: 'Revue risque',
          path: 'risk-reviews/all',
          component: () => import('@/views/dashboard/pages/RiskReviews'),
        },
        {
          name: 'Revue assignées',
          path: 'risk-reviews/assigned',
          component: () => import('@/views/dashboard/pages/RiskAssigned'),
        },
        {
          name: 'Mes revue projets',
          path: 'risk-reviews/to-reviews',
          component: () => import('@/views/dashboard/pages/RiskToReview'),
        },
        {
          name: 'Revue financière',
          path: 'reviews/financial-reviews',
          component: () => import('@/views/dashboard/components/forms/FinancialReview'),
        },
        {
          name: 'Analyse',
          path: 'project-analysis/:projectId',
          component: () => import('@/views/dashboard/pages/ProjectAnalysis'),
        },
        {
          name: 'Committee',
          path: 'committees',
          component: () => import('@/views/dashboard/pages/Committee'),
        },
        {
          name: 'CommitteeMode',
          path: 'committee-mode/:committeeId',
          component: () => import('@/views/dashboard/pages/CommitteeMode'),
        },
        {
          name: 'RTL',
          path: 'pages/rtl',
          component: () => import('@/views/dashboard/pages/Rtl'),
        },
        {
          name: 'User Profile',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
        {
          name: 'Timeline',
          path: 'pages/timeline',
          component: () => import('@/views/dashboard/pages/Timeline'),
        },
        // Components
        {
          name: 'Buttons',
          path: 'components/buttons',
          component: () => import('@/views/dashboard/component/Buttons'),
        },
        {
          name: 'Grid System',
          path: 'components/grid-system',
          component: () => import('@/views/dashboard/component/Grid'),
        },
        {
          name: 'Tabs',
          path: 'components/tabs',
          component: () => import('@/views/dashboard/component/Tabs'),
        },
        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/views/dashboard/component/Notifications'),
        },
        {
          name: 'Icons',
          path: 'components/icons',
          component: () => import('@/views/dashboard/component/Icons'),
        },
        {
          name: 'Typography',
          path: 'components/typography',
          component: () => import('@/views/dashboard/component/Typography'),
        },
        // Forms
        {
          name: 'Regular Forms',
          path: 'forms/regular',
          component: () => import('@/views/dashboard/forms/RegularForms'),
        },
        {
          name: 'Extended Forms',
          path: 'forms/extended',
          component: () => import('@/views/dashboard/forms/ExtendedForms'),
        },
        {
          name: 'Validation Forms',
          path: 'forms/validation',
          component: () => import('@/views/dashboard/forms/ValidationForms'),
        },
        {
          name: 'Wizard',
          path: 'forms/wizard',
          component: () => import('@/views/dashboard/forms/Wizard'),
        },
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/tables/RegularTables'),
        },
        {
          name: 'Extended Tables',
          path: 'tables/extended-tables',
          component: () => import('@/views/dashboard/tables/ExtendedTables'),
        },
        {
          name: 'Data Tabels',
          path: 'tables/data-tables',
          component: () => import('@/views/dashboard/tables/DataTables'),
        },
        // Maps
        {
          name: 'Google Maps',
          path: 'maps/google-maps',
          component: () => import('@/views/dashboard/maps/GoogleMaps'),
        },
        {
          name: 'Full Screen Map',
          path: 'maps/full-screen-map',
          component: () => import('@/views/dashboard/maps/FullScreenMap'),
        },
        // Root level
        {
          name: 'Widgets',
          path: 'widgets',
          component: () => import('@/views/dashboard/Widgets'),
        },
        {
          name: 'Charts',
          path: 'charts',
          component: () => import('@/views/dashboard/Charts'),
        },
        {
          name: 'Calendar',
          path: 'calendar',
          component: () => import('@/views/dashboard/Calendar'),
        },
      ],
    },
    {
      path: '*',
      component: () => import('@/views/pages/Index'),
      children: [
        {
          name: '404 Error',
          path: '',
          component: () => import('@/views/pages/Error'),
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (store.state.auth.authToken) {
      next()
    } else {
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

export default router
