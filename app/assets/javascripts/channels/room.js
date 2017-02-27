App.room = App.cable.subscriptions.create("RoomChannel", {
  connected: function() {

  },

  disconnected: function() {

  },

  received: function(data) {
    if(data.mention) {
        alert('You have a new mention');
    }
    if(data.content) {
      $('#messages-table').append(
        '<div class="message">' +
        '<div class="message-user">' +
        data.username + ':' + '</div>' +
        '<div class="message-content">' +
        data.content + '</div>' + '</div>'
      );
    }
  }
});
