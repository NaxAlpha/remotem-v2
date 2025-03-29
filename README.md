# Movid.pro Base Project

A foundation project for creating programmatic videos using Remotion and React.

## 🚀 Features

- Built with Remotion v4.0
- React 19.0 integration
- Tailwind CSS v4 styling
- TypeScript support
- Zod schema validation for props
- Preconfigured video settings (1920x1080, 30fps)

## 📋 Prerequisites

- Node.js (latest LTS version recommended)
- pnpm package manager

## 🛠️ Installation

Clone the repository and install dependencies:

```bash
# Install dependencies
pnpm install
```

## 💻 Development

Start the Remotion Studio for development:

```bash
pnpm dev
```

This will open Remotion Studio in your browser where you can preview and interact with your compositions.

## 🎬 Project Structure

- `src/HelloWorld.tsx` - Example component with Tailwind styling
- `src/Root.tsx` - Main composition setup
- `src/index.ts` - Entry point that registers the root component
- `remotion.config.ts` - Remotion configuration including Tailwind setup

## 🔧 Available Scripts

- `pnpm dev` - Start Remotion Studio for development
- `pnpm build` - Bundle the project for production
- `pnpm upgrade` - Upgrade Remotion packages
- `pnpm lint` - Run ESLint and TypeScript type checking
- `pnpm render-images` - Render still images using custom script
- `pnpm render-video` - Render video using Remotion renderer

## 🎨 Customization

Edit the `HelloWorld.tsx` component to create your own videos. Customize the props schema using Zod to create type-safe compositions.

```tsx
// Example of customizing the schema
export const myCompSchema = z.object({
  titleText: z.string(),
  backgroundColor: z.string().optional().default("#ffffff"),
  // Add more properties as needed
});
```

## 📝 Configuration

The project is configured with:
- JPEG image format for video frames
- Tailwind CSS support
- Automatic output overwriting

Adjust the configuration in `remotion.config.ts` as needed for your project.

## 📚 Learn More

- [Remotion Documentation](https://www.remotion.dev/docs/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Zod Documentation](https://zod.dev/)

## 📄 License

This project is licensed under the UNLICENSED license.
