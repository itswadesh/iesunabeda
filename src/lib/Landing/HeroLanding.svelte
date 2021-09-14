<style>
.size {
	width: 3px;
	height: 3px;
}
.triangle {
	width: 5px;
	height: 2px;
	border-bottom: solid 5px forestgreen;
	border-left: solid 5px transparent;
	border-right: solid 5px transparent;
}
@media (max-width: 640px) {
	.h-rem-image {
		height: 10rem;
	}
}
@media (min-width: 640px) {
	.h-rem-image {
		height: 35rem;
	}
}
.gradient {
	background-image: linear-gradient(to right, rgba(255, 255, 255, 0.9), transparent, transparent);
}
.card-width {
	width: 28rem;
}
</style>

<section class="flex flex-col text-gray-700">
	<!-- From micro to large-scale start -->

	<div class="container mx-auto max-w-7xl p-2 sm:px-10 lg:mb-20 xl:mb-32 flex flex-col lg:flex-row">
		<div class="py-10 lg:py-5 lg:w-1/2">
			<div
				class="text-center lg:text-left tracking-wide leading-loose max-w-lg mx-auto lg:mx-0 lg:pr-5 lg:mr-auto space-y-5">
				<h1 class="uppercase text-gray-700 tracking-normal">FLEXIBLE AND SCALABLE</h1>

				<h2 class="text-3xl sm:text-4xl font-black">From micro to large-scale</h2>

				<p>
					Different projects require different technologies. Pick a plan that matches your current
					needs, then upgrade and scale as your website grows.
				</p>

				<a
					href="##"
					class="text-sm font-semibold tracking-wide underline hover:text-primary-500 max-w-max">
					See All Products
				</a>
			</div>
		</div>

		<!-- Data section end -->

		<div class="lg:hidden">
			<img src="/home/home-1st.png" alt="" class="h-full w-full object-cover" />
		</div>

		<div class="hidden lg:block lg:w-1/2">
			<div class="relative flex justify-end">
				<div class="absolute top-0 left-0 z-20 border bg-white p-5 shadow-xl rounded-md">
					<h1 class="mb-2 font-semibold text-lg">Revenue</h1>

					<div class="flex items-center space-x-2 ">
						<b class="text-3xl">₹ 1234.26</b>
						<div class="flex items-center space-x-1">
							<div class="triangle"></div>

							<b style="color: forestgreen;">321%</b>
						</div>
					</div>
				</div>

				<div
					class="absolute top-10 left-10 z-10 border bg-white p-2 shadow-xl rounded-md h-60 w-96">
					<img src="/home/Growth curve-bro.svg" alt="" class="h-full w-full" />
				</div>

				<div
					class="absolute top-28 left-64 z-0 flex flex-col items-center justify-center space-y-2">
					{#each Array(20) as _}
						<div class="flex flex-row items-center justify-center space-x-2">
							{#each Array(20) as _}
								<div class="overflow-hidden size rounded-full">
									<div class="flex-1 size rounded-full bg-gray-300"></div>
								</div>
							{/each}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- From micro to large-scale end -->

	<!-- Simply fast websites start -->

	<div class="container mx-auto max-w-7xl p-2 sm:px-10 lg:mb-32 flex flex-col-reverse lg:flex-row">
		<div class="xl:hidden lg:w-1/2 lg:pr-5">
			<img src="/home/home-3rd.png" alt="" class="h-full w-full object-cover" />
		</div>

		<div class="hidden xl:block lg:w-1/2">
			<div class="relative">
				<div
					class="absolute top-0 left-0 z-10 border p-6 bg-white shadow-xl rounded-md card-width flex flex-col">
					<div class="mb-3 text-sm font-semibold">Speed Performance Score</div>

					<div class="mb-3 grid grid-cols-3 gap-2">
						<div class="p-2 text-center bg-gray-100">
							<h6 class="mb-2 text-xs font-medium">Page Speed Score</h6>
							<div class="flex items-center justify-center space-x-2">
								<h1 class="text-3xl"><b>A</b></h1>
								<h1 class="text-3xl font-medium">99%</h1>
								<div class="triangle"></div>
							</div>
						</div>

						<div class="p-2 text-center bg-gray-100">
							<h6 class="mb-2 text-xs font-medium">YSlow Score</h6>
							<div class="flex items-center justify-center space-x-2">
								<h1 class="text-3xl"><b>A</b></h1>
								<h1 class="text-3xl font-medium">99%</h1>
								<div class="triangle"></div>
							</div>
						</div>

						<div class="p-2 text-center bg-gray-100">
							<h6 class="mb-2 text-xs font-medium">Load Time</h6>
							<div class="flex items-center justify-center">
								<div class="flex items-end">
									<h1 class="text-3xl font-medium">0.143s</h1>
								</div>
							</div>
						</div>
					</div>

					<div class="mb-3 flex items-center justify-between text-xs">
						<h6 class="font-medium text-gray-600 w-28">Browser Caching</h6>

						<div class="h-4 w-40 flex items-center justify-center">
							<div class="h-4 bg-green-500 w-full"></div>
							<div class="h-4 bg-green-200 w-1"></div>
						</div>

						<div class="text-gray-400 flex items-center space-x-1 ">
							<span>Priority :</span>
							<span>High</span>
						</div>
					</div>

					<div class="mb-3 flex items-center justify-between text-xs">
						<h6 class="font-medium text-gray-600 w-28">Cache Validator</h6>

						<div class="h-4 w-40 flex items-center justify-center">
							<div class="h-4 bg-green-500 w-full"></div>
							<div class="h-4 bg-green-200 w-1"></div>
						</div>

						<div class="text-gray-400 flex items-center space-x-1 ">
							<span>Priority :</span>
							<span>High</span>
						</div>
					</div>

					<div class="flex items-center justify-between text-xs">
						<h6 class="font-medium text-gray-600 w-28">Manify Javascript</h6>

						<div class="h-4 w-40 flex items-center justify-center">
							<div class="h-4 bg-green-500 w-full"></div>
							<div class="h-4 bg-green-200 w-1"></div>
						</div>

						<div class="text-gray-400 flex items-center space-x-1 ">
							<span>Priority :</span>
							<span>High</span>
						</div>
					</div>
				</div>

				<div
					class="absolute -top-10 left-40 z-0 flex flex-col items-center justify-center space-y-2">
					{#each Array(30) as _}
						<div class="flex flex-row items-center justify-center space-x-2">
							{#each Array(30) as _}
								<div class="overflow-hidden size rounded-full">
									<div class="flex-1 size rounded-full bg-gray-300"></div>
								</div>
							{/each}
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class=" py-10 lg:py-5 lg:w-1/2">
			<div
				class="text-center lg:text-left tracking-wide leading-loose max-w-lg mx-auto lg:mx-0 lg:pl-5 lg:ml-auto space-y-5">
				<h1 class="uppercase text-gray-700 tracking-normal">PERFORMANCE AND SPEED</h1>

				<h2 class="text-3xl sm:text-4xl font-black">Simply fast websites</h2>

				<p>
					Website speed can slow or grow your business. Delight your visitors with a lightning fast
					website.
				</p>

				<a
					href="##"
					class="text-sm font-semibold tracking-wide underline hover:text-primary-500 max-w-max">
					Learn more
				</a>
			</div>
		</div>
	</div>

	<!-- Simply fast websites end -->

	<!-- Easy to setup start -->

	<div class="container mx-auto max-w-7xl p-2 sm:px-10 lg:mb-10 flex flex-col lg:flex-row">
		<div class="py-10 md:py-5 lg:w-1/2">
			<div
				class="text-center lg:text-left tracking-wide leading-loose max-w-lg mx-auto lg:mx-0 lg:pr-5 lg:mr-auto space-y-5">
				<h1 class="uppercase text-gray-700 tracking-normal">SIMPLE AND INTUITIVE</h1>

				<h2 class="text-3xl sm:text-4xl font-black">Easy to setup</h2>

				<p>
					Getting your website live is as simple as a click of a button. Everything you need -
					provided in a clear way.
				</p>

				<a
					href="##"
					class="text-sm font-semibold tracking-wide underline hover:text-primary-500 max-w-max">
					Learn more
				</a>
			</div>
		</div>

		<!-- Data section end -->

		<div class="lg:hidden">
			<img src="/home/home-2nd.png" alt="" class="h-full w-full object-cover" />
		</div>

		<div class="hidden lg:block lg:w-1/2 lg:ml-auto">
			<div class="relative">
				<div
					class="absolute top-0 left-0 z-10 border bg-white shadow-xl rounded-md h-64 card-width flex items-center justify-center">
					<img src="/home/design-website.svg" alt="" class="h-full w-full" />
				</div>

				<div
					class="absolute -top-8 left-40 z-0 flex flex-col items-center justify-center space-y-2">
					{#each Array(30) as _}
						<div class="flex flex-row items-center justify-center space-x-2">
							{#each Array(30) as _}
								<div class="overflow-hidden size rounded-full">
									<div class="flex-1 size rounded-full bg-gray-300"></div>
								</div>
							{/each}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- Easy to setup end -->

	<!-- User-Friendly Control Panel start -->

	<div
		class="container mx-auto max-w-7xl p-2 sm:px-10 my-10 sm:my-20  flex items-center justify-center space-x-2">
		<hr class="h-1 border-gray-300 flex-1" />

		<div
			class="flex items-center justify-center text-center text-white font-semibold tracking-wide uppercase py-2 px-8 bg-primary-500">
			User-Friendly Control Panel
		</div>

		<hr class="h-1 border-gray-300 flex-1" />
	</div>

	<div class="flex flex-col-reverse lg:flex-row">
		<div class="lg:w-1/2">
			<div
				class="relative h-rem-image overflow-hidden shadow-xl lg:py-6 lg:pr-3 lg:rounded-md bg-white">
				<img
					src="/home/dashboard-admin.png"
					alt=""
					class="h-full w-full object-cover object-left lg:-ml-2" />

				<div class="absolute inset-0 gradient ">
					<div class="filter-effect "></div>
				</div>
			</div>
		</div>

		<div class="mb-10 sm:mb-20 lg:mb-0 px-4 lg:px-0 lg:w-1/2">
			<div
				class="mx-auto lg:mx-0 pr-5 flex flex-col justify-center items-center lg:justify-between lg:items-start h-full max-w-lg lg:pl-20">
				<div
					class="mb-10 lg:mb-5 flex flex-col justify-center items-center lg:justify-between lg:items-start text-center lg:text-left tracking-wide space-y-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8 text-primary-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>

					<h5 class="text-xl"><b>Ease of Use</b></h5>

					<p class="leading-tight">
						Misiki Panel is extremely user-friendly and can be used by those with little experience
						in website development.
					</p>
				</div>

				<div
					class="mb-10 lg:mb-5 flex flex-col justify-center items-center lg:justify-between lg:items-start text-center lg:text-left tracking-wide space-y-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8 text-primary-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
						></path>
					</svg>

					<h5 class="text-xl"><b>Powerful</b></h5>

					<p class="leading-tight">
						A wide variety of tools to satisfy advanced user and website developer needs.
					</p>
				</div>

				<div
					class="flex flex-col justify-center items-center lg:justify-between lg:items-start text-center lg:text-left tracking-wide space-y-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8 text-primary-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
					</svg>

					<h5 class="text-xl"><b>VUE Optimized</b></h5>

					<p class="leading-tight">
						Get more speed, better SEO, visitor retention and conversions with our custom-built VUE
						optimization stack and LiteSpeed cache.
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- User-Friendly Control Panel end -->
</section>
