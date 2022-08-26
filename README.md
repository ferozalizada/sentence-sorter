## Sentence Sorter

This script is written in Node.js and basically uses a NLP library to extract sentences from the text file and then sorts those sentences.

My first approach was to use regex to fetch all the sentences and dissect those in Quotations into separate sentences but it needed some error handling and so I used the premade library to avoid re-inventing the wheel.

Basically the script uses the ShortStory.txt from the root directory and then writes the output into `output.txt`

Basically the first iteration made a text from turn like this:

#### Before

`"You did, you poor sap. You said we had all the energy we needed, forever. You said 'forever.’"`

##### After

`"You did, you poor sap. You said we had all the energy we needed, forever. You said 'forever.’"`

#### Using Natural NLP library

1. `"You did, you poor sap.`
2. `You said we had all the energy we needed, forever.`
3. `You said 'forever.’"`

But then I used the NLP package to make it dissect it based on punctuations.

### Installation:

1. Install NodeJS and browse into the root directory of the project
2. run `npm i`
3. and run `node index.js`
