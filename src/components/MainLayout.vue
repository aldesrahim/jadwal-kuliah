<script setup></script>

<template>
  <main>
    <div class="container-md py-5">
      <slot name="header" />
      <div class="border border-6 border-light w-25 my-4"></div>
      <div class="col-lg-10 col-xxl-8">
        <slot />
      </div>

      <slot name="fullwidth"/>

    </div>
  </main>

  <slot name="outer" />
</template>
