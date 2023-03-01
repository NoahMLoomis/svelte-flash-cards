<script lang="ts">
	import type { ActionData } from './$types';
	import { page } from '$app/stores';

	export let form: ActionData;
	console.log($page.data.session)
</script>

<div class="flex items-center justify-center">
	<div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
		{#if form}
			{#if form.success}
				<h1 class="bg-green-200 shadow-lg rounded text-xl font-medium mb-6">Logged in</h1>
			{:else}
				<h1 class="bg-red-200 shadow-lg rounded text-xl font-medium mb-6">Error Loggin In</h1>
			{/if}
		{/if}
		{#if !$page.data.session}
			<h1 class="text-2xl font-medium mb-6">Login</h1>

			<form method="POST" action="?/login">
				<div class="mb-4">
					<label for="email" class="block mb-2 text-sm font-medium text-gray-600"
						>Email Address</label
					>
					<input
						type="email"
						id="email"
						class="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						placeholder="Enter your email"
						name="email"
						required
					/>
				</div>

				<div class="mb-6">
					<label for="password" class="block mb-2 text-sm font-medium text-gray-600">Password</label
					>
					<input
						type="password"
						id="password"
						class="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						placeholder="Enter your password"
						name="password"
						required
					/>
				</div>

				<div class="flex items-center justify-between">
					<button
						class=" transition-colors px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
						>Login</button
					>
					<a href="/signup" class="text-sm font-medium text-blue-500 hover:text-blue-600"
						>No Account? Sign up</a
					>
				</div>
			</form>
		{:else}
			<h1 class="text-2xl font-medium mb-6">
				You are already logged in:
				<form method="POST" action="?/logout">
					<button
						class="px-3 py-1 mt-2 font-extrabold bg-orange-300 rounded-lg text-center hover:no-underline shadow-lg"
					>
						Logout?
					</button>
				</form>
			</h1>
		{/if}
	</div>
</div>
