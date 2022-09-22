<template>
  <div class="flex gap-5">
    <div class="middle gap-3">
      <label for="p_show">Ko'rsatish</label>
      <select id="p_show" class="ui-input h-8">
        <option value="10">10</option>
      </select>
    </div>
    <div class="flex gap-2">
      <div class="ui-input pagination__item middle w-8 h-8 disabled !bg-gray-blue !text-dark-silver">
        <i class="fa fa-chevron-left text-sm text-light-silver" aria-hidden="true"></i>
      </div>
      <div class="ui-input pagination__item middle active">
        1
      </div>
      <div class="ui-input pagination__item middle">
        2
      </div>
      <div class="ui-input pagination__item middle">
        ...
      </div>
      <div class="ui-input pagination__item middle">
        10
      </div>
      <div class="ui-input pagination__item middle">
        <i class="fa fa-chevron-right text-sm text-light-silver" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .pagination__item {
    @apply w-8 h-8 font-medium text-sm transition-colors duration-100;
  }
  .pagination__item:hover, .pagination__item.active {
    @apply border-primary text-primary;
  }
</style>