<script lang="ts">
	import { user } from '$lib/stores';
	import Surreal from 'surrealdb.js';
	import { goto } from '$app/navigation';
	import { PUBLIC_SURREAL_URL, PUBLIC_SURREAL_DATABASE, PUBLIC_SURREAL_NAMESPACE } from '$env/static/public';
  import AtomicLoader from '$lib/AtomicLoader.svelte';
	import { FormState } from "$lib/globals.d.ts";

	const db = new Surreal(`${PUBLIC_SURREAL_URL}/rpc`);

	let error: undefined | string;
	let state = FormState.Ready;

	enum SignInUp {
		Signin,
		Signup
	}
	let signinOrUp = SignInUp.Signin;
	function signinUpTransition(): void {
		if (signinOrUp == SignInUp.Signin) {
			signinOrUp = SignInUp.Signup;
		} else {
			signinOrUp = SignInUp.Signin;
		}
	}

	let email: string, password: string, passwordConfirmation: string;

	async function signin(email: string, password: string): Promise<void> {
		state = FormState.Submitted;
		try {
			await db.signin({
				NS: PUBLIC_SURREAL_NAMESPACE,
				DB: PUBLIC_SURREAL_DATABASE,
				SC: 'end_user',
				email,
				pass: password
			});
			user.set({ email, password });
			goto('/profile');
		} catch (e) {
			state = FormState.Error;
			error = e.toString();
			console.log(e);
		}
	}

	async function signup(email: string, password: string): Promise<void> {
		state = FormState.Submitted;
		try {
			await db.signup({
				NS: PUBLIC_SURREAL_NAMESPACE,
				DB: PUBLIC_SURREAL_DATABASE,
				SC: 'end_user',
				email,
				pass: password
			});
			user.set({ email, password });
			goto('/profile');
		} catch (e) {
			state = FormState.Error;
			error = e.toString();
			console.log(e);
		}
	}

	function validation(): void {
		if (password != passwordConfirmation) {
			state = FormState.Error;
			error = 'password confirmation does not match password';
		} else {
			state = FormState.Ready;
			error = undefined;
		}
	}
</script>

<div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="w-full max-w-md space-y-8 z-10">
		<div>
			<img
				class="mx-auto h-12 w-auto"
				src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
				alt="Your Company"
			/>
			<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
				{#if signinOrUp == SignInUp.Signin}
					Sign in to your account
				{:else}
					Sign up for an account
				{/if}
			</h2>
			<p class="mt-2 text-center text-sm text-gray-600">
				Or
				<button
					class="font-medium text-indigo-600 hover:text-indigo-500"
					on:click={signinUpTransition}
				>
					{#if signinOrUp == SignInUp.Signin}
						Signup
					{:else}
						Signin
					{/if}
				</button>
			</p>
		</div>

		{#if state == FormState.Error}
			<div class="rounded-md bg-red-50 p-4">
				<div class="flex">
					<div class="flex-shrink-0">
						<!-- Heroicon name: mini/x-circle -->
						<svg
							class="h-5 w-5 text-red-400"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="ml-3">
						<h3 class="text-sm font-medium text-red-800">There were errors with your submission</h3>
						<div class="mt-2 text-sm text-red-700">
							<ul class="list-disc space-y-1 pl-5">
								<li>{error}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		{/if}

		<form class="mt-8 space-y-6" action="#" method="POST">
			<input type="hidden" name="remember" value="true" />
			<div class="-space-y-px rounded-md shadow-sm">
				<div>
					<label for="email-address" class="sr-only">Email address</label>
					<input
						id="email-address"
						name="email"
						type="email"
						autocomplete="email"
						required
						class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
						placeholder="Email address"
						bind:value={email}
					/>
				</div>
				<div>
					<label for="password" class="sr-only">Password</label>
					<input
						id="password"
						name="password"
						type="password"
						autocomplete="current-password"
						required
						class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
						placeholder="Password"
						bind:value={password}
					/>
				</div>
				{#if signinOrUp == SignInUp.Signup}
					<div>
						<label for="password-confirmation" class="sr-only">Password Confirmation</label>
						<input
							id="password-confirmation"
							name="password-confirmation"
							type="password"
							required
							class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
							placeholder="Password Confirmation"
							bind:value={passwordConfirmation}
							on:input={validation}
						/>
					</div>
				{/if}
			</div>

			<div class="flex items-center justify-between">
				<div class="flex items-center">
					<input
						id="remember-me"
						name="remember-me"
						type="checkbox"
						class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
					/>
					<label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
				</div>

				<div class="text-sm">
					<button class="font-medium text-indigo-600 hover:text-indigo-500"
						>Forgot your password?</button
					>
				</div>
			</div>

			<div>
				<button
					type="button"
					class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					on:click={() =>
						signinOrUp == SignInUp.Signin ? signin(email, password) : signup(email, password)}
				>
					<span class="absolute inset-y-0 left-0 flex items-center pl-3">
						<!-- Heroicon name: mini/lock-closed -->
						<svg
							class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
					{#if state == FormState.Submitted}
						<AtomicLoader />
					{:else if signinOrUp == SignInUp.Signin}
						Sign in
					{:else if signinOrUp == SignInUp.Signup}
						Sign up
					{/if}
				</button>
			</div>
		</form>
	</div>
</div>
