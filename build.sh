mkdir -p public
touch public/.nojekyll
npx tailwindcss -i ./src/input.css -o ./dist/output.css
cp -r dist/ public/dist
cp script.js public/script.js
cp -r img public/img
cp -r node_modules public/node_modules

cd src

js-yaml data/index.yaml > index.json
ejs index.ejs -f index.json -o ../public/index.html

js-yaml data/gallery.yaml > gallery.json
ejs gallery.ejs -f gallery.json -o ../public/gallery.html

