<script>
import { authorInfo, WWW_URL } from './../../config'
const { author } = authorInfo
import Hero from '$lib/Landing/Hero.svelte'
import Cta from '$lib/Landing/Cta.svelte'
import SEO from '$lib/components/SEO/index.svelte'

const breadcrumbs = [
	{
		name: 'Home',
		slug: '/',
	},
]
const entityMeta = {
	url: `${WWW_URL}/`,
	faviconWidth: 512,
	faviconHeight: 512,
	caption: author,
}
const seoProps = {
	entityMeta,
	breadcrumbs,
	title: 'Misiki - Start your ecommerce in 60seconds',
	metadescription:
		'Ecommerce platform for micro business to big shots. We will give personalized help for your business go online instantly. We will build your own online store with all personalized help',
	featuredImage:
		'https://repository-images.githubusercontent.com/213575283/f577b8bd-8edb-41ba-bfe5-36e65072e1f2',
	ogImage:
		'https://repository-images.githubusercontent.com/213575283/f577b8bd-8edb-41ba-bfe5-36e65072e1f2',
	ogSquareImage: '/icon.png',
	twitterImage:
		'https://repository-images.githubusercontent.com/213575283/f577b8bd-8edb-41ba-bfe5-36e65072e1f2',
	image:
		'https://repository-images.githubusercontent.com/213575283/f577b8bd-8edb-41ba-bfe5-36e65072e1f2',
}
</script>

<SEO {...seoProps} />

<section>
	<div>
		<Hero />
	</div>

	<div class="sm:pt-10">
		<Cta />
	</div>

	<div class="h-40 hidden md:block"></div>
</section>
