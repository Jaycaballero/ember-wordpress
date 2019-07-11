import { helper } from '@ember/component/helper';

export function locationAddress(address1, address2, address3) {
  let fullAddress = [];

  if (address1) {
    fullAddress.push(address1);
  }
  if (address2) {
    fullAddress.push(address2);
  }
  if (address3) {
    fullAddress.push(address3);
  }

  return fullAddress[0].join(', ');
}

export default helper(locationAddress);
