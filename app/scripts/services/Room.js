(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function(room) {

      rooms.$add (room)

    }

    return Room;
  }

  angular
    .module('bloc-chat-d1764')
    .factory('Room', ['$firebaseArray', Room]);
})();
