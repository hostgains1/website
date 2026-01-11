# Blog Content Management

## Adding New Articles

To add a new blog article, add a new entry to the `blogPosts` array in `/data/blogPosts.ts`.

### Article Template

```typescript
{
  slug: 'url-friendly-slug',  // Auto-generated from title or custom
  title: 'Article Title',
  description: 'SEO description for search results (max 160 characters)',
  excerpt: 'Short excerpt shown on blog cards',
  content: `
    <p class="text-lg text-gray-600 mb-8 leading-relaxed">Lead paragraph...</p>

    <h2 id="section-id">Section Title</h2>
    <p>Section content...</p>

    <h3 id="subsection-id">Subsection Title</h3>
    <p>Subsection content...</p>

    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>List item 1</li>
      <li>List item 2</li>
    </ul>
  `,
  author: {
    name: 'Author Name',
    role: 'Job Title',
    avatar: '/team/avatar.jpg',  // Optional
  },
  publishedAt: '2025-01-15',  // Format: YYYY-MM-DD
  updatedAt: '2025-01-20',    // Optional
  category: 'Category Name',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  featuredImage: 'https://images.unsplash.com/...',
  featuredImageAlt: 'Image description for accessibility',
  readingTime: 5,  // Minutes
  tableOfContents: [
    { id: 'section-id', text: 'Section Title', level: 2 },
    { id: 'subsection-id', text: 'Subsection Title', level: 3 },
  ],
}
```

### HTML Formatting Guide

#### Headings
- Use `<h2 id="unique-id">` for main sections
- Use `<h3 id="unique-id">` for subsections
- Always include `id` attribute for table of contents

#### Paragraphs
```html
<p>Regular paragraph text...</p>
<p class="text-lg text-gray-600 mb-8 leading-relaxed">Lead paragraph (first paragraph of article)</p>
```

#### Lists
```html
<!-- Unordered list -->
<ul class="list-disc pl-6 mb-6 space-y-2">
  <li>Item 1</li>
  <li><strong>Bold item:</strong> With description</li>
</ul>

<!-- Ordered list -->
<ol class="list-decimal pl-6 mb-6 space-y-2">
  <li>Step 1</li>
  <li>Step 2</li>
</ol>
```

#### Blockquotes
```html
<blockquote class="border-l-4 border-hostgains pl-4 italic mb-6">
  "Quote text here..."
</blockquote>
```

#### Tables
```html
<table class="w-full mb-6 border-collapse">
  <thead>
    <tr class="bg-sand">
      <th class="p-3 text-left border border-sand-dark">Header 1</th>
      <th class="p-3 text-left border border-sand-dark">Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="p-3 border border-sand-dark">Cell 1</td>
      <td class="p-3 border border-sand-dark">Cell 2</td>
    </tr>
    <tr class="bg-sand-light">
      <td class="p-3 border border-sand-dark">Cell 3</td>
      <td class="p-3 border border-sand-dark">Cell 4</td>
    </tr>
  </tbody>
</table>
```

### Categories

Current categories:
- Kurzzeitvermietung
- Tipps & Tricks
- Preisgestaltung
- Gästebetreuung
- Einrichtung

### Image Guidelines

- Featured images: 1200x630px or 16:9 aspect ratio
- Use Unsplash or royalty-free images
- Always include descriptive alt text
- Optimize images before uploading

### SEO Best Practices

1. **Title**: 50-60 characters, include main keyword
2. **Description**: 120-160 characters, compelling summary
3. **Slug**: URL-friendly, 3-5 words, include keyword
4. **Headings**: Natural hierarchy (H2 > H3), include keywords
5. **Content**: Minimum 1000 words for ranking

### After Adding an Article

1. Update `/public/sitemap.xml` with new article URL
2. Test locally with `npm run dev`
3. Build and deploy: `npm run build`
