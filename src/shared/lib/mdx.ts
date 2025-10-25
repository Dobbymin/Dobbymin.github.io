import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { MDXPost, MDXPostMeta } from '../types';

const postsDirectory = path.join(process.cwd(), 'src/features/post/contents');
const SUPPORTED_EXTENSIONS = ['.md', '.mdx'] as const;

// 모든 게시글 메타데이터 가져오기
export function getAllPosts(): MDXPostMeta[] {
  // 디렉토리가 없으면 빈 배열 반환
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((fileName) =>
      SUPPORTED_EXTENSIONS.some((ext) => fileName.endsWith(ext)),
    )
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // gray-matter로 frontmatter 파싱
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title || '제목 없음',
        category: matterResult.data.category || '기타',
        date: matterResult.data.date || new Date().toISOString().split('T')[0],
        description: matterResult.data.description || '',
        thumbnail: matterResult.data.thumbnail,
      };
    });

  // 날짜 기준 내림차순 정렬
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// 특정 게시글 가져오기 (content 포함)
export function getPost(slug: string): MDXPost | null {
  try {
    let fileContents: string | null = null;

    // 지원하는 확장자를 순회하며 파일 찾기
    for (const ext of SUPPORTED_EXTENSIONS) {
      const fullPath = path.join(postsDirectory, `${slug}${ext}`);
      if (fs.existsSync(fullPath)) {
        fileContents = fs.readFileSync(fullPath, 'utf8');
        break;
      }
    }

    // 파일을 찾지 못한 경우
    if (!fileContents) {
      return null;
    }

    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title || '제목 없음',
      category: matterResult.data.category || '기타',
      date: matterResult.data.date || new Date().toISOString().split('T')[0],
      description: matterResult.data.description || '',
      thumbnail: matterResult.data.thumbnail,
      content: matterResult.content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

// 모든 게시글의 slug 가져오기 (정적 생성용)
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((fileName) =>
      SUPPORTED_EXTENSIONS.some((ext) => fileName.endsWith(ext)),
    )
    .map((fileName) => fileName.replace(/\.mdx?$/, ''));
}
