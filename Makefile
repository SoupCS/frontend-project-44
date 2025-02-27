install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-calc:
	node bin/brain-calc.js
brain-gcd:
	node bin/brain-gcd.js
publish:
	npm publish --dry-run
brain-progression:
	node bin/brain-progression.js
lint:
	npx eslint .
