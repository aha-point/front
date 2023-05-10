import { useState, useEffect } from 'react';
type StoreSignupInfo = {
  id: string;
  validationCode: string;
  password: string;
  passwordForCheck: string;
  storeName: string;
  storeNumber: string;
  storeAddress: string;
  businessType: string;
  accumulatePercentage: number;
  imageURL: string;
};
type StoreSignupInfoKeys = keyof StoreSignupInfo;

const useSignup = () => {
  const [signupInfo, setSignupInfo] = useState<StoreSignupInfo>({
    id: '',
    validationCode: '',
    password: '',
    passwordForCheck: '',
    storeName: '',
    storeNumber: '',
    storeAddress: '',
    businessType: '',
    accumulatePercentage: 0,
    imageURL: '',
  });
  const handleSignupInfo = ({
    key,
    value,
  }: {
    key: StoreSignupInfoKeys;
    value: string | number;
  }) => {
    setSignupInfo((previous) => {
      return { ...previous, [key]: value };
    });
  };

  useEffect(() => {
    console.log(signupInfo);
  }, [signupInfo]);

  return { signupInfo, handleSignupInfo };
};
export default useSignup;
