// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#addroom'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

  },

  render: function() {
    // TODO: Render out the list of rooms.
    for (var i = 0; i < Rooms._data.length; i++) {
      if (Rooms.roomList.indexOf(Rooms._data[i]['roomname']) === -1) {
        Rooms.roomList.push(Rooms._data[i]['roomname']);
        RoomsView.renderRoom(Rooms._data[i]['roomname']);
      }
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    var packaged = {roomname: roomname};
    var compile = _.template('<option><%- roomname %></option>');
    RoomsView.$select.append(compile(packaged));
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    // grab room selected by user from dropdown list
    // pass selection and call renderRoom

  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    // If input field has string, grab string
    if (document.getElementById('message').value) {
      var roomToAdd = document.getElementById('message').value;
    }
    Parse.create({
      username: App.username,
      text: '',
      roomname: roomToAdd,
    });
    App.fetch();

  }

};
