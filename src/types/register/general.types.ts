
export interface UseOtpResult {
    value: string;
    valid: boolean;
    loading: boolean;
    error: string | null;
    setValue: (val: string) => void;
    submitOtp: () => Promise<boolean>;
}

export interface UseEmailResult {
    valueEmail: string;
    validEmail: boolean;
    loadingEmail: boolean;
    errorEmail: string | null;
    setValueEmail: (val: string) => void;
    submitEmail: () => Promise<boolean>;
}
export interface UsePasswordResult {
    valuePassword: string;
    validPassword: boolean;
    loadingPassword: boolean;
    errorPassword: string | null;
    setValuePassword: (val: string) => void;
    submitPassword: () => Promise<boolean>;
}
export interface UseMasterKeyResult {
    valueMasterKey: string;
    validMasterKey: boolean;
    loadingMasterKey: boolean;
    errorMasterKey: string | null;
    setValueMasterKey: (val: string) => void;
    submitMasterKey: () => Promise<boolean>;
}