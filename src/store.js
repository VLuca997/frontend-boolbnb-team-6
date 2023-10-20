import { reactive } from "vue";

export const store = reactive({
  apartments: [],
  searchQuery:'',
  services: [],
  selectedServices: [],
});