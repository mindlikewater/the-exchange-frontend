function GroupService ($http, SERVER, UserService, $stateParams) {

  let vm = this;

  vm.groupSearch = groupSearch;
  vm.groupDetail = groupDetail;
  vm.groupAdd = groupAdd;
  vm.groupMemberList = groupMemberList;
  vm.groupAddMember = groupAddMember;
  vm.groupAddMeeting = groupAddMeeting;
  vm.nearby = nearby;

  function groupSearch (group) {
    let req = {
      url: `${SERVER}/group/search`,
      params: group,
      method: 'GET',
      headers: UserService.getHeaders()
    }
    return $http(req);
  }

  function nearby (location) {
      let req = {
      url: `${SERVER}/group/nearby`,
      method: 'GET',
      params: location,
      headers: UserService.getHeaders()
    };
    return $http(req);
    console.log(req)
  };

  function groupDetail (group) {
    let req = {
      url: `${SERVER}/group/${group}`,
      method: 'GET',
      headers: UserService.getHeaders()
    }
    return $http(req);
  }

  function groupAdd (group) {
    let req = {
      url: `${SERVER}/group`,
      data: group,
      method: 'POST',
      headers: UserService.getHeaders()
    };
    return $http(req);
  }

  function groupDelete () {
    let req = {
      url: `${SERVER}/group/:id`,
      data: group,
      method: 'DELETE',
      headers: UserService.getHeaders()
    };
    return $http(req);
  }

  function groupEdit () {
    let req = {
      url: `${SERVER}/group/:id`,
      data: group,
      method: 'PUT',
      headers: UserService.getHeaders()
    };
    return $http(req);
  }

  function groupAddMember (group) {
    let req = {
      url: `${SERVER}/group/${group}/join`,
      method: 'POST',
      headers: UserService.getHeaders()
    };
    return $http(req);
  }

  function groupMemberList (group) {
    let req = {
      url: `${SERVER}/group/${group}/members`,
      method: 'GET',
      headers: UserService.getHeaders()
    };
    return $http(req);
  }

  function groupAddMeeting (group) {
    let req = {
      url: `${SERVER}/group/${group.group_id}/meeting`,
      method: 'POST',
      headers: UserService.getHeaders(),
      params: group
    };
    return $http(req);
  }

  function meetingAddMember (group) {
    let req = {
      url: `${SERVER}/group/${group.group_id}/meeting`,
      method: 'POST',
      headers: UserService.getHeaders(),
      params: group
    };
    return $http(req);
  }

};

GroupService.$inject = ['$http', 'SERVER', 'UserService', '$stateParams'];
export { GroupService };
