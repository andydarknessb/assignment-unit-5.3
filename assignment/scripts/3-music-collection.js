console.log('***** Music Collection *****')

const collection = [];

function addToCollection(title, artist, yearPublished){
    const album = {
        title: title, 
        artist: artist, 
        yearPublished: yearPublished
    };
    collection.push(album);
    return album;
}

console.log(addToCollection("It Was Written", "Nas", 1996));
console.log(addToCollection("I Am", "Nas", 1999));
console.log(addToCollection("Illmatic", "Nas" , 1994));
console.log(addToCollection("Master of Puppets", "Metallica" , 1986));
console.log(addToCollection("It's Dark and Hell is Hot", "DMX", 1998));
console.log(addToCollection("Flesh of My Flesh, Blood of My Blood", "DMX", 1998));

function showCollection(albums) {
    console.log(albums.length + " albums in the collection");

    for (let i = 0; i < albums.length; i++) {
        console.log(albums[i].title + " by " + albums[i].artist + " , published in " + albums[i]. yearPublished);
    }
}

showCollection(collection);

function findByArtist(artist) {
    var results = [];
    for (var i=0; i < collection.length; i++) {
        if (collection[i].artist === artist) {
            results.push(collection[i]);
        }
    }
    return results;
}

var nasAlbums = findByArtist("Nas");
showCollection(nasAlbums);

var britneyspearsAlbums = findByArtist("Britney Spears")
showCollection(britneyspearsAlbums);