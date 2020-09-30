const album = document.getElementById('album');


const artist = document.getElementById('artist')
const playlist = document.getElementById('playlist')
const dataAppend = document.getElementById('data')
const detailsAppend = document.getElementById('details')

let albumcount = 0
let artistcount = 0
let playlistcount = 0

let removeAlbumId = ''

const songsSrc = './songs/AVL01.mp3'
getalbumSongs();

function getalbumSongs() {
    removeOldData()
    removeOldDetails(removeAlbumId)
    const albumsList = albums.getalbum();
    album.classList.add('active')
    playlist.classList.remove('active')
    artist.classList.remove('active');

    if (albumcount == 0) {
        for (let i of albumsList) {
            let div = document.createElement('div')
            div.id = i.albumId
            let movieName = document.createElement('p')
            let year = document.createElement('p')
            let cast = document.createElement('p')
            let music = document.createElement('p')
            let image = document.createElement('img')

            image.setAttribute("src", i.image);
            image.classList.add('image')
            movieName.innerHTML = 'Movie : ' + i.albumName;
            movieName.addEventListener('click', () => {
                getdetials(i.albumId);
            }, false)
            year.innerHTML = 'Year : ' + i.albumReleased;
            movieName.classList.add('cursor')
            cast.innerHTML = 'Cast : ' + i.cast
            music.innerHTML = 'Music : ' + i.music

            div.appendChild(image)
            div.appendChild(movieName)
            div.appendChild(year)
            div.appendChild(cast)
            div.appendChild(music)
            dataAppend.appendChild(div)
        }
        albumcount++
    }
}

function getartistSongs() {
    removeOldData()
    removeOldDetails(removeAlbumId)
    const artistList = getArtist();
    artist.classList.add('active')
    album.classList.remove('active')
    playlist.classList.remove('active')
    console.log(artistList);
    if (artistcount == 0) {
        for (let i of artistList) {
            let div = document.createElement('div')
            div.id = i.artistId
            let img = document.createElement('IMG')
            img.setAttribute('src', i.image)
            img.classList.add('image')
            let artistName = document.createElement('p')
            artistName.innerHTML = 'Name : ' + i.artistName;
            artistName.addEventListener('click', () => {
                getdetials(i.artistId);
            }, false)
            artistName.classList.add('cursor')
            div.appendChild(img)
            div.appendChild(artistName)
            dataAppend.appendChild(div)
        }
        artistcount++
    }


}


function getplaylistSongs() {
    removeOldData()
    removeOldDetails(removeAlbumId)
    const allSongs = getSongs()
    const albumsList = albums.getalbum();
    playlist.classList.add('active')
    album.classList.remove('active')
    artist.classList.remove('active')

    if (playlistcount == 0) {
        for (let i of allSongs) {
            let div = document.createElement('div')
            div.id = i.songId
            let albumdata = albumsList.filter(a => a.albumId == i.albumId)

            let image = document.createElement('img')
            image.setAttribute("src", albumdata[0].image);
            image.classList.add('image')

            let songTitle = document.createElement('p')
            songTitle.innerHTML = 'Title : ' + i.title;
            songTitle.classList.add('cursor')
            songTitle.addEventListener('click', () => {
                getdetials(i)
            }, false)
            let albumName = document.createElement('p')
            albumName.innerHTML = 'Album : ' + albumdata[0].albumName

            div.appendChild(image)
            div.appendChild(songTitle)
            div.appendChild(albumName)
            dataAppend.appendChild(div)
        }
        playlistcount++
    }

}


function getdetials(e) {
    const albumsList = albums.getalbum();
    const artistList = getArtist();

    removeOldDetails(removeAlbumId)
    removeAlbumId = 'removedetails'
    let div = document.createElement('div')
    div.id = removeAlbumId
    if (albumcount > 0) {

        let albumResult = getSongsByAlbum(e);
        console.log(albumResult);
        let albumdata = albumsList.filter(a => e == a.albumId)

        let img = document.createElement('IMG')
        img.setAttribute('src', albumdata[0].image)
        img.classList.add('image')
        div.appendChild(img)

        let movieName = document.createElement('p')
        let year = document.createElement('p')
        let cast = document.createElement('p')
        let music = document.createElement('p')
        let songs = document.createElement('p')
        movieName.innerHTML = 'Movie : ' + albumdata[0].albumName
        movieName.classList.add('name')
        year.innerHTML = 'Year : ' + albumdata[0].albumReleased
        cast.innerHTML = 'Cast : ' + albumdata[0].cast
        music.innerHTML = 'Music : ' + albumdata[0].music
        songs.innerHTML = 'Songs'
        songs.classList.add('name')
        div.appendChild(movieName)
        div.appendChild(year)
        div.appendChild(cast)
        div.appendChild(music)
        div.appendChild(songs)

        for (let i of albumResult) {
            let song = document.createElement('p')
            let artistIds = i.artistId.split(',')
            let artisName = ''
            for (let i of artistIds) {
                let name = artistList.filter(a => a.artistId == i)
                artisName += name[0].artistName + ' '
            }
            song.innerHTML = i.title + ' - ' + artisName
            song.classList.add('cursor')
            song.addEventListener('click', () => {
                playSongs(i.song)
            }, false)
            div.appendChild(song)
            div.classList.add('detailsDis')
        }
        detailsAppend.appendChild(div)
    }
    if (artistcount > 0) {
        const artistResult = getSongsByArtist(e);
        console.log(artistResult);
        for (let i of artistResult) {
            let songsDiv = document.createElement('div')
            songsDiv.classList.add('songsDiv')
            let songName = document.createElement('p')
            songName.innerHTML = i.title.title
            songName.classList.add('name', 'cursor')
            songName.addEventListener('click', () => {
                playSongs(i.title.song)
            }, false)

            let movieName = document.createElement('p')
            let name = albumsList.filter(a => i.albumId == a.albumId)
            movieName.innerHTML = 'Movie : ' + name[0].albumName

            let year = document.createElement('p')
            year.innerHTML='Year : '+name[0].albumReleased
            let cast = document.createElement('p')
            cast.innerHTML='Cast : '+name[0].cast
            let music = document.createElement('p')
            music.innerHTML='Music : '+name[0].music
            
            songsDiv.appendChild(songName)
            songsDiv.appendChild(movieName)
            songsDiv.appendChild(year)
            songsDiv.appendChild(cast)
            songsDiv.appendChild(music) 
            div.appendChild(songsDiv)
            div.classList.add('detailsDis')
        }
        detailsAppend.appendChild(div)
    }

    if (playlistcount > 0) {
        console.log(e);
        let img = document.createElement('IMG')
        let albumImage = albumsList.filter(a => a.albumId == e.albumId)
        console.log(albumImage);
        img.setAttribute('src', albumImage[0].image)
        img.classList.add('image')

        let titleName = document.createElement('p')
        titleName.innerHTML = 'Title : ' + e.title

        let album = document.createElement('p')
        let year = document.createElement('p')
        let cast = document.createElement('p')
        let music = document.createElement('p')
        album.innerHTML = 'Movie : ' + albumImage[0].albumName 
        year.innerHTML = 'Year : ' + albumImage[0].albumReleased 
        cast.innerHTML = 'Cast : ' + albumImage[0].cast 
        music.innerHTML = 'Music : ' + albumImage[0].music 

        let artist = document.createElement('p')
        let artistarray = e.artistId.split(',')
        artist.innerHTML = 'Artist : '
        for (let i of artistarray) {
            let name = artistList.filter(a => a.artistId == i)
            artist.innerHTML += name[0].artistName + ' '
        }
        div.appendChild(img)
        div.appendChild(titleName)
        div.appendChild(album)
        div.appendChild(year)
        div.appendChild(cast)
        div.appendChild(music)
        div.appendChild(artist)
        div.classList.add('detailsDis')
        detailsAppend.appendChild(div)
        playSongs(e.song)
    }
}

function playSongs(e) {
    console.log(e);
    let data = document.getElementById('songPlay')
    data.src = e
    data.autoplay = true
}


function removeOldData() {
    let albumsList = albums.getalbum();
    let artistList = getArtist();
    let playlist = getSongs()
    if (albumcount > 0) {
        for (let i of albumsList) {
            let removeid = document.getElementById(i.albumId)
            removeid.remove()
        }
        albumcount = 0
    }
    if (artistcount > 0) {
        for (let i of artistList) {
            let removeid = document.getElementById(i.artistId)
            removeid.remove()
        }
        artistcount = 0
    }
    if (playlistcount > 0) {
        for (let i of playlist) {
            let removeid = document.getElementById(i.songId)
            removeid.remove()
        }
        playlistcount = 0
    }



}

function removeOldDetails(e) {
    if (e != '') {
        console.log(e);
        let removedata = document.getElementById(e)
        console.log(removedata);
        removedata.remove()
        removeAlbumId = ''
    }
}