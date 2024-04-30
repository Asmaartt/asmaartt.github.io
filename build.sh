mkdir -p public/dist
cp orpheus.ttf public/dist/orpheus.ttf
touch public/.nojekyll
#cp ./public/dist/output.css ./dist/output.css
cp hamburgers.css public/dist/hamburgers.css
cp script.js public/script.js
node image_compress.js
cp -r node_modules public/node_modules

cd src

js-yaml data/index.yaml > index.json
ejs index.ejs -f index.json -o ../public/index.html

js-yaml data/gallery.yaml > gallery.json
ejs gallery.ejs -f gallery.json -o ../public/gallery.html

js-yaml data/custom.yaml > custom.json
ejs custom.ejs -f custom.json -o ../public/custom.html

cd ..

npx tailwindcss -c tailwind.config.js -i ./src/input.css -o ./public/dist/output.css