/// <reference types="vite/cliient" />

interface ImportMetaEnv {
	readonly VITE_DATABASE_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
