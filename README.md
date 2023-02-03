[![Netlify Status](https://api.netlify.com/api/v1/badges/b2aeb629-8c30-45b1-b51a-a8fc82bf4c22/deploy-status)](https://app.netlify.com/sites/defence-service-toolkit/deploys)

# Defence Service Toolkit

All you need to design, build and run great digital services in Defence.

Install the long-term support (LTS) version of <a href="https://nodejs.org/en/">Node.js</a>, which includes npm.

## Run app for development

### 1. Clone repo

```
git clone https://github.com/defencedigital/moduk-service-toolkit.git moduk-service-toolkit
```

### 2. Navigate to project folder

```
cd moduk-service-toolkit
```

### 3. Install npm packages

```
npm install
```

### 4. Run app
Watch for changes to `CSS`, `JS`, `Images`, `Nunjucks` or `Markdown`. Automatically update the browser, without the need for a manual refresh.

```
npm run dev
```

Visit: <a href="http://localhost:8080">http://localhost:8080</a>

## Build app for production

Render `CSS`, `JS`, `Images`, `Nunjucks`. Compress files and generates `HTML` pages, ready for production. It also performs a [W3C validation](https://validator.w3.org) on `HTML`, to ensure everything is valid.

```
npm run prod
```
