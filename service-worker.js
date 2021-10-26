/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2020/11/14/brower/Cache-Control/index.html","a76e3f7e41da3ad97c91370d53684dcb"],["/2020/11/14/brower/cache/index.html","bac8d383207c228365a551755ab20684"],["/2020/11/14/brower/cache2/index.html","d31543385cf635dbf400221f1b7b6444"],["/2020/11/14/brower/chrome-performance/index.html","3740c3a24ddbc575a0b273706663e4db"],["/2020/11/14/brower/repaint-reflow/index.html","0bb234e44b80b130612e53bdf78d4b74"],["/2020/11/14/css/bfc/index.html","ae0eb67a7142e6dbc83a03ef6e6f1ec6"],["/2020/11/14/css/css-box/index.html","e577c7f8bc966827f11d59dded66f16f"],["/2020/11/14/css/flex/index.html","3cd37ddfa23a65eed46fa78a62a173ef"],["/2020/11/14/css/hide/index.html","4151335f1ba8a6b0716dfc965be7badb"],["/2020/11/14/css/layer/index.html","8128cd9a7477384eeed447b0d75e0979"],["/2020/11/14/css/layer0/index.html","224e43bc3296a06487d89651976e1d15"],["/2020/11/14/database/Innodb/index.html","ce76259d05f6fcf5ec7a57659d400e02"],["/2020/11/14/database/centos-mongo/index.html","cad29c5c038702ad0496a163ee992952"],["/2020/11/14/database/mariadb-mysql/index.html","00eca245cb56c13d4c7c40ae43e49087"],["/2020/11/14/database/mongo-restore/index.html","cd819bb06c47557c36e335b3f611b865"],["/2020/11/14/database/mongoose-populate/index.html","f452ff0916f93e9b0a5cdbf9719065e6"],["/2020/11/14/database/mysql-transaction/index.html","9959320e11daed91c29d5b49741da8c7"],["/2020/11/14/database/mysql/index.html","06c262c3b37a1048927016cadb2e0b86"],["/2020/11/14/frame/cmd-amd-es6/index.html","0b13255d20c63508e7f2fafbc414e5f8"],["/2020/11/14/frame/express-session-mongo/index.html","04bb77dfff48c67f788beb6f84cb9bfa"],["/2020/11/14/frame/nuxt/index.html","1c86fd50d902a55b54ddac2196acab72"],["/2020/11/14/frame/react/index.html","5180512cd0648755775dc8074248a756"],["/2020/11/14/frame/vue-life/index.html","6dfe5212fb7496e7216e7aff1bdfca76"],["/2020/11/14/frame/vue-nextTick/index.html","cbbfed5b57526fab3e239aa7b80a26ee"],["/2020/11/14/frame/web-mvc/index.html","afe4c569bbe89643d93ee0693b831e8a"],["/2020/11/14/html/cors/index.html","07df49301bc518c4e9bc657cf9c84ec1"],["/2020/11/14/html/history-2/index.html","78f1e1341d11866195af3b1122ccc45f"],["/2020/11/14/html/history/index.html","0959245d34a56cd28bd0cdeb63b4c277"],["/2020/11/14/html/html-render/index.html","ee3104c500005a67933d06263d3a2f03"],["/2020/11/14/html/link-preload/index.html","a87013e34ff2868e653ed7270ebed01e"],["/2020/11/14/html/link/index.html","42cc61694d2d48fbd2c49f2e3da5947f"],["/2020/11/14/html/nofollow/index.html","a590deb098ad90cf3e04663df98fc7d2"],["/2020/11/14/html/video-auto-err/index.html","b89c0981b50abba9790dacfbb4744583"],["/2020/11/14/html/video-auto/index.html","217640b9d47feb5fc0f90bb76d63021d"],["/2020/11/14/html/video-play/index.html","fc11ea644cf3e0f1ef71cdeaf37adde8"],["/2020/11/14/html/video/index.html","a7b73ef84b87bbebef4145214097e1b8"],["/2020/11/14/js/MessageChannel/index.html","308dee4ca77675ad352cafead3c5d559"],["/2020/11/14/js/MutationObserver/index.html","c292ba83dc8b3bcc02c25945c8192ef1"],["/2020/11/14/js/addEventListener/index.html","355beaca0c6ac209d09702cc702a77cb"],["/2020/11/14/js/binary-tree/index.html","c50c8aeb290bd7e9bd219fc89ee8ac6a"],["/2020/11/14/js/bind-polyfill/index.html","dd37bf682a5dc38adb06d1411e583fa7"],["/2020/11/14/js/bind/index.html","c99ec197719c34a41c18f8668670bd33"],["/2020/11/14/js/color-hex-rgb/index.html","501778b1aa4a4b28d7f5ae17f517a30a"],["/2020/11/14/js/data-format/index.html","b134ead4683ff4ac73f7e1430fa6125f"],["/2020/11/14/js/dom/index.html","3ef89cb5ef5913977c4c0a4d0c575a64"],["/2020/11/14/js/es2020/index.html","af11882631a249edbac77d2eb019c8fb"],["/2020/11/14/js/es6-1/index.html","3ea49793a35b545b72c41883ac9cfe4c"],["/2020/11/14/js/es6-2/index.html","ea41954c683a3941b09bd3f129fe13cc"],["/2020/11/14/js/es6-3/index.html","2951489adb3aec1e9f3be1f72c64baf8"],["/2020/11/14/js/es6-4/index.html","dca121f61a7caeb4190137136c652d63"],["/2020/11/14/js/es6-5/index.html","0e6758dd107779fcb6a2cdd8f29078b6"],["/2020/11/14/js/es6-6/index.html","2cc689f4b4dd603c9592a01e810e79df"],["/2020/11/14/js/es6-7/index.html","aaa88de39f9f2e3f65f0b8b1aca43a6d"],["/2020/11/14/js/es6-module/index.html","f078d131ad3e27367eabf33155d1bef8"],["/2020/11/14/js/es6-next/index.html","e5145391861fd2a688f1dedfba6c706a"],["/2020/11/14/js/fetch/index.html","b18a2693badf96e08ea67955d6efd62f"],["/2020/11/14/js/fun-currying/index.html","a6a9204aaa7400d9c85171b8fc1b8a1b"],["/2020/11/14/js/fun-currying2/index.html","2309d89f1a72184f9af3fbd8a7c22f7d"],["/2020/11/14/js/fun-set/index.html","a0b8d04b5eee037fcb7083515753c268"],["/2020/11/14/js/function/index.html","d15391f46233b6abe82f51b5161c5a92"],["/2020/11/14/js/js-precompile/index.html","d6a0642f87ed5b79197a05bcaf7bdfbe"],["/2020/11/14/js/js-proto/index.html","5f89073c41aebd07c1a636770ee10855"],["/2020/11/14/js/js-utils/index.html","bc32e8ceb2c821e04dbb34128eca418c"],["/2020/11/14/js/link-list/index.html","9188394c135da9a28c8ff388b1f3dc3c"],["/2020/11/14/js/micro-task/index.html","839c16488f72f04c95f36162b4c5bd30"],["/2020/11/14/js/mse/index.html","8489919d201b3c2afb137013d6fcc18f"],["/2020/11/14/js/new/index.html","32673dc44b9522fa308c73cda085a78f"],["/2020/11/14/js/num-string/index.html","912cf921d769179fd334af7ae3243384"],["/2020/11/14/js/parseInt/index.html","81d9dbcaacde5575f8e50cba61be0d0a"],["/2020/11/14/js/promise-polyfill/index.html","1ca248428e6b75791825f7cc9673ee96"],["/2020/11/14/js/queue/index.html","4aad992a05313c656090774fddb83ecd"],["/2020/11/14/js/regex/index.html","522936f2a7e35b428d627772c167a566"],["/2020/11/14/js/regex2/index.html","1147daf8313708a5273661e489dc0a06"],["/2020/11/14/js/sort/index.html","64482d3779099531c276228042262d1f"],["/2020/11/14/js/stack/index.html","c5144a06a725724b6ad943388de541af"],["/2020/11/14/js/textContent/index.html","c5cc1996fe52c6a9c30ddafeff47d296"],["/2020/11/14/js/tostring/index.html","75082ecd7f22cf16fa4c3f5751f0ebac"],["/2020/11/14/js/ts-3.7/index.html","ecadf585edf80f8dd5cb9ab54ea3861a"],["/2020/11/14/js/ts-dts/index.html","ebf008e7f29116a536abe1dd91e119c4"],["/2020/11/14/js/video-demuxing-muxing/index.html","9441e3ac40ca77a05ed94d68ec601400"],["/2020/11/14/js/web-err/index.html","b5b7e0822d414787ac0e8c6697b157d6"],["/2020/11/14/js/web-worker/index.html","9785917c7d440b27ab126576ad2058e8"],["/2020/11/14/js/xss-csrf/index.html","b86e5693d311e146a40f8c162f00815b"],["/2020/11/14/linux/centos-cmd/index.html","24f80772df98e6f56906532c339e6168"],["/2020/11/14/linux/centos-node/index.html","3e91ba8174947ee433cc8968a5693dfd"],["/2020/11/14/linux/crontab-1/index.html","83d7cb477e899fdaa03bb8ebb3a79106"],["/2020/11/14/linux/crontab-mongo/index.html","b080ffb0903631cbd7ec9e8233323e53"],["/2020/11/14/linux/crontab/index.html","abb982858d90dd2af9c801133b68bf2d"],["/2020/11/14/linux/firewalld/index.html","4ac77ce4d6fe40aa55802d12e6fe3b2f"],["/2020/11/14/linux/google-bbr/index.html","186c98df6df720d393cbcfda001377f8"],["/2020/11/14/linux/java/index.html","0159729cc46a0bc2881384548ab47920"],["/2020/11/14/linux/jdk/index.html","38252f22539cf7e1e2efa56cf28ace67"],["/2020/11/14/linux/jenkins/index.html","f50b95d88ce4ac007b3a2c3ff0928fce"],["/2020/11/14/linux/kcptun/index.html","1ea52126e76a582bfc6861147134c74d"],["/2020/11/14/linux/nginx-n/index.html","cdb0a846f193f783d023e33734cc55fb"],["/2020/11/14/linux/nginx-proxy/index.html","f2c9847d34559f4e34f6b13cc007148d"],["/2020/11/14/linux/nginx-root-alias/index.html","f56c4176e1a93e1d2995a92fee6d8e2f"],["/2020/11/14/linux/nginx-ws/index.html","d0cdd89c3775b1bc3636b1218a4105e1"],["/2020/11/14/linux/nginx-wss/index.html","6c261609b0f69ba132e35162f37c2e41"],["/2020/11/14/linux/proxy-reproxy/index.html","3dd811b30374dc31a2d77457d988e6ba"],["/2020/11/14/linux/vi/index.html","ccd8bc708f26199642ed74e000138d7d"],["/2020/11/14/linux/yum/index.html","3a0b31d479d09820651fbcad57de14b6"],["/2020/11/14/network/cookie-parser/index.html","8dc7664adf85e716c799321546957473"],["/2020/11/14/network/cookie-session/index.html","3ecb6bdc69c94b72a52c73f72142c820"],["/2020/11/14/network/dns/index.html","d27e28d7b7243bf4552784375ccd346e"],["/2020/11/14/network/http-206/index.html","ff7549b44f8b75d763c9afe4b948a9cd"],["/2020/11/14/network/http-code/index.html","00fbaf2284485fc83837894791a354a2"],["/2020/11/14/network/http-cors/index.html","68323259a7f1c3df72cd9bd78abca8bc"],["/2020/11/14/network/http-differ/index.html","4c4021cfa6d2e3977686a9ad7c6483d0"],["/2020/11/14/network/http-get-post/index.html","248085bf9f84cf836fc0a8db91f4239f"],["/2020/11/14/network/http-histroy/index.html","af2c13a682a6986f64f5ae0c8bb5a5e6"],["/2020/11/14/network/http-https/index.html","c5b542a975b9704d1a725aff73bed6dc"],["/2020/11/14/network/http-info/index.html","8649d4d44b6fef39948d3e9edb77c9d2"],["/2020/11/14/network/http-len/index.html","5237fca831f14b470966b3aa105edb90"],["/2020/11/14/network/http-url/index.html","5ebffd237c429c36cc00709ec3ecb9ef"],["/2020/11/14/network/symmetric-key/index.html","614ee387784599b767ed036e4da26cf2"],["/2020/11/14/network/tcp/index.html","f011d9b29d5814b5c536a930fe18958b"],["/2020/11/14/network/webSocket/index.html","6f70d0e312a61f64efaa2f5b7fa3f34b"],["/2020/11/14/network/xhr-buffer/index.html","31cc98e02a8877db8fcdc2af3c0491f3"],["/2020/11/14/node/cmd/index.html","be6848a6db04615f777a85c80bd0d26d"],["/2020/11/14/node/express-middle/index.html","feafb13fd311470f436d6ba0b16d4b5a"],["/2020/11/14/node/jwt/index.html","d34e0a7452d4a45fa5c0b343087496fb"],["/2020/11/14/node/node-schedule/index.html","51dd43cf1c30ac504d166e1ffef01dff"],["/2020/11/14/node/node-ws/index.html","ff22b7fbadf2f4bab584b1da9b25858d"],["/2020/11/14/node/node-wss/index.html","b999a4d1ea809a407e36321dfdb09ea7"],["/2020/11/14/node/npm-deploy/index.html","8bab6eb7e72b84439586042c6e8ea893"],["/2020/11/14/node/npm-link/index.html","347172c7fd344e8a6b416c478a334a54"],["/2020/11/14/other/hy/index.html","f048622c3d512024d900099d1d6dcefc"],["/2020/11/14/other/java/index.html","cf887b684d5671fe408fc0c3f7ba8a10"],["/2020/11/14/other/mobile/index.html","0b18da2ebe8716d7b9ad82d0c230b107"],["/2020/11/14/project/babel/index.html","0632a6d2b0bf1513a8d17ec7ef05acb0"],["/2020/11/14/project/commitlint/index.html","c5a6368e4380ec7946515f68ef165206"],["/2020/11/14/project/github-webhook/index.html","0e0dfa19d9fc579d1881389cc6e29a67"],["/2020/11/14/project/terser-webpack-plugin/index.html","e66053c383d0530ebc90550ed3228c04"],["/2020/11/14/project/webpack-end/index.html","9ca9d009288fbb6d5fa6e37d3aabd453"],["/2020/11/14/project/webpack-loader/index.html","2b8b103540bcad2474e847b36b058c78"],["/2020/11/14/project/webpack-plugin/index.html","ceebb69f8319162806fe46d204de1b92"],["/2020/11/14/project/webpack-splitchunks/index.html","28ef138aa0219a062bd6c126cc9ca22a"],["/2020/11/14/python/decorators/index.html","b7f9f76b86958d637a6d535c471df4d1"],["/2020/11/14/python/django-cors/index.html","c27e5953fe0bdecbc43c290901024073"],["/2020/11/14/python/django-sql-error/index.html","87b203024ff8950d2fd51b2aef7600bf"],["/2020/11/14/python/middleware/index.html","d935732931f69d7c4cb4765616a88940"],["/2020/11/19/doc/ci/index.html","e0530a6cec9ce3204e365d0534eea343"],["/2020/11/19/doc/dj/index.html","2a954cd710bd51dcf1607d3c4b34d6cf"],["/2020/11/19/doc/dp/index.html","92f83d2eb786617e9c74f1eca3fdeeef"],["/2020/11/19/doc/f4v/index.html","8887cf905a6a2dd3528377c6627742f0"],["/2020/11/19/doc/h264/index.html","6817caa0d63c8ab10e5f544e751ab528"],["/2020/11/19/doc/mask/index.html","0aea85ed27cb1a0a20a0cbb2bf57b224"],["/2020/11/19/doc/mse/index.html","dd563bd3f112c18e30d632a4e86e2bbe"],["/2021/02/01/brower/lifecycle/index.html","02122ab1eb382734e84af72acc290ce3"],["/2021/05/07/brower/gpu-acc/index.html","2c70bd94b83b0a921d805578458a2e4c"],["/2021/05/08/brower/fps/index.html","689d22d655d7f9d8b9d853fff5d42c89"],["/2021/07/11/dm-render/render/index.html","0b5bfe22c99b2c0484a38cd78621d608"],["/archives/2020/11/index.html","92b2aeb558c28e99e20b0a317dde69e7"],["/archives/2020/11/page/10/index.html","da7b70d6f09cf426aa1331997fc47db4"],["/archives/2020/11/page/11/index.html","44f873d68bc6af0a547521144fd323bd"],["/archives/2020/11/page/12/index.html","6346601da1337c358b1fbe34127ede92"],["/archives/2020/11/page/13/index.html","7100b6dd7d524fa99773784ef8a093de"],["/archives/2020/11/page/14/index.html","f48a14d9a263c7c3056d67487a4584c5"],["/archives/2020/11/page/15/index.html","4546e1bab4ad2789e0043b9fa2dbe209"],["/archives/2020/11/page/2/index.html","ae04b1369f32566831ee8b00c7563d6f"],["/archives/2020/11/page/3/index.html","750a8372f805d067b9dfb300a6d7bd3a"],["/archives/2020/11/page/4/index.html","4ae853b8ca63d2795b20f3038278e0e2"],["/archives/2020/11/page/5/index.html","3ada814a6fd0d8aaef19248237da9a09"],["/archives/2020/11/page/6/index.html","775372faca8ace17bcc2e500873dc2a7"],["/archives/2020/11/page/7/index.html","323efe904e55766f6da2884ef2718a45"],["/archives/2020/11/page/8/index.html","8e147abc46b69ef0bc986bfd6e1bc4e5"],["/archives/2020/11/page/9/index.html","1a26b84fd7c6752e2204c1af06f3e0c8"],["/archives/2020/index.html","67ab7c1b380b0dfab6ed3044dacea85e"],["/archives/2020/page/10/index.html","8a827332803d90aa534791198bda8fbe"],["/archives/2020/page/11/index.html","9b09126777a68bf406b0d130b3e19a75"],["/archives/2020/page/12/index.html","6dc9add5f72f115b999860dc37c9fa8b"],["/archives/2020/page/13/index.html","c42619b5da592cca26da2f91c4759714"],["/archives/2020/page/14/index.html","f38fe5f5f85fe1330a00720d58f75a8c"],["/archives/2020/page/15/index.html","30fbfd10c44d0db0213f0e96bdfe4a86"],["/archives/2020/page/2/index.html","5e789dfc6131dd75ceab0b0e2e236d4f"],["/archives/2020/page/3/index.html","a5bcbef95703ab386900460bc8097931"],["/archives/2020/page/4/index.html","d8e28a786284dc76af352d664fcd2ad2"],["/archives/2020/page/5/index.html","d182f238a2e9492827f1feff216680b2"],["/archives/2020/page/6/index.html","d12a7afdbccd4d734dc8f6562d32644e"],["/archives/2020/page/7/index.html","35958fa9fd35be2bc24d3655ca74aeef"],["/archives/2020/page/8/index.html","867db651fcf22bef147f1a4a87aa8ff2"],["/archives/2020/page/9/index.html","c10c714dd7063c5609d03fcd61f85c17"],["/archives/2021/02/index.html","6b8d3ce2b0915dc15ac98bd839169926"],["/archives/2021/05/index.html","516526f7ccb963aecae81d1bd418d659"],["/archives/2021/07/index.html","991a3bc9fa8abbfe59909099c5cff751"],["/archives/2021/index.html","67af176ac3fe656f80fec2a8b6032807"],["/archives/index.html","f46956be9b364d3fcfbdde01d03b23cf"],["/archives/page/10/index.html","02a3751f046bc42fdf9e6ca2fbac6e8e"],["/archives/page/11/index.html","c86ec5ad0893a327b4c109551f6d2e3d"],["/archives/page/12/index.html","03b8f6e5a9679cae07881ec6de7472d0"],["/archives/page/13/index.html","c6733e2431412ba69b84e5627e7e15cf"],["/archives/page/14/index.html","d14b91790f664b3cf888250dd2aeafcf"],["/archives/page/15/index.html","80e99588e5d9c0fe883871e84c889b74"],["/archives/page/16/index.html","ca6efddad5882e1d755180f319c69a5c"],["/archives/page/2/index.html","65fd27db24cc3ee35c8bbe6d43bb4a44"],["/archives/page/3/index.html","faed06b62f8a31c735afbffca822b35f"],["/archives/page/4/index.html","e229b2a18b854bb869637cb74ab1185d"],["/archives/page/5/index.html","52b75ca7c90a34818b2bdfd520bb4e0b"],["/archives/page/6/index.html","fa09d212edee2351439c48dd256aea29"],["/archives/page/7/index.html","9f5e4282d83a2fef2e76f1b8a59f24e3"],["/archives/page/8/index.html","81ea92c6b50b5bfd2e338a2e0ec631dd"],["/archives/page/9/index.html","802c14480c774f313e6e61add4794230"],["/audio/audio.js","30af61a128e6d9024464b8581690d2ae"],["/audio/index.html","88cc2cb1ba80b36211d10f7776a3a9f3"],["/categories/Databse/index.html","37926b2bba9eb9b88156a6a2e16fb435"],["/categories/Javascript/index.html","f55cecbcea6ed7c0eaeded8e2202330b"],["/categories/Javascript/page/2/index.html","b54c4079d5051f50e291fc2982f94280"],["/categories/Linux/index.html","f2ac93ddc2fee0c3ae383554191f2ade"],["/categories/Linux/page/2/index.html","d4beb443a2d77f7d968249bc3154b5e4"],["/categories/Node/index.html","a9e9678e0bdf478e29b7e0c14674a173"],["/categories/brower/index.html","a6c647379bacde88755368c99ed99903"],["/categories/brower/page/2/index.html","83d5f0fbfb208be4c2e6e6e46aeaaf23"],["/categories/brower/page/3/index.html","9486bbf2bcd4d1fdfb24fd073d4070df"],["/categories/frame/index.html","ab94ecc70f904426447f9b52eb3fe392"],["/categories/gpu/index.html","18ed511650b2a8ccee30d57e57d75df7"],["/categories/index.html","6d248582c1ee085551de29648e13dc54"],["/categories/network/index.html","c48e162155f6293944f038e4538e1944"],["/categories/other/index.html","e980724a629f4cda70262473956e9032"],["/categories/project/index.html","a33c1d19a1fda256f6a774b5bede847e"],["/categories/python/index.html","cbc0cf968d4703aa144d03f2d600b27c"],["/categories/web/index.html","fd25677bdc9eac1fe191f87828d9350e"],["/categories/web/page/2/index.html","a1ec3341895c1541a72597334bf77c3e"],["/categories/web/page/3/index.html","0fb803cdd8b4bfc9d691d79a065c617a"],["/categories/web/page/4/index.html","7e086cd1e8cdb38436465b684e753638"],["/categories/web/page/5/index.html","2f14189026c70093ec002a6a312d5cf8"],["/cli/cli.png","8c0c6d96bf2d0b8ec13b7e029b0edfdd"],["/cli/docsify.min.js","d5f9d90499f1385bfdc3a828ad6e411c"],["/cli/follow.css","7715b931889c8d4b816e960bd4ea2857"],["/cli/index.html","5e5bfb4694b1716dc0615cf7feb4602a"],["/cli/knav.js","7d863b99144e1651521d6bbc48b7f1b8"],["/cli/readme.html","73bc57d55c22c7cd1f24db43b07b7f70"],["/cli/w.jpg","9696428e17f662a60b97e3e070a56b43"],["/cli/zero.png","6e7c156f8cfb2afea8261c206546ca64"],["/code/assets/element-icons.9c88a535.woff","d9491be2c5109fca0fa40d0c59e2e3b9"],["/code/assets/element-icons.de5eb258.ttf","abe71f7d608d43b56d9b2aef78d7ae99"],["/code/assets/index.a75e1e39.css","ef5c0fc17d79532b91c05adbbbed5191"],["/code/assets/index.c38f2a21.js","de68fa8a7a49e86872afec0a01a50919"],["/code/assets/vendor.9d963d30.js","4876a63badcfd047891510fae4097a0d"],["/code/index.html","293444750700cb1969f2fbc3dce3f2ea"],["/css/index.css","3f6e305325ecf9be86855d0b92df9df3"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/follow/follow.css","7715b931889c8d4b816e960bd4ea2857"],["/follow/index.html","99f5bc050ef55b6f02466935fec4d8e0"],["/follow/knav.js","7d863b99144e1651521d6bbc48b7f1b8"],["/hide/bi.png","17b80f948f7b1155cdaea099894b6ea1"],["/hide/bro.jpg","e4a34350594a3f769a7a941a91e73fc4"],["/hide/bro1.jpg","e971a5b6cd95078e195657cda63a66f2"],["/hide/bro2.jpg","16b171e365f7ad2f0d787781885bee38"],["/hide/bro3.jpg","2acb9b9d0bd9199f889830fc722a0ef1"],["/hide/bro4.jpg","63bc51f06922fedd5143ee539ea9e8c3"],["/hide/bro5.jpg","11e6a3e87a5cf640a01af30817ba9707"],["/hide/bro6.png","f8be2ef79cdf29c8da170e76138740f7"],["/hide/cpu.png","9792bfb92eeba30abd2475ec02162f24"],["/hide/css.jpg","4f38f8da7753934355bb19250a9f47d1"],["/hide/cwnd.png","a7c535f85fd865871017c6d9166ae5b9"],["/hide/fps.png","cfbe01318789f8598896e8ebae74ad48"],["/hide/fps1.gif","249aeae794b38d43df5034aabcabf463"],["/hide/gpu.png","894e6d2f20921e7c8be985bbb0dac5d5"],["/hide/gpu0.png","87c660da468bc57345c2ed36c55d08a9"],["/hide/gpu1.png","ccc61af8639b3d8b40aac964c89495a0"],["/hide/gpu2.png","c88f9fd4d9baf708c353e445bc00046b"],["/hide/gpu3.png","46ce4d820db40e9439bcac253b7be79e"],["/hide/gpu4.png","666857a310fc49a6288979d5615c75a5"],["/hide/gpu5.png","6eeec5a6fa92f7ba2b897d71602e3559"],["/hide/gra.png","f3a31c8e235cbd17f89690249646924f"],["/hide/html.jpg","b1245c9050ba8f4a174e5f74aa81be7d"],["/hide/paint.png","232c4de9606f6e9d2b3ae9f52dcfb974"],["/hide/per1.png","c8bcad8d9e63c271190c35573180049c"],["/hide/per2.png","98d837d2d5eeba008cac1cb2d5ac66bc"],["/hide/tree.png","ad7a642ed9d1b5217098dadfe77bc562"],["/hide/tur.webp","77493749f8f18aaa32b722984f00fd0c"],["/hide/webkit.png","144c9289e3a928bd8dcd096b988b0db3"],["/hy/index.html","83d2944194327dc5f643c8ede1676a0a"],["/hy/piano.jpg","186d4ce60365ad39c5003fa8e3cfe7f6"],["/hy/yyj.js","d578725b70b329f21cacac6910486bae"],["/img/404.jpg","6708d92b33a76bc8759e3832d89cc5bc"],["/img/Innodb.jpg","c350cbb23996abfee7d226d8a02090ac"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/audio.jpg","bbc666a99a4abdb92036ff851f5c2220"],["/img/bg1.png","e70b4cf6957d1bb37b501a77319fbce7"],["/img/bg2.png","86abb0b786c270073c641b292f3f992f"],["/img/cache1.png","f3f9894b128aaa71c632eca751c13936"],["/img/cache2.png","e31da6a87b07b1b6d1a6c93e134bec5d"],["/img/cache4.png","a323711c9cf234eb19c8e47fe26de0a7"],["/img/cache5.png","bb5888e6a0ba4a5e9341d922dc59906c"],["/img/cache6.png","79bdc64dc80e61923e3609ffd4881460"],["/img/cache7.png","6718511513b7fa500d8de1b19e3c6eab"],["/img/cache8.png","84ad69b2d5aa201686397afc9420481f"],["/img/cache9.png","fde40c8b01c7a4c312e4741682c3ac78"],["/img/css-box-ie.jpg","0abb576ccbf3e6e29c482880c6c7a177"],["/img/css-box-standard.jpg","f88cc621a037b959111ef3bdc8e8a61a"],["/img/css-box.jpg","96efbf91a11e3e16a69a634afc1aa826"],["/img/css3.jpg","e604bf25aede342b28c270694753fa06"],["/img/database.jpg","6e30f87c1504bf625945e38690931b50"],["/img/default.jpg","186d4ce60365ad39c5003fa8e3cfe7f6"],["/img/default2.jpg","695dc2d6fef5092c43c81a82c73209fa"],["/img/default3.jpg","e6dbdc3eab92a9bfe81f031af6f3fd8d"],["/img/dns.jpg","664bd3007b4aaf137783a90edec4d5bd"],["/img/dom.gif","20a60b70fa7c44e1851284ef2aa84c26"],["/img/e_block.jpg","fe39d2aa5a693ed6fdf3244a0fd43d6a"],["/img/e_brower.png","38870559e6437549ae444014ae5164a2"],["/img/e_storage.jpg","c218c03548192ad23908ebbfda4dc3a6"],["/img/e_upload.jpg","1360d82820f03121c8bb105eba8910af"],["/img/engineer.jpg","648e800cf421297aa800185b0f4b8613"],["/img/error_level.jpg","70f549c05c3a38185a6cd91c3f24b254"],["/img/es6-1.jpg","5a631910388990309719aeea261e5e41"],["/img/face.jpg","48e1278e886117e6a81b09a8abd923b4"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/git.png","661bdf03b566cd9142ed0cb2bbfa5d31"],["/img/guitar1.png","24e09bd84e38a9b778fdb33cf0db4cba"],["/img/guitar2.png","9308d80550d9d23e9a641718ea3c2816"],["/img/html.jpg","15a0ebced997e22423e29d79400b4396"],["/img/http0.png","6fb2c90fcd987ac5f1ed351c46a94614"],["/img/http1.png","48a823ba71f53fe0201c40005eb669f9"],["/img/http3.jpg","cfb71ef15c3c1484de5cbc4b5e3a3e9e"],["/img/http4.jpg","3b774104b448d96052ba49a93a180cb0"],["/img/http5.gif","d404acda62c276b9a3ab90506074307f"],["/img/http5.jpg","9d2a2555b99eac2cdb625bcdc355db77"],["/img/http6.png","5832cc77ea1dbbdc281758e48b5d49c5"],["/img/http7.jpg","38069c638a93d43ea201c081826b8903"],["/img/icp.png","b7fa4a92047987bf65dc954f48f95c3d"],["/img/in_file.jpg","60e8d0496a81b561e73ed7447c951301"],["/img/in_group.jpg","e58036db2375c85a482dc25f00a6d532"],["/img/in_line.jpg","1c65ea519c0e0232abba0476781ec41d"],["/img/in_line0.jpg","6eff2dabe2e6b6ff9226f7ddd904acfb"],["/img/in_min.jpg","2832a095be030ca6254e84a12db80052"],["/img/in_p1.jpg","5062d9c9cf1927f46f708a18fbd04b73"],["/img/in_p2.jpg","1761f0af72bf03e505623132c4dee072"],["/img/in_p3.jpg","c0b6e75d911f826533fa8e428b13026a"],["/img/in_page.jpg","1ca1af032c3b74cee6af758f6afa3ba4"],["/img/in_pages.jpg","452e2d255f53a16f14197ed4c78d0b57"],["/img/in_record.jpg","52fe8010e0bd1195826f7d7fef7effe2"],["/img/in_table.jpg","ed99da9efd84d88bc9981bfd0ad6f5d0"],["/img/ip-info.jpg","137ef3e803ffee1d4722cc5ba6ba4879"],["/img/ip01.png","60372fbdf9d5b16a0b73d054aac78ae6"],["/img/js-pre.jpg","5563fdfc3f0c4cbcf5bc4ff8bd4b11ac"],["/img/js.jpg","93de37b1c287aa6e396629651b87c759"],["/img/kcp.png","2fcc970d8d88c663de4f32096f10c4e5"],["/img/lifecycle.png","2fe88acda884a35cd150475b24d4d87d"],["/img/linux.jpg","da86200d0441f2434e074909fb78a750"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/micro-task.png","24b1f7b7c18318952099be9126d6f719"],["/img/micro.png","ef9842e97a62bb5c2aac3cbf99b2b7de"],["/img/middleware.jpg","e1c6e4c7df95a5e3a80882c8b4aaf803"],["/img/mvc1.png","6fea96842165b35cd4362afbfe4c28ac"],["/img/mvc2.png","0967d7c996185643a5c3c221f23976b1"],["/img/mvc3.png","24c741b64ad540f9ea3b6728007627f0"],["/img/mvc4.png","47e923a5451f384f54fb8f8e5d119ea7"],["/img/mvc5.png","59e3024de383a663c185cb6f51e3c194"],["/img/net0.png","67709cff0f5b734941fa8984380b456f"],["/img/network.jpg","6d1bd3867a00092a15e810f0e28e08f7"],["/img/node.jpg","5a1d0be501a67bbb11f76193b2484932"],["/img/nuxt1.png","a8a79e895887d6cc0dbac0e10817d3f8"],["/img/nuxt2.png","794d74b38ae7072cb13efec3f54c6d46"],["/img/nuxt3.png","30153f3e8ff30b283ef0c85aebd30145"],["/img/nuxt4.png","2d6d081ce9fc5d73dfa2104dd4f62662"],["/img/nuxt5.png","1965e4a8214d1dd5acc4fdc99a0c135d"],["/img/osi.gif","2af488004591cbc12cd82c44518523de"],["/img/piano.png","3e50520a46b2a5ef5e5bcfecf89ebe7c"],["/img/proxy.webp","b71c84b0dd3183787b9b7390d9cc3626"],["/img/python.jpg","0ea8225aa53fd9b90afa175f2f029b1e"],["/img/react.webp","138a4a86046047def99fde8a939e238a"],["/img/render.png","5527a6ebe35dd531060b80296da055bc"],["/img/render1.png","79d4f1ecf7669ed50e0373945a2248aa"],["/img/sql_index.jpg","01266f5a5746ccca7602549b7e6cb846"],["/img/sql_no_index.jpg","898f9995d5536159509c6346b34593f0"],["/img/sql_s1.jpg","b852c3e340f80f79a149bcc4fffd158c"],["/img/sql_s2.jpg","24f9c84401a165b6cbe3304e42c50889"],["/img/sql_s3.jpg","95628c777213e9fc89c954ce3d3cb684"],["/img/sql_save.jpg","da4eb76556990a3b9b89e32e48136660"],["/img/ssr.png","5631c8e2f956ae0d55455d04af8ab317"],["/img/tcp-ip.jpg","c1a9182811eca72933a8c0ffd39eba06"],["/img/tcp.png","6a28f4d806c4ce9e148c28132f0e126c"],["/img/tcp3.png","83d97bc275b4af9890b2deeb7d035a9a"],["/img/tcp4.png","78aea88d303d52d5dbc81e002fd93d2a"],["/img/teach.jpg","4650698f3262b8c395cc3b640b568045"],["/img/vi-cmd.gif","acc327dfe0d5328c1ad102179c70b641"],["/img/vim-vi.png","dcd25a6082e1989975c280213f3e1052"],["/img/vue-nexttick.png","f1f3435bb2f4d3f418480be4a171e0ed"],["/img/vue-nexttick2.png","ed23a41f9c38de8174b1089ab3876966"],["/img/vue1.png","cacdab3440e3647647063f253a99fb07"],["/img/vue2.png","51175931269b1b90b2f08aabeb14fc96"],["/img/vue3.png","904b88eac7e8b99e3b6063a5977fc63e"],["/img/webhook.png","2cf55702ae98e72420c445084e5c2405"],["/img/ws.webp","aa574f8edcccc79f33aea448ea322d57"],["/img/xss.png","5c18b7d26b37df483a702810498d3182"],["/index.html","082cd5c483390920d44ed90f0cc9299a"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","4906db523cdd971fb84cb91abd530fd4"],["/page/2/index.html","395b16e54a8d72c05f3640d7e6a36960"],["/page/3/index.html","34cf201824dbb715a43ef2be86d32858"],["/page/4/index.html","134398dff9925acd6dba7a9142438ca5"],["/piano/index.html","5f1e9d4abbe2c68a5dcf8b2367d79f2d"],["/piano/piano.js","b3b64af667370ff6a52ea668c545facf"],["/pwa/144.png","68bbcf438443c0540757bf8c269507ec"],["/pwa/192.png","303f826bc53ca35a6db0f2a4d243d837"],["/pwa/48.png","07688b011d5f26cee21398d85ac2e0a4"],["/pwa/512.png","8fddc19901d448a5317575adcad7d1ac"],["/pwa/96.png","ce8ea5361607aa60dab17e1a50d4570a"],["/pwa/favicon.png","3d4e693505092fc6f4cc1a70438ef843"],["/qrcode/brcode.js","e1060ec8ce3a96679db85152a175f233"],["/qrcode/index.html","4460bb9e891efc17079775bcde87d240"],["/static/ashes.js","b4143c2bd85f1c81cbfda93f2dc76988"],["/static/bg.png","c62e2e026531003de922e4e5d6ff541a"],["/static/editor.js","ce1fb5f6b8e638fe05a28941f9970b92"],["/static/follow.js","3daa711f3e14bd15d8b1f64313b685ee"],["/static/weplayer.js","5b13e6501c44801cb201ec9d6e1ef746"],["/tags/Javascript/index.html","4fe6a00d98339dbcf114d6de5d174721"],["/tags/Javascript/page/2/index.html","5aaa3ed836c4c5c4caea267ed2d8eb1e"],["/tags/Javascript/page/3/index.html","e422459085b7325f855c07f01e7cdfbc"],["/tags/Mongodb/index.html","540e1778740df580f3304275f7115e21"],["/tags/brower/index.html","ca3bb0d7194dc5c5225a770fa5add856"],["/tags/brower/page/2/index.html","dd3400e277ea14a9c250b440ddf05f1e"],["/tags/centos/index.html","1840a9bce7ee74beabdc5b8aa58a0e0d"],["/tags/cmd/index.html","75baa6fe2898e77b078f89d93e2b7489"],["/tags/cors/index.html","3cf72709df4cc65a40a583ca6f929986"],["/tags/css/index.html","e81d48038b9b561cc7da9a24d6ae395b"],["/tags/django/index.html","700ba938ec6c9f5a1a8e6acfc0668a28"],["/tags/err/index.html","d9d73921e96244ff8dd1c226f46cb207"],["/tags/es6/index.html","f43816c6be6ca8f9ae5287ac598ae6e0"],["/tags/es6/page/2/index.html","338d0363e5d06f667eddbe4c7ea51174"],["/tags/git/index.html","ce683b1170dc21f71f909138df6b4cbb"],["/tags/github/index.html","95963aab77dd5a85d857a1615d49f1a9"],["/tags/html/index.html","f9baf1f00aeae0a8cf223634cbb9a26e"],["/tags/http/index.html","4460676ab789e3e9518a57e84f10cd51"],["/tags/hy/index.html","7fe11ab89bbf39637a448b869c1ff902"],["/tags/index.html","b3023adb7e303b22f5d86d42b3aff571"],["/tags/java/index.html","84b36c9aabaa585445e0d93c03108f20"],["/tags/jdk/index.html","e978b80333571adf0f07e83a39a4258b"],["/tags/jwt/index.html","f18a5f6a560163ae8e602d617eba5361"],["/tags/lifecycle/index.html","417ade55ab157f2b8087e5baf1f99f6c"],["/tags/mobile/index.html","e6b5f697ce284a12520cb24a8d047106"],["/tags/model/index.html","365697d00602962ed6f43ca477f2058e"],["/tags/mse/index.html","8daf0f955283eec8a4d37ee633d15505"],["/tags/mysql/index.html","e28973346634b4ce4ec4925e77546202"],["/tags/network/index.html","3944d398d9be4735aeb729a94e61d221"],["/tags/nginx/index.html","4d70861c8b2b79496ddf2aa6d37d05f1"],["/tags/node/index.html","33b8751615fe9750b0c1404f1c05af94"],["/tags/npm/index.html","fda328292bc78ca54ac30c8479075fed"],["/tags/nuxt/index.html","e635f5b74162fcda24299a6475129ce4"],["/tags/proxy/index.html","99da5dd5f9d6b6645a2efc1b8c0f2e0d"],["/tags/schedule/index.html","7caaffdcf36837371568e64af71c4f59"],["/tags/tcp/index.html","1f720c120deb161cf99bb9f6006f94c0"],["/tags/typescript/index.html","e85d048cc41bf4b4a85d9e59d133f6dd"],["/tags/video/index.html","823426d882f9728bc7f4b1f7cc4e1e2f"],["/tags/vue/index.html","4c756121101d8781fdd8ad78bcfe9d05"],["/tags/webpack/index.html","5f903f2617338e1b0477ca8e7009c6b9"],["/tags/ws/index.html","6c4754aae53b30456b4e6b7d9f91e814"],["/tags/xhr/index.html","5966df2e8edc62c7ca9d5ce83d79927f"],["/video/index.html","17660a06f54cd228bc78a86a35bdd968"],["/video/player.js","939f5190e9b3ffcced53f07053df4eff"],["/web_page/follow.css","7715b931889c8d4b816e960bd4ea2857"],["/web_page/index.html","99f5bc050ef55b6f02466935fec4d8e0"],["/web_page/knav.js","7d863b99144e1651521d6bbc48b7f1b8"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"www.webq.top"});




