<style>
.pattern {
	background: linear-gradient(120deg, #10b981, #6366f1, #10b981, #6366f1, #10b981);
	/* background-image: url('./static/bg-header.svg'); */
}
.try {
	color: white;
	background-color: #0670f4;
	background-image: url(/static/ellipses.svg);
	background-position: 0 50%;
	background-size: cover;
	box-shadow: 0 10px 62px 0 rgb(8 116 249 / 50%);
}
.frosted {
	backdrop-filter: blur(12px);
	background-color: hsla(0, 0%, 100%, 0.6);
}
.frosted-btn {
	backdrop-filter: blur(12px);
	background-color: hsla(0, 0%, 100%, 0.7);
}
.yellow {
	background-color: #fdc700;
}
</style>

<script>
function getLoginUrl() {
	return `https://admin.misiki.in/otplogin`
}
</script>

<div class="container mx-auto max-w-7xl px-4 sm:px-10">
	<div
		class="
        lg:flex lg:items-center lg:justify-between
        p-6
        md:p-10
        lg:p-12
        try
        rounded-lg
      ">
		<h2 class="text-center lg:text-left lg:w-2/5 xl:w-1/2">
			<div class="text-2xl font-semibold">Own your own ecommerce brand</div>
			<div class="text-xl text-gray-200 mt-3">We are here to get you started</div>
		</h2>

		<div
			class="
          mt-5
          lg:mt-0
          flex flex-wrap
          items-center
          justify-center
          lg:justify-end lg:w-3/5
          xl:w-1/2
          lg:space-x-5
          whitespace-nowrap
          font-semibold
        ">
			<a
				href="https://calendly.com/misiki/15min"
				target="_blank"
				rel="noopener"
				class="
            m-3
            sm:m-5
            lg:m-0
            rounded-full
            px-8
            xl:px-7
            py-3
            sm:py-4
            border border-white
            text-white
            bg-blue-700
            transform
            hover:-translate-y-0.5
            transition
            duration-700
            flex
            items-center
            space-x-5
          ">
				<span class="z-10">Schedule a Demo</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor">
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
						clip-rule="evenodd"></path>
				</svg>
			</a>
			<a
				href="{getLoginUrl()}"
				class="
            m-3
            sm:m-5
            lg:m-0
            rounded-full
            px-8
            xl:px-7
            py-3
            sm:py-4
            border border-gray-800
            text-gray-800 bg-gray-100
            transform
            hover:-translate-y-0.5
            transition
            duration-700
            flex
            items-center
            space-x-5
          ">
				<span class="z-10">Get Started</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor">
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
						clip-rule="evenodd"></path>
				</svg>
			</a>
		</div>
	</div>
</div>
