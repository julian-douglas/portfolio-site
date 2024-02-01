// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vue from 'vue';
import DefaultLayout from '~/layouts/Default.vue';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  
  // Add any additional configuration you may have here

  // For example, you can set a meta tag in the head
  head.meta.push({
    name: 'theme-color',
    content: '#1a1a1a', // Set the theme color for mobile browsers
  });
}