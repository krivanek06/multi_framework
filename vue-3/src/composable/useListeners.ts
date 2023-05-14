import { onMounted, onUnmounted } from "vue";

export function useEventListener(target: any, event: any, callback: (event?: any) => any) {
  // if you want, you can also make this
  // support selector strings as target
  onMounted(() => target.addEventListener(event, callback));
  onUnmounted(() => target.removeEventListener(event, callback));
}
