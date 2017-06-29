var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

printPlaylists: function() {
// return `${this.firstName} TEXT ${this.lastName}`;
  for (var i in this.playlists){
    var item = this.playlists[i];
    // console.log `${item.id}: ${item.name} - ${Object.keys(item.tracks).length} tracks`
    console.log(item.id + ':', item.name, Object.keys(item.tracks).length, '- tracks');
  }
},
// printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

printTracks: function() {
  for (var i in this.tracks){
    var item = this.tracks[i]
    console.log(item.id + ':', item.name, 'by', item.artist, '(' + item.album + ')');
  }
},
// printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

printPlaylist: function(playlistId) {
  var playlist = this.playlists[playlistId];
  var trackNum = Object.keys(playlist.tracks).length;
  console.log(playlist.id + ':', playlist.name, trackNum.length, '- tracks');

  for (var i in playlist.tracks){
    var trackCount = playlist.tracks[i];
    var track = this.tracks[trackCount];
    console.log(track.id + ':', track.name, 'by', track.artist, '(' + track.album + ')');
  }
},
// printPlaylist('p01');

// adds an existing track to an existing playlist

addTrackToPlaylist: function(trackId, playlistId) {
  // console.log('Adding', trackId, 'to playlist', playlistId);

  playlist = this.playlists[playlistId];
  track = this.tracks[trackId];
  // console.log(playlist);
  // console.log(track);
  playlist.tracks.push(trackId);
  console.log(playlist.tracks);
},
// addTrackToPlaylist('t03', 'p01');

// generates a unique id
// (use this for addTrack and addPlaylist)

uid: function()) {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},
// uid();
// console.log(uid());

// adds a track to the this

addTrack: function(name, artist, album) {
  var track = this.tracks;
  var trackId = uid();
  // console.log(trackId, name, artist, album);
  track.trackId = {};
  newTrack = track.trackId;

  newTrack.id = trackId;
  newTrack.name = name;
  newTrack.artist = artist;
  newTrack.album = album;
  console.log(newTrack);
},
// addTrack('She Bangs', 'William Hung', 'American Idol');


// adds a playlist to the this

addPlaylist: function(name) {
  var playlists = this.playlists;
  playlists[name] = {};
  playlists[name].id = {};
  playlists[name].name = {};
  playlists[name].artist = {};
  playlists[name].album = {};

  console.log(playlists);

},
// addPlaylist('Strawberry Jams');




// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults: function(query) {

}
};