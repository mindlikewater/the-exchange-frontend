function routerConfig ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html',
      controller: 'LayoutController as layout'
    })
    .state('root.home', {
      url: '/home',
      templateUrl: 'templates/home.tpl.html',
      controller: 'HomeController as home'
    })
    .state('root.register', {
      url: '/register',
      templateUrl: 'templates/register.tpl.html',
      controller: 'RegisterController as register'
    })
    .state('root.login', {
      url: '/login',
      templateUrl: 'templates/login.tpl.html',
      controller: 'LoginController as login'
    })
    .state('root.groupSearch', {
      url: '/groupSearch',
      templateUrl: 'templates/groupSearch.tpl.html',
      controller: 'GroupSearchController as groupSearch'
    })
    .state('root.groupSingle', {
      url: '/group-single',
      templateUrl: 'templates/groupSingle.tpl.html',
      controller: 'GroupSingleController as groupSingle'
    })
    .state('root.groupAdd', {
      url: '/groupAdd',
      templateUrl: 'templates/groupAdd.tpl.html',
      controller: 'GroupAddController as groupAdd'
    });

  $urlRouterProvider.otherwise('/home');
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };