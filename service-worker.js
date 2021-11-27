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

var precacheConfig = [["/2020/11/14/brower/Cache-Control/index.html","4dab2341e33a91a904acea3418d7b037"],["/2020/11/14/brower/cache/index.html","e811b58086deb05f7fb368a0f536c697"],["/2020/11/14/brower/cache2/index.html","82f293862949903bd48f651bf3ac457a"],["/2020/11/14/brower/chrome-performance/index.html","35794d1eac2032cdb5c2d7890bb45c29"],["/2020/11/14/brower/repaint-reflow/index.html","d0f1d119b7668e3225d3310f000abfae"],["/2020/11/14/css/bfc/index.html","ae3afbe86241b9006119a07eba5c042e"],["/2020/11/14/css/css-box/index.html","a382b175dd37ceae7c7f13efaf975590"],["/2020/11/14/css/flex/index.html","5ac0e15e9907d038b900d0ff5c6fc9fa"],["/2020/11/14/css/hide/index.html","d6ad342a2b9aa8a2dc263b1ede232f1a"],["/2020/11/14/css/layer/index.html","b98b8e7887f7c161172751a4a57892ef"],["/2020/11/14/css/layer0/index.html","fc3a0d3e7c1c54973203d7563a053bfa"],["/2020/11/14/database/Innodb/index.html","255d7abeabcdbe64f698ddf44124234d"],["/2020/11/14/database/centos-mongo/index.html","e5cc5b9fcaf71dc1546a576febb1aace"],["/2020/11/14/database/mariadb-mysql/index.html","ab7672bd1d84a2264d31f96dc25f0004"],["/2020/11/14/database/mongo-restore/index.html","a36c7a822a009fd1f029f1bf43b84e39"],["/2020/11/14/database/mongoose-populate/index.html","0577152ccc82cb18a5b37a588fd7949f"],["/2020/11/14/database/mysql-transaction/index.html","876965877a7477669899455815f81f3a"],["/2020/11/14/database/mysql/index.html","cfd0352477f7baee18f5c683627b86ff"],["/2020/11/14/frame/cmd-amd-es6/index.html","637b520506da4a380a46c0c61b4a6ec5"],["/2020/11/14/frame/express-session-mongo/index.html","6cdf47954074483d3df57c400feb1be4"],["/2020/11/14/frame/nuxt/index.html","e35fca6a4b7c98354bc5b524ed1bc95c"],["/2020/11/14/frame/react/index.html","05adf712bc43557be8b7441f48736ac6"],["/2020/11/14/frame/vue-life/index.html","2b0c76bff0bca720620f2dbb1a939a91"],["/2020/11/14/frame/vue-nextTick/index.html","a744ebef113f10d443fbb54bd84752ef"],["/2020/11/14/frame/web-mvc/index.html","641493428f8e5555b51debe53eead5f5"],["/2020/11/14/html/cors/index.html","33c389a220db61ca102a831bbf56c9af"],["/2020/11/14/html/history-2/index.html","106dfa90f2db998df7d6d0bb79dce11b"],["/2020/11/14/html/history/index.html","9e77813852065c2a1f50f9ba9d679014"],["/2020/11/14/html/html-render/index.html","20b2394c6698067014e306133519c100"],["/2020/11/14/html/link-preload/index.html","bdb59fc9a6dcfd872c492e148c4a9f0a"],["/2020/11/14/html/link/index.html","028b09a4589ec23c2a5708dc3f6d60d2"],["/2020/11/14/html/nofollow/index.html","a7dc853b9bbdddd2d3e3eef6ba3b0a8a"],["/2020/11/14/html/video-auto-err/index.html","be6a00190017f31c41f8c5a2f620e469"],["/2020/11/14/html/video-auto/index.html","d6e0289309861ab377dbc1c83124837f"],["/2020/11/14/html/video-play/index.html","a6026d144d4017c5ef72c787753ff246"],["/2020/11/14/html/video/index.html","2c1de6ff3eb84a7319f4f4a34f99634d"],["/2020/11/14/js/MessageChannel/index.html","2c63390eda0430370d51f6abdf6f0eca"],["/2020/11/14/js/MutationObserver/index.html","ea2f87ecedd3c9f56567b40197730aef"],["/2020/11/14/js/addEventListener/index.html","71c3b0d7fc775364f8f347b317898827"],["/2020/11/14/js/binary-tree/index.html","a6191e4fdee8903b74df1447c21d2893"],["/2020/11/14/js/bind-polyfill/index.html","b338b3cd22a32dfb2d2d457e233bb7ed"],["/2020/11/14/js/bind/index.html","04b1336edaba31e94883c34e8f45e907"],["/2020/11/14/js/color-hex-rgb/index.html","d8ed456e357965945c9d7f3b59334279"],["/2020/11/14/js/data-format/index.html","61e7b7d79abe37f62a4e160af1ece613"],["/2020/11/14/js/dom/index.html","972235bbf4c5359be897ad2b30de0c50"],["/2020/11/14/js/es2020/index.html","ebecf280611f981c33555fc5046294ba"],["/2020/11/14/js/es6-1/index.html","89b4a6a51253fea7b4af16ec0084ea70"],["/2020/11/14/js/es6-2/index.html","45e781e0be038ddb1cfdb93623e3a5e0"],["/2020/11/14/js/es6-3/index.html","4b1726c9014441f22c370f7b59ab42b1"],["/2020/11/14/js/es6-4/index.html","a82c7ff7d6d235b4675d0f8481f0d445"],["/2020/11/14/js/es6-5/index.html","dfd5748db24aac23aef125aa477aba7e"],["/2020/11/14/js/es6-6/index.html","07523c57077ba2c61388e483c1d7599f"],["/2020/11/14/js/es6-7/index.html","9deb83d5c95590e58b4a290f1196f50b"],["/2020/11/14/js/es6-module/index.html","a3d68c90a7e41d327ee4c58a8acfcb7b"],["/2020/11/14/js/es6-next/index.html","9e41a10d82830e1ce796ffdc3b69e086"],["/2020/11/14/js/fetch/index.html","483391f15732ce280b0dd0dab39b344c"],["/2020/11/14/js/fun-currying/index.html","cb104ce84aa77a5286ddaf2933f649fa"],["/2020/11/14/js/fun-currying2/index.html","fdda1fd4bf222e575034ba7fd3c9fa2a"],["/2020/11/14/js/fun-set/index.html","1716c94c084ebeaa95d9d54adb62371f"],["/2020/11/14/js/function/index.html","c51a317fc04d164a870d401ad1f61ca9"],["/2020/11/14/js/js-precompile/index.html","170aab2c941876e6693ffa8ea3cf1e3b"],["/2020/11/14/js/js-proto/index.html","1c26dfdcfa8dd0101f879ac27fcf74a9"],["/2020/11/14/js/js-utils/index.html","d7b1a9bbdc83cc80b28759a8c65ad162"],["/2020/11/14/js/link-list/index.html","62c3251ce8cf6baf3124753137a84602"],["/2020/11/14/js/micro-task/index.html","03089aa3df8f2f861f24d0df9a5d942b"],["/2020/11/14/js/mse/index.html","1a98cc8d6c4fc6bcecff1b1b687c50e4"],["/2020/11/14/js/new/index.html","771570a1a6eec1b4ac7849fc29300f12"],["/2020/11/14/js/num-string/index.html","16440358b2b0e60e6d696bde8bc57f9e"],["/2020/11/14/js/parseInt/index.html","aab6ef416634ef41322a8042642016e6"],["/2020/11/14/js/promise-polyfill/index.html","9e79a3bf3b3066e57fb381b9e3bcf5ca"],["/2020/11/14/js/queue/index.html","76e71ae710e53235a1c4a512046a321f"],["/2020/11/14/js/regex/index.html","1010a6523b49a1ffa6b39c655db94448"],["/2020/11/14/js/regex2/index.html","148b47942ba1ab2e1930b528b39b0f7e"],["/2020/11/14/js/sort/index.html","f2375f41945a9a81d4570ec467d2b059"],["/2020/11/14/js/stack/index.html","266fb78b6a55908025d70edcda4066af"],["/2020/11/14/js/textContent/index.html","a5bc4654916be03c9e224d2583e43b57"],["/2020/11/14/js/tostring/index.html","f654089fad521bf2454f93f8a3aaa13d"],["/2020/11/14/js/ts-3.7/index.html","726e8b404e198785e6326f23dcc420f6"],["/2020/11/14/js/ts-dts/index.html","55a1029acd9b8145af88c26acb31c082"],["/2020/11/14/js/video-demuxing-muxing/index.html","427efcff4bd4e17fb3325e37838207b0"],["/2020/11/14/js/web-err/index.html","7560a6c3ff4408f8f2d53c62d49479c4"],["/2020/11/14/js/web-worker/index.html","401693cce2fa5eeaf976ee0507088683"],["/2020/11/14/js/xss-csrf/index.html","78c6ff3ccd43fbdeb5d25faea880dd17"],["/2020/11/14/linux/centos-cmd/index.html","2d0e132ea569dc57429e53e25bf18f96"],["/2020/11/14/linux/centos-node/index.html","a84c56974af94cb1aaeb74f96fc358e2"],["/2020/11/14/linux/crontab-1/index.html","6866720f96c2d647bbecac92ad0cd7cf"],["/2020/11/14/linux/crontab-mongo/index.html","4f3409ac95d6b4b911bb8c73c1d2b195"],["/2020/11/14/linux/crontab/index.html","d06ead5e430d634cb62aaeef259aaec2"],["/2020/11/14/linux/firewalld/index.html","beb211efddd49c0ae388959949631ece"],["/2020/11/14/linux/google-bbr/index.html","0e605fa217dcc5378f16f3681c5420a1"],["/2020/11/14/linux/java/index.html","e73a9632dd7414880eef3d1da9f4b582"],["/2020/11/14/linux/jdk/index.html","525ed68a8874d2f7a7410451d0095876"],["/2020/11/14/linux/jenkins/index.html","3208006d8569dc94c883a43fe8cd114d"],["/2020/11/14/linux/kcptun/index.html","4b299c5e9e2216712b2e3ddb413d03ab"],["/2020/11/14/linux/nginx-n/index.html","411632a0bc8c397a2e066dabfac67bd0"],["/2020/11/14/linux/nginx-proxy/index.html","3009fe4f0c0827f50951dc2f59dada85"],["/2020/11/14/linux/nginx-root-alias/index.html","d9984dcf825245564f85c538d1b6d60d"],["/2020/11/14/linux/nginx-ws/index.html","bcff116a8f4a7e90251320c271aa454f"],["/2020/11/14/linux/nginx-wss/index.html","691a677b1baed3a2fd5f9f2f4694f1e1"],["/2020/11/14/linux/proxy-reproxy/index.html","243dab0c02d9c4bed16ee1d6d7d6bd0e"],["/2020/11/14/linux/vi/index.html","1259f06524a9f3d504c470a9553590ae"],["/2020/11/14/linux/yum/index.html","cc111d43ae497cf6830870f8af25a35e"],["/2020/11/14/network/cookie-parser/index.html","029a79a7f223e55741956a08e2901721"],["/2020/11/14/network/cookie-session/index.html","3f12d47683c425a6631f7370560c84df"],["/2020/11/14/network/dns/index.html","61481e5236889cc8b9ead5c1af714720"],["/2020/11/14/network/http-206/index.html","3b0963a260c4789970a0a87698d9875f"],["/2020/11/14/network/http-code/index.html","b2ac25268c0bc9babc6cea828f89acd1"],["/2020/11/14/network/http-cors/index.html","8170d868ce1245dc5d44666129f0a874"],["/2020/11/14/network/http-differ/index.html","42219a69adbdf680290734a7bd344529"],["/2020/11/14/network/http-get-post/index.html","ff98416d65d2a549e75f068ad45a2347"],["/2020/11/14/network/http-histroy/index.html","0083bcf19d60f68be27cb4f5bb9182d5"],["/2020/11/14/network/http-https/index.html","b569de11adccc1d64011754cf49d6cb7"],["/2020/11/14/network/http-info/index.html","3a9a70e769981a9916847254240f80e7"],["/2020/11/14/network/http-len/index.html","0410d1da178b550fbfc2883ee2d0e8d3"],["/2020/11/14/network/http-url/index.html","4739a9b15f2a45d928ab5e62474ea044"],["/2020/11/14/network/symmetric-key/index.html","6cfddad9fb6e1ed8470d28910db62631"],["/2020/11/14/network/tcp/index.html","16d6c3848695d70a232ce6242ae6eae2"],["/2020/11/14/network/webSocket/index.html","d9d009d93a2c9eb4530103c1970a488b"],["/2020/11/14/network/xhr-buffer/index.html","d0daa400a127c140af0308e779bdfb74"],["/2020/11/14/node/cmd/index.html","6fdcbf26da40c24c54180a7a91493ae7"],["/2020/11/14/node/express-middle/index.html","e52d47167c29ab1edf55f02af53ae6a9"],["/2020/11/14/node/jwt/index.html","c13c88dee0d6d8afe74a3e3de8b798bb"],["/2020/11/14/node/node-schedule/index.html","210a5df6628953821ac4ee271287a4ad"],["/2020/11/14/node/node-ws/index.html","6984267a32985402b5c21bb66fe9d547"],["/2020/11/14/node/node-wss/index.html","bec10b7acc04ea5c1d8f6a4ddabfa0cf"],["/2020/11/14/node/npm-deploy/index.html","c0ea72b931c4e9210379c5ea00f850ed"],["/2020/11/14/node/npm-link/index.html","83a1994f728020d404a8c7a621be599f"],["/2020/11/14/other/hy/index.html","eea25e9d34a5c5e69e43a9c8f91c974a"],["/2020/11/14/other/java/index.html","1ed17c2c13618f2dc5620e5429862e4c"],["/2020/11/14/other/mobile/index.html","389ce39a016d164dc5a7f54ca272d7d8"],["/2020/11/14/project/babel/index.html","6ad2d5ed2fe5172e7ed63882e442c9fc"],["/2020/11/14/project/commitlint/index.html","7f9656c82c3fb6a1cce352a1b98a608b"],["/2020/11/14/project/github-webhook/index.html","b011d3fe1a40ec1384ae8863ae59d4e5"],["/2020/11/14/project/terser-webpack-plugin/index.html","e25a4d1e4308a06fc8a74ee37d8ec5af"],["/2020/11/14/project/webpack-end/index.html","76900702dcc7331db2bccd80118759cc"],["/2020/11/14/project/webpack-loader/index.html","12bc2c1fd176a9ff6560848c85b0324b"],["/2020/11/14/project/webpack-plugin/index.html","e51fdf335a1feb6a7ae55cd8095e83bb"],["/2020/11/14/project/webpack-splitchunks/index.html","b9ae53ad1d2d112d22bf3529a25789de"],["/2020/11/14/python/decorators/index.html","869f3b403ed4a63919faed4223177a26"],["/2020/11/14/python/django-cors/index.html","e40ea0a4c2d7f6d3fe68a8d3ca8dd0e9"],["/2020/11/14/python/django-sql-error/index.html","f7656d5d818ed067331feccf00303deb"],["/2020/11/14/python/middleware/index.html","174d2ca9e7f82b425d699cd3284ad868"],["/2020/11/19/doc/ci/index.html","2cb895c4096f65ba9b04c17e38b939d0"],["/2020/11/19/doc/dj/index.html","e1713a9514674f827e4b1d85fe24ef5c"],["/2020/11/19/doc/dp/index.html","cacde599f873cd695c3494b6d0b6832e"],["/2020/11/19/doc/f4v/index.html","32317b603e46f9fa9b148476bbe9503d"],["/2020/11/19/doc/h264/index.html","db391335c02fbbb367ca4a6bf5a09000"],["/2020/11/19/doc/mask/index.html","e021e768ba14c5c629003c7f345f1948"],["/2020/11/19/doc/mse/index.html","2a973af8309edcf0fd0cba5eba6cb120"],["/2021/02/01/brower/lifecycle/index.html","70840bbad9858bf23ffc8b4229b37e89"],["/2021/05/07/brower/gpu-acc/index.html","71428fc3e234f82b66c65caaeaad0082"],["/2021/05/08/brower/fps/index.html","ab1e83e380b421128d53b0822810e355"],["/2021/11/27/dm-render/render/index.html","c217f635924791207132b9b3b4132303"],["/archives/2020/11/index.html","f8690b64bf3711eb4615db85880f89c7"],["/archives/2020/11/page/10/index.html","6b63bab2c698f990ea26812fec9b4c03"],["/archives/2020/11/page/11/index.html","315bb092489d7df4cb835fefe69f3532"],["/archives/2020/11/page/12/index.html","6d5ffae18c43ba3856aa81ac23772cbb"],["/archives/2020/11/page/13/index.html","055636de7a383f0e1217e1ad9a976000"],["/archives/2020/11/page/14/index.html","ea46f4a8efa7b8278f2173fc08d10025"],["/archives/2020/11/page/15/index.html","6cf1699d6eede246de46312130572161"],["/archives/2020/11/page/2/index.html","8a07245c63861fd19d304fa7fc309c04"],["/archives/2020/11/page/3/index.html","66c3ffcdd43532699d7ab8e940b3bb79"],["/archives/2020/11/page/4/index.html","1d4515cb3358415c1eb55969bf918b35"],["/archives/2020/11/page/5/index.html","0a63d637f28fe1f75615ffb7fec69888"],["/archives/2020/11/page/6/index.html","e99f299ec27b8a2751e022dee40574e0"],["/archives/2020/11/page/7/index.html","cad122a4437f8ef2ba40a8a1b86aa91b"],["/archives/2020/11/page/8/index.html","f0bda43edc64fe4a51e74c874f37fe7b"],["/archives/2020/11/page/9/index.html","0d527a785387b70bc6ff85d07ffb76e3"],["/archives/2020/index.html","9cf1d3c498594581f47eaa380c126e7d"],["/archives/2020/page/10/index.html","7224958368d1c127214d745076926c51"],["/archives/2020/page/11/index.html","be34422d59ffeee075cf4a03d77e04b0"],["/archives/2020/page/12/index.html","e61c734a9d3658e3cfecf4fe779e80a0"],["/archives/2020/page/13/index.html","71949a96583e52cf30cc6270de051cd1"],["/archives/2020/page/14/index.html","39f382e5c01c8ecf2f12171ad684a0c2"],["/archives/2020/page/15/index.html","976efa528efc9e88ff77b6488d450e4a"],["/archives/2020/page/2/index.html","e86a537257c6d7aaf532749a5238a7fe"],["/archives/2020/page/3/index.html","f811e9fe8d34567c8be5bed690dd7b1e"],["/archives/2020/page/4/index.html","483dd37204ffe77a36b63af6e4048bb9"],["/archives/2020/page/5/index.html","cc70f1a8904490cad53831cfa26fd311"],["/archives/2020/page/6/index.html","bcd0b6f555b1496db2e0b446cba2f8ac"],["/archives/2020/page/7/index.html","3c4a099bcbc4e498aeacde5a273b628e"],["/archives/2020/page/8/index.html","91eebedcce499e275d1ef75262b9d671"],["/archives/2020/page/9/index.html","42f0de6298cd79e460d7a18325678b89"],["/archives/2021/02/index.html","1869e0628058093b6388f5b5fcc10d14"],["/archives/2021/05/index.html","76ace42cd2e657d63f9172b90fc1254a"],["/archives/2021/11/index.html","e0593a51d937b6023fcada06a9ed1072"],["/archives/2021/index.html","aab5c5f8b90c3428d93625e20e07be8b"],["/archives/index.html","93ab447f93ecce5eb030b27b94981752"],["/archives/page/10/index.html","c04e5d92a86a6bebaada1b3b15f07af7"],["/archives/page/11/index.html","9c81bc1ec81f609f302eee5ac257277e"],["/archives/page/12/index.html","be4eb1a1edfafa45624f2ad7a620d999"],["/archives/page/13/index.html","3173b6b16b5cd19946d6be9edc735388"],["/archives/page/14/index.html","cd455419ba978b091542ec8ba441d246"],["/archives/page/15/index.html","896af1cf6890c6b9bf6d049f6b6a579d"],["/archives/page/16/index.html","430a17b7c1db70f7d4440a79ebc2f614"],["/archives/page/2/index.html","68b7f33d2e8dc878c6f2e9c2bc678b17"],["/archives/page/3/index.html","0f1917f1ddd4851af905115b4996637a"],["/archives/page/4/index.html","cfa4acb80fe2b5533e5d2c612a56cddf"],["/archives/page/5/index.html","973a19ae2908cf60f4163670fa755d39"],["/archives/page/6/index.html","5451c6304e02ed72d3c85a4d6d2614b7"],["/archives/page/7/index.html","8ca4d2bb7db5451632453dd2987cf368"],["/archives/page/8/index.html","e29572472857f5720551e7c04c7ab0f6"],["/archives/page/9/index.html","f71f2059f2106f921d358acb5cb1374c"],["/audio/audio.js","30af61a128e6d9024464b8581690d2ae"],["/audio/index.html","88cc2cb1ba80b36211d10f7776a3a9f3"],["/categories/Databse/index.html","7bb22c410b8ec5edcccf1a221a196716"],["/categories/Javascript/index.html","676d9b47d6012f6b9b1555525ef957a6"],["/categories/Javascript/page/2/index.html","3f4a4db71aec1f4c98b30b0d58980c7a"],["/categories/Linux/index.html","9ad0a86d3ce0486a68a4a0639ac0fce5"],["/categories/Linux/page/2/index.html","11646db0af5cb687e16c7711720ee02a"],["/categories/Node/index.html","1f81146d24c59ee2643f0c3896231fa0"],["/categories/brower/index.html","ccdae53b0a41f7b15de3ca7fa3eb3353"],["/categories/brower/page/2/index.html","7ad9d449814d320649e0bd3c6dbac52c"],["/categories/brower/page/3/index.html","6403b64e4a1c2a74d2187240a2dedd46"],["/categories/frame/index.html","a1ed377cd01660186cb508ec96eed3e8"],["/categories/gpu/index.html","b52af47a3923a273d8a2da4373dd2a4f"],["/categories/index.html","f095dd92654f4de002a665c783f9da2e"],["/categories/network/index.html","66e6ed2840475c8db4e1d742b8aee857"],["/categories/other/index.html","9e517cb1c58780165b6fd8ae6da7ea6e"],["/categories/project/index.html","628ff4e07527d0e23127f470417138bc"],["/categories/python/index.html","901a40d7096f36b2326f84d69ef421f2"],["/categories/web/index.html","948621a27a755c40cf3e2e4307258ace"],["/categories/web/page/2/index.html","39a0b85015ab54134745a619031d692b"],["/categories/web/page/3/index.html","bc878298f66a8b57f69499aa16f7b4e9"],["/categories/web/page/4/index.html","db1f6f9428e4b3a94ca0c414d28bbb92"],["/categories/web/page/5/index.html","6696e7cc0015496705190756fcfe9232"],["/cli/cli.png","8c0c6d96bf2d0b8ec13b7e029b0edfdd"],["/cli/follow.css","7715b931889c8d4b816e960bd4ea2857"],["/cli/index.html","5e5bfb4694b1716dc0615cf7feb4602a"],["/cli/readme.html","1ec2aaf8e548d98ec1a4c37179428155"],["/cli/w.jpg","9696428e17f662a60b97e3e070a56b43"],["/cli/zero.png","6e7c156f8cfb2afea8261c206546ca64"],["/code/assets/element-icons.9c88a535.woff","d9491be2c5109fca0fa40d0c59e2e3b9"],["/code/assets/element-icons.de5eb258.ttf","abe71f7d608d43b56d9b2aef78d7ae99"],["/code/assets/index.a75e1e39.css","ef5c0fc17d79532b91c05adbbbed5191"],["/code/assets/index.c38f2a21.js","de68fa8a7a49e86872afec0a01a50919"],["/code/assets/vendor.9d963d30.js","4876a63badcfd047891510fae4097a0d"],["/code/index.html","293444750700cb1969f2fbc3dce3f2ea"],["/css/index.css","d8fe9f9b22538c07c9a48215ec0a7d07"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/follow/follow.css","7715b931889c8d4b816e960bd4ea2857"],["/follow/index.html","99f5bc050ef55b6f02466935fec4d8e0"],["/follow/knav.js","7d863b99144e1651521d6bbc48b7f1b8"],["/hide/bi.png","17b80f948f7b1155cdaea099894b6ea1"],["/hide/bro.jpg","e4a34350594a3f769a7a941a91e73fc4"],["/hide/bro1.jpg","e971a5b6cd95078e195657cda63a66f2"],["/hide/bro2.jpg","16b171e365f7ad2f0d787781885bee38"],["/hide/bro3.jpg","2acb9b9d0bd9199f889830fc722a0ef1"],["/hide/bro4.jpg","63bc51f06922fedd5143ee539ea9e8c3"],["/hide/bro5.jpg","11e6a3e87a5cf640a01af30817ba9707"],["/hide/bro6.png","f8be2ef79cdf29c8da170e76138740f7"],["/hide/cpu.png","9792bfb92eeba30abd2475ec02162f24"],["/hide/css.jpg","4f38f8da7753934355bb19250a9f47d1"],["/hide/cwnd.png","a7c535f85fd865871017c6d9166ae5b9"],["/hide/fps.png","cfbe01318789f8598896e8ebae74ad48"],["/hide/fps1.gif","249aeae794b38d43df5034aabcabf463"],["/hide/gpu.png","894e6d2f20921e7c8be985bbb0dac5d5"],["/hide/gpu0.png","87c660da468bc57345c2ed36c55d08a9"],["/hide/gpu1.png","ccc61af8639b3d8b40aac964c89495a0"],["/hide/gpu2.png","c88f9fd4d9baf708c353e445bc00046b"],["/hide/gpu3.png","46ce4d820db40e9439bcac253b7be79e"],["/hide/gpu4.png","666857a310fc49a6288979d5615c75a5"],["/hide/gpu5.png","6eeec5a6fa92f7ba2b897d71602e3559"],["/hide/gra.png","f3a31c8e235cbd17f89690249646924f"],["/hide/html.jpg","b1245c9050ba8f4a174e5f74aa81be7d"],["/hide/paint.png","232c4de9606f6e9d2b3ae9f52dcfb974"],["/hide/per1.png","c8bcad8d9e63c271190c35573180049c"],["/hide/per2.png","98d837d2d5eeba008cac1cb2d5ac66bc"],["/hide/tree.png","ad7a642ed9d1b5217098dadfe77bc562"],["/hide/tur.webp","77493749f8f18aaa32b722984f00fd0c"],["/hide/webkit.png","144c9289e3a928bd8dcd096b988b0db3"],["/hy/index.html","83d2944194327dc5f643c8ede1676a0a"],["/hy/piano.jpg","186d4ce60365ad39c5003fa8e3cfe7f6"],["/hy/yyj.js","d578725b70b329f21cacac6910486bae"],["/img/404.jpg","6708d92b33a76bc8759e3832d89cc5bc"],["/img/Innodb.jpg","c350cbb23996abfee7d226d8a02090ac"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/audio.jpg","bbc666a99a4abdb92036ff851f5c2220"],["/img/bg1.png","e70b4cf6957d1bb37b501a77319fbce7"],["/img/bg2.png","86abb0b786c270073c641b292f3f992f"],["/img/cache1.png","f3f9894b128aaa71c632eca751c13936"],["/img/cache2.png","e31da6a87b07b1b6d1a6c93e134bec5d"],["/img/cache4.png","a323711c9cf234eb19c8e47fe26de0a7"],["/img/cache5.png","bb5888e6a0ba4a5e9341d922dc59906c"],["/img/cache6.png","79bdc64dc80e61923e3609ffd4881460"],["/img/cache7.png","6718511513b7fa500d8de1b19e3c6eab"],["/img/cache8.png","84ad69b2d5aa201686397afc9420481f"],["/img/cache9.png","fde40c8b01c7a4c312e4741682c3ac78"],["/img/css-box-ie.jpg","0abb576ccbf3e6e29c482880c6c7a177"],["/img/css-box-standard.jpg","f88cc621a037b959111ef3bdc8e8a61a"],["/img/css-box.jpg","96efbf91a11e3e16a69a634afc1aa826"],["/img/css3.jpg","e604bf25aede342b28c270694753fa06"],["/img/database.jpg","6e30f87c1504bf625945e38690931b50"],["/img/default.jpg","186d4ce60365ad39c5003fa8e3cfe7f6"],["/img/default2.jpg","695dc2d6fef5092c43c81a82c73209fa"],["/img/default3.jpg","e6dbdc3eab92a9bfe81f031af6f3fd8d"],["/img/dns.jpg","664bd3007b4aaf137783a90edec4d5bd"],["/img/dom.gif","20a60b70fa7c44e1851284ef2aa84c26"],["/img/e_block.jpg","fe39d2aa5a693ed6fdf3244a0fd43d6a"],["/img/e_brower.png","38870559e6437549ae444014ae5164a2"],["/img/e_storage.jpg","c218c03548192ad23908ebbfda4dc3a6"],["/img/e_upload.jpg","1360d82820f03121c8bb105eba8910af"],["/img/engineer.jpg","648e800cf421297aa800185b0f4b8613"],["/img/error_level.jpg","70f549c05c3a38185a6cd91c3f24b254"],["/img/es6-1.jpg","5a631910388990309719aeea261e5e41"],["/img/face.jpg","48e1278e886117e6a81b09a8abd923b4"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/git.png","661bdf03b566cd9142ed0cb2bbfa5d31"],["/img/guitar1.png","24e09bd84e38a9b778fdb33cf0db4cba"],["/img/guitar2.png","9308d80550d9d23e9a641718ea3c2816"],["/img/html.jpg","15a0ebced997e22423e29d79400b4396"],["/img/http0.png","6fb2c90fcd987ac5f1ed351c46a94614"],["/img/http1.png","48a823ba71f53fe0201c40005eb669f9"],["/img/http3.jpg","cfb71ef15c3c1484de5cbc4b5e3a3e9e"],["/img/http4.jpg","3b774104b448d96052ba49a93a180cb0"],["/img/http5.gif","d404acda62c276b9a3ab90506074307f"],["/img/http5.jpg","9d2a2555b99eac2cdb625bcdc355db77"],["/img/http6.png","5832cc77ea1dbbdc281758e48b5d49c5"],["/img/http7.jpg","38069c638a93d43ea201c081826b8903"],["/img/icp.png","b7fa4a92047987bf65dc954f48f95c3d"],["/img/in_file.jpg","60e8d0496a81b561e73ed7447c951301"],["/img/in_group.jpg","e58036db2375c85a482dc25f00a6d532"],["/img/in_line.jpg","1c65ea519c0e0232abba0476781ec41d"],["/img/in_line0.jpg","6eff2dabe2e6b6ff9226f7ddd904acfb"],["/img/in_min.jpg","2832a095be030ca6254e84a12db80052"],["/img/in_p1.jpg","5062d9c9cf1927f46f708a18fbd04b73"],["/img/in_p2.jpg","1761f0af72bf03e505623132c4dee072"],["/img/in_p3.jpg","c0b6e75d911f826533fa8e428b13026a"],["/img/in_page.jpg","1ca1af032c3b74cee6af758f6afa3ba4"],["/img/in_pages.jpg","452e2d255f53a16f14197ed4c78d0b57"],["/img/in_record.jpg","52fe8010e0bd1195826f7d7fef7effe2"],["/img/in_table.jpg","ed99da9efd84d88bc9981bfd0ad6f5d0"],["/img/ip-info.jpg","137ef3e803ffee1d4722cc5ba6ba4879"],["/img/ip01.png","60372fbdf9d5b16a0b73d054aac78ae6"],["/img/js-pre.jpg","5563fdfc3f0c4cbcf5bc4ff8bd4b11ac"],["/img/js.jpg","93de37b1c287aa6e396629651b87c759"],["/img/kcp.png","2fcc970d8d88c663de4f32096f10c4e5"],["/img/lifecycle.png","2fe88acda884a35cd150475b24d4d87d"],["/img/linux.jpg","da86200d0441f2434e074909fb78a750"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/micro-task.png","24b1f7b7c18318952099be9126d6f719"],["/img/micro.png","ef9842e97a62bb5c2aac3cbf99b2b7de"],["/img/middleware.jpg","e1c6e4c7df95a5e3a80882c8b4aaf803"],["/img/mvc1.png","6fea96842165b35cd4362afbfe4c28ac"],["/img/mvc2.png","0967d7c996185643a5c3c221f23976b1"],["/img/mvc3.png","24c741b64ad540f9ea3b6728007627f0"],["/img/mvc4.png","47e923a5451f384f54fb8f8e5d119ea7"],["/img/mvc5.png","59e3024de383a663c185cb6f51e3c194"],["/img/net0.png","67709cff0f5b734941fa8984380b456f"],["/img/network.jpg","6d1bd3867a00092a15e810f0e28e08f7"],["/img/node.jpg","5a1d0be501a67bbb11f76193b2484932"],["/img/nuxt1.png","a8a79e895887d6cc0dbac0e10817d3f8"],["/img/nuxt2.png","794d74b38ae7072cb13efec3f54c6d46"],["/img/nuxt3.png","30153f3e8ff30b283ef0c85aebd30145"],["/img/nuxt4.png","2d6d081ce9fc5d73dfa2104dd4f62662"],["/img/nuxt5.png","1965e4a8214d1dd5acc4fdc99a0c135d"],["/img/osi.gif","2af488004591cbc12cd82c44518523de"],["/img/piano.png","3e50520a46b2a5ef5e5bcfecf89ebe7c"],["/img/proxy.webp","b71c84b0dd3183787b9b7390d9cc3626"],["/img/python.jpg","0ea8225aa53fd9b90afa175f2f029b1e"],["/img/react.webp","138a4a86046047def99fde8a939e238a"],["/img/render.png","5527a6ebe35dd531060b80296da055bc"],["/img/render1.png","79d4f1ecf7669ed50e0373945a2248aa"],["/img/sql_index.jpg","01266f5a5746ccca7602549b7e6cb846"],["/img/sql_no_index.jpg","898f9995d5536159509c6346b34593f0"],["/img/sql_s1.jpg","b852c3e340f80f79a149bcc4fffd158c"],["/img/sql_s2.jpg","24f9c84401a165b6cbe3304e42c50889"],["/img/sql_s3.jpg","95628c777213e9fc89c954ce3d3cb684"],["/img/sql_save.jpg","da4eb76556990a3b9b89e32e48136660"],["/img/ssr.png","5631c8e2f956ae0d55455d04af8ab317"],["/img/tcp-ip.jpg","c1a9182811eca72933a8c0ffd39eba06"],["/img/tcp.png","6a28f4d806c4ce9e148c28132f0e126c"],["/img/tcp3.png","83d97bc275b4af9890b2deeb7d035a9a"],["/img/tcp4.png","78aea88d303d52d5dbc81e002fd93d2a"],["/img/teach.jpg","4650698f3262b8c395cc3b640b568045"],["/img/vi-cmd.gif","acc327dfe0d5328c1ad102179c70b641"],["/img/vim-vi.png","dcd25a6082e1989975c280213f3e1052"],["/img/vue-nexttick.png","f1f3435bb2f4d3f418480be4a171e0ed"],["/img/vue-nexttick2.png","ed23a41f9c38de8174b1089ab3876966"],["/img/vue1.png","cacdab3440e3647647063f253a99fb07"],["/img/vue2.png","51175931269b1b90b2f08aabeb14fc96"],["/img/vue3.png","904b88eac7e8b99e3b6063a5977fc63e"],["/img/webhook.png","2cf55702ae98e72420c445084e5c2405"],["/img/ws.webp","aa574f8edcccc79f33aea448ea322d57"],["/img/xss.png","5c18b7d26b37df483a702810498d3182"],["/index.html","d8a4ea36ba80492334ae5b33e849d357"],["/jianyin/1.jpg","8baa30acdbf8ac9ec72e8d8aeebd2c67"],["/jianyin/4.jpg","aadd67c8e4abbd3b43b3853b635c5643"],["/jianyin/index.html","995e651351197b711f022949b2b4709e"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","4c480dee585cbfdecff38d6e21ad46dc"],["/page/2/index.html","ff69dfb80ddab64d1413038b45feb30d"],["/page/3/index.html","95e81dd151e4c2c22a9f4d0c3d93164f"],["/piano/index.html","5f1e9d4abbe2c68a5dcf8b2367d79f2d"],["/piano/piano.js","b3b64af667370ff6a52ea668c545facf"],["/pwa/144.png","68bbcf438443c0540757bf8c269507ec"],["/pwa/192.png","303f826bc53ca35a6db0f2a4d243d837"],["/pwa/48.png","07688b011d5f26cee21398d85ac2e0a4"],["/pwa/512.png","8fddc19901d448a5317575adcad7d1ac"],["/pwa/96.png","ce8ea5361607aa60dab17e1a50d4570a"],["/pwa/favicon.png","3d4e693505092fc6f4cc1a70438ef843"],["/qrcode/brcode.js","e1060ec8ce3a96679db85152a175f233"],["/qrcode/index.html","4460bb9e891efc17079775bcde87d240"],["/static/ashes.js","b4143c2bd85f1c81cbfda93f2dc76988"],["/static/bg.png","c62e2e026531003de922e4e5d6ff541a"],["/static/editor.js","ce1fb5f6b8e638fe05a28941f9970b92"],["/static/follow.js","3daa711f3e14bd15d8b1f64313b685ee"],["/static/weplayer.js","5b13e6501c44801cb201ec9d6e1ef746"],["/tags/Javascript/index.html","440283c28b44618bf01a164f72238cec"],["/tags/Javascript/page/2/index.html","192cb7ae5191cf3ffe0550dd82e923a9"],["/tags/Javascript/page/3/index.html","008e6270263634b8307f5cbe5711b7f9"],["/tags/Mongodb/index.html","cced80cd97d42e49fece03bc8ef02e50"],["/tags/brower/index.html","3b6712bdc5f46aa468ecc2684afddefb"],["/tags/brower/page/2/index.html","db58fd18079691a85a4c20170d745c8e"],["/tags/centos/index.html","3f6f4d743c12ceb0bfe4e253f08bf841"],["/tags/cmd/index.html","afbb172aeaa277cbcc57ce313d87093c"],["/tags/cors/index.html","dc99ddd7f67ced8c618d46dfdfdec90d"],["/tags/css/index.html","fcef24492bd1562f35612070d82181ad"],["/tags/django/index.html","c0adaf170b4058eda992bfee064e84f7"],["/tags/err/index.html","78b2ccbb065dc4efbdd987d71e3ad993"],["/tags/es6/index.html","ae8a7fcf2f5dc0f02814b37fa37ddcab"],["/tags/es6/page/2/index.html","508b500052e4c7e6defa930df3a65377"],["/tags/git/index.html","8e1f706a4128fbd782628cf2b2d92854"],["/tags/github/index.html","f432e2010fd12d7302be8fc56e3ffacc"],["/tags/html/index.html","50c2b88389294accba5dbcb00d70fbc4"],["/tags/http/index.html","232c54707557fde8e85ca74ee3027f55"],["/tags/hy/index.html","41ba18fb34811bfba6b2c453fcc84f30"],["/tags/index.html","b07f65d5ad57170861534c9e66eba52d"],["/tags/java/index.html","e87ef0bb67423b3ee6acd10410b1da2b"],["/tags/jdk/index.html","99a1877f2a8db636e2d99a0a1d8c0c9d"],["/tags/jwt/index.html","46893638e6fdb807ffbee8d08569f5dc"],["/tags/lifecycle/index.html","8db19f3e58c48b01d84a0e255b405a5f"],["/tags/mobile/index.html","e455a3695d4ed8122eaf6e11fe7fe0a6"],["/tags/model/index.html","e08dee11e05648cc1193d0964a10e1c4"],["/tags/mse/index.html","3e3cccfcfc91aba3370fa6ed97b4f24c"],["/tags/mysql/index.html","ed1d2f4cdaea8c8251fd1de0448ff8db"],["/tags/network/index.html","4d2d6693e4ba59b3eb19589d4bcd3de1"],["/tags/nginx/index.html","5c20d6e5d09c75a79edb51373728f9d8"],["/tags/node/index.html","4abf72c6a1554aba34b202cfcc0a298d"],["/tags/npm/index.html","9e6a4b3354c128842c431781aabf6a5c"],["/tags/nuxt/index.html","48dc81709e810d2c37574b04a849d7b6"],["/tags/proxy/index.html","14e0efede148d55b3a9c88ad33f00add"],["/tags/schedule/index.html","cb5ad099b3ffded195479974cdccf43b"],["/tags/tcp/index.html","5e6279e942029598cf1be6b1a6761669"],["/tags/typescript/index.html","fda4b47e49e824d9fe456d8bae1410ee"],["/tags/video/index.html","562c897525ab67d1d8d97ea3b1e3688b"],["/tags/vue/index.html","30faf2881e9f41caa439c1589ae10fdb"],["/tags/webpack/index.html","785fce798b9d275290f1df49a5ef5b3f"],["/tags/ws/index.html","e2fb01422a1843ed0a5cda545fb8451a"],["/tags/xhr/index.html","96b7b3ca97bd947a931e5c312dcfaf36"],["/video/brcode.js","27036f50c864ef97cb488cbe85e559be"],["/video/index.html","17660a06f54cd228bc78a86a35bdd968"],["/video/player.js","939f5190e9b3ffcced53f07053df4eff"],["/web_page/follow.css","7715b931889c8d4b816e960bd4ea2857"],["/web_page/index.html","99f5bc050ef55b6f02466935fec4d8e0"],["/web_page/knav.js","7d863b99144e1651521d6bbc48b7f1b8"]];
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




