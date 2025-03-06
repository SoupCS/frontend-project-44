install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-calc:
	node bin/brain-calc.js
brain-gcd:
	node bin/brain-gcd.js
brain-prime:
	node bin/brain-prime.js
brain-progression:
	node bin/brain-progression.js
brain-even:
    node bin/brain-even
publish:
	npm publish --dry-run
brain-progression:
	node bin/brain-progression.js
brain-prime:
	node bin/brain-prime.js
lint:
	npx eslint .
