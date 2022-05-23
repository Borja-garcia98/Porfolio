<template>
  <input
    type="search"
    class="block px-4 py-1.5 text-base font-normal text-light-primary dark:text-dark bg-light-primary dark:bg-dark-primary bg-clip-padding rounded-md transition ease-in-out m-0 dark:focus:text-dark focus:border-sky-blue focus:outline-none"
    :id="searchInputId"
    placeholder="Search" />
</template>

<script>
export default {
  name: "UiSearchInput",

  data() {
    return {
      searchInputId: this._uid,
    };
  },
};
</script>

<style scoped>
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  height: 16px;
  width: 16px;
  cursor: pointer;
}
</style>
