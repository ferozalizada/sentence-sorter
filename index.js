const natural = require('natural');
const fs = require('fs');

let content;
function readTextFile() {
  content = fs.readFileSync('./ShortStory.txt');
}
readTextFile();

const tokenizer = new natural.SentenceTokenizer();

fs.writeFile(
  'output.txt',

  tokenizer
    .tokenize(content.toString())
    .sort((a, b) => {
      return a.localeCompare(b, undefined, { sensitivity: 'base' });
    })
    .join('\n'),
  function (err) {
    if (err) return console.log(err);
  }
);
