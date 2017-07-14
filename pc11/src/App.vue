<template>
<div id="app">
  <myHeader></myHeader>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
  <myFooter>
  </myFooter>
</div>
</template>

<script>
import myHeader from './components/myHeader.vue'
import myFooter from './components/myFooter.vue'
import container from './components/container.vue'
import Team from '@/pages/team'
import Help from '@/pages/help'
import About from '@/pages/about'
import Note from '@/pages/note'
export default {
  components: {
    myHeader,
    myFooter,
    container
  },
  name: 'app'
}
</script>


<style>
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}









/* HTML5 display-role reset for older browsers */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {

  line-height: 1;
}

ol,
ul,
li {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

body {
  background: #fff;
  font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei UI", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  font-size: 14px;
  color: #444;
  position: relative;
}

.clearfix::after,
.clearfix::before {
  clear: both;
  content: '.';
  height: 0;
  line-height: 0;
  visibility: hidden;
  display: block;
}

#app {
  overflow: hidden;
  font-family: "微软雅黑"
}

#app .font-red {
  color: #ff5d8b;
}

.mt12 {
  margin-top: 12px;
}

.mt18 {
  margin-top: 18px;
}

.mt24 {
  margin-top: 24px;
}

.mt28 {
  margin-top: 28px;
}

.mt30 {
  margin-top: 30px;
}
</style>
