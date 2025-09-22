def add_person():
    name = input("Name: ")
    age = input("Age: ")
    email = input("Email: ")

    person = {
        "name": name,
        "age": age,
        "email": email
    }
    people.append(person)
    return person


people = []


def display_people(people):
    for i, person in enumerate(people):
        print(i + 1, "-", person["name"], "|", person["age"], person["email"])


def delete_contact(people):
    for i, person in enumerate(people):
        print(i + 1, "-", person["name"], "|", person["age"], person["email"])

    while True:
        print("contact list size:", len(people))
        number = input("Enter a number to delete: ")
        try:
            number = int(number)
            if number <= 0 or number > len(people):
                print("Number out of range.")
            else:
                break
        except ValueError:
            print("Invalid number")

    people.pop(number - 1)


def search(people):
    search_name = input("Search for a name: ").lower()
    results = []

    for person in people:
        name = person["name"]
        if search_name.startswith(name.lower()):
            results.append(person)

    display_people(results)


while True:
    print("Welcome to the Contact Management System.")
    command = input("You can Add, Delete or Search: ").lower()

    if command == 'add':
        person = add_person()
        people.append(person)
    elif command == "delete":
        delete_contact(people)
    elif command == "search":
        search(people)
    elif command == 'q':
        break
    else:
        print("Invalid command.")

print(people)

