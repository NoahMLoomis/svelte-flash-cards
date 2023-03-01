<div class="flex items-center justify-center">
	<div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md">

		<h1 class="text-2xl font-medium mb-6">Sign Up</h1>

		<form method="POST" action="?/signup">
			<div class="mb-4">
				<label for="email" class="block mb-2 text-sm font-medium text-gray-600">Email Address</label
				>
				<input
					type="email"
					id="email"
					name="email"
					class="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					placeholder="Enter your email"
					required
				/>
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
