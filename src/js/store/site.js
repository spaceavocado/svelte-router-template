/**
 * Site core data store
 */

import {readable} from 'svelte/store';

export let site;

export function createSite(params) {
  site = readable(params);
  return site;
};
