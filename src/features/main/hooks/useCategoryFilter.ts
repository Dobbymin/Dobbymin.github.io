import { useMemo, useState } from 'react';

import { MDXPostMeta } from '@/shared/types';

export const useCategoryFilter = (posts: MDXPostMeta[]) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    return selectedCategory
      ? posts.filter((post) => post.category === selectedCategory)
      : posts;
  }, [posts, selectedCategory]);

  return {
    selectedCategory,
    filteredPosts,
    setSelectedCategory,
  };
};
