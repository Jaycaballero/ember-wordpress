import { helper } from '@ember/component/helper';

export function locationAddress(params) {
  let [address1, town, county] = params;
  let fullAddress = [];

  if (address1) {
    fullAddress.push(address1);
  }
  if (town) {
    fullAddress.push(town);
  }
  if (county) {
    fullAddress.push(county);
  }

  return fullAddress.join(', ');
}

export default helper(locationAddress);
