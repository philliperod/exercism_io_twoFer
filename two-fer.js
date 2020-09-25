//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (name) => {
  return `One for ${name || 'you'}, one for me.`;
};
// you're setting a default value for the input
// the function will return a value that it can coerce to true
// if given a input then it will return the statement with the given input which is interpolate into it; a string will make the value true
// if given no input then it will use the default value in the statement since no input is false
