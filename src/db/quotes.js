const quotes = [
  {
    "id": crypto.randomUUID(),
    "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "author": "Thomas Edison, type.fit"
  },
  {
    "id": crypto.randomUUID(),
    "text": "You can observe a lot just by watching.",
    "author": "Yogi Berra, type.fit"
  },
  {
    "id": crypto.randomUUID(),
    "text": "A house divided against itself cannot stand.",
    "author": "Abraham Lincoln, type.fit"
  },
  {
    "id": crypto.randomUUID(),
    "text": "Difficulties increase the nearer we get to the goal.",
    "author": "Johann Wolfgang von Goethe, type.fit"
  },
  {
    "id": crypto.randomUUID(),
    "text": "Fate is in your hands and no one elses",
    "author": "Byron Pulsifer, type.fit"
  },
  {
    "id": crypto.randomUUID(),
    "text": "Be the chief but never the lord.",
    "author": "Lao Tzu, type.fit"
  },
  {
    "id": crypto.randomUUID(),
    "text": "Nothing happens unless first we dream.",
    "author": "Carl Sandburg, type.fit"
  },
  {
    "id": crypto.randomUUID(),
    "text": "Well begun is half done.",
    "author": "Aristotle, type.fit"
  },
  {
    "id": crypto.randomUUID(),
    "text": "Life is a learning experience, only if you learn.",
    "author": "Yogi Berra"
  },
  {
    "id": crypto.randomUUID(),
    "text": "Self-complacency is fatal to progress.",
    "author": "Margaret Sangster, type.fit"
  },
  {
    "id": crypto.randomUUID(),
    "text": "Peace comes from within. Do not seek it without.",
    "author": "Buddha, type.fit"
  },
  {
    "id": crypto.randomUUID(),
    "text": "What you give is what you get.",
    "author": "Byron Pulsifer, type.fit"
  },
  {
    "id": crypto.randomUUID(),
    "text": "We can only learn to love by loving.",
    "author": "Iris Murdoch, type.fit"
  },
  {
    "id": crypto.randomUUID(),
    "text": "Life is change. Growth is optional. Choose wisely.",
    "author": "Karen Clark, type.fit"
  },
  {
    "id": crypto.randomUUID(),
    "text": "You'll see it when you believe it.",
    "author": "Wayne Dyer, type.fit"
  },
  {
    "id": crypto.randomUUID(),
    "text": "Today is the tomorrow we worried about yesterday.",
    "author":  "type.fit"
  },
  {
    "id": crypto.randomUUID(),
    "text": "Today is the tomorrow we worried about yesterday.",
    "author":  "type.fit"
  }
];

const getAllQuotes = () => {
  return quotes;
}

const getQuote = (id) => {
  return quotes.find(quote => quote.id === id);
}

export { getAllQuotes, getQuote }