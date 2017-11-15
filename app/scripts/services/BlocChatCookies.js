(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
         templateUrl: '/templates/login.html',
         controller: 'ModalCtrl as modal'
      })
    }
  }

  angular
    .module('bloc-chat-d1764')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
