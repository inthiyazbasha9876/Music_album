let album = document.getElementById('album');
let albumsList = getAlbums();
let artist = document.getElementById('artist')
let playlist = document.getElementById('playlist')
let dataAppend = document.getElementById('data')

let albumcount=0
let artistcount=0
let playlistcount=0

getalbumSongs();

function getalbumSongs() { 
  if(albumcount==0){
    album.classList.add('active')
    playlist.classList.remove('active')
    artist.classList.remove('active');


    for (let i of albumsList) {
        let div = document.createElement('div')
        div.id=i.albumId
        let movieName = document.createElement('p')
        let year = document.createElement('p')
        let image=document.createElement('img')
        image.setAttribute("src", i.image);
        image.classList.add('image')
        movieName.innerHTML = 'Movie : ' + i.albumName;
        movieName.addEventListener('click', () => {
            getdetials(i.albumId);
        }, false)
        year.innerHTML = 'Year : ' + i.albumReleased;
        movieName.classList.add('albums')
        div.appendChild(image)
        div.appendChild(movieName)
        div.appendChild(year)
        dataAppend.appendChild(div)
    }
    albumcount++;
  }else{
      removeOldData()
      albumcount=0;
      getalbumSongs()
  }
}

function getartistSongs() {
    artist.classList.add('active')
    album.classList.remove('active')
    playlist.classList.remove('active')
    removeOldData()
    albumcount=0

}

function getplaylistSongs() {
    playlist.classList.add('active')
    album.classList.remove('active')
    artist.classList.remove('active')

}

function getdetials(e) {
    console.log(e);
}


function removeOldData(){
    for(let i of albumsList){
        let removeid=document.getElementById(i.albumId)
        removeid.remove()
    }
}