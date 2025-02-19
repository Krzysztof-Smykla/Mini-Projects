const quotes = new Map([
    ["Socrates (469–399 BCE)", "The unexamined life is not worth living."],
    ["Aristotle (384–322 BCE)", "Happiness is the meaning and the purpose of life, the whole aim and end of human existence."],
    ["Marcus Aurelius (121–180 CE)", "You have power over your mind—not outside events. Realize this, and you will find strength."],
    ["René Descartes (1596–1650)", "I think, therefore I am."],
    ["Immanuel Kant (1724–1804)", "Act only according to that maxim whereby you can at the same time will that it should become a universal law."],
    ["Friedrich Nietzsche (1844–1900)", "He who has a why to live can bear almost any how."],
    ["Karl Marx (1818–1883)", "The philosophers have only interpreted the world, in various ways. The point, however, is to change it."],
    ["Jean-Paul Sartre (1905–1980)", "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does."],
    ["Ludwig Wittgenstein (1889–1951)", "The limits of my language mean the limits of my world."],
    ["Simone de Beauvoir (1908–1986)", "One is not born, but rather becomes, a woman."]
]);

const quoteElement = document.getElementById("quote");

function generateQuote() {
    const keys = Array.from(quotes.keys()); // Convert Map keys to an array
    const randomIdx = Math.floor(Math.random() * keys.length); // Get a random index
    const philosopher = keys[randomIdx]; // Get the corresponding philosopher
    const quote = quotes.get(philosopher); // Retrieve the quote

    quoteElement.innerHTML = `<strong>${philosopher}:</strong> "${quote}"`;
}

// Generate a random quote when the page loads
generateQuote();
