function UserService ($http, $cookies, SERVER) {

  this.register = register;
  this.login = login;
  this.isLoggedIn = isLoggedIn;
  this.setUser = setUser;
  this.logout = logout;
  this.getHeaders = getHeaders;
  this.getGroups = getGroups;

  function register (user) {
    return $http.post(`${SERVER}/user`, user);
  };

  function getGroups (user) {
    let req = {
      url: `${SERVER}/mygroups`,
      method: 'GET',
      headers: getHeaders()
    }
    return $http(req);
  }

  function login (user) {
    return $http.post(`${SERVER}/login`, user);
  }

  function isLoggedIn () {
    return $cookies.get('username') ? true : false;
  }

  function logout () {
    $cookies.remove('username');
    $cookies.remove('access_token');
    $cookies.remove('userId');
  }

  function setUser (data) {
    $cookies.put('username', data.username);
    $cookies.put('access_token', data.access_token);
    $cookies.put('userID', data.id);
  }

  function getHeaders () {
    let token = $cookies.get('access_token');
    return {
      Authorization: `Bearer ${token}`
    };
  }

};

UserService.$inject = ['$http', '$cookies', 'SERVER'];
export { UserService };
