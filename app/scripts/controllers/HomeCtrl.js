(function() {
    function HomeCtrl(Room) {
      this.rooms = Room.all;
    }

    angular
        .module('bloc-chat-d1764')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
