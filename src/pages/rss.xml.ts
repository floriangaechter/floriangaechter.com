import rss from '@astrojs/rss';

export const get = () =>
	rss({
		title: 'Florian Gächters’s Blog',
		description:
			'Personal blog of Florian Gächter. These are a couple of things I’ve come across so far…',
		site: import.meta.env.SITE,
		items: import.meta.glob('./posts/**/*.md'),
		customData: `<language>en-us</language>`,
		stylesheet: '/rss/pretty-feed-v3.xsl',
	});
