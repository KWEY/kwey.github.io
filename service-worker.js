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

var precacheConfig = [["/2020/11/14/brower/Cache-Control/index.html","39d54469e582c8ab44a36f7f402e818b"],["/2020/11/14/brower/cache/index.html","89e222d46dfb56ba32768ef9183d4574"],["/2020/11/14/brower/cache2/index.html","805ba033ac3ff56be073527f6c503141"],["/2020/11/14/brower/chrome-performance/index.html","2e41ea429f24371cd401bd58d0a6a2b2"],["/2020/11/14/brower/repaint-reflow/index.html","db9851b93a33b2a68541169ea63ae7b6"],["/2020/11/14/css/bfc/index.html","71a7bcaaea48511e262a59969addaf4d"],["/2020/11/14/css/css-box/index.html","15904b7ced9e23ffa69fac63921fcc75"],["/2020/11/14/css/flex/index.html","bc5b5d20a214778190ba317571d87b52"],["/2020/11/14/css/hide/index.html","c609eed199f4bfc24c09e4b8f38393d0"],["/2020/11/14/css/layer/index.html","12b708fb1463c3755eae1b3087681c39"],["/2020/11/14/css/layer0/index.html","5f91fe4206391c31c9ed1b7758b4cc1b"],["/2020/11/14/database/Innodb/index.html","dfba014cae5b9fa53a85e8f6cadfdfa1"],["/2020/11/14/database/centos-mongo/index.html","af4e2809f826d9d34eafe08b904e835c"],["/2020/11/14/database/mariadb-mysql/index.html","7614a774deaf83860e3bca398cfdd780"],["/2020/11/14/database/mongo-restore/index.html","0cc056b625d1d3523817a35617c22f1f"],["/2020/11/14/database/mongoose-populate/index.html","983b02f122b9364083784d754eae9750"],["/2020/11/14/database/mysql-transaction/index.html","754945ec62f78eb45ff6ae9bf8e9c72b"],["/2020/11/14/database/mysql/index.html","a5f31a0ddfaf534dcc74c7a4a7315840"],["/2020/11/14/frame/cmd-amd-es6/index.html","7b7f25fd46104337aa944ad9b3e837f5"],["/2020/11/14/frame/express-session-mongo/index.html","97e68d810f887ae6f7858b3770c91bca"],["/2020/11/14/frame/nuxt/index.html","7314b41293d6fb95e8622f586e23159e"],["/2020/11/14/frame/react/index.html","eee23cc098a043f19b4aa7d8109bd478"],["/2020/11/14/frame/vue-life/index.html","f3871a3c18ac4373b27e32e04871053c"],["/2020/11/14/frame/vue-nextTick/index.html","47eee022f6e399f0a13ebfe2af773ea0"],["/2020/11/14/frame/web-mvc/index.html","1a20cd1dc66db71f338e7a8a29560e6f"],["/2020/11/14/html/cors/index.html","d8c00d064c73a52e8cc9d6970ac9dff7"],["/2020/11/14/html/history-2/index.html","b00959eb9129ab35c7d3ddbdda79c98d"],["/2020/11/14/html/history/index.html","fd45cc5a01792f0e303be265a5568bbb"],["/2020/11/14/html/html-render/index.html","74f4623cc927e7a8f73a5dbbe56e9454"],["/2020/11/14/html/link-preload/index.html","3b71b411c4b36b4629c18c69e92416ce"],["/2020/11/14/html/link/index.html","343b247ff2389a6873a240f72ea9e6b1"],["/2020/11/14/html/nofollow/index.html","0088f89b3025db34419b70928f143f5f"],["/2020/11/14/html/video-auto-err/index.html","2936780a71f9686d6125c30cd6c2718e"],["/2020/11/14/html/video-auto/index.html","742e309a5f6b9f095ea45e361070587d"],["/2020/11/14/html/video-play/index.html","66f80966819d83458f233fb4d0b1cdc7"],["/2020/11/14/html/video/index.html","b466aba8187e94a756e1a0b45f79349b"],["/2020/11/14/js/MessageChannel/index.html","4a6e8e801309d8d3713218ae04c55590"],["/2020/11/14/js/MutationObserver/index.html","d4348b8b4071d4ef3609feb47adc3320"],["/2020/11/14/js/addEventListener/index.html","9d75a76a603352c644b5c99a45e89053"],["/2020/11/14/js/binary-tree/index.html","72c542c453fad4b5bed96fa14bb9e34e"],["/2020/11/14/js/bind-polyfill/index.html","7fb6e25380112d99c2946e910cdd2634"],["/2020/11/14/js/bind/index.html","0750ac7c0537a77340b347c0c3a36258"],["/2020/11/14/js/color-hex-rgb/index.html","0df229eb8c2345e34be165b6dc7c86a5"],["/2020/11/14/js/data-format/index.html","352491c2d2facc15efdea563437e1bc6"],["/2020/11/14/js/dom/index.html","92ccbf2942d68c37e5c472c143edeb67"],["/2020/11/14/js/es2020/index.html","ecb9874c7eab2fbf7335b68d3ada8398"],["/2020/11/14/js/es6-1/index.html","fd20fc9ca551890a185fe539ba14c90d"],["/2020/11/14/js/es6-2/index.html","58e8cfc7327bb3c6ac66785807c56675"],["/2020/11/14/js/es6-3/index.html","17fde5dc98fb4f4b1f7f0a74c5dcfd63"],["/2020/11/14/js/es6-4/index.html","d8069b1938538a8f7ef3356fff803bed"],["/2020/11/14/js/es6-5/index.html","efce82551701f85fb8cb3cc6d607dc69"],["/2020/11/14/js/es6-6/index.html","7f08c53aefe6f8681b893dd88e9cd050"],["/2020/11/14/js/es6-7/index.html","287a4908827ca60a336b0a07619739c3"],["/2020/11/14/js/es6-module/index.html","3c6a386efee2246986e8aaab22b5b536"],["/2020/11/14/js/es6-next/index.html","409582ed5543f73a5bee4200a9bdfe4c"],["/2020/11/14/js/fetch/index.html","83cad2c39c975b9c569f150fd6553ec2"],["/2020/11/14/js/fun-currying/index.html","0a9098f86d5224522c6c94e90b76d46f"],["/2020/11/14/js/fun-currying2/index.html","47a10bf3968f2caf506b8d0a2fc09f0d"],["/2020/11/14/js/fun-set/index.html","7b27eedd91d06f162e8243d06af3855e"],["/2020/11/14/js/function/index.html","b1814b02c6eaf7b9bc5822e89af19431"],["/2020/11/14/js/js-precompile/index.html","205545047624742f7e6b167166ad41cf"],["/2020/11/14/js/js-proto/index.html","a931753a58004d9977c4c321f490d842"],["/2020/11/14/js/js-utils/index.html","991229f91465506a2e9b508d93e4dd18"],["/2020/11/14/js/link-list/index.html","2bff224fa715b37dd025d8b18750a5be"],["/2020/11/14/js/micro-task/index.html","362103eb32f4320d5b8a85c7c0725797"],["/2020/11/14/js/mse/index.html","aba4aa58f77e4e1c1c785263273ada17"],["/2020/11/14/js/new/index.html","e8a3c2c9816e7043fe19efa1a49174c3"],["/2020/11/14/js/num-string/index.html","10b1b89190e0bd19ef783691222fbad3"],["/2020/11/14/js/parseInt/index.html","eaa4327e4f78f1e6a045e0c2c55f2d5c"],["/2020/11/14/js/promise-polyfill/index.html","12b444c5f0f2be84f0d58eab38d39f6b"],["/2020/11/14/js/queue/index.html","bb7ec04ab4b4897250263d7e6abe1992"],["/2020/11/14/js/regex/index.html","7ff1ecdfc60e2db78c642acd649862de"],["/2020/11/14/js/regex2/index.html","e4107388a992cc2376f3432c16ea27ba"],["/2020/11/14/js/sort/index.html","c4d673e8207fef345988e51c1888bd56"],["/2020/11/14/js/stack/index.html","9ea6eceb4c6434a14aa7cb99adf11c3c"],["/2020/11/14/js/textContent/index.html","385e9b92e8edf928d041aafafa45f4d4"],["/2020/11/14/js/tostring/index.html","e8f5a5745b4459525ac5301a0c135dca"],["/2020/11/14/js/ts-3.7/index.html","a671256d5d5185b6d42c1f18c122e0f2"],["/2020/11/14/js/ts-dts/index.html","e3696736868b9fc5de051dacb437be7e"],["/2020/11/14/js/video-demuxing-muxing/index.html","df3e593fda4e1e3f89619b68e5073425"],["/2020/11/14/js/web-err/index.html","a11f8aec22c113bcf497a7febc9b069c"],["/2020/11/14/js/web-worker/index.html","d31a11d55ac76388baa2c735073ea108"],["/2020/11/14/js/xss-csrf/index.html","72c7c65149f1c514ee5df48f48f93c3d"],["/2020/11/14/linux/centos-cmd/index.html","89c94a847dbc405278686432aeabc62e"],["/2020/11/14/linux/centos-node/index.html","98b6045dbac0c65d97efa7c27a7d8b6c"],["/2020/11/14/linux/crontab-1/index.html","e36f69ee8dc2a7602c7ad0d147ed2a4d"],["/2020/11/14/linux/crontab-mongo/index.html","78d4ba870ced83405187416f5d87db97"],["/2020/11/14/linux/crontab/index.html","5e66dcba8f6fa3a19439a29fad2a1ea2"],["/2020/11/14/linux/firewalld/index.html","0889c314bd1cd54f55810c1d315d0510"],["/2020/11/14/linux/google-bbr/index.html","fe4eb9acd1a58a53e0065728e29dfa6a"],["/2020/11/14/linux/java/index.html","c60f552bb59547deabb9c43f7f836a58"],["/2020/11/14/linux/jdk/index.html","0d27635cabc8ab21ea30678c1d918d68"],["/2020/11/14/linux/jenkins/index.html","a6949de5e96068fb333b52ed984960b0"],["/2020/11/14/linux/kcptun/index.html","2f92f586c071d11f9374e387f95cbee7"],["/2020/11/14/linux/nginx-n/index.html","867d6ecbbf9c4e1754ba7f289189dddc"],["/2020/11/14/linux/nginx-proxy/index.html","0d9498e41a604f73a26e15e455a460a5"],["/2020/11/14/linux/nginx-root-alias/index.html","9013df66249bf8802b31a59d6bd7127b"],["/2020/11/14/linux/nginx-ws/index.html","56687e75e113cfc8b9b11b6afdf6d90f"],["/2020/11/14/linux/nginx-wss/index.html","1447c41dc09a93a367fecd62175f649a"],["/2020/11/14/linux/proxy-reproxy/index.html","312204070d6d51ff395ebdfbdf25ad5b"],["/2020/11/14/linux/vi/index.html","11f2ff316e45c01c8b8e2d647bf2848d"],["/2020/11/14/linux/yum/index.html","3665f50bb04e7aa946bff9fdb604eb00"],["/2020/11/14/network/cookie-parser/index.html","34d4624ce79edc480637f5121381a8fa"],["/2020/11/14/network/cookie-session/index.html","40d500ea1382b2b79381f973e2670e3d"],["/2020/11/14/network/dns/index.html","10efeba69c7bcd50094dfb65ee63f489"],["/2020/11/14/network/http-206/index.html","8f1d2d346ead3aa9cba062b2548734f2"],["/2020/11/14/network/http-code/index.html","cad9c0202b3299ddb257cbc62ca5eafd"],["/2020/11/14/network/http-cors/index.html","2ed173d670b5232db31d1e9bc374cf60"],["/2020/11/14/network/http-differ/index.html","e43243bb883e302a7bfa763fa123d766"],["/2020/11/14/network/http-get-post/index.html","08049f6b5080cffb874e2609f0567461"],["/2020/11/14/network/http-histroy/index.html","782247d55d4d568eba548604132e3751"],["/2020/11/14/network/http-https/index.html","d9e6cba981811ae79356f5d629b6ecff"],["/2020/11/14/network/http-info/index.html","51ddc5902cd1eec7a500c17bb71a8f60"],["/2020/11/14/network/http-len/index.html","827a78c3c2301e4e4229ee1280d9f3c1"],["/2020/11/14/network/http-url/index.html","8a0bcbeec07ef82d51223687c3ba6f20"],["/2020/11/14/network/symmetric-key/index.html","c531ea441b94cf198c69000e9853134a"],["/2020/11/14/network/tcp/index.html","545124d895953be891756d3230717da4"],["/2020/11/14/network/webSocket/index.html","ac2db7f587a9fc698ca055de60e7fd64"],["/2020/11/14/network/xhr-buffer/index.html","60067d3b0694b572c0dc4acbd1ebe46d"],["/2020/11/14/node/cmd/index.html","02996a38241060a1255bd64351ecad0c"],["/2020/11/14/node/express-middle/index.html","e3ed5089e880c41343eb86b0f07119de"],["/2020/11/14/node/jwt/index.html","f4e7ff2f6075731188ae5ca66438dd55"],["/2020/11/14/node/node-schedule/index.html","78d847b959f16017316c857b07fe5995"],["/2020/11/14/node/node-ws/index.html","f8d6636ce676576e714f2ad7f3963b7b"],["/2020/11/14/node/node-wss/index.html","a415d6fcb1b3694dc26566a9a1d9fd2d"],["/2020/11/14/node/npm-deploy/index.html","95e78e83836ccc2a48083db3b7d8e85b"],["/2020/11/14/node/npm-link/index.html","d18628211f209ee3cfc07e5c42f9ab8a"],["/2020/11/14/other/hy/index.html","d03832d074ec0d5bbebc7a82fdc4f790"],["/2020/11/14/other/java/index.html","33f7d017c458dffe1e769e19d0795583"],["/2020/11/14/other/mobile/index.html","7d625b14ac24f2d0c840cf13cbe42c8e"],["/2020/11/14/project/babel/index.html","31d4066741a5573a244c1f8837168b17"],["/2020/11/14/project/commitlint/index.html","5570e7c5510a316caa521b8f7c553d98"],["/2020/11/14/project/github-webhook/index.html","92d0a5bf72d2ac9251fd79ae48cce9f3"],["/2020/11/14/project/terser-webpack-plugin/index.html","a74fd6ad361c5911d640b2412eb8bcb5"],["/2020/11/14/project/webpack-end/index.html","bdbaf78a59f5f0cc5c86fe7fa01a88e1"],["/2020/11/14/project/webpack-loader/index.html","e8e1c9fc044d8b5c164e5fdbf670a1ae"],["/2020/11/14/project/webpack-plugin/index.html","39370d0f388c3edea7b44dcb2efe46bd"],["/2020/11/14/project/webpack-splitchunks/index.html","b75011903a2dd4792e931e807cfe3a99"],["/2020/11/14/python/decorators/index.html","30d7698b50da0833f0b213e8f7254d77"],["/2020/11/14/python/django-cors/index.html","a1a3add05d56f8b68a25fda1fe1454a9"],["/2020/11/14/python/django-sql-error/index.html","cb820d5287cc8705c8409ff479495e25"],["/2020/11/14/python/middleware/index.html","168a328cbeacb6cce91d03fae8101855"],["/2020/11/19/doc/ci/index.html","ddf3d4a08e7d3bb5d6e640216108f1f2"],["/2020/11/19/doc/dj/index.html","c1165d29d60a1e9381a1d59cddba8593"],["/2020/11/19/doc/dp/index.html","ffc8009e37d4632433a846d48cbe3adc"],["/2020/11/19/doc/f4v/index.html","214788e7357963d2290d3a3810cc8b2b"],["/2020/11/19/doc/h264/index.html","a56dcec39c15e3c04e830a7023570557"],["/2020/11/19/doc/mask/index.html","94f750f57823e70ce315701c52cd43ef"],["/2020/11/19/doc/mse/index.html","c8551ed5782aacb797129d7b2b4be000"],["/2021/02/01/brower/lifecycle/index.html","ea935106d693587fece564904c5d2ac8"],["/2021/05/07/brower/gpu-acc/index.html","688366e8478540a92d3ae46ff6311d6a"],["/2021/05/08/brower/fps/index.html","301dd64aee2b254d2f7b0012a9657ea1"],["/2021/11/27/dm-render/render/index.html","c0a25c6947e1cad4698a1abb693d7ab0"],["/archives/2020/11/index.html","d46116c1cb961df9fd545bf0d64a1def"],["/archives/2020/11/page/10/index.html","ba109ac1fa02311f88df99526664f8b2"],["/archives/2020/11/page/11/index.html","27c61b70bb0cec7293b6e0a8b74470ce"],["/archives/2020/11/page/12/index.html","7c7118752ad0ef7917df71a65ea1b8d7"],["/archives/2020/11/page/13/index.html","0adab452eef1d6aa654ce43c4685c3de"],["/archives/2020/11/page/14/index.html","08dbd1bfe9133426114d9786da46629e"],["/archives/2020/11/page/15/index.html","0a052996a0e0822b28ba284369ee2e61"],["/archives/2020/11/page/2/index.html","ec54eaac43df7ad2a0ebfcfdf8033cb8"],["/archives/2020/11/page/3/index.html","97a12392857e1c69b077f57c84973cd4"],["/archives/2020/11/page/4/index.html","1f8c8eca9d14384c53ab82fdf14165f2"],["/archives/2020/11/page/5/index.html","8a6d1d3eebb02f8c47bc1b429307ab00"],["/archives/2020/11/page/6/index.html","2cada7124dece9eb3bfa8f42bc5b3572"],["/archives/2020/11/page/7/index.html","128e91784aa3876236d558a3f026bab7"],["/archives/2020/11/page/8/index.html","63bd900760487a93030a165b7ab3e4a4"],["/archives/2020/11/page/9/index.html","1648c82be1ca8a02e72e003e621e1bcb"],["/archives/2020/index.html","06f9b226f2fffe85376225b8da5a6d1a"],["/archives/2020/page/10/index.html","cf52c2b8e9b52df8816385fc6e794b80"],["/archives/2020/page/11/index.html","43c8c560f3cd85c30e821e131103d2e1"],["/archives/2020/page/12/index.html","7792a563b577a144c7295136ce5b0cd2"],["/archives/2020/page/13/index.html","f897fe374f6d6657c00ebbadd0c3b3e8"],["/archives/2020/page/14/index.html","ee1933ec7a3ddaee00621753836c392b"],["/archives/2020/page/15/index.html","673637148fc8a73ed5e4fbcfb08647d8"],["/archives/2020/page/2/index.html","61c1c847eeabc78eeba30b960b6e7578"],["/archives/2020/page/3/index.html","968ed778e38751b88a39a70159b5bd37"],["/archives/2020/page/4/index.html","a9af12542c9c506cd5613c5990106cd0"],["/archives/2020/page/5/index.html","7a55fc0a2d684ee165959361316a20cc"],["/archives/2020/page/6/index.html","f391ecb0d5dff21b032ce3e573cada02"],["/archives/2020/page/7/index.html","261bb4253b391833d03b932373a8ccea"],["/archives/2020/page/8/index.html","43d73539672cbe35804326f43ae0ec66"],["/archives/2020/page/9/index.html","2220d3281a0642c8362771b1c25869f3"],["/archives/2021/02/index.html","7034fdead04f4c1d0e7735fe0144bdbc"],["/archives/2021/05/index.html","ff426acae19919b168bfa3934a29a6a1"],["/archives/2021/11/index.html","36ebce8476ca4a290c0185b7b1e45427"],["/archives/2021/index.html","89d21b84064b78026c43ca352af0d90a"],["/archives/index.html","5ab77263bbed5f86d926ff07779070a2"],["/archives/page/10/index.html","8dd720a16799a93a1f6c4fc9a7d76a13"],["/archives/page/11/index.html","fb85243da18f88dea9e333853e03f6d3"],["/archives/page/12/index.html","51b7548fbc5a6a52891f5b010149f0b5"],["/archives/page/13/index.html","eeb9d1fe103c02767a62649b5eb290a3"],["/archives/page/14/index.html","da9b695e924d8a3364ccad9e72717b33"],["/archives/page/15/index.html","d190f88d15fd7277f7ee5a04a9caafe7"],["/archives/page/16/index.html","14d1e9c20646b4c1c4e30f6eb86a47b6"],["/archives/page/2/index.html","d206ac87d3b20422c6deb8967be9e142"],["/archives/page/3/index.html","e63fd2369a1aaa9c854acb839cc2a0ed"],["/archives/page/4/index.html","93b3229375d30aa6f56d4e9ad244c335"],["/archives/page/5/index.html","3fa57adbf95b85842add3b30326d1874"],["/archives/page/6/index.html","45d3409e56f15a7fd4cec752eaf0eab4"],["/archives/page/7/index.html","ce7966ea5663bbc07cd65f054a6c9106"],["/archives/page/8/index.html","77e1b1436c7242fa8f579c964388ab82"],["/archives/page/9/index.html","9157f90c735100b44d61dcdc636e78e6"],["/audio/audio.js","30af61a128e6d9024464b8581690d2ae"],["/audio/index.html","88cc2cb1ba80b36211d10f7776a3a9f3"],["/categories/index.html","9a0b911dc02ed78bd7253df41e474995"],["/cli/cli.png","8c0c6d96bf2d0b8ec13b7e029b0edfdd"],["/cli/follow.css","7715b931889c8d4b816e960bd4ea2857"],["/cli/index.html","5e5bfb4694b1716dc0615cf7feb4602a"],["/cli/readme.html","ac17de920e8e9e4e2960921c85ffcb3f"],["/cli/w.jpg","9696428e17f662a60b97e3e070a56b43"],["/cli/zero.png","6e7c156f8cfb2afea8261c206546ca64"],["/code/assets/element-icons.9c88a535.woff","d9491be2c5109fca0fa40d0c59e2e3b9"],["/code/assets/element-icons.de5eb258.ttf","abe71f7d608d43b56d9b2aef78d7ae99"],["/code/assets/index.a75e1e39.css","ef5c0fc17d79532b91c05adbbbed5191"],["/code/assets/index.c38f2a21.js","de68fa8a7a49e86872afec0a01a50919"],["/code/assets/vendor.9d963d30.js","4876a63badcfd047891510fae4097a0d"],["/code/index.html","293444750700cb1969f2fbc3dce3f2ea"],["/css/index.css","d8fe9f9b22538c07c9a48215ec0a7d07"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/follow/follow.css","7715b931889c8d4b816e960bd4ea2857"],["/follow/index.html","99f5bc050ef55b6f02466935fec4d8e0"],["/follow/knav.js","7d863b99144e1651521d6bbc48b7f1b8"],["/hide/bi.png","17b80f948f7b1155cdaea099894b6ea1"],["/hide/bro.jpg","e4a34350594a3f769a7a941a91e73fc4"],["/hide/bro1.jpg","e971a5b6cd95078e195657cda63a66f2"],["/hide/bro2.jpg","16b171e365f7ad2f0d787781885bee38"],["/hide/bro3.jpg","2acb9b9d0bd9199f889830fc722a0ef1"],["/hide/bro4.jpg","63bc51f06922fedd5143ee539ea9e8c3"],["/hide/bro5.jpg","11e6a3e87a5cf640a01af30817ba9707"],["/hide/bro6.png","f8be2ef79cdf29c8da170e76138740f7"],["/hide/cpu.png","9792bfb92eeba30abd2475ec02162f24"],["/hide/css.jpg","4f38f8da7753934355bb19250a9f47d1"],["/hide/cwnd.png","a7c535f85fd865871017c6d9166ae5b9"],["/hide/fps.png","cfbe01318789f8598896e8ebae74ad48"],["/hide/fps1.gif","249aeae794b38d43df5034aabcabf463"],["/hide/gpu.png","894e6d2f20921e7c8be985bbb0dac5d5"],["/hide/gpu0.png","87c660da468bc57345c2ed36c55d08a9"],["/hide/gpu1.png","ccc61af8639b3d8b40aac964c89495a0"],["/hide/gpu2.png","c88f9fd4d9baf708c353e445bc00046b"],["/hide/gpu3.png","46ce4d820db40e9439bcac253b7be79e"],["/hide/gpu4.png","666857a310fc49a6288979d5615c75a5"],["/hide/gpu5.png","6eeec5a6fa92f7ba2b897d71602e3559"],["/hide/gra.png","f3a31c8e235cbd17f89690249646924f"],["/hide/html.jpg","b1245c9050ba8f4a174e5f74aa81be7d"],["/hide/paint.png","232c4de9606f6e9d2b3ae9f52dcfb974"],["/hide/per1.png","c8bcad8d9e63c271190c35573180049c"],["/hide/per2.png","98d837d2d5eeba008cac1cb2d5ac66bc"],["/hide/tree.png","ad7a642ed9d1b5217098dadfe77bc562"],["/hide/tur.webp","77493749f8f18aaa32b722984f00fd0c"],["/hide/webkit.png","144c9289e3a928bd8dcd096b988b0db3"],["/hy/index.html","83d2944194327dc5f643c8ede1676a0a"],["/hy/piano.jpg","186d4ce60365ad39c5003fa8e3cfe7f6"],["/hy/yyj.js","d578725b70b329f21cacac6910486bae"],["/img/404.jpg","6708d92b33a76bc8759e3832d89cc5bc"],["/img/Innodb.jpg","c350cbb23996abfee7d226d8a02090ac"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/audio.jpg","bbc666a99a4abdb92036ff851f5c2220"],["/img/bg1.png","e70b4cf6957d1bb37b501a77319fbce7"],["/img/bg2.png","86abb0b786c270073c641b292f3f992f"],["/img/cache1.png","f3f9894b128aaa71c632eca751c13936"],["/img/cache2.png","e31da6a87b07b1b6d1a6c93e134bec5d"],["/img/cache4.png","a323711c9cf234eb19c8e47fe26de0a7"],["/img/cache5.png","bb5888e6a0ba4a5e9341d922dc59906c"],["/img/cache6.png","79bdc64dc80e61923e3609ffd4881460"],["/img/cache7.png","6718511513b7fa500d8de1b19e3c6eab"],["/img/cache8.png","84ad69b2d5aa201686397afc9420481f"],["/img/cache9.png","fde40c8b01c7a4c312e4741682c3ac78"],["/img/css-box-ie.jpg","0abb576ccbf3e6e29c482880c6c7a177"],["/img/css-box-standard.jpg","f88cc621a037b959111ef3bdc8e8a61a"],["/img/css-box.jpg","96efbf91a11e3e16a69a634afc1aa826"],["/img/css3.jpg","e604bf25aede342b28c270694753fa06"],["/img/database.jpg","6e30f87c1504bf625945e38690931b50"],["/img/default.jpg","186d4ce60365ad39c5003fa8e3cfe7f6"],["/img/default2.jpg","695dc2d6fef5092c43c81a82c73209fa"],["/img/default3.jpg","e6dbdc3eab92a9bfe81f031af6f3fd8d"],["/img/dns.jpg","664bd3007b4aaf137783a90edec4d5bd"],["/img/dom.gif","20a60b70fa7c44e1851284ef2aa84c26"],["/img/e_block.jpg","fe39d2aa5a693ed6fdf3244a0fd43d6a"],["/img/e_brower.png","38870559e6437549ae444014ae5164a2"],["/img/e_storage.jpg","c218c03548192ad23908ebbfda4dc3a6"],["/img/e_upload.jpg","1360d82820f03121c8bb105eba8910af"],["/img/engineer.jpg","648e800cf421297aa800185b0f4b8613"],["/img/error_level.jpg","70f549c05c3a38185a6cd91c3f24b254"],["/img/es6-1.jpg","5a631910388990309719aeea261e5e41"],["/img/face.jpg","48e1278e886117e6a81b09a8abd923b4"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/git.png","661bdf03b566cd9142ed0cb2bbfa5d31"],["/img/guitar1.png","24e09bd84e38a9b778fdb33cf0db4cba"],["/img/guitar2.png","9308d80550d9d23e9a641718ea3c2816"],["/img/html.jpg","15a0ebced997e22423e29d79400b4396"],["/img/http0.png","6fb2c90fcd987ac5f1ed351c46a94614"],["/img/http1.png","48a823ba71f53fe0201c40005eb669f9"],["/img/http3.jpg","cfb71ef15c3c1484de5cbc4b5e3a3e9e"],["/img/http4.jpg","3b774104b448d96052ba49a93a180cb0"],["/img/http5.gif","d404acda62c276b9a3ab90506074307f"],["/img/http5.jpg","9d2a2555b99eac2cdb625bcdc355db77"],["/img/http6.png","5832cc77ea1dbbdc281758e48b5d49c5"],["/img/http7.jpg","38069c638a93d43ea201c081826b8903"],["/img/icp.png","b7fa4a92047987bf65dc954f48f95c3d"],["/img/in_file.jpg","60e8d0496a81b561e73ed7447c951301"],["/img/in_group.jpg","e58036db2375c85a482dc25f00a6d532"],["/img/in_line.jpg","1c65ea519c0e0232abba0476781ec41d"],["/img/in_line0.jpg","6eff2dabe2e6b6ff9226f7ddd904acfb"],["/img/in_min.jpg","2832a095be030ca6254e84a12db80052"],["/img/in_p1.jpg","5062d9c9cf1927f46f708a18fbd04b73"],["/img/in_p2.jpg","1761f0af72bf03e505623132c4dee072"],["/img/in_p3.jpg","c0b6e75d911f826533fa8e428b13026a"],["/img/in_page.jpg","1ca1af032c3b74cee6af758f6afa3ba4"],["/img/in_pages.jpg","452e2d255f53a16f14197ed4c78d0b57"],["/img/in_record.jpg","52fe8010e0bd1195826f7d7fef7effe2"],["/img/in_table.jpg","ed99da9efd84d88bc9981bfd0ad6f5d0"],["/img/ip-info.jpg","137ef3e803ffee1d4722cc5ba6ba4879"],["/img/ip01.png","60372fbdf9d5b16a0b73d054aac78ae6"],["/img/js-pre.jpg","5563fdfc3f0c4cbcf5bc4ff8bd4b11ac"],["/img/js.jpg","93de37b1c287aa6e396629651b87c759"],["/img/kcp.png","2fcc970d8d88c663de4f32096f10c4e5"],["/img/lifecycle.png","2fe88acda884a35cd150475b24d4d87d"],["/img/linux.jpg","da86200d0441f2434e074909fb78a750"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/micro-task.png","24b1f7b7c18318952099be9126d6f719"],["/img/micro.png","ef9842e97a62bb5c2aac3cbf99b2b7de"],["/img/middleware.jpg","e1c6e4c7df95a5e3a80882c8b4aaf803"],["/img/mvc1.png","6fea96842165b35cd4362afbfe4c28ac"],["/img/mvc2.png","0967d7c996185643a5c3c221f23976b1"],["/img/mvc3.png","24c741b64ad540f9ea3b6728007627f0"],["/img/mvc4.png","47e923a5451f384f54fb8f8e5d119ea7"],["/img/mvc5.png","59e3024de383a663c185cb6f51e3c194"],["/img/net0.png","67709cff0f5b734941fa8984380b456f"],["/img/network.jpg","6d1bd3867a00092a15e810f0e28e08f7"],["/img/node.jpg","5a1d0be501a67bbb11f76193b2484932"],["/img/nuxt1.png","a8a79e895887d6cc0dbac0e10817d3f8"],["/img/nuxt2.png","794d74b38ae7072cb13efec3f54c6d46"],["/img/nuxt3.png","30153f3e8ff30b283ef0c85aebd30145"],["/img/nuxt4.png","2d6d081ce9fc5d73dfa2104dd4f62662"],["/img/nuxt5.png","1965e4a8214d1dd5acc4fdc99a0c135d"],["/img/osi.gif","2af488004591cbc12cd82c44518523de"],["/img/piano.png","3e50520a46b2a5ef5e5bcfecf89ebe7c"],["/img/proxy.webp","b71c84b0dd3183787b9b7390d9cc3626"],["/img/python.jpg","0ea8225aa53fd9b90afa175f2f029b1e"],["/img/react.webp","138a4a86046047def99fde8a939e238a"],["/img/render.png","5527a6ebe35dd531060b80296da055bc"],["/img/render1.png","79d4f1ecf7669ed50e0373945a2248aa"],["/img/sql_index.jpg","01266f5a5746ccca7602549b7e6cb846"],["/img/sql_no_index.jpg","898f9995d5536159509c6346b34593f0"],["/img/sql_s1.jpg","b852c3e340f80f79a149bcc4fffd158c"],["/img/sql_s2.jpg","24f9c84401a165b6cbe3304e42c50889"],["/img/sql_s3.jpg","95628c777213e9fc89c954ce3d3cb684"],["/img/sql_save.jpg","da4eb76556990a3b9b89e32e48136660"],["/img/ssr.png","5631c8e2f956ae0d55455d04af8ab317"],["/img/tcp-ip.jpg","c1a9182811eca72933a8c0ffd39eba06"],["/img/tcp.png","6a28f4d806c4ce9e148c28132f0e126c"],["/img/tcp3.png","83d97bc275b4af9890b2deeb7d035a9a"],["/img/tcp4.png","78aea88d303d52d5dbc81e002fd93d2a"],["/img/teach.jpg","4650698f3262b8c395cc3b640b568045"],["/img/vi-cmd.gif","acc327dfe0d5328c1ad102179c70b641"],["/img/vim-vi.png","dcd25a6082e1989975c280213f3e1052"],["/img/vue-nexttick.png","f1f3435bb2f4d3f418480be4a171e0ed"],["/img/vue-nexttick2.png","ed23a41f9c38de8174b1089ab3876966"],["/img/vue1.png","cacdab3440e3647647063f253a99fb07"],["/img/vue2.png","51175931269b1b90b2f08aabeb14fc96"],["/img/vue3.png","904b88eac7e8b99e3b6063a5977fc63e"],["/img/webhook.png","2cf55702ae98e72420c445084e5c2405"],["/img/ws.webp","aa574f8edcccc79f33aea448ea322d57"],["/img/xss.png","5c18b7d26b37df483a702810498d3182"],["/index.html","1e94d79f43ac1fcae60e1ef9797d2836"],["/jianyin/1.jpg","8baa30acdbf8ac9ec72e8d8aeebd2c67"],["/jianyin/4.jpg","aadd67c8e4abbd3b43b3853b635c5643"],["/jianyin/index.html","8d89075dade5b26d05638442a5184eaf"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","92ababd6163cadf23d8b8eb2edfb196d"],["/page/2/index.html","ec2fd71dcf6de6e914499b632cb642f2"],["/page/3/index.html","b08a7286a1d485d4d766d8c569837ee9"],["/piano/index.html","5f1e9d4abbe2c68a5dcf8b2367d79f2d"],["/piano/piano.js","b3b64af667370ff6a52ea668c545facf"],["/preview/files.js","e44ac5a579be539c1053dc61244b08d9"],["/preview/index.html","d9cf5515354464e1229f6b37c4945d19"],["/pwa/144.png","68bbcf438443c0540757bf8c269507ec"],["/pwa/192.png","303f826bc53ca35a6db0f2a4d243d837"],["/pwa/48.png","07688b011d5f26cee21398d85ac2e0a4"],["/pwa/512.png","8fddc19901d448a5317575adcad7d1ac"],["/pwa/96.png","ce8ea5361607aa60dab17e1a50d4570a"],["/pwa/favicon.png","3d4e693505092fc6f4cc1a70438ef843"],["/qrcode/brcode.js","e1060ec8ce3a96679db85152a175f233"],["/qrcode/index.html","4460bb9e891efc17079775bcde87d240"],["/static/ashes.js","b4143c2bd85f1c81cbfda93f2dc76988"],["/static/bg.png","c62e2e026531003de922e4e5d6ff541a"],["/static/editor.js","ce1fb5f6b8e638fe05a28941f9970b92"],["/static/follow.js","3daa711f3e14bd15d8b1f64313b685ee"],["/static/weplayer.js","5b13e6501c44801cb201ec9d6e1ef746"],["/tags/index.html","16e0ff224e9c85233ff7992e6547eb53"],["/video/brcode.js","27036f50c864ef97cb488cbe85e559be"],["/video/index.html","17660a06f54cd228bc78a86a35bdd968"],["/video/player.js","939f5190e9b3ffcced53f07053df4eff"],["/web_page/follow.css","7715b931889c8d4b816e960bd4ea2857"],["/web_page/index.html","99f5bc050ef55b6f02466935fec4d8e0"],["/web_page/knav.js","7d863b99144e1651521d6bbc48b7f1b8"]];
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




