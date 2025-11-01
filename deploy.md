# How to Deploy Your Portfolio to Vercel

This guide provides step-by-step instructions for deploying your React portfolio website to [Vercel](https://vercel.com), a platform for hosting frontend applications.

## Prerequisites

1.  **Vercel Account:** If you don't have one, sign up for a free account at [vercel.com](https://vercel.com).
2.  **GitHub Account:** Your project code should be hosted on a GitHub repository.

## Deployment Steps

### Step 1: Push Your Project to GitHub

If you haven't already, make sure your local project folder is a Git repository and that you have pushed all the files to GitHub.

1.  **Initialize Git (if you haven't):**
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2.  **Create a new repository on GitHub.**

3.  **Link your local repository to the remote GitHub repository and push the code:**
    ```bash
    git remote add origin https://github.com/your-username/your-repo-name.git
    git branch -M main
    git push -u origin main
    ```

### Step 2: Import Your Project into Vercel

1.  Log in to your Vercel dashboard.
2.  Click the **"Add New..."** button and select **"Project"**.
3.  On the "Import Git Repository" screen, find the GitHub repository for your portfolio and click the **"Import"** button next to it.
    - You may need to grant Vercel access to your GitHub account or specific repositories if you haven't done so before.

### Step 3: Configure and Deploy

Vercel is excellent at auto-detecting frameworks. Since this project is configured with Vite, Vercel should recognize it immediately.

1.  **Choose Scope:** Select your personal account or a team if applicable.
2.  **Project Settings:**
    - **Project Name:** Vercel will use your repository name, but you can change it.
    - **Framework Preset:** This should automatically be set to **`Vite`**. If not, select it from the dropdown.
    - **Root Directory:** Keep this as `./`.
3.  **Build and Output Settings:** Vercel will automatically configure these based on the `Vite` preset. They should look like this:
    - **Build Command:** `vite build`
    - **Output Directory:** `dist`
    - **Install Command:** `npm install`
4.  **Environment Variables:** This project does not require any environment variables, so you can skip this section.
5.  Click the **"Deploy"** button.

### Step 4: All Done!

Vercel will now start the build process. It will install the dependencies, run the `npm run build` command, and deploy the contents of the `dist` folder.

Once the deployment is complete (usually in under a minute), you will see a congratulations screen with a preview of your live website. Vercel will provide you with a URL (e.g., `your-project-name.vercel.app`) where you can view your portfolio live on the web!
