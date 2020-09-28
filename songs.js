let songsList = [
    {
        albumId: 'NVNV',
        songs: [
            {
                title: 'Niluvadhamu Ninu',
                songId:'NVNV01',
                artistId: 'KRK,SMGL',
                song:'./songs/NVNV01.mp3'
            }, {
                title: 'Ghal Ghal Ghal',
                songId:'NVNV02',
                artistId: 'SPB',
                song:'./songs/NVNV02.mp3'
            }, {
                title: 'Chandrullo Unde',
                songId:'NVNV03',
                artistId: 'SHMD',
                song:'./songs/NVNV03.mp3'
            }
        ]
    },
    {
        albumId: 'KBL',
        songs: [
            {
                title: 'Nijanga Nenena',
                songId:'KBL01',
                artistId: 'KRK',
                song:'./songs/KBL01.mp3'
            }, {
                title: 'Nee Prashnalu',
                songId:'KBL02',
                artistId: 'SPB',
                song:'./songs/KBL02.mp3'
            }
        ]
    },
    {
        albumId: 'TA',
        songs: [
            {
                title: 'Vanochhenante',
                songId:'TA01',
                artistId: 'UDNR,SRGS',
                song:'./songs/TA01.mp3'
            }, {
                title: 'Nenusaitham',
                songId:'TA02',
                artistId: 'SPB',
                song:'./songs/TA02.mp3'
            }, {
                title: 'Kodithe Kottali',
                songId:'TA03',
                artistId: 'SHMD',
                song:'./songs/TA03.mp3'
            },
            {
                title: 'Chinnaga Chinnaga',
                songId:'TA04',
                artistId: 'HRH',
                song:'./songs/TA04.mp3'
            }
        ]
    },
    {
        albumId: 'CC',
        songs: [
            {
                title: 'Nannu Lalinchu Sangeetam',
                songId:'CC01',
                artistId: 'UDNR',
                song:'./songs/CC01.mp3'
            }, {
                title: 'Andaala Devatha',
                songId:'CC02',
                artistId: 'HRH',
                song:'./songs/CC02.mp3'
            }, {
                title: 'Paapa Poothota',
                songId:'CC03',
                artistId: 'HRH',
                song:'./songs/CC03.mp3'
            },
            {
                title: 'Happy New Year',
                songId:'CC04',
                artistId: 'HRH',
                song:'./songs/CC04.mp3'
            },
            {
                title: 'Neeli Neeli Jabili',
                songId:'CC05',
                artistId: 'UDNR,SRGS',
                song:'./songs/CC05.mp3'
            }
        ]
    },
    {
        albumId: 'SD MBBS',
        songs: [
            {
                title: 'Thellarindoi',
                songId:"SDMBBS01",
                artistId: 'SMGL',
                song:'./songs/SDMBBS01.mp3'
            },
            {
                title: 'Sande Poddu',
                songId:"SDMBBS02",
                artistId: 'SHMD',
                song:'./songs/SDMBBS02.mp3'
            },
            {
                title: 'Naa Pere Kanchanamaala',
                songId:"SDMBBS03",
                artistId: 'KRK',
                song:'./songs/SDMBBS03.mp3'
            },
            {
                title: 'Pattu Pattu',
                songId:"SDMBBS04",
                artistId: 'SMGL',
                song:'./songs/SDMBBS04.mp3'
            },

        ]
    },
    {
        albumId: 'AVL',
        songs: [
            {
                title: 'Butta Bomma',
                songId:"AVL01",
                artistId: 'ARML',
                song:'./songs/AVL01.mp3'
            },
            {
                title: 'Samajavaragamana',
                songId:"AVL02",
                artistId: 'SDSR',
                song:'./songs/AVL02.mp3'
            }
        ]
    },
    {
        albumId: 'GG',
        songs: [
            {
                title: 'Inkem Inkem Inkem Kaavaale',
                songId:"GG01",
                artistId: 'SDSR',
                song:'./songs/GG01.mp3'
            }
        ]
    },
    {
        albumId: 'TXWL',
        songs: [
            {
                title: 'Maate Vinadhuga',
                songId:"TXWL01",
                artistId: 'SDSR',
                song:'./songs/TXWL01.mp3'
            }
        ]
    }

]


function getSongs() {
    let resultList=[]
    songsList.map(s=>{
        let songs=s.songs
        for(let i of songs){
            let song ={
                title:i.title,
                songId:i.songId,
                artistId:i.artistId,
                albumId:s.albumId,
                song:i.song
            }
            resultList.push(song)
        }
    })
    return resultList
}

function getSongsByAlbum(albumId) {
    let resultList = songsList.filter(a => a.albumId == albumId)
    return resultList[0].songs
}

function getSongsByArtist(artistId) {
    let resultList = []
    songsList.map(a => {
        let songs = a.songs
        for (let i in songs) {
            let artist = songs[i].artistId.split(',')
            let result = artist.find(ar => ar == artistId)
            if(result){
                let song={
                    albumId:a.albumId,
                    title:songs[i]
                }
                resultList.push(song)
            }
        }
    })
    return resultList
}