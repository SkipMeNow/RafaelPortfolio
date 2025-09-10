# ⚡️ Portfolio Frontend — Built with React, TypeScript & Motion

This is a modular, scalable frontend portfolio built with React, TypeScript, and Framer Motion. It showcases expressive UI components, animated page transitions, and a clean layout system designed for future-proofing and growth.

---

## 🚀 Features

- **Modular Layouts** — Shared `MainLayout` with ambient background, responsive navbar, and route outlet
- **Animated Routing** — Smooth page transitions using `AnimatePresence` and `AnimatedPage` wrappers
- **Centralized Config** — Unified `routes.config.tsx` for navigation links and route definitions
- **Responsive Design** — Mobile-friendly layout with scalable spacing and typography tokens
- **Custom Icons** — Language and tool icons mapped via `programmingLanguagesIcon.ts`
- **Design Tokens** — CSS variables for spacing, colors, and sizing to support theming
- **Error Boundaries** — Graceful fallback UI for rendering errors
- **Consistent Naming** — Uses `.component.tsx`, `.types.ts`, and `.module.css` for clarity and scalability

---

## ⚙️ Functionality

### 1. Animated Routing

Routes are defined in `routes.config.tsx` and rendered via React Router v6.  
Each page is wrapped in `AnimatedPage` for smooth transitions using Framer Motion.  
`MainLayout` provides shared UI framing, ambient background, and consistent layout structure.

### 2. Centralized Navigation

Navigation links and route definitions are unified in `routes.config.tsx`.  
`Navbar.component.tsx` dynamically renders links and includes a theme toggle for user preference.

### 3. Error Handling

`ErrorBoundary.component.tsx` catches rendering errors and displays fallback UI.  
Prevents full app crashes and improves resilience across routed views.

### 4. Icon Mapping

`programmingLanguagesIcon.ts` maps tech/tool names to their respective image assets.  
Used in experience and skill components for visual clarity and semantic styling.

### 5. Responsive Layout

`MainLayout.module.css` handles layout padding, max-width, and mobile responsiveness.  
CSS variables (`--spacing`, `--font-size`, etc.) support design token theming and future scalability.

### 6. Consistent File Structure

Components follow a clear naming convention:

- `.component.tsx` for UI logic and markup
- `.types.ts` for prop interfaces and shared types
- `.module.css` for scoped styling  
  This promotes maintainability, readability, and modular growth.

---

## 🧱 Tech Stack

| Tool               | Purpose                         |
| ------------------ | ------------------------------- |
| React + TypeScript | Core UI and type safety         |
| React Router       | Declarative routing             |
| Framer Motion      | Page transitions and animations |
| CSS Modules        | Scoped styling per component    |
| @fontsource/roboto | Typography without external CDN |

---

## 🚀 Deployment

This project was built with Netlify in mind as the primary deployment platform. **Netlif** supports client-side routing and custom redirects out of the box, making it ideal for React applications with dynamic navigation.

> ⚠️ **Note:** GitHub Pages was not the intended deployment target for this project. While it may be possible to adapt the setup, the current architecture was optimized for Netlify.

The live version hosted on **Netlify** reflects an earlier build due to exceeding the credit limit on the account. Some newer features or refinements may not be visible in that deployment.

Visit the [live Netlify site](https://rafaelambriz.netlify.app/) to see the deployed version.
