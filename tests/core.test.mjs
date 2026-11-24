import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { validateConfig } from 'renovate/dist/config/validation.js';

const pkg = JSON.parse(
  readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
);
const configs = pkg['renovate-config'];

for (const [presetName, config] of Object.entries(configs)) {
  test(`Renovate preset "${presetName}" should be valid`, async () => {
    const { errors, warnings } = await validateConfig('repo', config, true);
    assert.deepEqual(errors, []);
    assert.deepEqual(warnings, []);
  });
}
