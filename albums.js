var albums=(function(){
    let albumList = [
        {
            albumName:'NUVVOSTANANTE NENODDANTANA',
            albumId:"NVNV",
            image:'./images/nvnv.jpg',
            albumReleased:2005,
            cast:'Siddarth,Trisha',
            music:'Devi sri prasadh'
        },
        {
            albumName:'Kotta Bangaru Lokam',
            albumId:"KBL",
            image:'./images/kbl.jpg',
            albumReleased:2008,
            cast:'Varun Sandesh, Shweta Prasad',
            music:'Mickey J.Meyer'
        },
        {
            albumName:'Tagore',
            albumId:"TA",
            image:'./images/ta.jpg',
            albumReleased:2003,
            cast:'Chiranjeevi, Jyothika, Shriya',
            music:'Mani Sharma'
        },
        {
            albumName:'Cheppave Chirugaali',
            albumId:"CC",
            image:'./images/cc.jpg',
            albumReleased:2004,
            cast:'Venu, Ashma Bhalla, Abhirami',
            music:'S A Rajkumar'
        },
        {
            albumName:'Shankar Dada M.B.B.S.',
            albumId:"SD MBBS",
            image:'./images/sdmbbs.jpg',
            albumReleased:2004,
            cast:'Chiranjeevi, Sonali Bendre',
            music:'Devi sri prasadh'
        },{
            albumName:'Ala Vaikunthapurramuloo',
            albumId:"AVL",
            image:'./images/avl.jpg',
            albumReleased:2020,
            cast:'Allu Arjun, Pooja Hegde',
            music:'Thaman'
        },
        {
            albumName:'Geetha Govindam',
            albumId:"GG",
            image:'./images/gg.jpg',
            albumReleased:2018,
            cast:'Vijay Deverakonda, Rashmika',
            music:'Gopi Sundar'
        },
        {
            albumName:'Taxiwaala',
            albumId:"TXWL",
            image:'./images/txw.jpg',
            albumReleased:2019,
            cast:'Vijay Deverakonda,  Priyanka',
            music:'Jakes Bejoy'
        }
    ]
    
    let album = new Object();
    album.getalbum= ()=>{
        return albumList
    }
    return album
})();
