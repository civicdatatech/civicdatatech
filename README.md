# Civicdata.Tech GitHub Pages Site

This is the source for the Civicdata.Tech website, designed for deployment on GitHub Pages.

## How to Compile

No compilation is required for this site. All files are static HTML and CSS. You can view the site locally by simply opening `index.html` in your web browser.

## How to Deploy

1. **Push this repository to GitHub.**
2. In your repository settings on GitHub, go to the **Pages** section.
3. Set the source branch to `main` (or your default branch) and the root directory (`/`).
4. Save. Your site will be published at `https://<your-github-username>.github.io/<repo-name>/`.

### Local Preview (Optional)
If you want to preview the site locally with Jekyll (optional, not required for static HTML):

1. Install Ruby and Bundler if you don't have them.
2. Run `bundle install` (if you add a `Gemfile` for Jekyll plugins).
3. Run `bundle exec jekyll serve` and visit `http://localhost:4000`.

## Site Structure
- `index.html`: Main homepage with all content.
- `style.css`: Stylesheet for the site.
- `index.md`: Markdown version of the homepage content (optional, for Jekyll or reference).

## Contact
For questions or to get involved, email: info@civicdata.tech
