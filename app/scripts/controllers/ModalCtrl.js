(function() {
  function ModalCtrl(Room, $uibModalInstance, $cookies) {
    this.cancel = function() {
      $uibModalInstance.dismiss();
    };

    this.submit = function() {
      Room.add(this.newRoom);
      $uibModalInstance.close(this.text);
    };

    this.createUsername = function() {
      $cookies.put('blocChatCurrentUser', this.username);
      $uibModalInstance.close();
   }
  }

  angular
    .module('bloc-chat-d1764')
    .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
})();
