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
