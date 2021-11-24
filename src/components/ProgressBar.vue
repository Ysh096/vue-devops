<template>
  <div class="stack-flex">
    <div>{{ currentName }}</div>
    <div class="progress-container">
      <div v-bind:class="currentLevel"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["currentBarName", "childValue"],
  name: "ProgressBar",
  data: function () {
    return {
      currentName: this.currentBarName,
      currentLevel: "progress-bar" + String(this.childValue),
    };
  },
};
</script>

<style>
.stack-flex {
  display: flex;
  justify-content: space-between;
}

.progress-container {
  position: relative;
  height: 16px;
  width: 80%;
  background-color: #f0f0f0;
  border-radius: 5px;
}

.progress-bar1 {
  position: absolute;
  height: 16px;
  border-radius: 5px;
  background-color: #a9cbd7;
  animation: progress-animation_1 2s forwards;
}
.progress-bar2 {
  position: absolute;
  height: 16px;
  border-radius: 5px;
  background-color: #a9cbd7;
  animation: progress-animation_2 2s forwards;
}
.progress-bar3 {
  position: absolute;
  height: 16px;
  border-radius: 5px;
  background-color: #a9cbd7;
  animation: progress-animation_3 2s forwards;
}
.progress-bar4 {
  position: absolute;
  height: 16px;
  border-radius: 5px;
  background-color: #a9cbd7;
  animation: progress-animation_4 2s forwards;
}
.progress-bar5 {
  position: absolute;
  height: 16px;
  border-radius: 5px;
  background-color: #a9cbd7;
  animation: progress-animation_5 2s forwards;
}
.progress-bar6 {
  position: absolute;
  height: 16px;
  border-radius: 5px;
  background-color: #a9cbd7;
  animation: progress-animation_6 2s forwards;
}
.progress-bar7 {
  position: absolute;
  height: 16px;
  border-radius: 5px;
  background-color: #a9cbd7;
  animation: progress-animation_7 2s forwards;
}
.progress-bar8 {
  position: absolute;
  height: 16px;
  border-radius: 5px;
  background-color: #a9cbd7;
  animation: progress-animation_8 2s forwards;
}
.progress-bar9 {
  position: absolute;
  height: 16px;
  border-radius: 5px;
  background-color: #a9cbd7;
  animation: progress-animation_9 2s forwards;
}
.progress-bar10 {
  position: absolute;
  height: 16px;
  border-radius: 5px;
  background-color: #a9cbd7;
  animation: progress-animation_10 2s forwards;
}
@keyframes progress-animation_1 {
  0% {
    width: 0%;
  }
  100% {
    width: 10%;
  }
}
@keyframes progress-animation_2 {
  0% {
    width: 0%;
  }
  100% {
    width: 20%;
  }
}
@keyframes progress-animation_3 {
  0% {
    width: 0%;
  }
  100% {
    width: 30%;
  }
}
@keyframes progress-animation_4 {
  0% {
    width: 0%;
  }
  100% {
    width: 40%;
  }
}
@keyframes progress-animation_5 {
  0% {
    width: 0%;
  }
  100% {
    width: 50%;
  }
}
@keyframes progress-animation_6 {
  0% {
    width: 0%;
  }
  100% {
    width: 60%;
  }
}
@keyframes progress-animation_7 {
  0% {
    width: 0%;
  }
  100% {
    width: 70%;
  }
}
@keyframes progress-animation_8 {
  0% {
    width: 0%;
  }
  100% {
    width: 80%;
  }
}
@keyframes progress-animation_9 {
  0% {
    width: 0%;
  }
  100% {
    width: 90%;
  }
}
@keyframes progress-animation_10 {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>
