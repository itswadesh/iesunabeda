<style>
</style>

<script>
import { Swipe, SwipeItem } from 'svelte-swipe'
import { lazyload } from './../../actions/lazyload'
import { CDN_URL } from './../../../config'
import SingleStore from '$lib/components/SingleStore.svelte'

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
		name: 'Deals Commerce',
		link: 'https://edeal.shop/',
	},
	{
		img: '/home/mywondermall.png',
		name: 'Mywondermall ecommerce',
		link: 'https://mywondermall.com/',
	},
	{
		img: '/home/anne.png',
		name: 'Furniture Store',
		link: 'https://anne.biz/',
	},
	{
		img: '/home/lrnr.png',
		name: 'LrNr Ed Tech',
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
		link: 'https://demo.litekart.in/',
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
		<div class="mb-10 sm:mb-20 flex items-center justify-center space-x-2">
			<hr class="h-1 border-gray-300 flex-1" />

			<div
				class="flex items-center justify-center md:text-lg text-center text-white font-semibold tracking-wider uppercase py-2 px-8 bg-primary-500">
				DEMO STORES
			</div>

			<hr class="h-1 border-gray-300 flex-1" />
		</div>

		<div class="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
			{#each websiteimage as w, i}
				<SingleStore w="{w}" />
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
