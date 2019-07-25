/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/// Array of objects with quotes and their properties ///

const quotes = [
  {
      quote: "Not every day is a sunny day. Some days you're the pigeon. Some days you're the statue.",
      source: 'Jimmy John',
      citation: null,
      year: null
  },
   {
      quote: "Don't dream it, be it",
      source: "Dr. Frank N. Furter",
      citation: "The Rocky Horror Picture Show",
      year: 1975
  },
   {
      quote: "Don't be punished by your problems. Be led by your dreams.",
      source: "Ralph Waldo Emmerson",
      citation: null,
      year: null
  },
   {
      quote: "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
      source: "Buddha",
      citation: null,
      year: null
  },
    {
    quote: "Don't cry because it's over, smile because it happened",
    source: " Dr. Seuss",
    ref: null,
    year: null 
  }
]

console.log(quotes);


/// Creates a random number to select a quote ///

function getRandomQuote() {
  let randomNumber = Math.floor( Math.random() * 5);
  return quotes[randomNumber];
}

console.log(getRandomQuote());
  

/// Function calls getRandomQuote to print to the page. Function checks if there is a citation or year, and if so adds it to the page. ///

let html = ' ';

function printQuote() {
  let i = getRandomQuote(); 
  let html = '<p class="quote">' + i.quote + '</p>';
  html += '<p class="source">' + i.source + '</p>';

  if (i.citation) {
    html += '<span class="citation">' + i.citation + '</span>;';
  }
    
  if (i.year) {
    html += '<span class="year">' + i.year + '</span>';
  }
  
  document.getElementById('quote-box').innerHTML = html;
}

printQuote();


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
