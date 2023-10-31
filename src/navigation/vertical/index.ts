// ** Icon imports

import Table from 'mdi-material-ui/Table'
import HomeOutline from 'mdi-material-ui/HomeOutline'

// import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
// import Login from 'mdi-material-ui/Login'
// import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
// import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
// import CubeOutline from 'mdi-material-ui/CubeOutline'
// import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
// import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
// import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

// const navigation = (): VerticalNavItemsType => {
//   return [
//     {
//       title: 'Dashboard',
//       icon: HomeOutline,
//       path: '/'
//     },
//     {
//       title: 'Account Settings',
//       path: '/account-settings'
      // icon: AccountCogOutline,
//     },
//     {
//       sectionTitle: 'Pages'
//     },
//     {
//       title: 'Login',
//       icon: Login,
//       path: '/pages/login',
//       openInNewTab: true
//     },
//     {
//       title: 'Register',
//       icon: AccountPlusOutline,
//       path: '/pages/register',
//       openInNewTab: true
//     },
//     {
//       title: 'Error',
//       icon: AlertCircleOutline,
//       path: '/pages/error',
//       openInNewTab: true
//     },
//     {
//       sectionTitle: 'User Interface'
//     },
//     {
//       title: 'Typography',
//       icon: FormatLetterCase,
//       path: '/typography'
//     },
//     {
//       title: 'Icons',
//       path: '/icons',
//       icon: GoogleCirclesExtended
//     },
//     {
//       title: 'Cards',
//       icon: CreditCardOutline,
//       path: '/cards'
//     },
//     {
//       title: 'Tables',
//       icon: Table,
//       path: '/tables'
//     },
//     {
//       icon: CubeOutline,
//       title: 'Form Layouts',
//       path: '/form-layouts'
//     }
//   ]
// }

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },

    // {
    //   sectionTitle: 'Pages'
    // },
    // {
    //   title: 'Login',
    //   icon: Login,
    //   path: '/pages/login',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Register',
    //   icon: AccountPlusOutline,
    //   path: '/pages/register',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Error',
    //   icon: AlertCircleOutline,
    //   path: '/pages/error',
    //   openInNewTab: true
    // },
    {
      sectionTitle: 'User Interface'
    },
    {
      title: 'Ethereum',
      icon: Table,
      path: '/tables'
    },
  ]
}

export default navigation
