(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    }

    return Message;
  }

  angular
    .module('bloc-chat-d1764')
    .factory('Message', ['$firebaseArray', Message]);
})();
