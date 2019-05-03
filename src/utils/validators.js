export const required = value => (value ? undefined : 'Required Field');

export const maxLength = max => value =>
  value && value.length > max
    ? `Cannot Be Longer Than ${max} Characters`
    : undefined;

export const minLength = min => value =>
  value && value.length < min
    ? `Must Be At Least ${min} Characters`
    : undefined;

export const length = length => value =>
  value && value.length !== length
    ? `Must Be ${length} Characters Long`
    : undefined;

export const number = value =>
  value && isNaN(Number(value)) ? 'Must Be A Number' : undefined;

export const positiveNumber = value =>
  value && Number(value) < 0 ? 'Number Must Be Positive' : undefined;

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid Email Address'
    : undefined;

export const password = value => {
  const isEightChars = /^.{8,}/.test(value);
  const hasUpperCaseChar = /[A-Z]/.test(value);
  const hasLowerCaseChar = /[a-z]/.test(value);
  const hasANumber = /\d/.test(value);

  // Allow a falsy value here, since we cover that with the required validator
  return !value ||
    (isEightChars &&
      hasUpperCaseChar &&
      hasLowerCaseChar &&
      hasLowerCaseChar &&
      hasANumber)
    ? undefined
    : 'Passwords Must Be At Least 8 Characters, Include One Capital Letter, One Lower Case Letter, And One Number.';
};

export const emailMatch = (value, allValues) =>
  value !== allValues.email ? 'Email Does Not Match' : undefined;

export const passwordsMatch = (value, allValues) =>
  value !== allValues.password ? 'Passwords Do Not Match' : undefined;

export const currentPasswordRequired = (value, allValues) =>
  !allValues.currentPassword &&
  (allValues.password || allValues.passwordConfirmation)
    ? 'Current Password Is Required'
    : undefined;

export const phoneNumber = value => {
  if (
    !/^[2-9][0-9]{2}[2-9][0-9]{6}$/.test(String(value).replace(/[^\d]/g, ''))
  ) {
    return 'Valid Phone Number Is Required';
  }
};

export const minLength2 = minLength(2);
export const minLength4 = minLength(4);
export const minLength8 = minLength(8);

export const maxLength40 = maxLength(40);
export const maxLength55 = maxLength(55);
export const maxLength60 = maxLength(60);
export const maxLength80 = maxLength(80);
export const maxLength255 = maxLength(255);

export const length2 = length(2);
export const length5 = length(5);
