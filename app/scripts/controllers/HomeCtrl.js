(function() {
  function HomeCtrl(Room, $uibModal) {
    this.rooms = Room.all;
    this.addRoom = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl as modal'
      })

    }
  }

  angular
    .module('bloc-chat-d1764')
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
