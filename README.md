# Clubhbar Site
Community project for Hedera Hashgraph enthusiasts, AKA Hashbros, AKA bagholders of it's ~~eternally crabbing~~ cryptocurrency, Hbar. Built using Next.js Framework using css modules and deployed with Vercel. This project will be integrating strapi (headless CMS) in the future for easy content management. Frontend site and documentation is a work in progress.

### Setup Instructions
1. Clone repo using the command below:<br>`gh repo clone hhe44/clubhbar-site`
2. Navigate to the project's top-level directory and run:<br>`npm install` 
3. Start up the project using `npm run dev`

### Guides used throughout Development:
* [CoinGecko API Documentation](https://www.coingecko.com/api/documentations/v3#/coins/get_coins_list)
* [Next.js CSS Modules Tweak for Typescript](https://github.com/vercel/next.js/issues/9690)
* [Next.js Font Optimization](https://nextjs.org/docs/basic-features/font-optimization)
* [Next.js Image Layout Examples](https://github.com/vercel/next.js/tree/canary/examples/image-component/pages)
* [Next.js Image Layout Discussion](https://github.com/vercel/next.js/discussions/18739)
* [Next.js Image Optimization for Dummies](https://www.youtube.com/watch?v=R4sdWUI3-mY)
* [Next.js Image Woes](https://github.com/vercel/next.js/discussions/18312)
* [Next.js Sass Setup + Mixins](https://www.freecodecamp.org/news/how-to-use-sass-with-css-modules-in-next-js/)

### Technical Issues / Planned Optimizations
* Navbar component sends an API request to coingecko for HBAR price at render for every page. It would be ideal to get the data only once thru *getStaticProps* but it's reserved for page components. Will have to try using React Server components as discussed [here](https://github.com/vercel/next.js/discussions/13390).
* You can't apply class names to img or Image components in Next.js when using CSS modules. For example: `Image className = {styles.imageWrap}` will not apply the `imageWrap` class to the component. The workaround to that is to use `Image className="imageWrap"`. This should work for `<img>` as well.
* In addition to the previous point, it's cumbersome to use CSS selectors on Image components which is comprised of an `<img>` nested inside two `<divs>`. Selecting that nested `<img>` would require syntax like this: `.imageWrap div div img`. [This](https://github.com/vercel/next.js/discussions/18312) discussion may provide more context.