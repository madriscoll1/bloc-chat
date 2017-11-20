(function() {
  function HomeCtrl(Room, Message, $uibModal, $cookies) {
    var home = this;
    home.activeRoom = null;
    home.rooms = Room.all;
    home.currentUser = $cookies.get('blocChatCurrentUser');
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

    home.sendMessage = function() {
      home.newMessage.roomId = home.activeRoom.$id;
      home.newMessage.username = home.currentUser;
      Message.send(home.newMessage);
      
   }
  }

  angular
    .module('bloc-chat-d1764')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
