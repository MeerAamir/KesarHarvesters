# KesarHarvesters - Production Handover Guide

This repository contains the complete website codebase for KesarHarvesters. The source code is organized to be clean, readable, and highly maintainable, while the production build is minified, compressed, and optimized inside the `dist/` folder.

---

## 1. Project Structure

```
Website/ (Root Directory - Source Code)
│
├── dist/                          <-- Compiled Production Build (Upload this to Hostinger)
│   ├── images/                    <-- Minified WebP images
│   ├── .htaccess                  <-- Apache/LiteSpeed redirection & security headers
│   ├── site.webmanifest           <-- Favicon manifest file
│   └── (All minified HTML, CSS, JS, and Favicon assets)
│
├── images/                        <-- Source WebP images
│
├── .htaccess                      <-- Source Server configuration
├── robots.txt                     <-- SEO Crawler directives
├── sitemap.xml                    <-- Search engine index file
├── site.webmanifest               <-- Web manifest config
├── styles.css                     <-- Source stylesheet (well-spaced and commented)
├── app.js                         <-- Main application logic and products database
├── data.js                        <-- Recipes & blog articles database
├── index.html                     <-- Homepage
├── shop.html                      <-- Saffron catalog page
├── product.html                   <-- Dynamic product details template
├── (All other subpages, policies, and favicons)
└── README.md                      <-- This guide
```

---

## 2. Maintenance & Customization Guides

### A. How to Update Products & Edit Prices
The product catalog database is defined inside `app.js` under the `PRODUCTS` object. Each product contains:
*   `price`: Pricing in INR (numerical format, e.g., `479`).
*   `weight`: Weight label (e.g., `'1 Gram'`).
*   `specs`: Specifications shown on the details page.

**To edit a price or product data**:
1. Open `app.js` in a text editor.
2. Locate the `PRODUCTS` object at the top of the file.
3. Edit the price or weight values. For example, to change Kashmiri 1g price to ₹499:
   ```javascript
   'kashmiri-1g': {
       id: 'kashmiri-1g',
       slug: 'kashmiri-organic-saffron-1g',
       name: 'Kashmiri Premium Saffron (1g)',
       price: 499, // <-- Update price here
       weight: '1 Gram',
       ...
   }
   ```
4. Save the file.
5. Recompile the production build (see Section 3).

**To add a new product (e.g., Sidr Honey or Mamra Almonds)**:
Simply add a new entry to the `PRODUCTS` catalog inside `app.js` using the same template keys. The dynamic templates on `shop.html` and `product.html` will automatically render them!

### B. How to Update Images
1. Convert your new image to **WebP format** (use a free online converter or image editing software).
2. Save the WebP image in the source `images/` folder using a descriptive, SEO-friendly name (lowercase with hyphens, e.g., `images/raw-kashmiri-honey-jar.webp`).
3. Update the corresponding `img` path reference inside the product database in `app.js`.

### C. How to Edit Policies
The text for our business policies is contained within individual HTML files in the root folder:
*   `privacy.html` (Privacy Policy)
*   `terms.html` (Terms & Conditions)
*   `shipping.html` (Shipping & Timelines)
*   `refunds.html` (Return & Refund Rules)

Open the corresponding HTML file, find the text you want to edit (inside the `<section class="section-cream">` container), save the file, and rebuild.

---

## 3. How to Deploy Future Updates

To ensure that your edits are compressed, minified, and verified, follow these compilation steps:

### Prerequisite (Node.js)
Make sure you have Node.js installed on your computer.

### Step-by-Step Compilation & Deployment:
1. Open a terminal (Command Prompt, PowerShell, or Git Bash) in your project directory.
2. Run the build script to compile the new changes:
   ```bash
   node scratch/build_dist.js
   ```
3. Run the verification script to crawl and verify that there are no broken links or missing assets:
   ```bash
   node scratch/verify_dist.js
   ```
4. Once verification confirms **"ZERO errors found"**, open the `dist/` directory on your computer.
5. Upload **only the contents of the `dist/` folder** directly to the `public_html` root directory of your Hostinger hosting account using Hostinger's file manager or an FTP client (like FileZilla).

---

## 4. Connecting Analytics & Tracking

We have pre-configured placeholders at the bottom of the `<head>` tag in all HTML files. To connect your services:

### A. Google Analytics 4 (GA4)
1. Copy your GA4 Global Site Tag (`gtag.js`) code from your Google Analytics console.
2. Open the HTML files in your editor.
3. Locate the `<!-- Google Analytics 4 -->` placeholder and replace the commented-out lines (or replace `G-XXXXXXXXXX` with your actual Measurement ID) and uncomment it:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-YOUR_MEASUREMENT_ID');
   </script>
   ```

### B. Google Search Console
1. Settle on **HTML file verification** in your Google Search Console.
2. Download the verification HTML file provided by Google.
3. Place this file inside your root directory AND inside the `dist/` directory, then upload it to your server. 
4. Alternatively, copy the `<meta name="google-site-verification"...>` tag and paste it into `index.html`'s `<head>`.

### C. Microsoft Clarity
1. Copy the tracking script from your Microsoft Clarity dashboard.
2. Replace the `<!-- Microsoft Clarity -->` placeholder in the HTML files (or replace `XXXXXX` with your project code) and uncomment the tag.

---

## 5. Creating Backups Before Updates

> [!CAUTION]
> Always create a backup before making modifications to avoid downtime or loss of custom configuration.

### How to backup:
1. Select the root `Website/` folder on your computer.
2. Copy and paste it in a secure backup location (or compress it into a `.zip` archive named with the date, e.g., `backup-kesarharvesters-2026-06-27.zip`).
3. If you are editing files on the server directly, download a backup copy of `app.js` and `.htaccess` before uploading the updated versions.
