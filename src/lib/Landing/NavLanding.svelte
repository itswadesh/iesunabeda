<style>
.nav {
	margin-left: 0.5rem;
	margin-right: 0.5rem;
	padding: 0.25rem 0.75rem;
	border-radius: 0.5rem;
	text-transform: uppercase;
	display: block;
}
.btn {
	display: block;
	background-image: url(/right-shadow.svg), url(/right-chevron.svg);
	background-position: 107% 100%, 90% 50%;
	background-size: auto 140%, 6px 740px;
	background-repeat: no-repeat, no-repeat;
	background-attachment: scroll, scroll;
}
.btn-yellow {
	box-shadow: 1px 1px 3px 0 #fdc700;
	background-color: #fdc700;
	padding-left: 2rem;
	padding-right: 2rem;
	font-weight: 600;
	--text-opacity: 1;
	color: #000;
	color: rgba(0, 0, 0, var(--text-opacity));
	transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow,
		transform;
	transition-duration: 0.5s;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	--transform-translate-x: 0;
	--transform-translate-y: 0;
	--transform-rotate: 0;
	--transform-skew-x: 0;
	--transform-skew-y: 0;
	--transform-scale-x: 1;
	--transform-scale-y: 1;
	transform: translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y))
		rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y))
		scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));
}
.frosted {
	backdrop-filter: blur(12px);
	background-color: hsla(0, 0%, 100%, 0.6);
}
</style>

<script>
import GrnIndGradiantButton from '$lib/ui/GrnIndGradiantButton.svelte'
import { lazyload } from './../../actions/lazyload'
import { CDN_URL } from './../../../config'
import { Menu } from 'svelte-hero-icons'

let loading = false
let showSidebar = false

function getLoginUrl() {
	return `https://admin.misiki.in/otplogin`
}
function toggle() {
	return (showSidebar = !showSidebar)
}
function closeSidebar() {
	return (showSidebar = false)
}
</script>

<nav class="w-full fixed top-0 z-50 frosted shadow">
	<div class="container mx-auto max-w-7xl px-2 sm:px-10">
		<div class="flex items-center justify-between py-3">
			<div class="flex items-center w-full">
				<a
					href="/"
					title="Link to home page"
					rel="prefetch"
					aria-label="Misiki"
					class="
              flex
              items-center
              text-3xl
              font-bold
              underline
            ">
					<img src="{`${CDN_URL}/logo.png`}" alt="Misiki" class="h-8 mr-2" />
				</a>
			</div>
			<div
				class="
            flex
            items-center
            flex-shrink-0
            text-xs
            font-semibold
            tracking-wide
          ">
				<div class="hidden sm:flex items-center">
				
				</div>

				<aside class="z-50 sm:hidden">
					<div
						on:click="{toggle}"
						class="bg-gray-200 rounded-md flex items-center justify-center h-8 w-8">
						{#if !showSidebar}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"></path>
							</svg>
						{:else}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"></path>
							</svg>
						{/if}
					</div>
				</aside>

				<!-- <button
            aria-label="Open Menu"
            class="p-2 bg-gray-100 rounded focus:outline-none lg:hidden"
          >
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 fill-current"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 12a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM2 6a1 1 0
              011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM2 18a1 1 0 011-1h18a1 1 0
              110 2H3a1 1 0 01-1-1z"
              ></path>
            </svg>
          </button> -->
			</div>
		</div>
	</div>

	{#if showSidebar}
		<div class="absolute z-40 inset-0 h-screen bg-white animate-slide">
			<div class="px-6 py-14 flex flex-col space-y-5">
				<a
					href="/pricing"
					title="Pricing"
					class="mr-5 flex items-center space-x-2 text-gray-800 active:text-primary-700"
					on:click="{closeSidebar}">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg>
					<h6 class="flex-1">Pricing</h6>
				</a>

				<a
					href="{getLoginUrl()}"
					title="Login"
					class="mr-5 flex items-center space-x-2 text-gray-800 active:text-primary-700"
					on:click="{closeSidebar}">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
						></path>
					</svg>
					<h6 class="flex-1">Login</h6>
				</a>

				<a
					href="{getLoginUrl()}"
					title="Get Started"
					rel="prefetch"
					class="mr-5 flex items-center space-x-2 text-gray-800 hover:text-primary-700"
					on:click="{closeSidebar}">
					<GrnIndGradiantButton
						loadingringsize="xs"
						loading="{loading}"
						on:click="{() => (loading = true)}">
						Get Started
					</GrnIndGradiantButton>
				</a>
			</div>
		</div>
	{/if}
</nav>
