import { PostBase } from '@/entities';

// MDX 게시글 전체 정보 (slug 추가)
export type MDXPost = PostBase & {
  slug: string; // 파일명 기반 URL
};

// MDX 게시글 메타데이터 (content 제외)
export type MDXPostMeta = Omit<MDXPost, 'content'>;
