const movies = [
    {
      "id": 1,
      "title": "The Shawshank Redemption",
      "rating": 9.3,
      "income": 58800000,
      "releaseYear": 1994,
      "duration": 142,
      "language": "English",
      "description": "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
      "genre": "Drama",
      "photoUrl": "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@.jpg"
    },
    {
      "id": 2,
      "title": "Inception",
      "rating": 8.8,
      "income": 836836967,
      "releaseYear": 2010,
      "duration": 148,
      "language": "English",
      "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      "genre": "SciFi",
      "photoUrl": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@.jpg"
    },
    {
      "id": 3,
      "title": "Spirited Away",
      "rating": 8.6,
      "income": 395802706,
      "releaseYear": 2001,
      "duration": 125,
      "language": "Japanese",
      "description": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts.",
      "genre": "Animation",
      "photoUrl": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@.jpg"
    },
    {
      "id": 4,
      "title": "Parasite",
      "rating": 8.5,
      "income": 258773645,
      "releaseYear": 2019,
      "duration": 132,
      "language": "Korean",
      "description": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      "genre": "Thriller",
      "photoUrl": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@.jpg"
    },
    {
      "id": 5,
      "title": "La La Land",
      "rating": 8.0,
      "income": 446092357,
      "releaseYear": 2016,
      "duration": 128,
      "language": "English",
      "description": "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
      "genre": "Musical",
      "photoUrl": "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@.jpg"
    },
    {
      "id": 6,
      "title": "The Dark Knight",
      "rating": 9.0,
      "income": 1004558444,
      "releaseYear": 2008,
      "duration": 152,
      "language": "English",
      "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      "genre": "Action",
      "photoUrl": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@.jpg"
    },
    {
      "id": 7,
      "title": "Amֳ©lie",
      "rating": 8.3,
      "income": 174118322,
      "releaseYear": 2001,
      "duration": 122,
      "language": "French",
      "description": "Amֳ©lie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
      "genre": "Romance",
      "photoUrl": "https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@.jpg"
    },
    {
      "id": 8,
      "title": "Get Out",
      "rating": 7.8,
      "income": 255407969,
      "releaseYear": 2017,
      "duration": 104,
      "language": "English",
      "description": "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
      "genre": "Horror",
      "photoUrl": "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@.jpg"
    },
    {
      "id": 9,
      "title": "Life Is Beautiful",
      "rating": 8.6,
      "income": 230098753,
      "releaseYear": 1997,
      "duration": 116,
      "language": "Italian",
      "description": "When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.",
      "genre": "Comedy",
      "photoUrl": "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@.jpg"
    },
    {
      "id": 10,
      "title": "The Grand Budapest Hotel",
      "rating": 8.1,
      "income": 173082178,
      "releaseYear": 2014,
      "duration": 99,
      "language": "English",
      "description": "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      "genre": "Comedy",
      "photoUrl": "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@.jpg"
    },
    {
        "id": 11,
        "title": "Whiplash",
        "rating": 8.5,
        "income": 49000000,
        "releaseYear": 2014,
        "duration": 106,
        "language": "English",
        "description": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
        "genre": "Drama",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@.jpg"
      },
      {
        "id": 12,
        "title": "Oldboy",
        "rating": 8.4,
        "income": 15000000,
        "releaseYear": 2003,
        "duration": 120,
        "language": "Korean",
        "description": "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.",
        "genre": "Mystery",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@.jpg"
      },
      {
        "id": 13,
        "title": "Your Name",
        "rating": 8.4,
        "income": 357986087,
        "releaseYear": 2016,
        "duration": 106,
        "language": "Japanese",
        "description": "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
        "genre": "Animation",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@.jpg"
      },

      {
        "id": 15,
        "title": "Pan's Labyrinth",
        "rating": 8.2,
        "income": 83258226,
        "releaseYear": 2006,
        "duration": 118,
        "language": "Spanish",
        "description": "In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
        "genre": "Fantasy",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BNzJlMjI2NjEtY2FmNy00ZTE0LWJjYWEtZDg0YmY1ZDBlNmEyXkEyXkFqcGdeQXVyOTI5NTk5NTQ@.jpg"
      },
      {
        "id": 16,
        "title": "Train to Busan",
        "rating": 7.6,
        "income": 98500000,
        "releaseYear": 2016,
        "duration": 118,
        "language": "Korean",
        "description": "While a zombie virus breaks out in South Korea, passengers struggle to survive on the train from Seoul to Busan.",
        "genre": "Horror",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BMTkwOTQ4OTg0OV5BMl5BanBnXkFtZTgwMzQyOTM0OTE@.jpg"
      },
      {
        "id": 17,
        "title": "Cinema Paradiso",
        "rating": 8.5,
        "income": 12000000,
        "releaseYear": 1988,
        "duration": 155,
        "language": "Italian",
        "description": "A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema's projectionist.",
        "genre": "Drama",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@.jpg"
      },
      {
        "id": 18,
        "title": "Crouching Tiger, Hidden Dragon",
        "rating": 7.9,
        "income": 213525736,
        "releaseYear": 2000,
        "duration": 120,
        "language": "Mandarin",
        "description": "A young Chinese warrior steals a sword from a famed swordsman and then escapes into a world of romantic adventure with a mysterious man in the frontier of the nation.",
        "genre": "Fantasy",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BNDdhMzMxOTctNDMyNS00NTZmLTljNWEtNTc4MDBmZTYxY2NmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@.jpg"
      },
      {
        "id": 19,
        "title": "The Lives of Others",
        "rating": 8.4,
        "income": 77356942,
        "releaseYear": 2006,
        "duration": 137,
        "language": "German",
        "description": "In 1984 East Berlin, an agent of the secret police, conducting surveillance on a writer and his lover, finds himself becoming increasingly absorbed by their lives.",
        "genre": "Thriller",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BNmQyNmJjM2ItNTQzYi00ZjMxLWFjMDYtZjUyN2YwZDk5YWQ2XkEyXkFqcGdeQXVyMjUzOTY1NTc@.jpg"
      },
      
    {
        "id": 21,
        "title": "Everything Everywhere All at Once",
        "rating": 7.9,
        "income": 140795978,
        "releaseYear": 2022,
        "duration": 139,
        "language": "English",
        "description": "An aging Chinese immigrant is swept up in an insane adventure, in which she alone can save the world by exploring other universes connecting with the lives she could have led.",
        "genre": "SciFi",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_.jpg"
      },
      {
        "id": 22,
        "title": "The Hunt",
        "rating": 8.3,
        "income": 15800000,
        "releaseYear": 2012,
        "duration": 115,
        "language": "Danish",
        "description": "A teacher lives a lonely life, all the while struggling over his son's custody. His life slowly gets better as he finds love and receives good news from his son, but his new luck is about to be brutally shattered by an innocent little lie.",
        "genre": "Drama",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@.jpg"
      },
      {
        "id": 23,
        "title": "A Silent Voice",
        "rating": 8.1,
        "income": 33000000,
        "releaseYear": 2016,
        "duration": 130,
        "language": "Japanese",
        "description": "A young man is ostracized by his classmates after he bullies a deaf girl to the point where she moves away. Years later, he sets off on a path for redemption.",
        "genre": "Animation",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BZGRkOGMxYTUtZTBhYS00NzI3LWEzMDQtOWRhMmNjNjJjMzM4XkEyXkFqcGdeQXVyMTMxODk2OTU@.jpg"
      },
      {
        "id": 24,
        "title": "The Secret in Their Eyes",
        "rating": 8.2,
        "income": 35000000,
        "releaseYear": 2009,
        "duration": 129,
        "language": "Spanish",
        "description": "A retired legal counselor writes a novel hoping to find closure for one of his past unresolved homicide cases and for his unreciprocated love with his superior - both of which still haunt him decades later.",
        "genre": "Mystery",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BY2FhZGI5M2QtZWFiZS00NjkwLWE4NWQtMzg3ZDZjNjdkYTJiXkEyXkFqcGdeQXVyMTMxODk2OTU@.jpg"
      },
      {
        "id": 25,
        "title": "Persepolis",
        "rating": 8.0,
        "income": 22809793,
        "releaseYear": 2007,
        "duration": 96,
        "language": "French",
        "description": "A precocious and outspoken Iranian girl grows up during the Islamic Revolution.",
        "genre": "Animation",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BMGRkZThmYzEtYjQxZC00OWEzLThjYjAtYzFkMjY0NGZkZWI4XkEyXkFqcGdeQXVyNTAyODkwOQ@@.jpg"
      },

      {
        "id": 27,
        "title": "The Handmaiden",
        "rating": 8.1,
        "income": 38000000,
        "releaseYear": 2016,
        "duration": 145,
        "language": "Korean",
        "description": "A woman is hired as a handmaiden to a Japanese heiress, but secretly she is involved in a plot to defraud her.",
        "genre": "Romance",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BNDJhYTk2MTctZmVmOS00OTViLTgxNjQtMzQxOTRiMDdmNGRjXkEyXkFqcGdeQXVyMTMxODk2OTU@.jpg"
      },
      {
        "id": 28,
        "title": "Hero",
        "rating": 7.9,
        "income": 177394432,
        "releaseYear": 2002,
        "duration": 120,
        "language": "Mandarin",
        "description": "A defense officer, Nameless, was summoned by the King of Qin regarding his success of terminating three warriors.",
        "genre": "Action",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BMWQ2MjQ0OTctMWE1OC00NjZjLTk3ZDAtNTk3NTZiYWMxYTlmXkEyXkFqcGdeQXVyMTQxNzMzNDI@.jpg"
      },
      {
        "id": 29,
        "title": "Wild Tales",
        "rating": 8.1,
        "income": 30640658,
        "releaseYear": 2014,
        "duration": 122,
        "language": "Spanish",
        "description": "Six short stories that explore the extremities of human behavior involving people in distress.",
        "genre": "Comedy",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BNGQzY2Y0MTgtMDA4OC00NjM3LWI0ZGQtNTJlM2UxZDQxZjI0XkEyXkFqcGdeQXVyNDUzOTQ5MjY@.jpg"
      },

    {
        "id": 31,
        "title": "The Green Mile",
        "rating": 8.6,
        "income": 286801374,
        "releaseYear": 1999,
        "duration": 189,
        "language": "English",
        "description": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
        "genre": "Drama",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_.jpg"
      },
      {
        "id": 32,
        "title": "Eternal Sunshine of the Spotless Mind",
        "rating": 8.3,
        "income": 72258126,
        "releaseYear": 2004,
        "duration": 108,
        "language": "English",
        "description": "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
        "genre": "SciFi",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@.jpg"
      },
      {
        "id": 33,
        "title": "Oppenheimer",
        "rating": 8.4,
        "income": 950000000,
        "releaseYear": 2023,
        "duration": 180,
        "language": "English",
        "description": "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
        "genre": "Biography",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@.jpg"
      },
      {
        "id": 34,
        "title": "The Thing",
        "rating": 8.2,
        "income": 19629760,
        "releaseYear": 1982,
        "duration": 109,
        "language": "English",
        "description": "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
        "genre": "Horror",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@.jpg"
      },
      {
        "id": 35,
        "title": "Dead Poets Society",
        "rating": 8.1,
        "income": 235860116,
        "releaseYear": 1989,
        "duration": 128,
        "language": "English",
        "description": "An English teacher inspires his students to look at poetry with a different perspective of authentic knowledge and feelings.",
        "genre": "Drama",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BOGYwYWNjMzgtNGU4ZC00NWQ2LWEwZjUtMzE1Zjc3NjY3YTU1XkEyXkFqcGdeQXVyMTQxNzMzNDI@.jpg"
      },
      {
        "id": 36,
        "title": "Back to the Future",
        "rating": 8.5,
        "income": 388355305,
        "releaseYear": 1985,
        "duration": 116,
        "language": "English",
        "description": "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
        "genre": "Adventure",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@.jpg"
      },
      {
        "id": 37,
        "title": "The Truman Show",
        "rating": 8.2,
        "income": 264118201,
        "releaseYear": 1998,
        "duration": 103,
        "language": "English",
        "description": "An insurance salesman discovers his whole life is actually a reality TV show.",
        "genre": "Comedy",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@.jpg"
      },
      {
        "id": 38,
        "title": "Blade Runner 2049",
        "rating": 8.0,
        "income": 259239658,
        "releaseYear": 2017,
        "duration": 164,
        "language": "English",
        "description": "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
        "genre": "SciFi",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@.jpg"
      },
      {
        "id": 39,
        "title": "The Grand Budapest Hotel",
        "rating": 8.1,
        "income": 172936941,
        "releaseYear": 2014,
        "duration": 99,
        "language": "English",
        "description": "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
        "genre": "Comedy",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@.jpg"
      },
      {
        "id": 40,
        "title": "No Country for Old Men",
        "rating": 8.2,
        "income": 171627166,
        "releaseYear": 2007,
        "duration": 122,
        "language": "English",
        "description": "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
        "genre": "Thriller",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@.jpg"
      },

      {
        "id": 41,
        "title": "Interstellar",
        "rating": 8.7,
        "income": 701729206,
        "releaseYear": 2014,
        "duration": 169,
        "language": "English",
        "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "genre": "SciFi",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@.jpg"
      },
      {
        "id": 42,
        "title": "The Godfather",
        "rating": 9.2,
        "income": 245066411,
        "releaseYear": 1972,
        "duration": 175,
        "language": "English",
        "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        "genre": "Crime",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@.jpg"
      },
      {
        "id": 43,
        "title": "A Beautiful Mind",
        "rating": 8.2,
        "income": 313542341,
        "releaseYear": 2001,
        "duration": 135,
        "language": "English",
        "description": "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
        "genre": "Biography",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@.jpg"
      },
      {
        "id": 44,
        "title": "Mad Max: Fury Road",
        "rating": 8.1,
        "income": 374736354,
        "releaseYear": 2015,
        "duration": 120,
        "language": "English",
        "description": "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        "genre": "Action",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@.jpg"
      },
      {
        "id": 45,
        "title": "The Social Network",
        "rating": 7.8,
        "income": 224920315,
        "releaseYear": 2010,
        "duration": 120,
        "language": "English",
        "description": "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.",
        "genre": "Drama",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@.jpg"
      },
      {
        "id": 46,
        "title": "The Silence of the Lambs",
        "rating": 8.6,
        "income": 272742922,
        "releaseYear": 1991,
        "duration": 118,
        "language": "English",
        "description": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        "genre": "Thriller",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@.jpg"
      },
      {
        "id": 47,
        "title": "Barbie",
        "rating": 7.0,
        "income": 1441805000,
        "releaseYear": 2023,
        "duration": 114,
        "language": "English",
        "description": "Barbie suffers a crisis that leads her to question her world and her existence.",
        "genre": "Comedy",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BOWIwZGY0OTYtZjUzYy00NzRmLTg5YzgtYWMzNWQ0MmZiY2MwXkEyXkFqcGdeQXVyMTUzMTg2ODkz.jpg"
      },
      {
        "id": 48,
        "title": "The Shining",
        "rating": 8.4,
        "income": 44017374,
        "releaseYear": 1980,
        "duration": 146,
        "language": "English",
        "description": "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
        "genre": "Horror",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@.jpg"
      },
      {
        "id": 49,
        "title": "The Princess Bride",
        "rating": 8.0,
        "income": 30857814,
        "releaseYear": 1987,
        "duration": 98,
        "language": "English",
        "description": "While home sick in bed, a young boy's grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles, enemies and allies in his quest to be reunited with his true love.",
        "genre": "Fantasy",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BMGM4M2Q5N2MtNThkZS00NTc1LTk1NTItNWEyZjJjNDRmNDk5XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@.jpg"
      },
      {
        "id": 50,
        "title": "Good Will Hunting",
        "rating": 8.3,
        "income": 225933435,
        "releaseYear": 1997,
        "duration": 126,
        "language": "English",
        "description": "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
        "genre": "Drama",
        "photoUrl": "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@.jpg"
      }


]