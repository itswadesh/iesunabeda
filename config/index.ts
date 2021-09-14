import { amp, browser, dev } from '$app/env'
const HTTP_ENDPOINT = 'https://api.misiki.in'
const HTTP_ENDPOINT_AUTOMATION = 'https://automation.litekart.in'
const WWW_URL = dev ? 'http://localhost:3000' : 'https://misiki.in'
const CDN_URL = 'https://ik.imagekit.io/3wzatecz51w3i'
export const typingTimeout = 0 // After this delay the search api will be fired
const currency = { symbol: '₹', code: 'INR' }
const tokenExpiry = 60 * 60 * 24 * 365 // Login validity in seconds
const ANALYTICS_TRACKING_ID = 'UA-49421899-5'
const sorts = [
	{ name: 'Relevance', val: null },
	{ name: 'Whats New', val: '-createdAt' },
	{ name: 'Price low to high', val: 'localPrice' },
	{ name: 'Price high to low', val: '-localPrice' },
]
const authorInfo = {
	author: 'Swadesh Behera',
	entity: 'Misiki',
	ogLanguage: 'en_US',
	siteLanguage: 'en-US',
	siteTitle: 'Misiki',
	siteShortTitle: 'Misiki', // used as SchemaOrg siteTitleAlt
	contactEmail: 'swadesh@misiki.in',
	facebookAuthorPage: `https://www.facebook.com/codenx`,
	facebookPage: `https://www.facebook.com/codenx`,
	facebookPageName: 'codenx',
	githubPage: 'itswadesh',
	linkedinProfile: 'itswadesh',
	telegramUsername: 'itswadesh',
	twitterUsername: 'itswadesh',
}
const host = 'https://misiki.in'
export {
	sorts,
	CDN_URL,
	currency,
	tokenExpiry,
	HTTP_ENDPOINT,
	WWW_URL,
	HTTP_ENDPOINT_AUTOMATION,
	ANALYTICS_TRACKING_ID,
	authorInfo,
	host,
}
