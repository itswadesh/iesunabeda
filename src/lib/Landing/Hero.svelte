<style>
.under {
	background-image: linear-gradient(45deg, #fcdb6f, #fdcf01);
}

@media (min-width: 1024px) {
	.background {
		background-image: url('/home/bg-lighter.svg');
		/* background-image: url('/home/landscape-background.webp'); */
	}
}

@media (max-width: 1024px) {
	.background {
		/* background-image: url('/home/background.webp'); */
		background-image: url('/home/bg-lighter.svg');
	}
}
</style>

<script>
import GrnIndGradiantButton from '$lib/ui/GrnIndGradiantButton.svelte'
let loading = false
</script>

<section class="background bg-no-repeat bg-cover">
	<div class="container mx-auto max-w-7xl p-4 sm:p-10 lg:flex lg:items-start lg:justify-between">
		<div class="mx-2 lg:w-1/2">
			<h1
				class="
            text-5xl
            font-black
            text-center text-gray-800
            md:text-6xl
            lg:text-left
            tracking-wide
            leading-tight
          ">
				AMIE Sunabeda
				<div class="my-0.5 md:my-2 lg:my-3">for engineers</div>
			</h1>

			<div class="flex items-start pt-6">
				<div class="lg:text-xl mx-auto max-w-max">
					<div
						class="
                flex
                text-center
                start
                md:text-lg md:text-center
                lg:text-left
              ">
						Yes, you read that right! We get you all the facilities that you need to sell online. Click
						bellow to create your own website, add your products, and start selling!
					</div>
				</div>
			</div>

			<div class="flex-col mx-5 md:mx-0">
				<div class="flex justify-center lg:justify-start email">
					<a href="/">
						<GrnIndGradiantButton
							class="w-72 mt-10 py-3 text-lg"
							loadingringsize="lg"
							loading="{loading}"
							on:click="{() => (loading = true)}">
							Launch your store now
						</GrnIndGradiantButton>
					</a>
			</div>
		</div>

		<div class="pt-10 lg:pt-0 flex justify-center  lg:w-1/2">
			Demo Video
		</div>
	</div>
</section>
