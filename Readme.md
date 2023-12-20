# Next.JS App

installation: 
npm install next react react-dom

npx next --help -> atteindre automatique ./node_modules/next/

exercice 
créer une page about/
créer une nouvelle page reviews/spider-man/

installation de tailwind 
npm install --save-dev tailwindcss postcss autoprefixer

npx tailwindcss init --postcss

npm install @headlessui/react@latest
npm install @heroicons/react

npm i marked

https://tailwindcss.com/docs/typography-plugin
npm i --save-dev @tailwindcss/typography

https://www.npmjs.com/package/gray-matter
npm install --save gray-matter

Mise en ligne 
exportation voir le fichier next.config.js
npm run build pour avoir le dossier out

pour tester en local 
npx serve@latest out/ 

ne pas oublier de mettre /out/ dans gitignore

## Installer et configurer strapi avant de faire le code next et node

pour voir la req strapi api
node scripts/strapi-request.mjs

https://www.npmjs.com/package/qs


npm install --save-dev eslint eslint-config-next 
ajouter .eslintrc.json

ajouter script dans package.json

npm run lint pour afficher warning et error