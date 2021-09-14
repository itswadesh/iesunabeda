<style>
.frosted {
	backdrop-filter: blur(12px);
	background-color: hsla(0, 0%, 100%, 0.3);
}
</style>

<script>
import { Swipe, SwipeItem } from 'svelte-swipe'
import { lazyload } from './../../actions/lazyload'
import { CDN_URL } from './../../../config'
const swipeConfig = {
	autoplay: false,
	delay: 2000,
	showIndicators: true,
	transitionDuration: 1000,
	defaultIndex: 0,
}
let SwipeComp

function nextSlide() {
	SwipeComp.nextItem()
}

function prevSlide() {
	SwipeComp.prevItem()
}

export let websiteimage = [
	{
		img: '/home/edeal.png',
		name: 'Large Deals ecommerce',
		link: 'https://www.edeal.shop/',
	},
	{
		img: '/home/mywondermall.png',
		name: 'Mywondermall ecommerce',
		link: 'https://www.mywondermall.shop/',
	},
	{
		img: '/home/anne.png',
		name: 'Large Deals ecommerce',
		link: 'https://www.anne.biz/',
	},
	{
		img: '/home/lrnr.png',
		name: 'LrNr Education platform',
		link: 'https://lrnr.in/',
	},
	{
		img: '/home/demo-demo.png',
		name: 'Multi Product Store',
		link: 'https://demo.misiki.in',
	},
	{
		img: '/home/litekart-demo.png',
		name: 'Litekart Demo',
		link: 'https://demo.litekart.in',
	},
	{
		img: '/home/fashion.png',
		name: 'Fashion Store',
		link: 'https://fashion.misiki.in/',
	},
	{
		img: '/home/iotutorials.png',
		name: 'Education platform',
		link: 'https://iotutorials.com/',
	},
]
</script>

{#if websiteimage?.length > 0}
	<section class="container max-w-7xl mx-auto min-h-screen px-4 sm:px-10 text-gray-800">
		<h1 class="mb-10 md:mb-20 text-center text-4xl sm:text-5xl font-bold">Demo Websites</h1>

		<div class="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
			{#each websiteimage as w, i}
				<a target="blank" rel="noopener" href="{w.link}">
					<div
						class="relative hover:bg-white shadow-md hover:shadow-lg transition-all duration-300 lg:transform lg:hover:scale-105 group border-2 border-gray-200 hover:border-gray-800 hover:border-opacity-50 rounded-lg overflow-hidden">
						<img
							use:lazyload
							src="{`${CDN_URL}/${w.img}?tr=w-3,h-3`}"
							data-src="{`${CDN_URL}/${w.img}`}"
							loading="lazy"
							alt=""
							class="w-full h-60 sm:h-72 md:h-96 object-cover object-top rounded-lg" />

						<div
							class="z-10 absolute bottom-0 inset-x-0 p-4 h-16 sm:h-20 flex items-center justify-center overflow-hidden frosted">
							<span
								class="text-sm sm:text-base group-hover:text-gray-800 group-hover:font-medium transition-all duration-300 tracking-wide text-black text-center overflow-ellipsis line-clamp-2">
								{w.name}
							</span>
						</div>
					</div>
				</a>
			{/each}
		</div>

		<!-- Above 1024px  -->

		<!-- <section class="hidden lg:block relative h-screen">
			<Swipe {...swipeConfig} bind:this="{SwipeComp}">
				{#each websiteimage as w, i}
					<SwipeItem>
						<a href="{w.link}" class="w-full h-full">
							<img src="{w.img}" alt="" class="w-full h-full object-cover" />

							<div class="p-4">
								<h5
									class="text-sm font-medium overflow-hidden whitespace-nowrap overflow-ellipsis group-hover:text-primary-500">
									{w.name}
								</h5>
							</div>
						</a>
					</SwipeItem>
				{/each}
			</Swipe>

			<button
				class="hidden md:block absolute left-4 md:top-20 lg:top-24 xl:top-72 z-10  bg-white px-2 py-2 rounded-full border-2 hover:bg-gray-200 focus:outline-none"
				type="button"
				on:click="{prevSlide}">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"
					></path>
				</svg>
			</button>

			<button
				class="hidden md:block absolute right-4 md:top-20 lg:top-24 xl:top-72 z-10 bg-white px-2 py-2 rounded-full border-2 hover:bg-gray-200 focus:outline-none"
				type="button"
				on:click="{nextSlide}">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
					></path>
				</svg>
			</button>
		</section> -->

		<!-- Below 1024px  -->

		<!--	<div class="lg:hidden overflow-x-auto">
			<div class="flex items-start justify-start space-x-5">
				{#each websiteimage as w, i}
					<a href="{w.link}" class="w-full h-full flex-shrink-0 group">
						<img src="{w.img}" alt="" class="w-full h-full object-cover" />

						<div class="p-4">
							<h5
								class="text-sm font-medium overflow-hidden whitespace-nowrap overflow-ellipsis group-hover:text-primary-500">
								{w.name}
							</h5>
						</div>
					</a>
				{/each}
			</div>
		</div> -->
	</section>
{/if}
