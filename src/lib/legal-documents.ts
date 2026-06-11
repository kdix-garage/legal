import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

type DocumentFrontmatter = {
  title?: string;
  description?: string;
  emoji?: string;
  updatedAt?: string;
};

type MarkdownModule = {
  default: AstroComponentFactory;
  frontmatter: DocumentFrontmatter;
};

export type LegalDocument = {
  slug: string;
  path: `/${string}`;
  sourcePath: string;
  title: string;
  description: string;
  emoji: string;
  updatedAt: string;
  historyUrl: string;
  Content: AstroComponentFactory;
};

const repositoryUrl = 'https://github.com/kdix-garage/legal';

const modules = import.meta.glob<MarkdownModule>('../../docs/*.md', { eager: true });

export const legalDocuments = Object.entries(modules)
  .map(([modulePath, module]) => {
    const filename = modulePath.split('/').at(-1) ?? '';
    const slug = filename.replace(/\.md$/, '');
    const sourcePath = `docs/${filename}`;

    return {
      slug,
      path: `/${slug}` as const,
      sourcePath,
      title: module.frontmatter.title ?? slug,
      description: module.frontmatter.description ?? '',
      emoji: module.frontmatter.emoji ?? '📄',
      updatedAt: module.frontmatter.updatedAt ?? '未設定',
      historyUrl: `${repositoryUrl}/commits/main/${sourcePath}`,
      Content: module.default,
    } satisfies LegalDocument;
  })
  .sort((a, b) => a.path.localeCompare(b.path));

export function getLegalDocument(slug: string) {
  return legalDocuments.find((document) => document.slug === slug);
}
