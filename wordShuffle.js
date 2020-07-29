const words = document.querySelector('.words');

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

    array = array.join(" ").trim();
    words.textContent = array  + ' and so much more.';
};

shuffle(wordArray);