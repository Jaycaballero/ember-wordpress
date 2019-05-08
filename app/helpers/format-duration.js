import { helper } from '@ember/component/helper';

export function formatDuration(durationInDays) {
  if (durationInDays > 1) {
    return `${durationInDays} Days`;
  }
  return `${durationInDays} Day`;
}

export default helper(formatDuration);
