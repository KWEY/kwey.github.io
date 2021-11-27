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

var precacheConfig = [["/2020/11/14/brower/Cache-Control/index.html","1728819d4dfe40e06c6ba53e2a5468df"],["/2020/11/14/brower/cache/index.html","0277917fffd781c9ddee1c61fc77bb74"],["/2020/11/14/brower/cache2/index.html","b57f2d5ef570f915a40d9408eb215be9"],["/2020/11/14/brower/chrome-performance/index.html","9add5c7fac28d88f724c438d200c8775"],["/2020/11/14/brower/repaint-reflow/index.html","e1f61a289dc9f425ff971d4a2be2be44"],["/2020/11/14/css/bfc/index.html","720369f028a4afbbed980d40433583af"],["/2020/11/14/css/css-box/index.html","914daf977fcab53f47a16b1b9db3a4d1"],["/2020/11/14/css/flex/index.html","42f575b67ec1b87c79ea6ad7d8f2e1b7"],["/2020/11/14/css/hide/index.html","be6caa779d29c4cdf6d18c4438508375"],["/2020/11/14/css/layer/index.html","1724a92d03aac43f52dc3a5c67c7eb39"],["/2020/11/14/css/layer0/index.html","2e5ac7f2f4034b7cca25416d29623263"],["/2020/11/14/database/Innodb/index.html","75ba138f23729ee535061ce93e757ced"],["/2020/11/14/database/centos-mongo/index.html","93195473b0379c2b28c5a52086f1573f"],["/2020/11/14/database/mariadb-mysql/index.html","21151afa1879b97cbbb3ba833f6f9cb1"],["/2020/11/14/database/mongo-restore/index.html","c50b2c18f79c83e9e597e70089ad8948"],["/2020/11/14/database/mongoose-populate/index.html","304c302cae692fc92c3340cf9b9a7425"],["/2020/11/14/database/mysql-transaction/index.html","58bcc19d320ce1eb2ecf801f828564e3"],["/2020/11/14/database/mysql/index.html","5ff3d33a9a1256ad5e78ed7000a1e184"],["/2020/11/14/frame/cmd-amd-es6/index.html","e264f2c24358afc1574ec26aa9d8ad3b"],["/2020/11/14/frame/express-session-mongo/index.html","38cc824d57fa9772ac22c8099e5fbad3"],["/2020/11/14/frame/nuxt/index.html","f03ff3937155ba8c19296f9478220cf6"],["/2020/11/14/frame/react/index.html","fd48e719cea1258764c100bfdf06793f"],["/2020/11/14/frame/vue-life/index.html","f6f0c439f9b4a962e07fb3766a99f96d"],["/2020/11/14/frame/vue-nextTick/index.html","a32b4f9f7efe0920a02834ef59dfa206"],["/2020/11/14/frame/web-mvc/index.html","38b35b1fd1ba394a0187b905bd75ccb2"],["/2020/11/14/html/cors/index.html","fc2dec0e67a3b1d8db8c1bd458c6c8ac"],["/2020/11/14/html/history-2/index.html","8a512044a993e45a0875c9f008bb71af"],["/2020/11/14/html/history/index.html","598379878ecddca64baf42ff36618102"],["/2020/11/14/html/html-render/index.html","57976fe45d5a176860a31b8ceaac77c5"],["/2020/11/14/html/link-preload/index.html","94f49165f5cc90321878e2d3fec977ce"],["/2020/11/14/html/link/index.html","df5c9b9d2e14fda68694316012709193"],["/2020/11/14/html/nofollow/index.html","e9d70ac19d5c6a56aad1ca9bfd1a7522"],["/2020/11/14/html/video-auto-err/index.html","4cc5b276898bb255844bdc6fcdeb13ff"],["/2020/11/14/html/video-auto/index.html","4993f5742b4ed1200d6ed3eb7df86c7f"],["/2020/11/14/html/video-play/index.html","77602ea8591333212b0e4f1f3c8dcab6"],["/2020/11/14/html/video/index.html","ab97e04798ed72f156f55a0e4fd2ca92"],["/2020/11/14/js/MessageChannel/index.html","8c36a0929502d72394fa926e5b774a1d"],["/2020/11/14/js/MutationObserver/index.html","15a12aa1206d8b0fb6de5868e1c6e1e8"],["/2020/11/14/js/addEventListener/index.html","39db1d4c8db5909b90d0bd67a08d7922"],["/2020/11/14/js/binary-tree/index.html","aac0aa2528bad5d1d430f6feee6a5f71"],["/2020/11/14/js/bind-polyfill/index.html","0d3dc6159ba8af181efb68bc334e59e6"],["/2020/11/14/js/bind/index.html","e37f8060b97e3e9272146fb99852e15b"],["/2020/11/14/js/color-hex-rgb/index.html","613358534b0535eac792c300a33a54ac"],["/2020/11/14/js/data-format/index.html","1b95eae67ff05635df2d2cbbad2cfabb"],["/2020/11/14/js/dom/index.html","b3ad006aa54470af1885d3d83f62810a"],["/2020/11/14/js/es2020/index.html","a31d53162e29bd6906dad15d8dccf1be"],["/2020/11/14/js/es6-1/index.html","04ab7c5df3aec07ca82136ac8d09d9cd"],["/2020/11/14/js/es6-2/index.html","33fdb1e377c3c92e675a54edc1cd4564"],["/2020/11/14/js/es6-3/index.html","d6985ea6a0dfe3a5a5d0556cfa23fa8b"],["/2020/11/14/js/es6-4/index.html","5a40c47b1a5d5da693be1159a9c3b94a"],["/2020/11/14/js/es6-5/index.html","1c79b374d7a2c030446cbfe4b094fed5"],["/2020/11/14/js/es6-6/index.html","42a2da6492d3bf9cb8ccba7c9fef915f"],["/2020/11/14/js/es6-7/index.html","8794a0eb28e7d9e00d6862fba140cbd5"],["/2020/11/14/js/es6-module/index.html","6f2191941ec25aec7464b434ea177ffd"],["/2020/11/14/js/es6-next/index.html","1ccb2c6730c37f0a6e88000f96155f30"],["/2020/11/14/js/fetch/index.html","ecbe913576d7205ecb3813a11a5a1190"],["/2020/11/14/js/fun-currying/index.html","fb93e703bb8ea67317ba075ec9cb674a"],["/2020/11/14/js/fun-currying2/index.html","57477d357b70127998912e8007956d40"],["/2020/11/14/js/fun-set/index.html","41009ded875bff0b002c4cfe96a107fe"],["/2020/11/14/js/function/index.html","45dd946541a6b881ced919053e1e41e2"],["/2020/11/14/js/js-precompile/index.html","23b3bb674fe899aed4f33abe61da84a5"],["/2020/11/14/js/js-proto/index.html","b214142c6ec21fb9542841f370226cc6"],["/2020/11/14/js/js-utils/index.html","c68291c34ed7b5ae6d3d6aff099d68fa"],["/2020/11/14/js/link-list/index.html","09c67598361eb121719a9229ee12320b"],["/2020/11/14/js/micro-task/index.html","d6b84530effaec4cd24fbcd67e6d65a8"],["/2020/11/14/js/mse/index.html","aec34bf05250d5cdeb846764b0b6bc18"],["/2020/11/14/js/new/index.html","8b3091da4f514a90bf1af8e27e73b0b0"],["/2020/11/14/js/num-string/index.html","9f20becbb9a42371bc831b9d35ba8898"],["/2020/11/14/js/parseInt/index.html","da9892578d5cc191927477e80d34ebf0"],["/2020/11/14/js/promise-polyfill/index.html","379680d943dd476226632493ee69ad65"],["/2020/11/14/js/queue/index.html","2c3fe9f26f644a308ed4277ff7db2708"],["/2020/11/14/js/regex/index.html","f0ddf259756c212446d3e03d2dd2a2a0"],["/2020/11/14/js/regex2/index.html","2b927a5953a753254dbd65929e6068f2"],["/2020/11/14/js/sort/index.html","9a2a0ea59bbc7a99b81c123c4c0380e7"],["/2020/11/14/js/stack/index.html","49aadef115a7e013aa7da708745235c7"],["/2020/11/14/js/textContent/index.html","ef6b64f166bd44afc6c0925bac9502c5"],["/2020/11/14/js/tostring/index.html","f593b597681bad4902d16717cec2aa05"],["/2020/11/14/js/ts-3.7/index.html","1da17f7788bdcfb0a486b9a467311a5f"],["/2020/11/14/js/ts-dts/index.html","6c1d57749b0d844a147d0313030f49a3"],["/2020/11/14/js/video-demuxing-muxing/index.html","3f52033cd78f63be0ff709d827eb571e"],["/2020/11/14/js/web-err/index.html","42a8131db348a774e9cbf07e70358e03"],["/2020/11/14/js/web-worker/index.html","8ff89e69fc5308d21c27d75e7b776990"],["/2020/11/14/js/xss-csrf/index.html","b0a0a41eb8bdcbfa04f008423e9ce64a"],["/2020/11/14/linux/centos-cmd/index.html","f671f78f38a0cf8a3d3987cf40f8ebd7"],["/2020/11/14/linux/centos-node/index.html","828cf574a27c4b22526219bd22fae2d3"],["/2020/11/14/linux/crontab-1/index.html","d5faa2da6ed2b58a605186ec23db16d0"],["/2020/11/14/linux/crontab-mongo/index.html","ca5ac87605e793e7d9535f994c1f8dde"],["/2020/11/14/linux/crontab/index.html","fb4c1c27b2861d1fff618c976ecd350b"],["/2020/11/14/linux/firewalld/index.html","d382ec8c6d1c36e11e5cbf78e606cd2f"],["/2020/11/14/linux/google-bbr/index.html","6ac33f40658dab5cade08659e70f26bf"],["/2020/11/14/linux/java/index.html","b73abeb85057c30ce3f4e3277543cc09"],["/2020/11/14/linux/jdk/index.html","525ed68a8874d2f7a7410451d0095876"],["/2020/11/14/linux/jenkins/index.html","7729f58603d71d3b9466c61f2fc1a1d1"],["/2020/11/14/linux/kcptun/index.html","2963223548e7b0a10239013c8b28123e"],["/2020/11/14/linux/nginx-n/index.html","943b7916368974341f35e2a2612bf659"],["/2020/11/14/linux/nginx-proxy/index.html","4d8d1511cbf4589b041ff56e5d569e19"],["/2020/11/14/linux/nginx-root-alias/index.html","b3ce904672e7933f33d9730ce3567323"],["/2020/11/14/linux/nginx-ws/index.html","7470d433c022a23b26792304cf22e9aa"],["/2020/11/14/linux/nginx-wss/index.html","e0427b41caf647802d6cede83afc15dd"],["/2020/11/14/linux/proxy-reproxy/index.html","70640f83ddb3392d6bcd31a499b3e478"],["/2020/11/14/linux/vi/index.html","3de7a2af0e7556e9af624c736e2e3cab"],["/2020/11/14/linux/yum/index.html","675b99096c197f0d6c2b9b42b48cc0b4"],["/2020/11/14/network/cookie-parser/index.html","f22143eae94471e9231a1eff2fa6f954"],["/2020/11/14/network/cookie-session/index.html","8a0cab0069d2f4c6d44d87f5c575d4c1"],["/2020/11/14/network/dns/index.html","3ea062904cb905a98b92102820a23a7d"],["/2020/11/14/network/http-206/index.html","61f8c1cfaa77dd88fba9266afd6f55fa"],["/2020/11/14/network/http-code/index.html","c351b6de9b512fcf299eefc782b31b04"],["/2020/11/14/network/http-cors/index.html","2ec58f59da2aec3e8efde26868f31ca6"],["/2020/11/14/network/http-differ/index.html","aa125dc0e0d2995aada24eb2561cd767"],["/2020/11/14/network/http-get-post/index.html","f719ecaef926fb0ae2f4a3fa81e38887"],["/2020/11/14/network/http-histroy/index.html","e3a54a4fd9fe9a54b38640bc0e2451d1"],["/2020/11/14/network/http-https/index.html","b3f34dd5059aaec875b5da4e0430159f"],["/2020/11/14/network/http-info/index.html","07405e3bdf2226e5ccb6a58f5eeceda3"],["/2020/11/14/network/http-len/index.html","abeb8d1acb93bbb2a37dadeaddaeb594"],["/2020/11/14/network/http-url/index.html","9aab722faba897edbf00d07c6a788bc1"],["/2020/11/14/network/symmetric-key/index.html","f839fde0946c41da69e4bfe4203234c9"],["/2020/11/14/network/tcp/index.html","cd30198d22317ecf756e33398c966092"],["/2020/11/14/network/webSocket/index.html","491d65ad1df0f293ef9c5ef33338b915"],["/2020/11/14/network/xhr-buffer/index.html","27761a0e307b26fe32bb719e4e62c783"],["/2020/11/14/node/cmd/index.html","03a2d1f9ea26b35f67c7aaf546ed8a16"],["/2020/11/14/node/express-middle/index.html","e60e0599038f91da810b5f42ae452deb"],["/2020/11/14/node/jwt/index.html","f29fc6607d707ae9ec1daa10a68e4c7b"],["/2020/11/14/node/node-schedule/index.html","20d72792dadd3ba34e8463f7d77335d0"],["/2020/11/14/node/node-ws/index.html","c0f29bfc1055b8311a5931acdb551147"],["/2020/11/14/node/node-wss/index.html","bf371dc6add16a0b357f5612b248569c"],["/2020/11/14/node/npm-deploy/index.html","94b60b4705896f7018f36275e6294f0f"],["/2020/11/14/node/npm-link/index.html","dfbb710a37f8258f71a35b5e4fd0ea88"],["/2020/11/14/other/hy/index.html","d69b897a0575bb0cae5c71ca477a43bb"],["/2020/11/14/other/java/index.html","36e0e87ebf4048e16617209e48479888"],["/2020/11/14/other/mobile/index.html","04d54da0719657f27a02305c4aa353fe"],["/2020/11/14/project/babel/index.html","74f306ea06127f8c0cf8b8e0f99789f3"],["/2020/11/14/project/commitlint/index.html","96a7ed175f98310077fab3ad389ac98c"],["/2020/11/14/project/github-webhook/index.html","78cff4f2b58925474fb10d0176bb7383"],["/2020/11/14/project/terser-webpack-plugin/index.html","c58a6c4365a0d63e2328af0901ccd8da"],["/2020/11/14/project/webpack-end/index.html","31386d48842bd817233cd7d5a0aa2623"],["/2020/11/14/project/webpack-loader/index.html","793d2b71b45be8225ef6717885f2a0da"],["/2020/11/14/project/webpack-plugin/index.html","47675306448a08eade548af9e368a349"],["/2020/11/14/project/webpack-splitchunks/index.html","945a07af614fa01996a76ffa81c59a5d"],["/2020/11/14/python/decorators/index.html","e5037fd5a4d89fdf288d2c7e8225ae04"],["/2020/11/14/python/django-cors/index.html","c9c822e72e79d36517bd261cb4a289df"],["/2020/11/14/python/django-sql-error/index.html","b4abfcc9d6556e50ca7a634d312e45c5"],["/2020/11/14/python/middleware/index.html","03c94b2852ae2100be87f18e3ce52708"],["/2020/11/19/doc/ci/index.html","3828217d0c88103a8c173f63b4881bd4"],["/2020/11/19/doc/dj/index.html","e1713a9514674f827e4b1d85fe24ef5c"],["/2020/11/19/doc/dp/index.html","cacde599f873cd695c3494b6d0b6832e"],["/2020/11/19/doc/f4v/index.html","b2113ba6f5038693b0aa72ddeb7295ae"],["/2020/11/19/doc/h264/index.html","8bcc6b633c77a77c0bab9a955a1c64b0"],["/2020/11/19/doc/mask/index.html","173f2c94fa03a31c248884d0ddc0a422"],["/2020/11/19/doc/mse/index.html","2a973af8309edcf0fd0cba5eba6cb120"],["/2021/02/01/brower/lifecycle/index.html","e69bfe1d61c8412db0312b07deceacea"],["/2021/05/07/brower/gpu-acc/index.html","83e2018550bd2e915cdace23545159cd"],["/2021/05/08/brower/fps/index.html","0fac997547fcc6a0036bf4ef4f06b297"],["/2021/07/11/dm-render/render/index.html","afdc500876f311fb97c4f0dc274a43bc"],["/archives/2020/11/index.html","61946918d61c6dfcc3dfaff5309e86c7"],["/archives/2020/11/page/10/index.html","985276a8fdf38217845a5180b88731eb"],["/archives/2020/11/page/11/index.html","1bda3281e4cfed4b7af3242625ca07ce"],["/archives/2020/11/page/12/index.html","5f713da083b558b361bc223a0a16ef04"],["/archives/2020/11/page/13/index.html","ccf78233982d8693b47e74ba6ac7e8a9"],["/archives/2020/11/page/14/index.html","a10de732c1f682cb66f1a5171830177a"],["/archives/2020/11/page/15/index.html","4243b0e7cbfc96d690deb5cc23a34235"],["/archives/2020/11/page/2/index.html","32a0c64678d282276abf0be777ec68ba"],["/archives/2020/11/page/3/index.html","27019f08f51229ef9dac4bb478d326e3"],["/archives/2020/11/page/4/index.html","decb59adfd47424a0f2564fafb0304cf"],["/archives/2020/11/page/5/index.html","77c1154f255567755eb79c5a7b144a3f"],["/archives/2020/11/page/6/index.html","030d12c0bb5590a433b5fd84c480032a"],["/archives/2020/11/page/7/index.html","9b90ad16946653abcdefb4301d337456"],["/archives/2020/11/page/8/index.html","6103d2e683c800a9eee4184505a0a826"],["/archives/2020/11/page/9/index.html","d95670ff3b338925e43ef95ae418a2ba"],["/archives/2020/index.html","15f272c33467ca28be56400b93e807b5"],["/archives/2020/page/10/index.html","9522811eba2243ce1e741aaa6e06621c"],["/archives/2020/page/11/index.html","1c13730c57dbe980943fc8cd24ea0246"],["/archives/2020/page/12/index.html","f4d89e9ea2b294bada05522253cab43c"],["/archives/2020/page/13/index.html","de9ed38837d235400f5712a6a1b51fd9"],["/archives/2020/page/14/index.html","a9ccdfdd199223bb3c8de668754cb5cc"],["/archives/2020/page/15/index.html","7b07713b34b6bf01cd968be237773ccc"],["/archives/2020/page/2/index.html","a299ffd04f386491b0c5836c6658e6aa"],["/archives/2020/page/3/index.html","c3bbfd3ec433786e487194bd987f5e32"],["/archives/2020/page/4/index.html","f2f6d73d674bc12729e09f59a942740c"],["/archives/2020/page/5/index.html","9816ea6ed8be7ec281061ef7a788ffd0"],["/archives/2020/page/6/index.html","ccebdd3f495b943189f5cbd9de1e36dc"],["/archives/2020/page/7/index.html","bddba25f62dbb2a37c2e3137b1a358da"],["/archives/2020/page/8/index.html","67fde8cc718415e0caf8c3ea35e7e79c"],["/archives/2020/page/9/index.html","53f5b2bebeb3a6212caa2ceb8780bf39"],["/archives/2021/02/index.html","80df24d64c367cabcac115bce2b53468"],["/archives/2021/05/index.html","e772a87c67d356270305cd135f21a489"],["/archives/2021/07/index.html","7296066bf8de957af4a02455395a51b4"],["/archives/2021/index.html","7a8c9ccdc3645c245376332b56e4f7a4"],["/archives/index.html","bd2ffccbb9a748354545182a7212f609"],["/archives/page/10/index.html","ad296e9f2fa3731247b8ae29491f2e6e"],["/archives/page/11/index.html","d2a3f6d193a7997c22250500e0225c01"],["/archives/page/12/index.html","e23b09daca6510a4fdfaed59e63d6dc0"],["/archives/page/13/index.html","33f97f78e016ca2bd003cc5482c84604"],["/archives/page/14/index.html","7c80f5e1a33e5d2d4b417900b9af16df"],["/archives/page/15/index.html","84f4b12cffdf64ea91bf9a1e23d94357"],["/archives/page/16/index.html","165746346c326eab20fa89e1e838eed2"],["/archives/page/2/index.html","662dfa7b592605544b5469d9282764ba"],["/archives/page/3/index.html","d989f5a554c92a8708e3c7e70af295a3"],["/archives/page/4/index.html","c98ccedf95a0bb0f0a51a641f62d14c8"],["/archives/page/5/index.html","5832030a569bef4b26b1be6d18599f25"],["/archives/page/6/index.html","c0f61d8bc6aec38a1015d70422a2d2a9"],["/archives/page/7/index.html","768aa5a489621acc0091bfa5f04805a8"],["/archives/page/8/index.html","75cc8078e21f87fff63b463792333967"],["/archives/page/9/index.html","12483b60561a4785ec14fced657680d4"],["/audio/audio.js","30af61a128e6d9024464b8581690d2ae"],["/audio/index.html","88cc2cb1ba80b36211d10f7776a3a9f3"],["/categories/Databse/index.html","cf602b2fd36eaeb98a0010fc6c56eabb"],["/categories/Javascript/index.html","bba856267e922b685b72192f6c182856"],["/categories/Javascript/page/2/index.html","cfce554a05ed38ac19b3765adc182456"],["/categories/Linux/index.html","e0a41abf53584b17090bc91f281a51ad"],["/categories/Linux/page/2/index.html","922b1eb52173f41588768aa9be2f43a8"],["/categories/Node/index.html","d5a02daf710fc4a03e13b53f73fb4cf6"],["/categories/brower/index.html","b1b1e027838063189e52dce0505f25cb"],["/categories/brower/page/2/index.html","cc9d25cd5ba075a14774967db8cbc3db"],["/categories/brower/page/3/index.html","3efd43dd85f6b8cafd6fd0d71c54d8a2"],["/categories/frame/index.html","0c3b9d170c98a93b3b1aa8640d442a04"],["/categories/gpu/index.html","9948c7ea194f7a31bd7324625f719707"],["/categories/index.html","b8ba0a8de56a334eb3a50a83fc40e2aa"],["/categories/network/index.html","9dcd9e0ce945d199820984d7fd891847"],["/categories/other/index.html","31d7671010c614247ee415417e1d2126"],["/categories/project/index.html","0d6edeaa0ab2ed26e5d2e40cfd7194b4"],["/categories/python/index.html","80cb113e9de95b0d280a3ca1d091bcd9"],["/categories/web/index.html","094be7d1abcfeb682e6bbfd3da97d51f"],["/categories/web/page/2/index.html","d8e214e04e5fe15e4523fbeeeac93567"],["/categories/web/page/3/index.html","9a68ffc3aa42a5a683de9ec76b38dd28"],["/categories/web/page/4/index.html","e9f2faa6bf2c64270bd79ef528bd55b2"],["/categories/web/page/5/index.html","984e60564b255841a8bd92a39ec00a75"],["/cli/cli.png","8c0c6d96bf2d0b8ec13b7e029b0edfdd"],["/cli/follow.css","7715b931889c8d4b816e960bd4ea2857"],["/cli/index.html","5e5bfb4694b1716dc0615cf7feb4602a"],["/cli/readme.html","30f0f3dbf2f8af00b1f3b8be4c97e34a"],["/cli/w.jpg","9696428e17f662a60b97e3e070a56b43"],["/cli/zero.png","6e7c156f8cfb2afea8261c206546ca64"],["/code/assets/element-icons.9c88a535.woff","d9491be2c5109fca0fa40d0c59e2e3b9"],["/code/assets/element-icons.de5eb258.ttf","abe71f7d608d43b56d9b2aef78d7ae99"],["/code/assets/index.a75e1e39.css","ef5c0fc17d79532b91c05adbbbed5191"],["/code/assets/index.c38f2a21.js","de68fa8a7a49e86872afec0a01a50919"],["/code/assets/vendor.9d963d30.js","4876a63badcfd047891510fae4097a0d"],["/code/index.html","293444750700cb1969f2fbc3dce3f2ea"],["/css/index.css","d8fe9f9b22538c07c9a48215ec0a7d07"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/follow/follow.css","7715b931889c8d4b816e960bd4ea2857"],["/follow/index.html","99f5bc050ef55b6f02466935fec4d8e0"],["/follow/knav.js","7d863b99144e1651521d6bbc48b7f1b8"],["/hide/bi.png","17b80f948f7b1155cdaea099894b6ea1"],["/hide/bro.jpg","e4a34350594a3f769a7a941a91e73fc4"],["/hide/bro1.jpg","e971a5b6cd95078e195657cda63a66f2"],["/hide/bro2.jpg","16b171e365f7ad2f0d787781885bee38"],["/hide/bro3.jpg","2acb9b9d0bd9199f889830fc722a0ef1"],["/hide/bro4.jpg","63bc51f06922fedd5143ee539ea9e8c3"],["/hide/bro5.jpg","11e6a3e87a5cf640a01af30817ba9707"],["/hide/bro6.png","f8be2ef79cdf29c8da170e76138740f7"],["/hide/cpu.png","9792bfb92eeba30abd2475ec02162f24"],["/hide/css.jpg","4f38f8da7753934355bb19250a9f47d1"],["/hide/cwnd.png","a7c535f85fd865871017c6d9166ae5b9"],["/hide/fps.png","cfbe01318789f8598896e8ebae74ad48"],["/hide/fps1.gif","249aeae794b38d43df5034aabcabf463"],["/hide/gpu.png","894e6d2f20921e7c8be985bbb0dac5d5"],["/hide/gpu0.png","87c660da468bc57345c2ed36c55d08a9"],["/hide/gpu1.png","ccc61af8639b3d8b40aac964c89495a0"],["/hide/gpu2.png","c88f9fd4d9baf708c353e445bc00046b"],["/hide/gpu3.png","46ce4d820db40e9439bcac253b7be79e"],["/hide/gpu4.png","666857a310fc49a6288979d5615c75a5"],["/hide/gpu5.png","6eeec5a6fa92f7ba2b897d71602e3559"],["/hide/gra.png","f3a31c8e235cbd17f89690249646924f"],["/hide/html.jpg","b1245c9050ba8f4a174e5f74aa81be7d"],["/hide/paint.png","232c4de9606f6e9d2b3ae9f52dcfb974"],["/hide/per1.png","c8bcad8d9e63c271190c35573180049c"],["/hide/per2.png","98d837d2d5eeba008cac1cb2d5ac66bc"],["/hide/tree.png","ad7a642ed9d1b5217098dadfe77bc562"],["/hide/tur.webp","77493749f8f18aaa32b722984f00fd0c"],["/hide/webkit.png","144c9289e3a928bd8dcd096b988b0db3"],["/hy/index.html","83d2944194327dc5f643c8ede1676a0a"],["/hy/piano.jpg","186d4ce60365ad39c5003fa8e3cfe7f6"],["/hy/yyj.js","d578725b70b329f21cacac6910486bae"],["/img/404.jpg","6708d92b33a76bc8759e3832d89cc5bc"],["/img/Innodb.jpg","c350cbb23996abfee7d226d8a02090ac"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/audio.jpg","bbc666a99a4abdb92036ff851f5c2220"],["/img/bg1.png","e70b4cf6957d1bb37b501a77319fbce7"],["/img/bg2.png","86abb0b786c270073c641b292f3f992f"],["/img/cache1.png","f3f9894b128aaa71c632eca751c13936"],["/img/cache2.png","e31da6a87b07b1b6d1a6c93e134bec5d"],["/img/cache4.png","a323711c9cf234eb19c8e47fe26de0a7"],["/img/cache5.png","bb5888e6a0ba4a5e9341d922dc59906c"],["/img/cache6.png","79bdc64dc80e61923e3609ffd4881460"],["/img/cache7.png","6718511513b7fa500d8de1b19e3c6eab"],["/img/cache8.png","84ad69b2d5aa201686397afc9420481f"],["/img/cache9.png","fde40c8b01c7a4c312e4741682c3ac78"],["/img/css-box-ie.jpg","0abb576ccbf3e6e29c482880c6c7a177"],["/img/css-box-standard.jpg","f88cc621a037b959111ef3bdc8e8a61a"],["/img/css-box.jpg","96efbf91a11e3e16a69a634afc1aa826"],["/img/css3.jpg","e604bf25aede342b28c270694753fa06"],["/img/database.jpg","6e30f87c1504bf625945e38690931b50"],["/img/default.jpg","186d4ce60365ad39c5003fa8e3cfe7f6"],["/img/default2.jpg","695dc2d6fef5092c43c81a82c73209fa"],["/img/default3.jpg","e6dbdc3eab92a9bfe81f031af6f3fd8d"],["/img/dns.jpg","664bd3007b4aaf137783a90edec4d5bd"],["/img/dom.gif","20a60b70fa7c44e1851284ef2aa84c26"],["/img/e_block.jpg","fe39d2aa5a693ed6fdf3244a0fd43d6a"],["/img/e_brower.png","38870559e6437549ae444014ae5164a2"],["/img/e_storage.jpg","c218c03548192ad23908ebbfda4dc3a6"],["/img/e_upload.jpg","1360d82820f03121c8bb105eba8910af"],["/img/engineer.jpg","648e800cf421297aa800185b0f4b8613"],["/img/error_level.jpg","70f549c05c3a38185a6cd91c3f24b254"],["/img/es6-1.jpg","5a631910388990309719aeea261e5e41"],["/img/face.jpg","48e1278e886117e6a81b09a8abd923b4"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/git.png","661bdf03b566cd9142ed0cb2bbfa5d31"],["/img/guitar1.png","24e09bd84e38a9b778fdb33cf0db4cba"],["/img/guitar2.png","9308d80550d9d23e9a641718ea3c2816"],["/img/html.jpg","15a0ebced997e22423e29d79400b4396"],["/img/http0.png","6fb2c90fcd987ac5f1ed351c46a94614"],["/img/http1.png","48a823ba71f53fe0201c40005eb669f9"],["/img/http3.jpg","cfb71ef15c3c1484de5cbc4b5e3a3e9e"],["/img/http4.jpg","3b774104b448d96052ba49a93a180cb0"],["/img/http5.gif","d404acda62c276b9a3ab90506074307f"],["/img/http5.jpg","9d2a2555b99eac2cdb625bcdc355db77"],["/img/http6.png","5832cc77ea1dbbdc281758e48b5d49c5"],["/img/http7.jpg","38069c638a93d43ea201c081826b8903"],["/img/icp.png","b7fa4a92047987bf65dc954f48f95c3d"],["/img/in_file.jpg","60e8d0496a81b561e73ed7447c951301"],["/img/in_group.jpg","e58036db2375c85a482dc25f00a6d532"],["/img/in_line.jpg","1c65ea519c0e0232abba0476781ec41d"],["/img/in_line0.jpg","6eff2dabe2e6b6ff9226f7ddd904acfb"],["/img/in_min.jpg","2832a095be030ca6254e84a12db80052"],["/img/in_p1.jpg","5062d9c9cf1927f46f708a18fbd04b73"],["/img/in_p2.jpg","1761f0af72bf03e505623132c4dee072"],["/img/in_p3.jpg","c0b6e75d911f826533fa8e428b13026a"],["/img/in_page.jpg","1ca1af032c3b74cee6af758f6afa3ba4"],["/img/in_pages.jpg","452e2d255f53a16f14197ed4c78d0b57"],["/img/in_record.jpg","52fe8010e0bd1195826f7d7fef7effe2"],["/img/in_table.jpg","ed99da9efd84d88bc9981bfd0ad6f5d0"],["/img/ip-info.jpg","137ef3e803ffee1d4722cc5ba6ba4879"],["/img/ip01.png","60372fbdf9d5b16a0b73d054aac78ae6"],["/img/js-pre.jpg","5563fdfc3f0c4cbcf5bc4ff8bd4b11ac"],["/img/js.jpg","93de37b1c287aa6e396629651b87c759"],["/img/kcp.png","2fcc970d8d88c663de4f32096f10c4e5"],["/img/lifecycle.png","2fe88acda884a35cd150475b24d4d87d"],["/img/linux.jpg","da86200d0441f2434e074909fb78a750"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/micro-task.png","24b1f7b7c18318952099be9126d6f719"],["/img/micro.png","ef9842e97a62bb5c2aac3cbf99b2b7de"],["/img/middleware.jpg","e1c6e4c7df95a5e3a80882c8b4aaf803"],["/img/mvc1.png","6fea96842165b35cd4362afbfe4c28ac"],["/img/mvc2.png","0967d7c996185643a5c3c221f23976b1"],["/img/mvc3.png","24c741b64ad540f9ea3b6728007627f0"],["/img/mvc4.png","47e923a5451f384f54fb8f8e5d119ea7"],["/img/mvc5.png","59e3024de383a663c185cb6f51e3c194"],["/img/net0.png","67709cff0f5b734941fa8984380b456f"],["/img/network.jpg","6d1bd3867a00092a15e810f0e28e08f7"],["/img/node.jpg","5a1d0be501a67bbb11f76193b2484932"],["/img/nuxt1.png","a8a79e895887d6cc0dbac0e10817d3f8"],["/img/nuxt2.png","794d74b38ae7072cb13efec3f54c6d46"],["/img/nuxt3.png","30153f3e8ff30b283ef0c85aebd30145"],["/img/nuxt4.png","2d6d081ce9fc5d73dfa2104dd4f62662"],["/img/nuxt5.png","1965e4a8214d1dd5acc4fdc99a0c135d"],["/img/osi.gif","2af488004591cbc12cd82c44518523de"],["/img/piano.png","3e50520a46b2a5ef5e5bcfecf89ebe7c"],["/img/proxy.webp","b71c84b0dd3183787b9b7390d9cc3626"],["/img/python.jpg","0ea8225aa53fd9b90afa175f2f029b1e"],["/img/react.webp","138a4a86046047def99fde8a939e238a"],["/img/render.png","5527a6ebe35dd531060b80296da055bc"],["/img/render1.png","79d4f1ecf7669ed50e0373945a2248aa"],["/img/sql_index.jpg","01266f5a5746ccca7602549b7e6cb846"],["/img/sql_no_index.jpg","898f9995d5536159509c6346b34593f0"],["/img/sql_s1.jpg","b852c3e340f80f79a149bcc4fffd158c"],["/img/sql_s2.jpg","24f9c84401a165b6cbe3304e42c50889"],["/img/sql_s3.jpg","95628c777213e9fc89c954ce3d3cb684"],["/img/sql_save.jpg","da4eb76556990a3b9b89e32e48136660"],["/img/ssr.png","5631c8e2f956ae0d55455d04af8ab317"],["/img/tcp-ip.jpg","c1a9182811eca72933a8c0ffd39eba06"],["/img/tcp.png","6a28f4d806c4ce9e148c28132f0e126c"],["/img/tcp3.png","83d97bc275b4af9890b2deeb7d035a9a"],["/img/tcp4.png","78aea88d303d52d5dbc81e002fd93d2a"],["/img/teach.jpg","4650698f3262b8c395cc3b640b568045"],["/img/vi-cmd.gif","acc327dfe0d5328c1ad102179c70b641"],["/img/vim-vi.png","dcd25a6082e1989975c280213f3e1052"],["/img/vue-nexttick.png","f1f3435bb2f4d3f418480be4a171e0ed"],["/img/vue-nexttick2.png","ed23a41f9c38de8174b1089ab3876966"],["/img/vue1.png","cacdab3440e3647647063f253a99fb07"],["/img/vue2.png","51175931269b1b90b2f08aabeb14fc96"],["/img/vue3.png","904b88eac7e8b99e3b6063a5977fc63e"],["/img/webhook.png","2cf55702ae98e72420c445084e5c2405"],["/img/ws.webp","aa574f8edcccc79f33aea448ea322d57"],["/img/xss.png","5c18b7d26b37df483a702810498d3182"],["/index.html","ffde147837a58a406e722bb6af1e3232"],["/jianyin/1.jpg","8baa30acdbf8ac9ec72e8d8aeebd2c67"],["/jianyin/4.jpg","aadd67c8e4abbd3b43b3853b635c5643"],["/jianyin/index.html","66f38d1e437dfe7416405784d6f7e824"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","4cebbb7f41fdc3ca4bece3ab2e14cb18"],["/page/2/index.html","34cea1b15427d85e25c7642198c342b9"],["/page/3/index.html","4c20c813c050f8883f69b6bce8469eac"],["/piano/index.html","5f1e9d4abbe2c68a5dcf8b2367d79f2d"],["/piano/piano.js","b3b64af667370ff6a52ea668c545facf"],["/pwa/144.png","68bbcf438443c0540757bf8c269507ec"],["/pwa/192.png","303f826bc53ca35a6db0f2a4d243d837"],["/pwa/48.png","07688b011d5f26cee21398d85ac2e0a4"],["/pwa/512.png","8fddc19901d448a5317575adcad7d1ac"],["/pwa/96.png","ce8ea5361607aa60dab17e1a50d4570a"],["/pwa/favicon.png","3d4e693505092fc6f4cc1a70438ef843"],["/qrcode/brcode.js","e1060ec8ce3a96679db85152a175f233"],["/qrcode/index.html","4460bb9e891efc17079775bcde87d240"],["/static/ashes.js","b4143c2bd85f1c81cbfda93f2dc76988"],["/static/bg.png","c62e2e026531003de922e4e5d6ff541a"],["/static/editor.js","ce1fb5f6b8e638fe05a28941f9970b92"],["/static/follow.js","3daa711f3e14bd15d8b1f64313b685ee"],["/static/weplayer.js","5b13e6501c44801cb201ec9d6e1ef746"],["/tags/Javascript/index.html","833966dde83e297561969ef4b94f3480"],["/tags/Javascript/page/2/index.html","ab070a6dfe21b73d162910f376cedafb"],["/tags/Javascript/page/3/index.html","2be191ee9f20b43fe3311a34a129cc21"],["/tags/Mongodb/index.html","ac84e9d8bb272b9f4a89a45530b3cf8f"],["/tags/brower/index.html","2f679ef08311064c7419024d11e904d6"],["/tags/brower/page/2/index.html","b08c805c8c46af3de73a8c630810d45b"],["/tags/centos/index.html","d67438d2a1f56cf33b18a4f0798cd219"],["/tags/cmd/index.html","90dcc64fed4ec9a578fdb530b9f19cce"],["/tags/cors/index.html","6b730ab9ef0de83fc3f8c2fd4d030038"],["/tags/css/index.html","98f32f2f7191d36d9cc7d482ce94cbeb"],["/tags/django/index.html","ca669defe27fd609c1b3b3f550901eea"],["/tags/err/index.html","e620efbbdac9b479ab849a6cd386f177"],["/tags/es6/index.html","b08fe1abb870d784c252e1151e8a7a9f"],["/tags/es6/page/2/index.html","e2db7207279214ca9458c1bf2427b5a3"],["/tags/git/index.html","9fd03862df5a53a55ad5367080b10dae"],["/tags/github/index.html","61aae2c74cb762f0ab0373e98e8ea9fc"],["/tags/html/index.html","822c45de5357ae01da373e3f387c9f95"],["/tags/http/index.html","ef80f79e7726fecf40018459ae8966dc"],["/tags/hy/index.html","b6c52f913a6157f32604df474682f635"],["/tags/index.html","eac46e83a40ecedeb0e07a67b2d96f5a"],["/tags/java/index.html","00e8d84f9ad770d7546f990ea3b1fd31"],["/tags/jdk/index.html","26a65ada42061b098e9e0f33a6833c36"],["/tags/jwt/index.html","850f70f9bef455839a8ea3c4a0e46ae8"],["/tags/lifecycle/index.html","9f63d611e50835c6314b1c3122d00ac2"],["/tags/mobile/index.html","1089e32b12c2ce6a829a0da0a5012b3b"],["/tags/model/index.html","a61bf4be5d2960554b5f435eee74976c"],["/tags/mse/index.html","b9377e22af23152c660fe66a8402c72c"],["/tags/mysql/index.html","7cdaac89b63152973d1a99e44bdf497a"],["/tags/network/index.html","f6b222b8f633e4bafa25753954ea5cf4"],["/tags/nginx/index.html","14cdcc11f240738c11a4e18c9016cd23"],["/tags/node/index.html","02723bc1373b6161f872b161cbb9c7db"],["/tags/npm/index.html","cd43d63fa59bd83f81a285af66d29082"],["/tags/nuxt/index.html","696f6f59802cd2625300e6046d810b34"],["/tags/proxy/index.html","0404ca9af7b8054d6982f8b9e7842469"],["/tags/schedule/index.html","5c64fc0a86f19e9473350872f03f2862"],["/tags/tcp/index.html","a8281ef1488eb66a5e78b0867eb9019b"],["/tags/typescript/index.html","800941f8f750886709f076ad6a9e1b55"],["/tags/video/index.html","84ec6a82659bdd6e0d134ed62783a658"],["/tags/vue/index.html","71d67b5974340ad04ef65b6211ac2dca"],["/tags/webpack/index.html","c9c98ccebe86bf0853bf28fb0bcdcc68"],["/tags/ws/index.html","c2d9cbdfdaa248f54eb1e8f0d65a5106"],["/tags/xhr/index.html","c91c25075d25a7249937d7ea66ca1294"],["/video/index.html","17660a06f54cd228bc78a86a35bdd968"],["/video/player.js","939f5190e9b3ffcced53f07053df4eff"],["/web_page/follow.css","7715b931889c8d4b816e960bd4ea2857"],["/web_page/index.html","99f5bc050ef55b6f02466935fec4d8e0"],["/web_page/knav.js","7d863b99144e1651521d6bbc48b7f1b8"]];
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




