mkdir -p public/dist
cp orpheus.ttf public/dist/orpheus.ttf
touch public/.nojekyll
npx tailwindcss -i ./src/input.css -o ./public/dist/output.css
cp hamburgers.css public/dist/hamburgers.css
cp script.js public/script.js
cp animation.js public/animation.js
cp animation1.js public/animation1.js
node image_compress.js
cp -r node_modules public/node_modules
cd src

js-yaml data/index.yaml > index.json
ejs index.ejs -f index.json -o ../public/index.html

js-yaml data/gallery.yaml > gallery.json
ejs gallery.ejs -f gallery.json -o ../public/gallery.html

