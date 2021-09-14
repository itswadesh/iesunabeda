<style></style>

<script>
// import { onMount } from 'svelte'
// import { get } from '../../util/api'
import { geta } from '../../util/apiAutomation'

// let authors = null
// let promise = getAuthors()

// onMount(() => {
// 	promise = getAuthors()
// })
// async function getAuthors() {
// 	try {
// 		authors = await geta(`authors`)
// 		console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzz', authors)
// 		return authors
// 	} catch (e) {
// 		console.log('eeeeeeeeeeeeeeeee', e)
// 	}
// }
</script>

{#await geta(`authors`, { page: Math.floor(Math.random() * 16), limit: 24, sort: '-createdAt' })}
	<p class="p-4 text-center">Searching Influencers...</p>
{:then authors}
	{#if authors}
		<section class="container max-w-7xl mx-auto min-h-screen px-4 sm:px-10 text-gray-800">
			<div class="mb-10 sm:mb-20 flex items-center justify-center space-x-2">
				<hr class="h-1 border-gray-300 flex-1" />

				<div
					class="flex items-center justify-center md:text-lg text-center text-white font-semibold tracking-wider uppercase py-2 px-8 bg-primary-500">
					TOP INFLUENCERS
				</div>

				<hr class="h-1 border-gray-300 flex-1" />
			</div>

			<div class="search_fix"></div>

			<div class="flex flex-wrap">
				{#each authors.data as a}
					<div class="w-1/2 p-1 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 ">
						<div
							class="flex flex-col flex-wrap items-center justify-center p-4 text-center border rounded-lg shadow-lg">
							<img src="{a.avatar}" alt="{a.name}" class="w-20 h-20 rounded-full text-xs" />

							<span class="line-clamp-2">{a.name}</span>
						</div>
					</div>
				{/each}
			</div>
		</section>
	{/if}
{:catch error}
	<p style="color: red">{error}</p>
{/await}
