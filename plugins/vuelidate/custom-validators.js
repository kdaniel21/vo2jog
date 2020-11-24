import { helpers } from 'vuelidate/lib/validators';

export const alphaDiacritic = helpers.regex('alphaDiacritic', /^[a-zA-ZÀ-ž]*$/);

export const alphaWhiteDiacritic = helpers.regex(
  'alphaWhiteDiacritic',
  /^[a-zA-ZÀ-ž\s]*$/
);

export const alphaNumDiacritic = helpers.regex(
  'alphaDiacritic',
  /^[a-zA-Z0-9À-ž]*$/
);

export const alphaNumWhiteDiacritic = helpers.regex(
  'alphaNumWhiteDiacritic',
  /^[a-zA-Z0-9À-ž\s]*$/
);
