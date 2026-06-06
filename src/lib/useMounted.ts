import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Returns false during SSR and the first client render, true thereafter.
 *
 * This is the canonical React 18+ hydration gate: `useSyncExternalStore`
 * returns the server snapshot (false) on the server and during hydration,
 * then the client snapshot (true) once mounted — without the
 * `setState`-in-`useEffect` pattern that triggers cascading renders.
 */
export function useMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true, // client snapshot
    () => false, // server snapshot
  );
}
