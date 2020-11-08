import deepMap from 'deep-map-object';
import isISODate from 'is-iso-date';

const parseDate = value => (isISODate(value) ? new Date(value) : value);

// Parse all dates automatically
export default function ({ $axios }) {
  $axios.onResponse(config => {
    config.data = deepMap(parseDate)(config.data);

    return config;
  });
}
