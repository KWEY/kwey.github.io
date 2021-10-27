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

var precacheConfig = [["/2020/11/14/brower/Cache-Control/index.html","46e5f9f44f641040ac38b7a8813298e8"],["/2020/11/14/brower/cache/index.html","52512711b5cb57408a655a55be120e07"],["/2020/11/14/brower/cache2/index.html","a2a852f0c6efea1722c2ee7c58be30fd"],["/2020/11/14/brower/chrome-performance/index.html","60dc8799d81a57cef446874485de1214"],["/2020/11/14/brower/repaint-reflow/index.html","7518bef6b6fd54f4078e46beb8f54a9e"],["/2020/11/14/css/bfc/index.html","872dd1618260d765b4b1f64e67846b43"],["/2020/11/14/css/css-box/index.html","52dfb12fb20d517fd62fda891f44c009"],["/2020/11/14/css/flex/index.html","68f65909f9d0d8fc6341c32f3d263d4f"],["/2020/11/14/css/hide/index.html","53c49d04374c8fb4f9fae5e20e818188"],["/2020/11/14/css/layer/index.html","4d369f0d249bfdb4be57eb07fffc70bd"],["/2020/11/14/css/layer0/index.html","57647ef91de8d8589a52b6b1776852d1"],["/2020/11/14/database/Innodb/index.html","8b208a23260eea58d360872a8b3effcf"],["/2020/11/14/database/centos-mongo/index.html","54aae41f04d5bd81949376af85528011"],["/2020/11/14/database/mariadb-mysql/index.html","937809e126dd490b293d41a743b0ee27"],["/2020/11/14/database/mongo-restore/index.html","faef97ae6f6ae99c98f98a774d8ff473"],["/2020/11/14/database/mongoose-populate/index.html","7aec020784e184e3c46c54f19eef316e"],["/2020/11/14/database/mysql-transaction/index.html","535b2f1bcd7e10ec1b02c9d4bc04bcea"],["/2020/11/14/database/mysql/index.html","05058ab1c5b0de284159708b716caad6"],["/2020/11/14/frame/cmd-amd-es6/index.html","b5392a9e445da67538627786cccb9dda"],["/2020/11/14/frame/express-session-mongo/index.html","6a55779a794fd1fec25f7411020559a7"],["/2020/11/14/frame/nuxt/index.html","fc21049e72f5ef247df77737b3df40e3"],["/2020/11/14/frame/react/index.html","a575c129e1757c91f16979e5fa24ace2"],["/2020/11/14/frame/vue-life/index.html","2fab7856cda3770cd7e2a6d6d6c50dea"],["/2020/11/14/frame/vue-nextTick/index.html","175d770a2606a296cdca7ab561679d97"],["/2020/11/14/frame/web-mvc/index.html","c6ff7dc7dacfff2bef658e7f5956a15f"],["/2020/11/14/html/cors/index.html","d31dce348e3c318b41a8479e97282928"],["/2020/11/14/html/history-2/index.html","0622acf4bb1590dc6d22b8e61c980385"],["/2020/11/14/html/history/index.html","18864af2422378c2ba5dd0335a8a4a0d"],["/2020/11/14/html/html-render/index.html","20191d5da32633ef1fa51000d5ac5cad"],["/2020/11/14/html/link-preload/index.html","635a207e1d7db39a21eb87031ccb9d89"],["/2020/11/14/html/link/index.html","d471ad770ce6308cda9e3c48e05739ed"],["/2020/11/14/html/nofollow/index.html","f262eb1d66adef21b78b019209c93808"],["/2020/11/14/html/video-auto-err/index.html","a744dfae7bf08650ea017bd1ebcbfd36"],["/2020/11/14/html/video-auto/index.html","ba26df89549a4bfa566a6839e373f1ee"],["/2020/11/14/html/video-play/index.html","b57e7c0f2e50782746ab9324afacf0cd"],["/2020/11/14/html/video/index.html","ba34f7ecb47c3bdedc264ec6fba4582d"],["/2020/11/14/js/MessageChannel/index.html","d1b21ac0488a07a12afea938cea44c5b"],["/2020/11/14/js/MutationObserver/index.html","f7a1458fb6f93b901d02577e69498064"],["/2020/11/14/js/addEventListener/index.html","1a44ff43fd9d029365b6567b27fa33ea"],["/2020/11/14/js/binary-tree/index.html","7f5285c986af424e7df58f602ab589a6"],["/2020/11/14/js/bind-polyfill/index.html","d28e1bb28c5dbeb3336f947baedcf0a2"],["/2020/11/14/js/bind/index.html","875ccefca23b38219d69351f0bec9049"],["/2020/11/14/js/color-hex-rgb/index.html","f32ef0e23201d7a170992ba078292ffe"],["/2020/11/14/js/data-format/index.html","ff592abf476dc398e7564d3d4454d695"],["/2020/11/14/js/dom/index.html","53c28d48c4f00d64679c1e9d0a1102f8"],["/2020/11/14/js/es2020/index.html","5f9c5eca3ebc572bc285e309bcd2f463"],["/2020/11/14/js/es6-1/index.html","6beff76808633fc4475c0f411ef87abe"],["/2020/11/14/js/es6-2/index.html","d79007684da65fe807baaeac27cccc81"],["/2020/11/14/js/es6-3/index.html","dbf52ce2049e3878d34967edd2329098"],["/2020/11/14/js/es6-4/index.html","35361475c75c3b8460ec98c232b98f3a"],["/2020/11/14/js/es6-5/index.html","2307a347bf230c6535c25f33a67b09f3"],["/2020/11/14/js/es6-6/index.html","54a5d98ef757718597a52fabc0cc6e47"],["/2020/11/14/js/es6-7/index.html","f9d6688fe547134e134f8fa4f0a4846f"],["/2020/11/14/js/es6-module/index.html","832c6bcc0f8b04037b529ba5503b2931"],["/2020/11/14/js/es6-next/index.html","0f5fcb7f3bf9ffcaee32a1ee7a121020"],["/2020/11/14/js/fetch/index.html","0af213df04d5396e19a2d9c1e94f32e1"],["/2020/11/14/js/fun-currying/index.html","d42f8a15caf65a8bf032c608fe1853e0"],["/2020/11/14/js/fun-currying2/index.html","de54137bf911524762aaa927f3a00051"],["/2020/11/14/js/fun-set/index.html","d93742281ebe135e238ddc62b96222a3"],["/2020/11/14/js/function/index.html","68aefed04cd4f2d927a9ca97b05a2273"],["/2020/11/14/js/js-precompile/index.html","17de582dd8bd8f69969e95cbe0920cde"],["/2020/11/14/js/js-proto/index.html","1768b3769f44a8f5b0e9f2b2c7b701e2"],["/2020/11/14/js/js-utils/index.html","95b48eeb76f4e638d85f36f061a2ac26"],["/2020/11/14/js/link-list/index.html","349728d7e106cfcbd168b5bc8531bdb5"],["/2020/11/14/js/micro-task/index.html","be420cc0797832d27f98147c541e549d"],["/2020/11/14/js/mse/index.html","4364c9ebb5dd21fa3f28ecbbf05d7439"],["/2020/11/14/js/new/index.html","069012196fc09e831f7177c933928f21"],["/2020/11/14/js/num-string/index.html","26e33a8d5c7656db7a8ecea3121a5939"],["/2020/11/14/js/parseInt/index.html","d1b708ed24891bff747846ae46bd1ccc"],["/2020/11/14/js/promise-polyfill/index.html","21bd0177e2e5fba0935c078cf7003815"],["/2020/11/14/js/queue/index.html","3a8daf716ef2c0a2cb5b3dc7dc2a604d"],["/2020/11/14/js/regex/index.html","6032bd36543c218e6185fc0e8daed220"],["/2020/11/14/js/regex2/index.html","a7e150a1c997b410bb260ef91d386e63"],["/2020/11/14/js/sort/index.html","fecddacdfd65eb157a541a160cae0195"],["/2020/11/14/js/stack/index.html","5d36d31534b676d58d5212e2758c82b3"],["/2020/11/14/js/textContent/index.html","e971f547210c6d347c39672feede2932"],["/2020/11/14/js/tostring/index.html","9dfdbdd0e263a190a1dee44d95d54a69"],["/2020/11/14/js/ts-3.7/index.html","35b895e064f276c09ca518583cb02180"],["/2020/11/14/js/ts-dts/index.html","5f24f27e76393d9c7798673f36646aad"],["/2020/11/14/js/video-demuxing-muxing/index.html","b4ec7ef81136414d37d6118e9cab389f"],["/2020/11/14/js/web-err/index.html","7b65c0e543a8de74a589692109077715"],["/2020/11/14/js/web-worker/index.html","a0a52e89e6bec51be8f179d501382ddf"],["/2020/11/14/js/xss-csrf/index.html","fa15ff9133652d371f67e7fcd4d2aa67"],["/2020/11/14/linux/centos-cmd/index.html","db31a513176525825d22e1347fa0423d"],["/2020/11/14/linux/centos-node/index.html","3cabe34f99009defbcde21b0d548e50e"],["/2020/11/14/linux/crontab-1/index.html","be3c895c9cb8859693a36a68c529d85b"],["/2020/11/14/linux/crontab-mongo/index.html","ef24b241d599e0575580d952be91bf7a"],["/2020/11/14/linux/crontab/index.html","82b34d3150ad4820e4178cd55e1a834b"],["/2020/11/14/linux/firewalld/index.html","8bb356885344bd5b3403249e401b20c8"],["/2020/11/14/linux/google-bbr/index.html","7bc387c9fe2af9395a27a2fe9a542039"],["/2020/11/14/linux/java/index.html","df6456a98f35c3f354af365514e49af7"],["/2020/11/14/linux/jdk/index.html","4ba815fec4b3094a319ac05f0ac78008"],["/2020/11/14/linux/jenkins/index.html","c529ba6a804f62d98705b6b5287ed186"],["/2020/11/14/linux/kcptun/index.html","9459f6e98763f88c3f0137a657b040b3"],["/2020/11/14/linux/nginx-n/index.html","3385a5a4070a7c9c99b5a21a899207d4"],["/2020/11/14/linux/nginx-proxy/index.html","ca93c860805e7f96099dcaab9404d125"],["/2020/11/14/linux/nginx-root-alias/index.html","3dac75e8ebe1ecc1fed058b6029d4211"],["/2020/11/14/linux/nginx-ws/index.html","568ed0350943a451eea0da6fd313d876"],["/2020/11/14/linux/nginx-wss/index.html","cf2c9a0e76c11f3ecb009d820cea4ccc"],["/2020/11/14/linux/proxy-reproxy/index.html","5dc89fedc2cf7fd7196b6d77604ca870"],["/2020/11/14/linux/vi/index.html","d1305f1d1396da71efb81668bb63f634"],["/2020/11/14/linux/yum/index.html","d6acc728aa412b773221704d6c1daeb3"],["/2020/11/14/network/cookie-parser/index.html","040f2e4dacc1b6b538d73dbbec360d50"],["/2020/11/14/network/cookie-session/index.html","585d0fa86d846cbf79e4f832819e91f5"],["/2020/11/14/network/dns/index.html","6b9ed354467facc82cf7d7ff1eea2cb8"],["/2020/11/14/network/http-206/index.html","13b97df27fd7885f15df14bc7d567127"],["/2020/11/14/network/http-code/index.html","2d15fd62ed7354e3f3ff7641b23a4ba3"],["/2020/11/14/network/http-cors/index.html","761c06eebd9b1512c481fa226cb83575"],["/2020/11/14/network/http-differ/index.html","4952d7f91f9e4ff77aa70d0e7b1a4198"],["/2020/11/14/network/http-get-post/index.html","fd74c8243491dfc0ec3dd2ae370cb7b0"],["/2020/11/14/network/http-histroy/index.html","b0750b21ee7248a31c2da4400ea2a730"],["/2020/11/14/network/http-https/index.html","e6711fdd586b3c675f5d48f7d857137c"],["/2020/11/14/network/http-info/index.html","89e9697173b6a07cd394ca45c444d97d"],["/2020/11/14/network/http-len/index.html","7cfcfe72a4471051fdf051f891f1191c"],["/2020/11/14/network/http-url/index.html","2401bfdcf7910f3e9e745db572a30e62"],["/2020/11/14/network/symmetric-key/index.html","aee28bf7e18d7e958745e41a6572d045"],["/2020/11/14/network/tcp/index.html","8e7b85ee311830fa4dad8065e47a03b3"],["/2020/11/14/network/webSocket/index.html","188335c175c17e1f9e4be641d7a124af"],["/2020/11/14/network/xhr-buffer/index.html","504a5f1b4c765ced0faf07d6b050729e"],["/2020/11/14/node/cmd/index.html","fc0a09ed11da422ce05057a65703a1d1"],["/2020/11/14/node/express-middle/index.html","9dc8f153dd049f55ee93fc18d45f1d5a"],["/2020/11/14/node/jwt/index.html","ced6d4f4b7e39dcf1d528001ee60d48b"],["/2020/11/14/node/node-schedule/index.html","c84806dbe403cddccb4ba2461361ed00"],["/2020/11/14/node/node-ws/index.html","a90d9f5c2aaf4344a7ad68b3b8708c0b"],["/2020/11/14/node/node-wss/index.html","82359ebe96becb19d563a70c373c316f"],["/2020/11/14/node/npm-deploy/index.html","1c97124974a68a96a2b098ecad903940"],["/2020/11/14/node/npm-link/index.html","e761208bad0d3b4258c1d4b562ae9476"],["/2020/11/14/other/hy/index.html","4c49d9aa4626688e2ab5857538eba2e9"],["/2020/11/14/other/java/index.html","eec15f95baac2f1801bb5edecf12f49c"],["/2020/11/14/other/mobile/index.html","18b23262d2c0450396a62e25a71135b6"],["/2020/11/14/project/babel/index.html","ec2dceddcabdcd5d2b430ad2a19e3705"],["/2020/11/14/project/commitlint/index.html","6e719ae020b8113887efbd027843461d"],["/2020/11/14/project/github-webhook/index.html","e6f39b846aed55b06711a837e0899c3f"],["/2020/11/14/project/terser-webpack-plugin/index.html","3d2203a496e556485eeee98d4cddf10b"],["/2020/11/14/project/webpack-end/index.html","2fb33743f9e532209b07625f954c53cd"],["/2020/11/14/project/webpack-loader/index.html","cc294a1aaad22b29ec756481574c7731"],["/2020/11/14/project/webpack-plugin/index.html","ab5a080d8d2cbe44c064adfcd3d13479"],["/2020/11/14/project/webpack-splitchunks/index.html","3ed3cf7b4d8c4db598a072eadf27f4a4"],["/2020/11/14/python/decorators/index.html","b86a55fe9804b9dd7b4c4d21571f7b35"],["/2020/11/14/python/django-cors/index.html","f7ba34962b3bc986f0d7754f909d52e1"],["/2020/11/14/python/django-sql-error/index.html","95937b7f3d10736f273489980e800457"],["/2020/11/14/python/middleware/index.html","17cca7a58d38b4924073af89b103be22"],["/2020/11/19/doc/ci/index.html","e07ac954d19624b4a35592dbd24e5030"],["/2020/11/19/doc/dj/index.html","0fdd73fabcc8227b924b0b27d4519ac9"],["/2020/11/19/doc/dp/index.html","a4ecef8975839e03e6529c09aca1990e"],["/2020/11/19/doc/f4v/index.html","d3fc8c67c24223ce9c0a26131342a457"],["/2020/11/19/doc/h264/index.html","ab1a9613753c23c3b7dbde588beb9b48"],["/2020/11/19/doc/mask/index.html","cf4b07d97ea162353356910aaf8b8d0f"],["/2020/11/19/doc/mse/index.html","fad9ddab52c2f0dd06f88e24e7161650"],["/2021/02/01/brower/lifecycle/index.html","00088a599cd00264edc8ab7ebadd2dbd"],["/2021/05/07/brower/gpu-acc/index.html","9b9ccba4f124ee0226a3ed86f5e4d38e"],["/2021/05/08/brower/fps/index.html","83d1d2fa508eaf72edc9c29cd0b11041"],["/2021/07/11/dm-render/render/index.html","e0d75069f7d0983d13dd95fc271c406d"],["/archives/2020/11/index.html","aec1c596ff2b3af1bed57158d12a0767"],["/archives/2020/11/page/10/index.html","e485540947bc775fd8d2d05e4c63ca0f"],["/archives/2020/11/page/11/index.html","c7dae6207cd963f1e1b281f37e93004f"],["/archives/2020/11/page/12/index.html","2cf4a4b929290c4cedb0b44bd0417043"],["/archives/2020/11/page/13/index.html","5b0667aed34dd818e96a2b6027d3b8f5"],["/archives/2020/11/page/14/index.html","73a32ed6e04ccbd13961c4e1ae903575"],["/archives/2020/11/page/15/index.html","b647805b2e98758ef35ae902ce0791ef"],["/archives/2020/11/page/2/index.html","a91984f76c5140918d64b89cf88d9aa9"],["/archives/2020/11/page/3/index.html","08139c5a714385885ed38edf2a148749"],["/archives/2020/11/page/4/index.html","eae9fe78f11aebf07cd726059a6130f3"],["/archives/2020/11/page/5/index.html","e9ca9cafee43ddb9508ce412cf0c6543"],["/archives/2020/11/page/6/index.html","1b6f4cc084020109c9da933493666022"],["/archives/2020/11/page/7/index.html","70dd19cfdd0cf3a7ef9f6ff9d13b7711"],["/archives/2020/11/page/8/index.html","3f3c8dc53919f02cb3d1682a0a45a1fc"],["/archives/2020/11/page/9/index.html","cdb805dbcac78ca886984f8cf7a2c574"],["/archives/2020/index.html","4ee6611f8f21ec4e39db8781b9800ad5"],["/archives/2020/page/10/index.html","31d6d94e9b39a87eb6c94e6f0cd6a5e7"],["/archives/2020/page/11/index.html","8d9f7efe02e18115eefdd9b664102650"],["/archives/2020/page/12/index.html","e3b64abae10ecd63fbbdeceaddd160c9"],["/archives/2020/page/13/index.html","09989057193874d5687f09c30c7aa8a8"],["/archives/2020/page/14/index.html","77cbd70dccd25fdc63753bee02409449"],["/archives/2020/page/15/index.html","1915272ba55d1f2693b2e420bd98afdd"],["/archives/2020/page/2/index.html","d854dbe88b1dffe389e3c3ee1a7e5815"],["/archives/2020/page/3/index.html","9f11c1ffd102086bf2a33fb032e6b9e2"],["/archives/2020/page/4/index.html","9edc35e69a9d115cefff0b19efb4f4a1"],["/archives/2020/page/5/index.html","b1adbb2b6c632cd83a65c680062e06f3"],["/archives/2020/page/6/index.html","84d708c68a7221f845dcf84efe00924e"],["/archives/2020/page/7/index.html","459129a7cb30310c04726ee2958f3726"],["/archives/2020/page/8/index.html","049c6a54d93601799b9b895fe7a946b6"],["/archives/2020/page/9/index.html","33868cc8a9d84f2d1f71d05a23e7d217"],["/archives/2021/02/index.html","3f7b157b8cae2d37b2f324ab3b04cef1"],["/archives/2021/05/index.html","79614c8ac9ff3d27ef65fedf7d941062"],["/archives/2021/07/index.html","e85dc786780cb1f9528dd03149376791"],["/archives/2021/index.html","a023c7aebf0e3b15005d3a5d6fde80ce"],["/archives/index.html","89d34172799122875fdbe39594b570e6"],["/archives/page/10/index.html","7f6d53f330e119d251a0678fe6e38d7d"],["/archives/page/11/index.html","82466200aa83347d2359bb021e51595f"],["/archives/page/12/index.html","a9b6cd81695d3ed12e1179da60fbb8d4"],["/archives/page/13/index.html","d54a67f73fbaf1e39cf876255422a74f"],["/archives/page/14/index.html","cdc121560411e3a12ed9137b48fc7d6b"],["/archives/page/15/index.html","d16d396eb7c36215fe4c981d41dd0695"],["/archives/page/16/index.html","b15da2033fa5496febe1eb35c618913f"],["/archives/page/2/index.html","855aa2aff9abcc2b635fe461c314df3b"],["/archives/page/3/index.html","20bab018c188a9d53ce8d254f789fa64"],["/archives/page/4/index.html","1ec9a7602d85d365d5d62d0426ee8ed0"],["/archives/page/5/index.html","a79438bd283e641c1018d68e5828aca0"],["/archives/page/6/index.html","db4db2db60f65ebafd6fc358252a67d5"],["/archives/page/7/index.html","e19dfc8f1042ffe8ca2ffd8de0bdb3dd"],["/archives/page/8/index.html","298fa346bb704b4ce5827a8f28420485"],["/archives/page/9/index.html","ebd8d759e4fe9b8ce08326e419a7e4bb"],["/audio/audio.js","30af61a128e6d9024464b8581690d2ae"],["/audio/index.html","88cc2cb1ba80b36211d10f7776a3a9f3"],["/categories/Databse/index.html","88148b7d4d13537efd5c7e9e622fbf54"],["/categories/Javascript/index.html","01fb2251c2dda64dccf3322b0d949d32"],["/categories/Javascript/page/2/index.html","a15ac62c3038fad43a9060f361077eb9"],["/categories/Linux/index.html","b502bc342890f63fea78a67554c16362"],["/categories/Linux/page/2/index.html","13298f09e7ce85dead97bdd44c8eeb48"],["/categories/Node/index.html","e5f08964113ea50a71ce2aa4980ac76f"],["/categories/brower/index.html","2de14f129b5e93346029af770e077d2f"],["/categories/brower/page/2/index.html","af8239340d3290f1c164003cc90f18a4"],["/categories/brower/page/3/index.html","dde37485830a66047295e12b5c49e7f6"],["/categories/frame/index.html","0af87b8f94bb62312df0a2c2230f003d"],["/categories/gpu/index.html","daeab75267783b27fbb58577cc4a913e"],["/categories/index.html","f59c5abe600b5009c73bbc24086ddd5f"],["/categories/network/index.html","db0f9cbc927909a1b03199733ba481f7"],["/categories/other/index.html","5f2e1cff83fb1743bbf63610403f0f2e"],["/categories/project/index.html","b399c64ad9330feaef8623ceb018d5e6"],["/categories/python/index.html","bcd89dd32d56eebc9a01e1163d8e2848"],["/categories/web/index.html","024c6d41892b619dbb8c3af46bd150c1"],["/categories/web/page/2/index.html","2611bdb937d4bf4d1163c5665172b860"],["/categories/web/page/3/index.html","c6a6cc73b2b729655a740aedab6ea084"],["/categories/web/page/4/index.html","f0424d43aca59305da09da181ba9defb"],["/categories/web/page/5/index.html","3b1e8c5053ae8dd483f348e9325c17a8"],["/cli/cli.png","8c0c6d96bf2d0b8ec13b7e029b0edfdd"],["/cli/follow.css","7715b931889c8d4b816e960bd4ea2857"],["/cli/index.html","5e5bfb4694b1716dc0615cf7feb4602a"],["/cli/readme.html","4d2e99ae806de807e875630d58123ef0"],["/cli/w.jpg","9696428e17f662a60b97e3e070a56b43"],["/cli/zero.png","6e7c156f8cfb2afea8261c206546ca64"],["/code/assets/element-icons.9c88a535.woff","d9491be2c5109fca0fa40d0c59e2e3b9"],["/code/assets/element-icons.de5eb258.ttf","abe71f7d608d43b56d9b2aef78d7ae99"],["/code/assets/index.a75e1e39.css","ef5c0fc17d79532b91c05adbbbed5191"],["/code/assets/index.c38f2a21.js","de68fa8a7a49e86872afec0a01a50919"],["/code/assets/vendor.9d963d30.js","4876a63badcfd047891510fae4097a0d"],["/code/index.html","293444750700cb1969f2fbc3dce3f2ea"],["/css/index.css","d8fe9f9b22538c07c9a48215ec0a7d07"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/follow/follow.css","7715b931889c8d4b816e960bd4ea2857"],["/follow/index.html","99f5bc050ef55b6f02466935fec4d8e0"],["/follow/knav.js","7d863b99144e1651521d6bbc48b7f1b8"],["/hide/bi.png","17b80f948f7b1155cdaea099894b6ea1"],["/hide/bro.jpg","e4a34350594a3f769a7a941a91e73fc4"],["/hide/bro1.jpg","e971a5b6cd95078e195657cda63a66f2"],["/hide/bro2.jpg","16b171e365f7ad2f0d787781885bee38"],["/hide/bro3.jpg","2acb9b9d0bd9199f889830fc722a0ef1"],["/hide/bro4.jpg","63bc51f06922fedd5143ee539ea9e8c3"],["/hide/bro5.jpg","11e6a3e87a5cf640a01af30817ba9707"],["/hide/bro6.png","f8be2ef79cdf29c8da170e76138740f7"],["/hide/cpu.png","9792bfb92eeba30abd2475ec02162f24"],["/hide/css.jpg","4f38f8da7753934355bb19250a9f47d1"],["/hide/cwnd.png","a7c535f85fd865871017c6d9166ae5b9"],["/hide/fps.png","cfbe01318789f8598896e8ebae74ad48"],["/hide/fps1.gif","249aeae794b38d43df5034aabcabf463"],["/hide/gpu.png","894e6d2f20921e7c8be985bbb0dac5d5"],["/hide/gpu0.png","87c660da468bc57345c2ed36c55d08a9"],["/hide/gpu1.png","ccc61af8639b3d8b40aac964c89495a0"],["/hide/gpu2.png","c88f9fd4d9baf708c353e445bc00046b"],["/hide/gpu3.png","46ce4d820db40e9439bcac253b7be79e"],["/hide/gpu4.png","666857a310fc49a6288979d5615c75a5"],["/hide/gpu5.png","6eeec5a6fa92f7ba2b897d71602e3559"],["/hide/gra.png","f3a31c8e235cbd17f89690249646924f"],["/hide/html.jpg","b1245c9050ba8f4a174e5f74aa81be7d"],["/hide/paint.png","232c4de9606f6e9d2b3ae9f52dcfb974"],["/hide/per1.png","c8bcad8d9e63c271190c35573180049c"],["/hide/per2.png","98d837d2d5eeba008cac1cb2d5ac66bc"],["/hide/tree.png","ad7a642ed9d1b5217098dadfe77bc562"],["/hide/tur.webp","77493749f8f18aaa32b722984f00fd0c"],["/hide/webkit.png","144c9289e3a928bd8dcd096b988b0db3"],["/hy/index.html","83d2944194327dc5f643c8ede1676a0a"],["/hy/piano.jpg","186d4ce60365ad39c5003fa8e3cfe7f6"],["/hy/yyj.js","d578725b70b329f21cacac6910486bae"],["/img/404.jpg","6708d92b33a76bc8759e3832d89cc5bc"],["/img/Innodb.jpg","c350cbb23996abfee7d226d8a02090ac"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/audio.jpg","bbc666a99a4abdb92036ff851f5c2220"],["/img/bg1.png","e70b4cf6957d1bb37b501a77319fbce7"],["/img/bg2.png","86abb0b786c270073c641b292f3f992f"],["/img/cache1.png","f3f9894b128aaa71c632eca751c13936"],["/img/cache2.png","e31da6a87b07b1b6d1a6c93e134bec5d"],["/img/cache4.png","a323711c9cf234eb19c8e47fe26de0a7"],["/img/cache5.png","bb5888e6a0ba4a5e9341d922dc59906c"],["/img/cache6.png","79bdc64dc80e61923e3609ffd4881460"],["/img/cache7.png","6718511513b7fa500d8de1b19e3c6eab"],["/img/cache8.png","84ad69b2d5aa201686397afc9420481f"],["/img/cache9.png","fde40c8b01c7a4c312e4741682c3ac78"],["/img/css-box-ie.jpg","0abb576ccbf3e6e29c482880c6c7a177"],["/img/css-box-standard.jpg","f88cc621a037b959111ef3bdc8e8a61a"],["/img/css-box.jpg","96efbf91a11e3e16a69a634afc1aa826"],["/img/css3.jpg","e604bf25aede342b28c270694753fa06"],["/img/database.jpg","6e30f87c1504bf625945e38690931b50"],["/img/default.jpg","186d4ce60365ad39c5003fa8e3cfe7f6"],["/img/default2.jpg","695dc2d6fef5092c43c81a82c73209fa"],["/img/default3.jpg","e6dbdc3eab92a9bfe81f031af6f3fd8d"],["/img/dns.jpg","664bd3007b4aaf137783a90edec4d5bd"],["/img/dom.gif","20a60b70fa7c44e1851284ef2aa84c26"],["/img/e_block.jpg","fe39d2aa5a693ed6fdf3244a0fd43d6a"],["/img/e_brower.png","38870559e6437549ae444014ae5164a2"],["/img/e_storage.jpg","c218c03548192ad23908ebbfda4dc3a6"],["/img/e_upload.jpg","1360d82820f03121c8bb105eba8910af"],["/img/engineer.jpg","648e800cf421297aa800185b0f4b8613"],["/img/error_level.jpg","70f549c05c3a38185a6cd91c3f24b254"],["/img/es6-1.jpg","5a631910388990309719aeea261e5e41"],["/img/face.jpg","48e1278e886117e6a81b09a8abd923b4"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/git.png","661bdf03b566cd9142ed0cb2bbfa5d31"],["/img/guitar1.png","24e09bd84e38a9b778fdb33cf0db4cba"],["/img/guitar2.png","9308d80550d9d23e9a641718ea3c2816"],["/img/html.jpg","15a0ebced997e22423e29d79400b4396"],["/img/http0.png","6fb2c90fcd987ac5f1ed351c46a94614"],["/img/http1.png","48a823ba71f53fe0201c40005eb669f9"],["/img/http3.jpg","cfb71ef15c3c1484de5cbc4b5e3a3e9e"],["/img/http4.jpg","3b774104b448d96052ba49a93a180cb0"],["/img/http5.gif","d404acda62c276b9a3ab90506074307f"],["/img/http5.jpg","9d2a2555b99eac2cdb625bcdc355db77"],["/img/http6.png","5832cc77ea1dbbdc281758e48b5d49c5"],["/img/http7.jpg","38069c638a93d43ea201c081826b8903"],["/img/icp.png","b7fa4a92047987bf65dc954f48f95c3d"],["/img/in_file.jpg","60e8d0496a81b561e73ed7447c951301"],["/img/in_group.jpg","e58036db2375c85a482dc25f00a6d532"],["/img/in_line.jpg","1c65ea519c0e0232abba0476781ec41d"],["/img/in_line0.jpg","6eff2dabe2e6b6ff9226f7ddd904acfb"],["/img/in_min.jpg","2832a095be030ca6254e84a12db80052"],["/img/in_p1.jpg","5062d9c9cf1927f46f708a18fbd04b73"],["/img/in_p2.jpg","1761f0af72bf03e505623132c4dee072"],["/img/in_p3.jpg","c0b6e75d911f826533fa8e428b13026a"],["/img/in_page.jpg","1ca1af032c3b74cee6af758f6afa3ba4"],["/img/in_pages.jpg","452e2d255f53a16f14197ed4c78d0b57"],["/img/in_record.jpg","52fe8010e0bd1195826f7d7fef7effe2"],["/img/in_table.jpg","ed99da9efd84d88bc9981bfd0ad6f5d0"],["/img/ip-info.jpg","137ef3e803ffee1d4722cc5ba6ba4879"],["/img/ip01.png","60372fbdf9d5b16a0b73d054aac78ae6"],["/img/js-pre.jpg","5563fdfc3f0c4cbcf5bc4ff8bd4b11ac"],["/img/js.jpg","93de37b1c287aa6e396629651b87c759"],["/img/kcp.png","2fcc970d8d88c663de4f32096f10c4e5"],["/img/lifecycle.png","2fe88acda884a35cd150475b24d4d87d"],["/img/linux.jpg","da86200d0441f2434e074909fb78a750"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/micro-task.png","24b1f7b7c18318952099be9126d6f719"],["/img/micro.png","ef9842e97a62bb5c2aac3cbf99b2b7de"],["/img/middleware.jpg","e1c6e4c7df95a5e3a80882c8b4aaf803"],["/img/mvc1.png","6fea96842165b35cd4362afbfe4c28ac"],["/img/mvc2.png","0967d7c996185643a5c3c221f23976b1"],["/img/mvc3.png","24c741b64ad540f9ea3b6728007627f0"],["/img/mvc4.png","47e923a5451f384f54fb8f8e5d119ea7"],["/img/mvc5.png","59e3024de383a663c185cb6f51e3c194"],["/img/net0.png","67709cff0f5b734941fa8984380b456f"],["/img/network.jpg","6d1bd3867a00092a15e810f0e28e08f7"],["/img/node.jpg","5a1d0be501a67bbb11f76193b2484932"],["/img/nuxt1.png","a8a79e895887d6cc0dbac0e10817d3f8"],["/img/nuxt2.png","794d74b38ae7072cb13efec3f54c6d46"],["/img/nuxt3.png","30153f3e8ff30b283ef0c85aebd30145"],["/img/nuxt4.png","2d6d081ce9fc5d73dfa2104dd4f62662"],["/img/nuxt5.png","1965e4a8214d1dd5acc4fdc99a0c135d"],["/img/osi.gif","2af488004591cbc12cd82c44518523de"],["/img/piano.png","3e50520a46b2a5ef5e5bcfecf89ebe7c"],["/img/proxy.webp","b71c84b0dd3183787b9b7390d9cc3626"],["/img/python.jpg","0ea8225aa53fd9b90afa175f2f029b1e"],["/img/react.webp","138a4a86046047def99fde8a939e238a"],["/img/render.png","5527a6ebe35dd531060b80296da055bc"],["/img/render1.png","79d4f1ecf7669ed50e0373945a2248aa"],["/img/sql_index.jpg","01266f5a5746ccca7602549b7e6cb846"],["/img/sql_no_index.jpg","898f9995d5536159509c6346b34593f0"],["/img/sql_s1.jpg","b852c3e340f80f79a149bcc4fffd158c"],["/img/sql_s2.jpg","24f9c84401a165b6cbe3304e42c50889"],["/img/sql_s3.jpg","95628c777213e9fc89c954ce3d3cb684"],["/img/sql_save.jpg","da4eb76556990a3b9b89e32e48136660"],["/img/ssr.png","5631c8e2f956ae0d55455d04af8ab317"],["/img/tcp-ip.jpg","c1a9182811eca72933a8c0ffd39eba06"],["/img/tcp.png","6a28f4d806c4ce9e148c28132f0e126c"],["/img/tcp3.png","83d97bc275b4af9890b2deeb7d035a9a"],["/img/tcp4.png","78aea88d303d52d5dbc81e002fd93d2a"],["/img/teach.jpg","4650698f3262b8c395cc3b640b568045"],["/img/vi-cmd.gif","acc327dfe0d5328c1ad102179c70b641"],["/img/vim-vi.png","dcd25a6082e1989975c280213f3e1052"],["/img/vue-nexttick.png","f1f3435bb2f4d3f418480be4a171e0ed"],["/img/vue-nexttick2.png","ed23a41f9c38de8174b1089ab3876966"],["/img/vue1.png","cacdab3440e3647647063f253a99fb07"],["/img/vue2.png","51175931269b1b90b2f08aabeb14fc96"],["/img/vue3.png","904b88eac7e8b99e3b6063a5977fc63e"],["/img/webhook.png","2cf55702ae98e72420c445084e5c2405"],["/img/ws.webp","aa574f8edcccc79f33aea448ea322d57"],["/img/xss.png","5c18b7d26b37df483a702810498d3182"],["/index.html","f0e99f76ac6d3308bacf11704493bf80"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","90d6abf9afca20fa479d7bb161ac74ee"],["/page/2/index.html","9b77caa16dff550bce1654237fe02f81"],["/page/3/index.html","952b999d07d35a28499e01b2404c8e89"],["/piano/index.html","5f1e9d4abbe2c68a5dcf8b2367d79f2d"],["/piano/piano.js","b3b64af667370ff6a52ea668c545facf"],["/pwa/144.png","68bbcf438443c0540757bf8c269507ec"],["/pwa/192.png","303f826bc53ca35a6db0f2a4d243d837"],["/pwa/48.png","07688b011d5f26cee21398d85ac2e0a4"],["/pwa/512.png","8fddc19901d448a5317575adcad7d1ac"],["/pwa/96.png","ce8ea5361607aa60dab17e1a50d4570a"],["/pwa/favicon.png","3d4e693505092fc6f4cc1a70438ef843"],["/qrcode/brcode.js","e1060ec8ce3a96679db85152a175f233"],["/qrcode/index.html","4460bb9e891efc17079775bcde87d240"],["/static/ashes.js","b4143c2bd85f1c81cbfda93f2dc76988"],["/static/bg.png","c62e2e026531003de922e4e5d6ff541a"],["/static/editor.js","ce1fb5f6b8e638fe05a28941f9970b92"],["/static/follow.js","3daa711f3e14bd15d8b1f64313b685ee"],["/static/weplayer.js","5b13e6501c44801cb201ec9d6e1ef746"],["/tags/Javascript/index.html","6d6144773ce5a0bcba07bac5288bcf2e"],["/tags/Javascript/page/2/index.html","a09b8c340a32d6003dbbbf910bd305bc"],["/tags/Javascript/page/3/index.html","156b0cd39cf4538965ca0e4394805abd"],["/tags/Mongodb/index.html","9a63d0e2045de3c0a3bc185191c1fb35"],["/tags/brower/index.html","eaccab4424fe0d0d8a41c78231290e7a"],["/tags/brower/page/2/index.html","407815cfbfa20a21053f3fa07635ab5f"],["/tags/centos/index.html","a97f68fe3e510884eabecc37b124eed4"],["/tags/cmd/index.html","c00b0f269dd1d06ae4022db8ffc0329d"],["/tags/cors/index.html","2e9085c329bc6dd3663fceab491a15aa"],["/tags/css/index.html","33bc9cc1fb944e9c6a95fc6321aefe2b"],["/tags/django/index.html","5d6b32d745f6291ca27abe4cab61ff95"],["/tags/err/index.html","f91ef43738c384c062e38fb682e0b1e6"],["/tags/es6/index.html","f1283e67b4361f2e9c27c523d170b528"],["/tags/es6/page/2/index.html","a7cf9cd4585618cf168397af7fa371e8"],["/tags/git/index.html","ad2ad84acd54d1d8c6dc4dd6f4ba4ad4"],["/tags/github/index.html","9468b01a7a47c2de33b5db605f2a2591"],["/tags/html/index.html","09ec26060f61db3c73d4c2dfe6c2930f"],["/tags/http/index.html","f69eab5104e7bd2cb6c3e4073de59e2c"],["/tags/hy/index.html","34ab79c66e4ccbf12064b0fbc7f32b7c"],["/tags/index.html","58361f7fdfec6ff30bcae72dd598ce29"],["/tags/java/index.html","3b75c55908dd86e2c6d41d5d78f67e87"],["/tags/jdk/index.html","2fbde2e545bac93d03c19d070aff320a"],["/tags/jwt/index.html","b9a1bb35874b0e2714233a2a0cd9ee1b"],["/tags/lifecycle/index.html","1820c41b0ef7a496fd60e71f187fc50c"],["/tags/mobile/index.html","86ed0647ebca5e659e2d0d1c6c2b3cbf"],["/tags/model/index.html","c8165668327e5559b2ea75d68d3c3aa3"],["/tags/mse/index.html","f5deec74404c93685f8315969f9a41b6"],["/tags/mysql/index.html","d3cde751f6352ac91f5f2d7acb82218c"],["/tags/network/index.html","10b8b6b94ef886aa4257632cfe0d4c9a"],["/tags/nginx/index.html","ca30f1759902c30c05ebacf015349567"],["/tags/node/index.html","64721b2e66a2d442a13b12908852d73f"],["/tags/npm/index.html","9991de6651ce227deb79e15b6bc680f8"],["/tags/nuxt/index.html","0bfed55b1f6927ca8e425ec5787a8cda"],["/tags/proxy/index.html","3f6eabcfd30c5e3dafc3d9ced4835a00"],["/tags/schedule/index.html","0e8a8d9bc1460ac93ebb29e7ee4ed059"],["/tags/tcp/index.html","450ff51aac05b1d3121047f7de7761aa"],["/tags/typescript/index.html","5539b7e5ebc81cc446f30e1996f5c765"],["/tags/video/index.html","30f69c003f7544c31fc120667e14502d"],["/tags/vue/index.html","d94bbee54943e12a85d7414a05583225"],["/tags/webpack/index.html","f2334bc3990a67bb7fae59d91f8a2dc2"],["/tags/ws/index.html","e266575391f4dc88903ce523b0f46f46"],["/tags/xhr/index.html","c119fd56b1d85947e51effbace36f1ad"],["/video/index.html","17660a06f54cd228bc78a86a35bdd968"],["/video/player.js","939f5190e9b3ffcced53f07053df4eff"],["/web_page/follow.css","7715b931889c8d4b816e960bd4ea2857"],["/web_page/index.html","99f5bc050ef55b6f02466935fec4d8e0"],["/web_page/knav.js","7d863b99144e1651521d6bbc48b7f1b8"]];
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




