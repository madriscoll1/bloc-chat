(function() {
  function ModalCtrl(Room, $uibModalInstance) {
    this.cancel = function() {
      $uibModalInstance.dismiss();
    };

    this.submit = function() {
      Room.add(this.newRoom);
      $uibModalInstance.close(this.text);
    };
  }

  angular
    .module('bloc-chat-d1764')
    .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
