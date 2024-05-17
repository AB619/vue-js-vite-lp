export interface IMockMovie {
  name: string;
  genre: string;
  year: number;
  rating: number;
  movieLength: number;
  poster: string;
  description: string;
}

export const mockMoviesList: IMockMovie[] = [
    {
      name: 'The Amazing Spiderman',
      genre: 'Action & Adventure',
      year: 2011,
      rating: 4.3,
      movieLength: 128,
      poster:
        'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/BgcvtsVWLQfjHD6Dr3YYgeSLYk.jpg',
      description:
        'Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents disappearance leading him directly to Oscorp and the lab of Dr. Curt Connors, his father former partner. As Spider-Man is set on a collision course with Connors alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.',
    },
    {
      name: 'The Dark Knight',
      genre: 'Mystery & Crime Thriller',
      year: 2009,
      rating: 4.9,
      movieLength: 128,
      poster:
        'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      description:
        'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
    },
    {
      name: 'One Piece',
      genre: 'Comedy & Animation',
      year: 2008,
      rating: 4.8,
      movieLength: 128,
      poster:
        'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg',
      description:
        'Years ago, the fearsome Pirate King, Gol D. Roger was executed leaving a huge pile of treasure and the famous "One Piece" behind. Whoever claims the "One Piece" will be named the new King of the Pirates. Monkey D. Luffy, a boy who consumed a Devil Fruit, decides to follow in the footsteps of his idol, the pirate Shanks, and find the One Piece. It helps, of course, that his body has the properties of rubber and that he is surrounded by a bevy of skilled fighters and thieves to help him along the way. Luffy will do anything to get the One Piece and become King of the Pirates!',
    },
    {
      name: 'The Idea of You',
      genre: 'Romance & Comedy',
      year: 2014,
      rating: 4.5,
      movieLength: 128,
      poster:
        'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/zDi2U7WYkdIoGYHcYbM9X5yReVD.jpg',
      description:
        'Solène, a 40-year-old single mom, begins an unexpected romance with 24-year-old Hayes Campbell, the lead singer of August Moon, the hottest boy band on the planet. When Solène must step in to chaperone her teenage daughters trip to the Coachella Music Festival after her ex bails at the last minute, she has a chance encounter with Hayes and there is an instant, undeniable spark. As they begin a whirlwind romance, it isnt long before Hayes superstar status poses unavoidable challenges to their relationship, and Solène soon discovers that life in the glare of his spotlight might be more than she bargained for.',
    },
    {
      name: 'Man of Steel',
      genre: 'Action & Adventure',
      year: 2013,
      rating: 4.6,
      movieLength: 128,
      poster:
        'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/dksTL9NXc3GqPBRHYHcy1aIwjS.jpg',
      description:
        'A young boy learns that he has extraordinary powers and is not of this earth. As a young man, he journeys to discover where he came from and what he was sent here to do. But the hero in him must emerge if he is to save the world from annihilation and become the symbol of hope for all mankind.',
    },
    {
      name: 'Dune',
      genre: 'Science Fiction & Mythic',
      year: 2024,
      rating: 4.2,
      movieLength: 128,
      poster:
        'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/gho58bYmw9juYXmUSHRJKOngJGn.jpg',
      description:
        'Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.',
    },
]