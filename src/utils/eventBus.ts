import { reactive } from "vue";

type EventCallback = (...args: any[]) => void;
type EventMap = Map<string, EventCallback[]>;

const state: EventMap = reactive(new Map());

export function useEventBus() {
  function $on(event: string, callback: EventCallback): void {
    let callbacks = state.get(event);
    if (!callbacks) {
      callbacks = [];
      state.set(event, callbacks);
    }
    callbacks.push(callback);
  }

  function $emit(event: string, ...args: any[]): void {
    const callbacks = state.get(event);
    if (callbacks) {
      callbacks.forEach((callback) => callback(...args));
    }
  }

  return { $on, $emit };
}
