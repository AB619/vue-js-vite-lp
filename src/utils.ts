import { ref, computed } from 'vue';
import { IMockMovie } from './mockedData/mockedData';

export const lazyloadDirective = {
  mounted(el: Element, binding: any) {
    const imageUrl = binding.value;
    const handleIntersection = (entries: { isIntersecting: any; target: any; }[], observer: { unobserve: (arg0: any) => void; }) => {
      entries.forEach((entry: { isIntersecting: any; target: any; }) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = imageUrl;
          observer.unobserve(lazyImage);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(el);
  }
};

export function useSearch(initialMovies: IMockMovie[]) {
  const searchQuery = ref('');
  const filteredMovies = ref(initialMovies);
  const filterParam = ref('title');

  const setSearchQuery = (query: string) => {
    searchQuery.value = query.trim().toLowerCase();
  };

  const setFilterParam = (param: string) => {
    filterParam.value = param.trim().toLowerCase();
  }

  const searchMovies = () => {
    filteredMovies.value = initialMovies.filter(movie =>
      movie[filterParam.value].toString().toLowerCase().includes(searchQuery.value)
    );
  };

  const searchedMovies = computed(() => {
    if (!searchQuery.value) {
      return initialMovies;
    } else {
      return filteredMovies.value;
    }
  });

  return {
    searchQuery,
    filterParam,
    setSearchQuery,
    setFilterParam,
    searchedMovies,
    searchMovies
  };
}
