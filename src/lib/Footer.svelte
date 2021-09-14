<style>
.mw-600 {
	max-width: 400px;
}
.purple {
	background-color: #261b48;
}
.deeppurple {
	background-color: #32235e;
}
.sub {
	background-color: #0874f9;
}
.connect {
	color: #fddf00;
	font-size: 20px;
	line-height: 29px;
	font-weight: 600;
}
.pro {
	text-align: left;
	color: #fddf00;
}
.form {
	color: #9385be;
}
.form:hover {
	color: white;
}
.reserved {
	color: rgba(121, 105, 165, 0.43);
}

.btn {
	display: block;
	background-image: url(/right-shadow.svg), url(/right-chevron.svg);
	background-position: 107% 100%, 90% 50%;
	background-size: auto 140%, 6px 740px;
	background-repeat: no-repeat, no-repeat;
	background-attachment: scroll, scroll;
}
.btn:hover {
	@apply -translate-y-1;
}
.btn-blue {
	box-shadow: 1px 1px 3px 0 rgba(8, 116, 249, 0.4);
	@apply px-12 font-bold text-white uppercase transition duration-500 ease-in-out transform bg-blue-600 rounded-full;
}
.btn-blue:hover {
	@apply bg-blue-500;
}
.margin {
	margin-right: -1px;
	margin-bottom: -1.5px;
}
</style>

<script>
const d = new Date()
const year = d.getFullYear()
let formData, email

function encode(data) {
	Object.keys(data)
		.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&')
}
function goto() {}

function handleSubmit(e) {
	fetch('https://automation.litekart.in/api/email/subscribe', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			'form-name': e.target.getAttribute('name'),
			...formData,
		}),
	})
		.then(() => goto('/success'))
		.catch((error) => alert(error))
}
</script>

<section class="items-end mt-12 lg:flex">
	<div class="flex flex-col items-center w-full px-8 pt-10 pb-10 lg:items-start purple lg:w-1/2">
		<div class="w-full lg:mr-24 mw-600">
			<div class="flex items-center justify-center mb-8 lg:justify-start">
				<img src="/icon.png" alt="logo" class="h-8 sm:h-10 mr-2" />

				<div
					class="text-2xl sm:text-3xl font-bold text-transparent
              bg-clip-text bg-gradient-to-br from-secondary-500 to-primary-500 tracking-wide">
					MISIKI
				</div>
			</div>

			<div class="flex flex-wrap items-start justify-between text-center">
				<div class="">
					<div class="mb-2 pro">PRODUCTS</div>

					<ul class="text-sm leading-relaxed tracking-wide text-left">
						<li class="my-1">
							<a href="/faq" class="py-2 form"> FAQs </a>
						</li>
					</ul>
				</div>

				<div class="px-5 lg:px-0">
					<div class="mb-2 pro">RESOURCES</div>

					<ul class="text-sm leading-relaxed tracking-wide text-left">
					
						<li class="my-1">
							<a href="/videos" class="py-2 form"> Videos </a>
						</li>

						<li class="my-1">
							<a href="/live-projects" class="py-2 form">Live Projects</a>
						</li>
					</ul>
				</div>

				<div class="mt-6 sm:mt-0">
					<div class="mb-2 pro">COMPANY</div>

					<ul class="text-sm leading-relaxed tracking-wide text-left">
						<li class="my-1">
							<a href="/legal/about-us" class="py-2 form"> About Us </a>
						</li>

						<li class="my-1">
							<a
								href="https://www.litekart.in/blog"
								rel="noopener"
								target="_blank"
								class="py-2 form">
								Blog
							</a>
						</li>

						<li class="my-1">
							<a href="/legal/contact" class="py-2 form"> Contact </a>
						</li>

					</ul>
				</div>
			</div>

			<div class="">
				<div class="flex justify-center pt-8 lg:justify-start">
					<a href="https://github.com/itswadesh" target="blank">
						<div class=" hover:bg-black p-2 h-8 w-8 rounded-full flex items-center justify-center">
							<img src="/icons/github-white.png" class="h-4 w-4 margin" alt="github" />
						</div>
					</a>

					<a href="https://www.facebook.com/codenx2" target="blank">
						<div class=" hover:bg-blue-700  h-8 w-8 rounded-full flex items-center justify-center">
							<img src="/icons/facebook-white.png" class="h-4 w-4 margin" alt="facebook" />
						</div>
					</a>

					<a href="https://twitter.com/itswadesh" target="blank">
						<div class=" hover:bg-blue-700  h-8 w-8 rounded-full flex items-center justify-center">
							<img src="/icons/twitter-white.png" class="h-4 w-4 margin" alt="twitter" />
						</div>
					</a>

					<a href="https://instagram.com/misiki" target="blank">
						<div class=" hover:bg-pink-700  h-8 w-8 rounded-full flex items-center justify-center">
							<img src="/icons/instagram-white.png" class="h-4 w-4 margin" alt="instagram" />
						</div>
					</a>

					<a href="https://linkedin.com/in/itswadesh" target="blank">
						<div
							class=" hover:bg-indigo-600  h-8 w-8 rounded-full flex items-center justify-center">
							<img src="/icons/linkedin-white.png" class="h-4 w-4 margin" alt="linkedin" />
						</div>
					</a>
				</div>

				<div class="pt-5 text-xs text-center lg:hidden flex items-center justify-center space-x-5">
					<a href="/legal/privacy-policy" class="hover:underline form">Privacy Policy</a>

					<a href="/legal/terms" class=" hover:underline form">User Agreement</a>

					<!-- <div class="pt-5 reserved">

              © 2020 Misiki Technologies. All Rights Reserved

            </div> -->
				</div>
			</div>
		</div>
	</div>

	<div class="order-1 w-full py-16 mx-auto lg:rounded-tl-lg lg:w-1/2 md:order-2 deeppurple">
		<div class="w-full lg:rounded-tl-lg">
			<div class="items-center lg:flex lg:justify-start lg:pl-12 ">
				<div class="text-center connect mr-2">STAY CONNECTED</div>

				<div class="text-xs text-center text-white lg:text-sm lg:flex-col">
					Get misiki news delivered straight to your inbox
				</div>
			</div>

			<form
				name="subscribers"
				method="post"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
				on:submit|preventDefault="{handleSubmit}">
				<div class="flex justify-start pt-10">
					<input type="hidden" name="form-name" value="subscribers" />

					<p hidden>
						<label> Don’t fill this out: <input name="bot-field" /> </label>
					</p>
				</div>

				<div class="flex justify-center lg:justify-start">
					<input
						type="email"
						name="email"
						bind:value="{email}"
						placeholder="you@yourmail.com"
						class="p-2 pl-5 text-gray-500 bg-white border rounded-lg mx-5 lg:mx-12 w-full max-w-sm" />
				</div>

				<div class="flex justify-center pt-5 lg:justify-start lg:pl-10">
					<button
						class="py-3 btn btn-blue transform hover:-translate-y-0.5 transition duration-700"
						name="subscribe"
						type="submit">
						SUBSCRIBE
					</button>
				</div>
			</form>

			<div class="flex pt-10 pb-8">
				<div class="hidden lg:flex">
					<a href="/legal/privacy-policy" class="pl-10 text-xs hover:underline form">
						Privacy Policy
					</a>

					<div class="pl-1 text-xs">.</div>

					<a href="/legal/terms" class="pl-1 text-xs hover:underline form"> User Agreement </a>
				</div>

				<div class="hidden ml-12 text-xs lg:flex form">
					© {year} Anju Ritik. All Rights Reserved
				</div>
			</div>

			<div class="flex items-center justify-center w-full font-bold text-white">
				<img src="/flags/india-flag.png" class="w-6 h-6 mr-2 rounded-full flag india" alt="flag" />

				<div class="">MADE IN INDIA</div>
			</div>
		</div>
	</div>
</section>
