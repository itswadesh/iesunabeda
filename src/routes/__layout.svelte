<style>
.minimum-width {
	min-width: 310px;
}
</style>

<script context="module" lang="ts">
export async function load({ session: { user, token } }) {
	return { props: { user } }
}
</script>

<script>
import '../global.css'
import PageTransitions from '$lib/PageTransitions.svelte'
import NavLanding from '$lib/Landing/NavLanding.svelte'
import Footer from '$lib/Footer.svelte'
import { getStores, navigating, page } from '$app/stores'
import { ToastContainer, FlatToast } from 'svelte-toasts'
import GoogleAnalytics from '$lib/components/GoogleAnalytics.svelte'

let user
</script>

<PageTransitions refresh="{$page.path}">
	<section class="bg-gray-50 font-sans antialiased minimum-width">
		<div>
			<NavLanding />
		</div>

		<div class="mt-14">
			<slot />
		</div>

		<div>
			<Footer />
		</div>
	</section>
</PageTransitions>

<ToastContainer let:data>
	<FlatToast data="{data}" />
</ToastContainer>
<GoogleAnalytics />
