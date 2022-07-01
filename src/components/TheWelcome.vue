<script setup></script>

<template>
  <div class="hero">
    <h1>Stay in Tune</h1>
    <p>
      One Click Layoutssss One Click LayoutssssOne Click LayoutssssOne Click
      Layoutssss
    </p>
    <div class="buttons">
      <button>Hi</button>
      <button>Hi</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  padding: 170px 0 70px;
  background: var(--color-background-hero);

  p {
    font-size: 22px;
    letter-spacing: -0.22px;
    line-height: 34px;
    margin: 0 auto 35px;
    max-width: 520px;
    text-align: center;
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    gap: 1em;

    button {
      padding: 1em 2em;
    }
  }
}

h1 {
  text-align: center;
  color: var(--color-text-invert);
}
</style>
