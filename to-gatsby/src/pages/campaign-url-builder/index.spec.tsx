// Need to add in tests based on current functionality

// Pasting in a website url that already has url params should keep them as is

// Pasting in a website url with url params should add them to our inputs if they are one of our params.

// All of this somehow works flawlessly with the fragment.

//
/* describe('campaign-url-builder', () => {
 *   describe('params', () => {
 *     describe('.extractParamsFromWebsiteUrl', () => {
 *       it('extracts campaign params from a URL query', () => {
 *         const url = 'https://example.com/?utm_source=foo&utm_medium=bar';
 *         const ret = params.extractParamsFromWebsiteUrl(url);
 *
 *         assert.equal(ret.bareUrl, 'https://example.com/');
 *         assert.deepEqual(ret.params, {
 *           utm_source: 'foo',
 *           utm_medium: 'bar',
 *         });
 *       });
 *
 *       it('extracts campaign params from a URL fragment', () => {
 *         const url = 'https://example.com/#utm_source=foo&utm_medium=bar';
 *         const ret = params.extractParamsFromWebsiteUrl(url);
 *
 *         assert.equal(ret.bareUrl, 'https://example.com/');
 *         assert.deepEqual(ret.params, {
 *           utm_source: 'foo',
 *           utm_medium: 'bar',
 *         });
 *       });
 *
 *       it('preserves non-campaign params in a URL query', () => {
 *         const url = 'https://example.com/?utm_source=foo&foo=bar';
 *         const ret = params.extractParamsFromWebsiteUrl(url);
 *
 *         assert.equal(ret.bareUrl, 'https://example.com/?foo=bar');
 *         assert.deepEqual(ret.params, {
 *           utm_source: 'foo',
 *         });
 *       });
 *
 *       it('preserves non-campaign params in a URL fragment', () => {
 *         const url = 'https://example.com/#heading&utm_source=foo&foo=bar';
 *         const ret = params.extractParamsFromWebsiteUrl(url);
 *
 *         assert.equal(ret.bareUrl, 'https://example.com/#heading&foo=bar');
 *         assert.deepEqual(ret.params, {
 *           utm_source: 'foo',
 *         });
 *       });
 *
 *       it('favors campaign params in the fragment over the query', () => {
 *         const url = 'https://example.com/' +
 *                     '?utm_source=foo&utm_medium=bar#utm_source=qux';
 *
 *         const ret = params.extractParamsFromWebsiteUrl(url);
 *
 *         assert.equal(ret.bareUrl, 'https://example.com/');
 *         assert.deepEqual(ret.params, {
 *           utm_source: 'qux',
 *           utm_medium: 'bar',
 *         });
 *       });
 *     });
 *
 *
 *     describe('.addParamsToUrl', () => {
 *       it('adds params to a URL query', () => {
 *         const bareUrl = 'https://example.com/?foo=bar#hash';
 *         const campaignParams = {utm_source: 'foo', utm_medium: 'bar'};
 *         const paramUrl = params.addParamsToUrl(bareUrl, campaignParams);
 *
 *         assert.equal(paramUrl,
 *                      'https://example.com/?foo=bar&utm_source=foo&utm_medium=bar#hash');
 *       });
 *
 *       it('optionally adds params to a URL fragment', () => {
 *         const bareUrl = 'https://example.com/?foo=bar#hash';
 *         const campaignParams = {utm_source: 'foo', utm_medium: 'bar'};
 *         const paramUrl = params.addParamsToUrl(bareUrl, campaignParams, true);
 *
 *         assert.equal(paramUrl,
 *                      'https://example.com/?foo=bar#hash&utm_source=foo&utm_medium=bar');
 *       });
 *     });
 *
 *
 *     describe('.sanitizeParams', () => {
 *       it('removes non-campaign params from a query object', () => {
 *         const allParams = {
 *           utm_source: 'foo',
 *           utm_medium: 'bar',
 *           foo: 'bar',
 *         };
 *         const sanitizedParams = params.sanitizeParams(allParams);
 *
 *         assert.deepEqual(sanitizedParams, {
 *           utm_source: 'foo',
 *           utm_medium: 'bar',
 *         });
 *       });
 *
 *       it('ignores non-string values', () => {
 *         const allParams = {
 *           utm_source: 'foo',
 *           utm_medium: 1,
 *         };
 *         const sanitizedParams = params.sanitizeParams(allParams);
 *
 *         assert.deepEqual(sanitizedParams, {
 *           utm_source: 'foo',
 *         });
 *       });
 *
 *       it('optionally strips leading/trailing whitespace from values', () => {
 *         const allParams = {
 *           utm_source: '  foo ',
 *           utm_medium: 'bar  ',
 *           utm_campaign: 'baz',
 *         };
 *         const trimmedParams = params.sanitizeParams(allParams, {trim: true});
 *
 *         assert.deepEqual(trimmedParams, {
 *           utm_source: 'foo',
 *           utm_medium: 'bar',
 *           utm_campaign: 'baz',
 *         });
 *       });
 *
 *       it('optionally ignores emptry string values', () => {
 *         const allParams = {
 *           utm_source: 'foo',
 *           utm_medium: '',
 *           utm_campaign: null,
 *         };
 *         const nonEmptyParams = params.sanitizeParams(allParams, {
 *           removeBlanks: true,
 *         });
 *
 *         assert.deepEqual(nonEmptyParams, {
 *           utm_source: 'foo',
 *         });
 *       });
 *     });
 *   });
 * }); */

/* import {expect} from 'chai';
 * import ReactTestUtils from 'react-dom/test-utils';
 * import renderProblematic from
 * '../../src/javascript/campaign-url-builder/components/problematic.js';
 *
 * // Given a basic domain, test the domain for all combinations of
 * // leading protocol, subdomain, path, query, and fragment.
 * const thoroughlyTestDomain = (domain, test) =>
 *   ['', 'http://', 'https://'].forEach(proto =>
 *     ['', 'www.', 'play.google.com.'].forEach(subdomain =>
 *       ['', '/', '/object/path', '/trailing/slash/'].forEach(path =>
 *         ['', '?utm_content=test'].forEach(query =>
 *           ['', '#fragment'].forEach(fragment =>
 *             test(`${proto}${subdomain}${domain}${path}${query}${fragment}`)
 *           )
 *         )
 *       )
 *     )
 *   );
 *
 * describe('campaign-url-builder', () => {
 *   describe('renderProblematic', () => {
 *     it('does not flag ordinary URLs as problematic', () => {
 *       ['example.com', 'mail.google.com']
 *         .forEach(domain => {
 *           thoroughlyTestDomain(domain, url => {
 *             const renderResult = renderProblematic(url);
 *             expect(renderResult)
 *               .to.be.an('object')
 *               .that.deep.equals({element: null, eventLabel: null});
 *           });
 *         });
 *     });
 *
 *     it('returns a React element and analytics alert for bad URLs', () => {
 *       [
 *         {domain: 'play.google.com', event: 'Google Play Store'},
 *         {domain: 'itunes.apple.com', event: 'iOS App Store'},
 *         {domain: 'ga-dev-tools.appspot.com', event: 'GA Dev Tools'},
 *       ].forEach(({domain, event}) => {
 *         thoroughlyTestDomain(domain, url => {
 *           const renderResult = renderProblematic(url);
 *           expect(renderResult)
 *             .to.be.an('object')
 *             .that.includes({eventLabel: event})
 *             .and.has.property('element')
 *             .that.satisfies(ReactTestUtils.isElement);
 *           // TODO(Lucretiel): Test that the returned React element includes
 *           // a url to the correct url builder. This requires introspecting
 *           // React elements, which I don't know how to do yet.
 *         });
 *       });
 *     });
 *
 *     describe('performance', () => {
 *       // TODO(Lucretiel): during development, there was a major
 *       // performance issue related to a pathological regex. Test that
 *       // it doesn't take 3 seconds to match a 10 character string.
 *       // Need to review JS performance testing libraries.
 *     });
 *   });
 * }); */
