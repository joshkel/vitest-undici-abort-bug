/**@jest-environment jsdom */
require('whatwg-fetch');
test('test', async () => {
  const controller = new AbortController();
  await fetch('http://example.com', { signal: controller.signal })
});
