(function() {
  function HomeCtrl(Room, Message, $uibModal) {
    var home = this;
    home.activeRoom = null;
    home.rooms = Room.all;
    home.addRoom = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl as modal'
      })
    }

    home.setActiveRoom = function(room) {
      home.activeRoom = room;
      home.messages = Message.getByRoomId(home.activeRoom.$id);
      console.log(home.messages)
    }
  }

  angular
    .module('bloc-chat-d1764')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
