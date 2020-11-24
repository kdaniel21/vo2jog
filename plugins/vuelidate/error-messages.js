import { alphaWhiteDiacritic } from './custom-validators';

export default {
  required: 'This field is required!',
  email: 'Invalid email address!',
  passwordConfirmMatch: 'Your two passwords are not matching!',
  minLength: 'The {attribute} needs to be at least {min} characters long!',
  maxLength: 'This field cannot be longer than {max} characters!',
  url: 'Invalid URL format!',
  alphaNum: 'This field can only contain letters or numbers!',
  alphaNumDiacritic: 'This field can only contain letters or numbers!',
  alphaNumWhiteDiacritic: 'This field can only contain letters or numbers!',
  alpha: 'This field can only contain letters!',
  alphaWhite: 'This field can only contain letters!',
  alphaWhiteDiacritic: 'This field can only contain letters!',
  text: 'This field can only contain letters, numbers and punctuation marks!',
  dateLater: 'The date must come later than {min}',
};
