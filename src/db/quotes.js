const quotes = [
  {
    "id": "f7b6f60b-db2f-4d16-944a-8879e0e375ac",
    "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "author": "Thomas Edison"
  },
  {
    "id": "e0ebb963-390f-4d54-aee4-51c087d76564",
    "text": "You can observe a lot just by watching.",
    "author": "Yogi Berra"
  },
  {
    "id": "a06eac8e-a434-485e-91dc-5ff4f17ed001",
    "text": "A house divided against itself cannot stand.",
    "author": "Abraham Lincoln"
  },
  {
    "id": "3c5e1df5-9e79-40ab-a9b6-6c36b78c7232",
    "text": "Difficulties increase the nearer we get to the goal.",
    "author": "Johann Wolfgang von Goethe"
  },
  {
    "id": "fcdccefa-597c-490e-98bb-21192a925070",
    "text": "Fate is in your hands and no one elses",
    "author": "Byron Pulsifer"
  },
  {
    "id": "1cfb15d9-a57e-4ae6-810d-36e2008f8441",
    "text": "Be the chief but never the lord.",
    "author": "Lao Tzu"
  },
  {
    "id": "2ed064d7-01aa-4e99-999f-6e3ae2cc8fde",
    "text": "Nothing happens unless first we dream.",
    "author": "Carl Sandburg"
  },
  {
    "id": "952daeff-5b40-4508-9df5-caffcd854aac",
    "text": "Well begun is half done.",
    "author": "Aristotle"
  },
  {
    "id": "5b80af29-00c5-4edd-887e-b1797fb9bc6d",
    "text": "Life is a learning experience, only if you learn.",
    "author": "Yogi Berra"
  },
  {
    "id": "896c622a-38af-41db-928a-05ad9783ce88",
    "text": "Self-complacency is fatal to progress.",
    "author": "Margaret Sangster"
  },
  {
    "id": "12ba0f53-be11-4361-a0ed-7b82ebefcd6c",
    "text": "Peace comes from within. Do not seek it without.",
    "author": "Buddha"
  },
  {
    "id": "caf194b6-73b0-4567-8fa9-4daa1014f6bc",
    "text": "What you give is what you get.",
    "author": "Byron Pulsifer"
  },
  {
    "id": "9acffd50-1084-4f41-88c9-576e347ff2fe",
    "text": "We can only learn to love by loving.",
    "author": "Iris Murdoch"
  },
  {
    "id": "cfb3e3f1-6384-450d-830b-2bd1c63a978f",
    "text": "Life is change. Growth is optional. Choose wisely.",
    "author": "Karen Clark"
  },
  {
    "id": "cdf07b7f-2ee4-448a-86d1-a2896bbdb94a",
    "text": "You'll see it when you believe it.",
    "author": "Wayne Dyer"
  },
  {
    "id": "ae067fa1-a8cc-46b8-a6ea-69d680c1b74b",
    "text": "Today is the tomorrow we worried about yesterday.",
    "author":  "Swami Vivekananda"
  },
  {
    "id": "e87f7bf7-7388-4d15-a8b6-d43794ae6c2e",
    "text": "We are what our thoughts have made us; so take care about what you think.",
    "author":  "Swami Vivekananda"
  },
  {
    "id": "72fffd72-06bc-40f3-8a56-3d72e904ed99",
    "text": "It's hard to teach someone to have Patience in life… one has to have Patience to learn that. 🫰",
    "author":  "Tapas Adhikary"
  }
];

const getAllQuotes = () => {
  return quotes;
}

const getQuote = (id) => {
  return quotes.find(quote => quote.id === id);
}

export { getAllQuotes, getQuote }