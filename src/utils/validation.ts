const validateNumberString = (str: string) => {
  // isNaN() 함수를 사용하여 문자열이 NaN이 아니면 true, 그렇지 않으면 false를 반환합니다.
  return isNaN(Number(str));
};

const validatePhoneNumber = (phoneNumber: string) => {
  const phoneNumberPattern = /^01[016789]\d{7,8}$/;
  //   if (!phoneNumber.match(/^\d+$/)) {
  //     return false;
  //   }
  return phoneNumber.length === 0 || phoneNumberPattern.test(phoneNumber);
};

const validateTelNumber = (phoneNumber: string) => {
  if (phoneNumber.length === 0) {
    return true;
  }
  // 숫자가 아닌 문자 제거
  phoneNumber = phoneNumber.replace(/\D/g, '');

  // 유효한 전화번호 패턴 확인
  const phoneNumberPattern = /^\d{10,11}$/;
  if (!phoneNumberPattern.test(phoneNumber)) {
    return false;
  }

  // 국가번호를 제외한 번호가 10자리인 경우에는 0으로 시작해야 함
  if (phoneNumber.length === 10 && phoneNumber[0] !== '0') {
    return false;
  }

  // 국가번호를 포함한 번호가 11자리인 경우에는 01X로 시작해야 함
  if (phoneNumber.length === 11 && !/^01\d{1}$/.test(phoneNumber.substr(0, 3))) {
    return false;
  }

  return true;
};

const validatePassword = (password: string) => {
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (password.length === 0) {
    return true;
  }
  return passwordPattern.test(password);
};
export { validatePhoneNumber, validateNumberString, validateTelNumber, validatePassword };
