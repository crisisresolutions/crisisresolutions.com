import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '/8041d6dbdaa142cf8bb73e23cec9abe8',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Crisis Resolutions',
  domain: 'crisisresolutions.github.io',
  author: 'Crisis Resolutions',

  // open graph metadata (optional)
  description: 'Gamified Good Governance Simulations',

  // social usernames (optional)
  //twitter: '',
  //github: '',
  // linkedin: '',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
	'home': '/f236e31a42424e7fb0678d07a1a43498',
	'hello': '/4233e22f761a44a482e4c58a9ec39257',
	'help': '/8f735bbb840b4f28b51a7c5fa280a19a',
	'model': '/da79acfd82704e5389da7b0909fa8d54',
	'channels': '/a073e545f157418aa26b5c9ff2d48ab5',
	'sponsorships': '/bcd9086a14214a17a3712ae12c2286f7',
	'pricing ': '/921a8f3e5d3d4d1fb19c40c2dcc09b40',
	'about': '/0bdbd36f83d04acfa3d94db5dae62456',
	'contact': '/fb3f390cc7dd4925a1c508a2f1a26898',
	},
  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
