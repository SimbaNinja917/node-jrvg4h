var natural = require('natural'),
  stemmer = natural.LancasterStemmer,
  classifier = new natural.BayesClassifier();
classifier.addDocument('2mg clonidine.', 'medication');
classifier.addDocument('2 liters of water', 'food');
classifier.addDocument('5 eur of water', 'expense');
classifier.addDocument('5 eur of fruits', 'expense');
classifier.addDocument('3 oranges', 'food');
classifier.addDocument('2 pineapples', 'food');
classifier.addDocument('3 eur of oranges', 'expense');
classifier.addDocument('1 banana', 'food');
classifier.addDocument('18mg concerta 2022-08-31', 'medication');
classifier.addDocument('40mg strattera', 'medication');
classifier.addDocument('5mg attentin', 'medication');
classifier.addDocument('25mg atar', 'medication');
classifier.addDocument('6.25mg atar', 'medication');
classifier.train();

console.log(classifier.classify('2 bananas and 1 pineapple'));
console.log(classifier.classify('80mg strattera'));
console.log(classifier.classify('1.25mg attentin'));
console.log(classifier.classify('one bread'));
