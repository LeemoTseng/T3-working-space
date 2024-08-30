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


import { S as Swiper } from '../../../../node_modules/swiper/shared/swiper-core.mjs';

import Navigation from '../../../../node_modules/swiper/modules/navigation.mjs';
import Pagination from '../../../../node_modules/swiper/modules/pagination.mjs';

import Autoplay from '../../../../node_modules/swiper/modules/autoplay.mjs';


// Swiper Class
const modules = [Navigation, Pagination, Autoplay];
Swiper.use(modules);

export { Swiper, Swiper as default };
