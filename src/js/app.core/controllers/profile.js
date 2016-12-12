import moment from 'moment';

function ProfileController (UserService, GroupService, $state, $rootScope, $stateParams) {

  let vm = this;

  vm.groups = [];
  vm.profileGroup = profileGroup;

  function init () {
    profileGroup();
  };

  init();

  function profileGroup () {
    UserService.getGroups($stateParams.id).then((resp) => {
      vm.groups = resp.data[0];
      console.log('vm.groups is: ', vm.groups);
      vm.groups.created_at = moment(vm.groups.created_at).format("MMM D, YYYY");
      vm.groups.meetings.forEach((meeting) => {
        meeting.time = moment(meeting.time).format("h:mm a");
        console.log(meeting.time)
      });
    });
  }

};

ProfileController.$inject = ['UserService', 'GroupService', '$state', '$rootScope', '$stateParams'];
export { ProfileController };
