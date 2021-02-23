declare type Address = [string, string, string, string];
export declare type NormalizedAddress = [string, string, string];
export declare const generateAddressListFromText: (rawData: string) => Address[];
export declare const extractTargetAddress: (postCodeBack: string, addressList: Address[]) => Address[];
export declare const normalizeAddressList: (addressList: Address[]) => NormalizedAddress[];
export {};
