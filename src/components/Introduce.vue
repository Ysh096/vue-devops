<template>
  <div class="component">
    <div class="content-box">
      <div id="self-introduce">간단 소개</div>
      <div class="introduce-content">
        저는 사용자의 편의를 고려한 깔끔한 인터페이스를 구현하고자 합니다.
        <br />
        피드백을 빠르게 반영하는 개발자가 되겠습니다.
      </div>

      <div id="graduation">학력</div>
      <div class="introduce-content">
        00대학교 우주항공공학전공(2015.03 ~ 2021.02)
      </div>

      <div id="educations">교육 이력</div>
      <div class="introduce-content">
        삼성청년소프트웨어 아카데미(2021.01 ~ 2021.12)
      </div>

      <div id="job-position">희망 직무</div>
      <div class="introduce-content">프론트엔드 엔지니어</div>
    </div>
    <div class="content-box">
      <div>기술 스택</div>
      <div class="compartment">
        <div class="level-title">
          <div>수준</div>
          <div class="level-content">
            <div>하</div>
            <div>중</div>
            <div>상</div>
          </div>
        </div>
      </div>
      <div class="compartment">
        <progress-bar v-bind:currentBarName="'Python'" v-bind:childValue="7" />
        <progress-bar
          v-bind:currentBarName="'JavaScript'"
          v-bind:childValue="5"
        />
        <progress-bar
          v-bind:currentBarName="'HTML/CSS'"
          v-bind:childValue="8"
        />
        <progress-bar v-bind:currentBarName="'Kotlin'" v-bind:childValue="4" />
      </div>
      <div class="compartment">
        <progress-bar v-bind:currentBarName="'Django'" v-bind:childValue="5" />
        <progress-bar v-bind:currentBarName="'Vue.js'" v-bind:childValue="7" />
        <progress-bar v-bind:currentBarName="'ROS2'" v-bind:childValue="5" />
        <progress-bar v-bind:currentBarName="'Android'" v-bind:childValue="4" />
      </div>
      <div class="compartment">
        <progress-bar
          v-bind:currentBarName="'Firebase'"
          v-bind:childValue="3"
        />
        <progress-bar v-bind:currentBarName="'MySQL'" v-bind:childValue="5" />
      </div>
      <div class="compartment">
        <progress-bar v-bind:currentBarName="'Git'" v-bind:childValue="6" />
        <progress-bar v-bind:currentBarName="'Jira'" v-bind:childValue="5" />
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
export default {
  name: "Introduce",
  components: {
    ProgressBar,
  },
};
</script>

<style>
.component {
  display: flex;
  justify-content: center;
  margin: 0;
}

.content-box {
  background-color: white;
  border-radius: 16px;
  width: 40%;
  margin: 24px;
  padding: 16px;
}

.compartment {
  margin: 24px;
}

.introduce-content {
  margin: 24px;
}

.level-title {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.level-content {
  display: flex;
  width: 80%;
  justify-content: space-between;
}
</style>
