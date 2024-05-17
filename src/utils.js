import { onUnmounted, ref, computed } from 'vue';

export const lazyloadDirective = {
  mounted(el, binding) {
    const imageUrl = binding.value;
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
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

export function useSearch(initialMovies) {
  const searchQuery = ref('');
  const filteredMovies = ref(initialMovies);

  const setSearchQuery = query => {
    searchQuery.value = query.trim().toLowerCase();
  };

  const searchMovies = () => {
    filteredMovies.value = initialMovies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.value)
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
    setSearchQuery,
    searchedMovies,
    searchMovies
  };
}
