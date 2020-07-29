const words = document.querySelector('.words');

// initializes the array
var wordArray = ['Aspiring Web Dev | ',
                'Dungeon Master | ',
                'Cat Dad | ',
                'Funko Collector | ',
                'Magic Player | ',
                'Avid Reader | ',
                'Wizard | ',
                'Board Gamer | ',
                'Coffee Drinker | ',
                'Night Owl | ',
                'South African | '];

// randomizes the array
function shuffle(array) {
    var m = array.length;
    var t;
    var i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    // return array;
    console.log(array);

    // removes the commas seperating object
    array = array.join(" ").trim(); 
    // displays the rearranged array on the webpage
    words.textContent = array  + ' and so much more.';
};

shuffle(wordArray);