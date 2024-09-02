/**
 * Swiper 11.1.9
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2024 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: July 31, 2024
 */


import { S as Swiper } from './swiper-core.mjs';

import Navigation from './navigation.mjs';
import Pagination from './pagination.mjs';
import Autoplay from './autoplay.mjs';


// Swiper Class
const modules = [Navigation, Pagination, Autoplay];
Swiper.use(modules);

export { Swiper, Swiper as default };
