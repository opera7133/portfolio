import { RouteDataFunc } from 'solid-app-router';
import { list } from './Works.data';

export const WorksPageData: RouteDataFunc = (props) => {
  return {
    get slug() {
      return props.params.slug;
    },
    get details() {
      return list[props.params.slug];
    },
  };
};