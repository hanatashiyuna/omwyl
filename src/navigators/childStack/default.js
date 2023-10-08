import Screens from '../../screens';
// import registor from 'src/screens/defaults/users/registor';
// import Notification from '../../components/notify/dialog';

export default [
  {
    name: 'splash',
    component: Screens.Flash.splash,
  },
  {
    name: 'login',
    component: Screens.Login,
  },
  {
    name: 'signup',
    component: Screens.Signup,
  },
  {
    name: 'home',
    component: Screens.Home,
  },
  // {
  //   name: 'logout',
  //   component: Screens.
  // },
//   {
//     name: 'profile',
//     component: screens.defaults.users.profile,
//   },
//   {
//     name: 'change-password',
//     component: screens.defaults.users.password,
//   },
//   {
//     name: 'forgot-password',
//     component: forgotPassword,
//   },
//   {
//     name: 'registor',
//     component: registor,
//   },
//   {
//     name: 'notification',
//     component: Notification,
//   },
];
