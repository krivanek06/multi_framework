<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out transform "
        enter-from-class="scale-95 translate-y-10 opacity-0"
        enter-to-class="scale-100 translate-y-0 opacity-100"
        leave-active-class="duration-200 ease-in"
        leave-from-class="scale-100 translate-y-0 opacity-100"
        leave-to-class="scale-95 translate-y-0 translate-y-10 opacity-0"
      >
        <div
          v-if="prop.showModal"
          class="fixed inset-0 z-10 p-6 overflow-y-auto bg-black bg-opacity-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div ref="target" class="p-4 min-w-[420px] max-w-[420px] bg-gray-400 rounded-lg mx-auto mt-[30%]">
            <textarea v-model="input" placeholder="type value ..." class="w-full" />

            <div class="flex items-center gap-3 mt-4">
              <button
                type="button"
                class="w-full p-2 text-center text-white bg-gray-600 rounded-lg"
                @click="$emit('cancelClicked')"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="w-full p-2 text-center text-white bg-green-600 rounded-lg"
                @click="$emit('confirmClicked', input)"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';

const input = ref<string>('');
const target = ref(null);

const prop = defineProps({
  showModal: {
    type: Boolean,
    required: false
  },
  inputValue: {
    type: String,
    required: false,
    default: ''
  }
});

const emit = defineEmits<{
  (e: 'cancelClicked', value: void): void;
  (e: 'confirmClicked', value: string): void;
}>();

watchEffect(() => {
  input.value = prop.inputValue;
});

onClickOutside(target, () => {
  emit('cancelClicked');
});
</script>

<style scoped></style>
