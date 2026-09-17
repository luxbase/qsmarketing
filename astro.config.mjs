import { defineConfig } from 'astro/config';

const getBase = () => {
    if (process.env.GITHUB_REPOSITORY) {
        return `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`;
    }
    return '/qsmarketing/';
};

// https://astro.build/config
export default defineConfig({
    site: 'https://luxbase.github.io',
    base: getBase()
});

