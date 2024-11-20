/* eslint-disable @typescript-eslint/no-require-imports */
const invariant = require("tiny-invariant");
const { resolve } = require("path");

// import invariant from 'tiny-invariant';
// import { resolve } from 'path';

invariant(
  process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE,
  'NEXT_PUBLIC_DEFAULT_LANGUAGE is required, but not set, check your .env file'
);

const isMultilangEnable =
  process.env.NEXT_PUBLIC_ENABLE_MULTI_LANG === 'true' &&
  !!process.env.NEXT_PUBLIC_AVAILABLE_LANGUAGES;

function generateLocales() {
  if (isMultilangEnable) {
    return process.env.NEXT_PUBLIC_AVAILABLE_LANGUAGES.split(',');
  }

  console.log("aaaaaaaaaaaaaaa", process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE)

  return [process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE];
}

module.exports = {
  i18n: {
    defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE ?? 'es',
    locales: generateLocales(),
  },
  react: { useSuspense: false },
  localePath: resolve('./public/locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}
