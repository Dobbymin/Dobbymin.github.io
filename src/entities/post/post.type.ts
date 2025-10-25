// 기본 게시글 정보
export type PostBase = {
  category: string;
  title: string;
  description: string;
  date: string;
  content: string;
  thumbnail?: string;
};

// 컨텐츠 섹션에 필요한 정보만
export type PostContent = Pick<PostBase, 'content'>;

// 헤더 섹션에 필요한 정보만
export type PostHeader = Pick<
  PostBase,
  'category' | 'title' | 'description' | 'date'
>;

// 메타데이터만 (content 제외)
export type PostMeta = Omit<PostBase, 'content'>;
