const { validateConfig } = require('renovate/dist/config/validation');
const pkg = require('../package.json');

const configs = pkg['renovate-config'];

test('Renovate config should be valid', async () => {
    await Promise.all(
        Object.keys(configs).map(async (presetName) => {
            const { errors, warnings } = await validateConfig(configs[presetName]);
            expect(errors).toHaveLength(0);
            expect(warnings).toHaveLength(0);
        }),
    );
});
