import {
  APPLICATION_UPDATE
} from './types';
// INPUT is an OBJECT: { prop: , value: }
export const applicationUpdate = ({ prop, value }) => {
  return {
    type: APPLICATION_UPDATE,
    payload: { prop, value }
  };
};
