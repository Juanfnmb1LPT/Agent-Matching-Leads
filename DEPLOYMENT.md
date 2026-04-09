# Deployment Setup Guide

## GitHub Pages Auto-Deployment

This project is configured to automatically deploy to GitHub Pages whenever you push to the `main` branch.

### Initial Setup (One-time)

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to **Settings** > **Pages**
   - Under "Build and deployment":
     - Select **"GitHub Actions"** as the Source
   - Save the settings

2. **GitHub Actions will:**
   - Run on every push to `main`
   - Install dependencies (`npm ci`)
   - Build the project (`npm run build`)
   - Deploy the `dist/` folder to GitHub Pages

### Workflow File

The deployment workflow is configured in `.github/workflows/deploy.yml`

**What it does:**
- Triggers on: `push` to `main` branch
- Runs on: Ubuntu latest environment
- Installs Node.js 18 with npm cache
- Builds the React app with Vite
- Deploys to GitHub Pages

### Base Path Configuration

The Vite config is set with `base: '/Agent-Matching-Leads/'` to correctly serve assets from the repository subpath on GitHub Pages.

### Deployment URL

Once deployed, your site will be available at:
```
https://[your-username].github.io/Agent-Matching-Leads/
```

### Manual Trigger (Optional)

You can manually trigger the workflow from:
- GitHub Actions tab > Select "Deploy to GitHub Pages" > "Run workflow"

### Troubleshooting

**Build fails?**
- Check the GitHub Actions logs in the "Actions" tab
- Verify `npm run build` works locally: `npm run build`

**Site not updating?**
- Ensure you're pushing to the `main` branch
- Check that GitHub Pages is enabled in Settings > Pages
- Clear your browser cache

**Assets not loading?**
- Verify the base path in `vite.config.ts` matches your repository name
