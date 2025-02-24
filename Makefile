install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-calc:
	node bin/brain-calc.js
lint:
	npx eslint .