getalbumSongs();

function getalbumSongs() {
    let album = document.getElementById('album')
    album.classList.add('active')
    playlist.classList.remove('active')
    artist.classList.remove('active')
}

function getartistSongs() {
    let artist = document.getElementById('artist')
    artist.classList.add('active')
    album.classList.remove('active')
    playlist.classList.remove('active')

}

function getplaylistSongs() {
    let playlist = document.getElementById('playlist')
    playlist.classList.add('active')
    album.classList.remove('active')
    artist.classList.remove('active')

}
