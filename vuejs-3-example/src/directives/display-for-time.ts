import { DirectiveBinding, VNode } from "vue";
export type DisplayForTime = DirectiveBinding<{ seconds: number }>;

export const displayForTime = {
  mounted: (el: HTMLElement, binding: DisplayForTime, vnode: VNode) => {
    let secondsToWait = binding.value.seconds ?? 5;

    // Error: e-router.mjs:3451 ReferenceError: defineEmits is not defined
    // const emit = defineEmits<{
    //   (e: "remainingTime", value: number): void;
    // }>();

    const interval = setInterval(() => {
      secondsToWait--;
      console.log(secondsToWait);

      const emittedValue = { detail: secondsToWait };

      if (vnode.component) {
        vnode.component?.emit("remainingTime", emittedValue);
      } else {
        vnode.el?.dispatchEvent(new CustomEvent("remainingTime", emittedValue));
      }

      if (secondsToWait === 0) {
        console.log("stop");
        // hide element
        el.style.display = "none";
        clearInterval(interval);
      }
    }, 1000);
  }
};
