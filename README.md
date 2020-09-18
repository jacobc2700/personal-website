# jacobc2700.github.io

My personal website: https://www.thehumboo.com/ (deployed on GitHub Pages).

### Deployment:

- Clone the repository: `git clone https://github.com/jacobc2700/jacobc2700.github.io.git`.
- Run `npm install` in the root directory.
- Run `npm start` in the root directory.
- Go to `localhost:3000`.
- Make changes to the code.
- Deployment steps:

```
npm run deploy
git add .
git commit -m "Commit Message"
git push origin master
```

- Go to the repository settings and set the custom domain to `www.thehumboo.com` (enforce HTTPS).
- The updated website should be live.

### Technologies:

- Particles: https://github.com/VincentGarreau/particles.js/.
- Font Awesome: https://fontawesome.com/.
- Devicons: https://devicon.dev/.
- Sass: https://sass-lang.com/.
- React: https://reactjs.org/.

### Fix:

- change all pixels to rem
- move navigation bar items in
- media query for nav bar when its smaller
- Remove text for technologies, on media query
- scroll is messed up on mobile: it's becauyse i changed the font size of the navbar on media query
- remove hover effect on mobile for footer icons
- open footer links in new tabs
- clean tooltips.scss file
- website and github links no padding on mobile
- increase top/bottom padding on tech list
