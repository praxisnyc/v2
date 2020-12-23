NPM := npm
VENDOR_DIR := assets/vendor/
SCSS_VENDOR_DIR := _sass/vendor/
JEKYLL := jekyll

install:
	$(NPM) install

include-npm-deps:
	mkdir -p $(VENDOR_DIR)
	mkdir -p $(SCSS_VENDOR_DIR)
	cp node_modules/p5/lib/p5.min.js $(VENDOR_DIR)
	cp node_modules/tile/tile.scss $(SCSS_VENDOR_DIR)
	cp -R node_modules/animatewithsass $(SCSS_VENDOR_DIR)animatewithsass


build: install include-npm-deps
	$(JEKYLL) build

serve: install include-npm-deps
	JEKYLL_ENV=production $(JEKYLL) serve --livereload