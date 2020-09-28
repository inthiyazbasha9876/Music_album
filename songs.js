let songsList = [
    {
        albumId: 'NVNV',
        songs: [
            {
                title: 'Niluvadhamu Ninu',
                songId:'NVNV01',
                artistId: 'KRK,SMGL',
            }, {
                title: 'Ghal Ghal Ghal',
                songId:'NVNV02',
                artistId: 'SPB'
            }, {
                title: 'Chandrullo Unde',
                songId:'NVNV03',
                artistId: 'SHMD'
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
            }, {
                title: 'Nee Prashnalu',
                songId:'KBL02',
                artistId: 'SPB'
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
            }, {
                title: 'Nenusaitham',
                songId:'TA02',
                artistId: 'SPB'
            }, {
                title: 'Kodithe Kottali',
                songId:'TA03',
                artistId: 'SHMD'
            },
            {
                title: 'Chinnaga Chinnaga',
                songId:'TA04',
                artistId: 'HRH'
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
            }, {
                title: 'Andaala Devatha',
                songId:'CC02',
                artistId: 'HRH'
            }, {
                title: 'Paapa Poothota',
                songId:'CC03',
                artistId: 'HRH'
            },
            {
                title: 'Happy New Year',
                songId:'CC04',
                artistId: 'HRH'
            },
            {
                title: 'Neeli Neeli Jabili',
                songId:'CC05',
                artistId: 'UDNR,SRGS'
            }
        ]
    },
    {
        albumId: 'SD MBBS',
        songs: [
            {
                title: 'Thellarindoi',
                songId:"SDMBBS01",
                artistId: 'SMGL'
            },
            {
                title: 'Sande Poddu',
                songId:"SDMBBS02",
                artistId: 'SHMD'
            },
            {
                title: 'Naa Pere Kanchanamaala',
                songId:"SDMBBS03",
                artistId: 'KRK'
            },
            {
                title: 'Pattu Pattu',
                songId:"SDMBBS04",
                artistId: 'SMGL'
            },

        ]
    },
    {
        albumId: 'AVL',
        songs: [
            {
                title: 'Butta Bomma',
                songId:"AVL01",
                artistId: 'ARML'
            },
            {
                title: 'Samajavaragamana',
                songId:"AVL02",
                artistId: 'SDSR'
            }
        ]
    },
    {
        albumId: 'GG',
        songs: [
            {
                title: 'Inkem Inkem Inkem Kaavaale',
                songId:"GG01",
                artistId: 'SDSR'
            }
        ]
    },
    {
        albumId: 'TXWL',
        songs: [
            {
                title: 'Maate Vinadhuga',
                songId:"TXWL01",
                artistId: 'SDSR'
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
                albumId:s.albumId
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