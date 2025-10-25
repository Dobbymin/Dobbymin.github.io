// 카테고리별 색상 매핑
export const getCategoryColor = (category: string): string => {
  switch (category.toLowerCase()) {
    case 'develop':
      return 'text-blog-blue';
    case 'daily':
      return 'text-blog-pink';
    case 'review':
      return 'text-blog-purple';
    default:
      return 'text-blog-green';
  }
};

// 썸네일 폴백 색상 배열
const FALLBACK_COLORS = [
  'bg-blog-blue',
  'bg-blog-pink',
  'bg-blog-purple',
  'bg-blog-green',
  'bg-blog-yellow',
] as const;

// slug를 기반으로 일관된 배경 색상 생성
export const getRandomBgColor = (slug: string): string => {
  // slug를 숫자로 변환하여 일관된 색상 선택
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % FALLBACK_COLORS.length;
  return FALLBACK_COLORS[index];
};
