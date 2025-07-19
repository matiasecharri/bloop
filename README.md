# 🧠 Naming Conventions – Simple Smart Beauty

This guide outlines the naming conventions and folder structure for the SSB (Simple Smart Beauty) project, based on industry best practices, Next.js architecture, and Vercel recommendations.

Maintaining consistency helps ensure clarity, scalability, and easier collaboration.

---

## 📁 Folder Naming

| Folder Type             | Convention     | Example                       |
|-------------------------|----------------|-------------------------------|
| Route folders (app dir) | `kebab-case`   | `/app/about-us/page.tsx`     |
| Feature folders         | `kebab-case`   | `/features/user-profile`     |
| Shared folders          | `kebab-case`   | `/shared/components`         |
| Dynamic routes          | `[brackets]`   | `/blog/[slug]/page.tsx`      |
| Internal-only folders   | `_underscore`  | `/_lib`, `/_components`       |

**Why `kebab-case`?**
- URL-safe and OS-friendly (no case-sensitivity issues)
- Consistent with Next.js routing behavior
- Easier to scan and autocomplete

---

## 📄 File Naming

| Type                    | Convention                  | Example                         |
|-------------------------|-----------------------------|----------------------------------|
| Pages (Next.js)         | `page.tsx`                  | `/app/about/page.tsx`           |
| Layouts, loaders, etc.  | `layout.tsx`, `loading.tsx` | `/app/layout.tsx`               |
| Components              | `PascalCase.tsx`            | `UserProfile.tsx`               |
| CSS Modules             | `PascalCase.module.scss`    | `UserProfile.module.scss`       |
| Component models        | `PascalCase.models.ts`      | `UserProfile.models.ts`         |
| Shared types/interfaces | `kebab-case.types.ts`       | `api-response.types.ts`         |
| Utility functions       | `kebab-case.ts`             | `format-date.ts`                |
| Custom hooks            | `camelCase.ts`              | `useProductFilter.ts`           |

---

## 🧱 Shared Atomic Design

```bash
/shared
  /components
    /atoms        # Basic, indivisible components
      Button.tsx
      Input.tsx
      Icon.tsx
      LenisProvider.tsx
    /molecules    # Simple combinations of atoms
      SearchInput.tsx
      NavLink.tsx
    /organisms    # Complete sections combining molecules and atoms
      Header.tsx
      Footer.tsx
      Modal.tsx
    /templates    # Layouts or page structures
      MainLayout.tsx
  /hooks          # Reusable hooks
    useDebounce.ts
    useWindowSize.ts
  /utils          # Utility functions and helpers
    formatDate.ts
    apiClient.ts
  /styles         # Global styles or CSS/SCSS variables
    variables.scss
  /types          # Shared types and interfaces
    shared.types.ts