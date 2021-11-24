<template>
  <div>
    <div id="introduce">
      <div id="slogun">
        안녕하세요!
        <div>
          도우며 성장하는 개발자, <span id="my_name">유성호</span
          ><span id="closing">입니다.</span>
        </div>
      </div>
      <div id="birthday">생년월일: 1996.04.09</div>
      <div id="contact">
        이메일: skk7541@gmail.com
        <br />
        깃허브: https://github.com/Ysh096/
        <br />
        블로그: https://velog.io/@ysh096
      </div>
    </div>

    <div id="tabs">
      <button id="btn_0" v-on:click="btn_click(0)">소개</button>
      <button id="btn_1" v-on:click="btn_click(1)">PJT1</button>
      <button id="btn_2" v-on:click="btn_click(2)">PJT2</button>
      <button id="btn_3" v-on:click="btn_click(3)">PJT3</button>
    </div>

    <div class="tab-content">
      <div v-if="currentItem == 0"><introduce /></div>
      <div v-if="currentItem == 1"><PJT1 /></div>
      <div v-if="currentItem == 2"><PJT2 /></div>
      <div v-if="currentItem == 3"><PJT3 /></div>
    </div>
  </div>
</template>

<script>
import Introduce from "./components/Introduce.vue";
import PJT1 from "./components/PJT1.vue";
import PJT2 from "./components/PJT2.vue";
import PJT3 from "./components/PJT3.vue";
export default {
  name: "App",
  components: {
    Introduce,
    PJT1,
    PJT2,
    PJT3,
  },
  data() {
    return {
      currentItem: 0,
      lastItem: 0,
    };
  },
  methods: {
    btn_click: function (num) {
      if (this.currentItem != this.lastItem) {
        this.lastItem = this.currentItem;
      }
      this.currentItem = num;
    },
  },
  mounted() {
    // codes for button click effect right after loading
    var btn_num = "btn_" + String(this.currentItem);
    var btn = document.getElementById(btn_num);
    btn.style.borderBottom = "2px solid #75abbf";
    btn.style.color = "#75abbf";
  },
  updated() {
    // codes for button click effect
    var btn_num = "btn_" + String(this.currentItem);
    var btn = document.getElementById(btn_num);
    btn.style.borderBottom = "2px solid #75abbf";
    btn.style.color = "#75abbf";

    var btn_last_num = "btn_" + String(this.lastItem);
    var btn_last = document.getElementById(btn_last_num);
    btn_last.style.borderBottom = "2px solid white";
    btn_last.style.color = "black";
  },
};
</script>

<style>
@font-face {
  font-family: "NanumGothicBold";
  src: url("./assets/fonts/NanumGothicBold.otf");
}
/* 기본 글꼴 */
@font-face {
  font-family: "NanumGothicExtraBold";
  src: url("./assets/fonts/NanumGothicExtraBold.otf");
}
@font-face {
  font-family: "NanumGothic";
  src: url("./assets/fonts/NanumGothic.otf");
}
@font-face {
  font-family: "NanumGothicLight";
  src: url("./assets/fonts/NanumGothicLight.otf");
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "NanumGothicExtraBold";
  text-align: left;
  color: #2c3e50;
  margin-top: 30px;
}
html {
  height: 100%;
}
body {
  padding: 0;
  margin: 0;
  height: 100%;
}

#slogun {
  font-size: 24px;
  font-weight: bold;
  margin-left: 24px;
}

#my_name {
  font-size: 36px;
  font-weight: bold;
  /* color: #008d62; */
  margin: 10px;
}

#birthday {
  font-weight: bold;
  margin-top: 16px;
  margin-left: 24px;
}

#contact {
  font-weight: bold;
  margin-left: 24px;
}

#tabs {
  display: flex;
  border-color: black;
  justify-content: center;
}

#tabs > button {
  background: white;
  border: none;
  border-bottom: 1px solid white;
  padding-left: 36px;
  padding-right: 36px;
  font-family: "NanumGothicExtraBold";
  font-weight: bold;
  font-size: 14px;
}

#tabs > button:hover {
  cursor: pointer;
  color: #75abbf;
}

.tab-content {
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: #f0f0f0;
}
</style>
