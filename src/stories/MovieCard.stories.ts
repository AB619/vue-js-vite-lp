import type { Meta, StoryObj } from '@storybook/vue3';
import MovieCard from './MovieCard.vue';

const meta = {
    title: 'Movie Card',
    component: MovieCard,
    tags: ['autodocs'],
} satisfies Meta<typeof MovieCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SpiderMan: Story = {
    args: {
        movie: {
            name: 'The Amazing Spiderman',
            genre: 'Action & Adventure',
            year: 2012,
            rating: 4.3,
            movieLength: 128,
            poster: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/BgcvtsVWLQfjHD6Dr3YYgeSLYk.jpg',
            description: 'Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents disappearance leading him directly to Oscorp and the lab of Dr. Curt Connors, his father former partner. As Spider-Man is set on a collision course with Connors alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.'
          }
    },
};

export const TheDarkKnight: Story = {
    args: {
        movie: {
            name: 'The Dark Knight',
            genre: 'Action & Crime Thriller',
            year: 2008,
            rating: 4.9,
            movieLength: 128,
            poster: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
            description: 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.'
          }
    },
};

export const ManOfSteel: Story = {
    args: {
        movie: {
            name: 'Man of Steel',
            genre: 'Action & Adventure',
            year: 2013,
            rating: 4.5,
            movieLength: 128,
            poster: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/dksTL9NXc3GqPBRHYHcy1aIwjS.jpg',
            description: 'A young boy learns that he has extraordinary powers and is not of this earth. As a young man, he journeys to discover where he came from and what he was sent here to do. But the hero in him must emerge if he is to save the world from annihilation and become the symbol of hope for all mankind.'
          }
    }
}