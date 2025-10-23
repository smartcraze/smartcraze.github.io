# Projects Directory

This directory contains JSON files for all your projects. Each JSON file represents one project.

## How to Add a New Project

1. Create a new JSON file in this directory (e.g., `my-awesome-project.json`)
2. Use this template:

```json
{
  "title": "Your Project Name",
  "description": "A brief description of what your project does and why it's useful.",
  "tech": ["Technology1", "Technology2", "Technology3"],
  "github": "https://github.com/smartcraze/your-repo",
  "live": "https://your-demo-url.com",
  "featured": true
}
```

## Field Descriptions

- **title**: Name of your project (required)
- **description**: Brief explanation of the project (required)
- **tech**: Array of technologies used (required)
- **github**: GitHub repository URL (optional - leave empty string "" if none)
- **live**: Live demo URL (optional - leave empty string "" if none)
- **featured**: Set to `true` to show on homepage (optional)

## Example

```json
{
  "title": "Blog API",
  "description": "RESTful API for a blogging platform with authentication, CRUD operations, and pagination.",
  "tech": ["Node.js", "Express", "MongoDB", "JWT"],
  "github": "https://github.com/smartcraze/blog-api",
  "live": "",
  "featured": true
}
```

## After Adding Projects

Run the build command to regenerate your site:

```bash
npm run build
```

Then preview locally:

```bash
npm run dev
```

Or deploy to GitHub Pages:

```bash
npm run deploy
```
