<template>
  <div class="about">
    <section class="top">
      <h1>This is an about page</h1>
      <a-button
        type="primary"
        :style="{
          marginRight: '12px',
        }"
      >
        Primary567
      </a-button>
      <a-button type="danger"> Primary567 </a-button>
    </section>
    <section class="content">content</section>
  </div>
</template>

<style lang="scss">
.about {
  height: calc(100% - 0.8rem);

  .content {
    height: calc(100% - 0.8rem);
  }
}
</style>
