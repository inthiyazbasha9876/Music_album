let album = document.getElementById('album');


let artist = document.getElementById('artist')
let playlist = document.getElementById('playlist')
let dataAppend = document.getElementById('data')
let detailsAppend = document.getElementById('details')

let albumcount = 0
let artistcount = 0
let playlistcount = 0

let removeAlbumId = ''

const songsSrc = './songs/AVL01.mp3'
getalbumSongs();

function getalbumSongs() {
    removeOldData()
    removeOldDetails(removeAlbumId)
    let albumsList = getAlbums();
    album.classList.add('active')
    playlist.classList.remove('active')
    artist.classList.remove('active');
    if (albumcount == 0) {
        for (let i of albumsList) {
            let div = document.createElement('div')
            div.id = i.albumId
            let movieName = document.createElement('p')
            let year = document.createElement('p')
            let image = document.createElement('img')

            image.setAttribute("src", i.image);
            image.classList.add('image')
            movieName.innerHTML = 'Movie : ' + i.albumName;
            movieName.addEventListener('click', () => {
                getdetials(i.albumId);
            }, false)
            year.innerHTML = 'Year : ' + i.albumReleased;
            movieName.classList.add('cursor')

            div.appendChild(image)
            div.appendChild(movieName)
            div.appendChild(year)
            dataAppend.appendChild(div)
        }
        albumcount++
    }
}

function getartistSongs() {
    removeOldData()
    removeOldDetails(removeAlbumId)
    let artistList = getArtist();
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
    const albumsList = getAlbums();
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
    const albumsList = getAlbums();
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
        movieName.innerHTML = albumdata[0].albumName
        movieName.classList.add('name')
        div.appendChild(movieName)

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
            let name = albumList.filter(a => i.albumId == a.albumId)
            movieName.innerHTML = 'Movie : ' + name[0].albumName

            songsDiv.appendChild(songName)
            songsDiv.appendChild(movieName)
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
        titleName.innerHTML = 'Title : '+e.title

        let album = document.createElement('p')
        album.innerHTML = 'Movie : ' + albumImage[0].albumName + ' - ' + albumImage[0].albumReleased

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
    let albumsList = getAlbums();
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