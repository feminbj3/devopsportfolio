# Femin B J — Portfolio Website

A dark, techy multi-page portfolio. Pure HTML, CSS, JavaScript. No build tools needed.

---

## 📁 Project Structure

```
portfolio/
├── index.html
├── about.html
├── skills.html
├── experience.html
├── projects.html
├── certifications.html
├── contact.html
├── styles/
│   └── main.css
├── scripts/
│   └── main.js
└── resume/
    └── Femin_BJ_Resume.pdf   ← PUT YOUR RESUME PDF HERE
```

---

## 📄 HOW TO UPDATE YOUR RESUME

1. Export your updated resume as a PDF
2. Name it exactly: `Femin_BJ_Resume.pdf`
3. Drop it into the `resume/` folder, replacing the old file
4. Commit and push — Netlify auto-deploys in ~30 seconds ✅

---

## 🔗 HOW TO UPDATE CERTIFICATION LINKS

Open `certifications.html` and find these placeholders — replace with your real Microsoft Learn URLs:

| Placeholder                  | Replace with                          |
|------------------------------|---------------------------------------|
| `YOUR_AZ900_CERT_LINK_HERE`  | Your AZ-900 credential share URL      |
| `YOUR_AZ104_CERT_LINK_HERE`  | Your AZ-104 credential share URL      |
| `YOUR_AI102_CERT_LINK_HERE`  | Your AI-102 credential share URL      |
| `YOUR_PYTHON_CERT_LINK_HERE` | Your Python cert URL                  |
| `YOUR_SQL_CERT_LINK_HERE`    | Your SQL cert URL                     |

To get your Microsoft credential URLs:
1. Go to https://learn.microsoft.com → Sign in
2. Click your profile → Certifications & achievements
3. Click a cert → Share → Copy the public link

---

## 🖥️ RUN LOCALLY

```bash
# Option 1 — Python (no install needed)
cd portfolio
python -m http.server 8000
# Open http://localhost:8000

# Option 2 — VS Code
# Install "Live Server" extension → right-click index.html → Open with Live Server

# Option 3 — Node.js
npm install -g serve
serve .
```

> ⚠️ Always use a local server. Don't open index.html by double-clicking — fonts and nav paths won't work.

---

## 🚀 GITHUB + NETLIFY DEPLOYMENT (Full Guide)

### STEP 1 — Install Git (if not already installed)

**Windows:** Download from https://git-scm.com/download/win → install with defaults
**Mac:** Run `git --version` in Terminal — it prompts you to install if missing

### STEP 2 — Create a GitHub Account

Go to https://github.com → Sign up (free)

### STEP 3 — Create a New Repository on GitHub

1. Click the **+** icon (top right) → **New repository**
2. Repository name: `portfolio` (or `femin-portfolio`)
3. Set to **Public** (required for free Netlify hosting)
4. **Do NOT** check "Add README" — your folder already has one
5. Click **Create repository**
6. GitHub shows you a page with setup commands — keep it open

### STEP 4 — Push Your Portfolio to GitHub

Open your terminal / command prompt and navigate to your portfolio folder:

```bash
# Navigate into your portfolio folder
cd path/to/portfolio
# Example Windows: cd C:\Users\Femin\Downloads\portfolio
# Example Mac/Linux: cd ~/Downloads/portfolio

# Initialize git
git init

# Stage all files
git add .

# Make your first commit
git commit -m "Initial portfolio commit"

# Connect to your GitHub repo (copy the URL from GitHub's setup page)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

✅ Refresh your GitHub repo page — you should see all your files there.

### STEP 5 — Create a Netlify Account

Go to https://netlify.com → Sign up with GitHub (recommended — makes linking easier)

### STEP 6 — Deploy from GitHub on Netlify

1. On your Netlify dashboard, click **"Add new site"** → **"Import an existing project"**
2. Click **GitHub**
3. Authorize Netlify to access your GitHub (click "Authorize netlify")
4. Search for your repo (`portfolio`) → click it
5. Configure build settings:
   - **Branch to deploy:** `main`
   - **Build command:** *(leave completely empty)*
   - **Publish directory:** `.` (just a single dot — this is your root folder)
6. Click **"Deploy site"**

Netlify deploys in ~30 seconds and gives you a URL like `https://random-words.netlify.app`

### STEP 7 — Set a Custom Netlify Subdomain

1. Netlify dashboard → Your site → **Site configuration** → **Change site name**
2. Enter something like `feminbj` or `feminbj-devops`
3. Your site is now live at `https://feminbj.netlify.app` 🎉

### STEP 8 — Enable Netlify Forms (for Contact Page)

The contact form uses `data-netlify="true"` — Netlify detects this automatically on first deploy.

To view form submissions:
1. Netlify dashboard → Your site → **Forms** tab
2. You'll see a form named **"contact"**
3. Click it to see all submissions with name, email, subject, and message

To get email notifications for every submission:
1. Forms tab → click **"contact"** form → **Form notifications**
2. Click **"Add notification"** → **Email notification**
3. Enter your email `feminbj3@gmail.com`
4. Save — you'll now get an email every time a recruiter submits the form ✅

---

## 🔄 HOW TO UPDATE YOUR SITE AFTER IT'S LIVE

Every time you make a change (new project, updated resume, etc.):

```bash
# From your portfolio folder
git add .
git commit -m "describe what you changed"
git push
```

Netlify auto-detects the push and redeploys in ~30 seconds. No manual steps needed.

---

## 🌐 CUSTOM DOMAIN (Optional)

1. Buy a domain from Namecheap / GoDaddy (e.g., `feminbj.dev`)
2. Netlify → Site configuration → Domain management → **Add custom domain**
3. Follow the DNS instructions Netlify provides
4. Free SSL certificate is applied automatically

---

## ✏️ QUICK CONTENT EDITS

| What to change              | File                  |
|-----------------------------|-----------------------|
| Hero tagline / stats        | `index.html`          |
| About Me text               | `about.html`          |
| Skills & proficiency levels | `skills.html`         |
| Work experience details     | `experience.html`     |
| Projects                    | `projects.html`       |
| Certification links         | `certifications.html` |
| Contact email / phone       | `contact.html`        |
| Resume PDF                  | `resume/` folder      |
| Colors                      | `styles/main.css` → `:root` block |

---

Built with ❤️ for Femin B J | Jr. DevOps Engineer | Azure Certified
