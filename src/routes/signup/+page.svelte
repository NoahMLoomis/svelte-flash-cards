<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex items-center justify-center">
	<div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
		<h1 class="text-2xl font-medium mb-6">Sign Up</h1>
		{#if $page.status === 500}
			<h1 class="bg-red-300 my-2 rounded ">{$page.form.error}</h1>
		{/if}
		<form method="POST" action="?/signup">
			<div class="mb-4">
				<label for="email" class="block mb-2 text-sm font-medium text-gray-600">Email Address</label
				>
				<input
					id="email"
					name="email"
					class="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					placeholder="Enter your email"
					required
					value={$page.form?.email ?? ""}
				/>
				{#if $page.status === 400}
					<p class="text-red-400 ml-2 mt-2">{$page.form.error}</p>
				{/if}
			</div>

			<div class="mb-6">
				<label for="password" class="block mb-2 text-sm font-medium text-gray-600">Password</label>
				<input
					type="password"
					id="password"
					name="password"
					class="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					placeholder="Enter your password"
					required
				/>
			</div>

			<div class="flex items-center justify-between">
				<button
					type="submit"
					class=" transition-colors px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>Sign up</button
				>
				<a href="/login" class="text-sm font-medium text-blue-500 hover:text-blue-600"
					>Already have an account? Login</a
				>
			</div>
		</form>
	</div>
</div>
