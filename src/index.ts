import {
  generateAddressListFromText,
  extractTargetAddress,
  normalizeAddressList,
  NormalizedAddress,
} from './address';
import fetchCsv from './fetchCsv';

const KenAll = async (postCode: string): Promise<NormalizedAddress[]> => {
  if (typeof postCode !== 'string') {
    throw new Error('The argument must be a string.');
  }
  if (!/^[0-9]{7}$/.test(postCode)) {
    throw new Error('The post code is always seven digits half-width numbers.');
  }

  const res = await fetchCsv(postCode.slice(0, 3));
  if (res.status === 404) {
    return [];
  }
  if (res.status >= 400) {
    throw new Error('Network error.');
  }

  const rawData: string = await res.text();

  const addressList = generateAddressListFromText(rawData);
  const targetList = extractTargetAddress(postCode.slice(3), addressList);
  return normalizeAddressList(targetList);
};

export default KenAll;
