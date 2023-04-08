// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.


var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: null,

  roomList: [],

  updateList: function(data = this._data, array = this.roomList) {
    for (var i = 0; i < data.length; i++) {
      var roomName = data[i]['roomname'];
      if (array.indexOf(roomName) === -1) {
        array.push(roomName);
      }
    }
  },

  sort: function(array) {
    return array.sort();
  },

  selectedRoom: function(___) {

  }


  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

};