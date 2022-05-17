export const PASSWORD_REGEX: RegExp =
  /^(?=.{8,16}$)(?=.*\d)(?=.*[\^\$*.[\]{}()?\-"!@#%&\/\\,><':;|_~`+=])((?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z])).*$/;