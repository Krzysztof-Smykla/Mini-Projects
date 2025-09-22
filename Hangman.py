import random

print('Hello USER, Welcome to the game of hangman!')

words = [
    "economic","sour","operational","memorandum","preparation","experiment",
    "tight","studio","shoulder","mouth","ton","virtue","hemisphere","unrest",
    "dog","advanced","outlet","dilute","fragment","up"
]

w = random.choice(words)

# Hangman ASCII stages
HANGMANPICS = [
    """
     -----
     |   |
         |
         |
         |
         |
    =========
    """,
    """
     -----
     |   |
     O   |
         |
         |
         |
    =========
    """,
    """
     -----
     |   |
     O   |
     |   |
         |
         |
    =========
    """,
    """
     -----
     |   |
     O   |
    /|   |
         |
         |
    =========
    """,
    """
     -----
     |   |
     O   |
    /|\\  |
         |
         |
    =========
    """,
    """
     -----
     |   |
     O   |
    /|\\  |
    /    |
         |
    =========
    """,
    """
     -----
     |   |
     O   |
    /|\\  |
    / \\  |
         |
    =========
    """
]

def game(word):
    guessed = set()
    correct = set()
    unique_letters = set(word)  

    points = 0
    wrong_guesses = 0
    max_wrong = len(HANGMANPICS) - 1  

    display_word = ["_" for _ in word]
    print(" ".join(display_word))

    while correct != unique_letters and wrong_guesses < max_wrong:
        guess = input("Guess a letter: ").lower()

        if not guess.isalpha() or len(guess) != 1:
            raise ValueError("Input must be a single letter")

        if guess in guessed or guess in correct:
            print("Letter already guessed.")
            continue

        if guess in word:
            print(f"Correct! The letter '{guess}' is in the word.")
            points += word.count(guess)
            correct.add(guess)

            for position in range(len(word)):
                if word[position] == guess:
                    display_word[position] = guess
            print(" ".join(display_word), "\n")

        else:
            print(f" Wrong! The letter '{guess}' is NOT in the word.")
            guessed.add(guess)
            wrong_guesses += 1
            print(HANGMANPICS[wrong_guesses])  # draw hangman step

    # End conditions
    if correct == unique_letters:
        print(f"You guessed the word: {word} | POINTS: {points}")
    else:
        print(HANGMANPICS[-1])
        print("Game Over! The word was:", word)

game(w)