/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

export type User = {
  email: string,
  password: string,
}

export type Medium = {
  id: string,
  name: string,
  upload_url: string,
  transcription: string,
  summary: undefined | string,
}

export enum FormState {
	Ready,
	Submitted,
	Success,
	Error,
}
