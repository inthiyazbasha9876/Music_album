let songsList = [
    {
        albumId: 'NVNV',
        songs: [
            {
                title: 'Niluvadhamu Ninu',
                artistId: 'KRK,SMGL',
            }, {
                title: 'Ghal Ghal Ghal',
                artistId: 'SPB'
            }, {
                title: 'Chandrullo Unde',
                artistId: 'SHMD'
            }
        ]
    },
    {
        albumId: 'KBL',
        songs: [
            {
                title: 'Nijanga Nenena',
                artistId: 'KRK',
            }, {
                title: 'Nee Prashnalu',
                artistId: 'SPB'
            }
        ]
    },
    {
        albumId: 'TA',
        songs: [
            {
                title: 'Vanochhenante',
                artistId: 'UDNR,SRGS',
            }, {
                title: 'Nenusaitham',
                artistId: 'SPB'
            }, {
                title: 'Kodithe Kottali',
                artistId: 'SHMD'
            },
            {
                title: 'Chinnaga Chinnaga',
                artistId: 'HRH'
            }
        ]
    },
    {
        albumId: 'CC',
        songs: [
            {
                title: 'Nannu Lalinchu Sangeetam',
                artistId: 'UDNR',
            }, {
                title: 'Andaala Devatha',
                artistId: 'HRH'
            }, {
                title: 'Paapa Poothota',
                artistId: 'HRH'
            },
            {
                title: 'Happy New Year',
                artistId: 'HRH'
            },
            {
                title: 'Neeli Neeli Jabili',
                artistId: 'UDNR,SRGS'
            }
        ]
    },
    {
        albumId: 'SD MBBS',
        songs: [
            {
                title: 'Thellarindoi',
                artistId: 'SMGL'
            },
            {
                title: 'Sande Poddu',
                artistId: 'SHMD'
            },
            {
                title: 'Naa Pere Kanchanamaala',
                artistId: 'KRK'
            },
            {
                title: 'Pattu Pattu',
                artistId: 'SMGL'
            },

        ]
    },
    {
        albumId: 'AVL',
        songs: [
            {
                title: 'Butta Bomma',
                artistId: 'ARML'
            },
            {
                title: 'Samajavaragamana',
                artistId: 'SDSR'
            }
        ]
    },
    {
        albumId: 'GG',
        songs: [
            {
                title: 'Inkem Inkem Inkem Kaavaale',
                artistId: 'SDSR'
            }
        ]
    },
    {
        albumId: 'TXWL',
        songs: [
            {
                title: 'Maate Vinadhuga',
                artistId: 'SDSR'
            }
        ]
    }

]


function getSongs() {
    return songsList
}

function getSongsByAlbum(albumId) {
    let resultList = songsList.filter(a => a.albumId == albumId)
    return resultList
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