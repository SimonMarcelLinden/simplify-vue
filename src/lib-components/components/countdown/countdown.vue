<template>
  <div class="countdown-time mb-4" :class="getStyleClass"
    data-time="2021/09/02 12:30:15" >
    <div class="countdown-box">
      <div class="countdown-wrapper">
        <div class="countdown countdown-days">{{ displayDays }}</div>
        <div class="text">Days</div>
      </div>
    </div>
    <div class="countdown-box">
      <div class="countdown-wrapper">
        <div class="countdown countdown-hours">{{ displayHours }}</div>
        <div class="text">Hours</div>
      </div>
    </div>
    <div class="countdown-box">
      <div class="countdown-wrapper">
        <div class="countdown countdown-minutes">{{ displayMinutes }}</div
        ><div class="text">Minutes</div>
      </div>
    </div>
    <div class="countdown-box">
      <div class="countdown-wrapper">
        <div class="countdown countdown-seconds">{{ displaySeconds }}</div
        ><div class="text">Seconds</div>
      </div>
    </div>
  </div>
</template>

<script src="./countdown.ts" lang="ts"></script>
