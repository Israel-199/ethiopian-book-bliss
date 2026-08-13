import { useCallback, useEffect, useState } from "react";

const KEY = "berhan-access";

export type AccessState = Record<string, "pending" | "granted">;

function read(): AccessState {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(KEY) ?? "{}") as AccessState;
  } catch {
    return {};
  }
}

/**
 * Local placeholder for the admin-approval flow.
 * Replace with Lovable Cloud data once the backend is wired up.
 */
export function useAccess() {
  const [state, setState] = useState<AccessState>({});

  useEffect(() => {
    setState(read());
  }, []);

  const update = useCallback((next: AccessState) => {
    setState(next);
    window.localStorage.setItem(KEY, JSON.stringify(next));
  }, []);

  const request = useCallback(
    (id: string) => update({ ...read(), [id]: "pending" }),
    [update],
  );
  const grant = useCallback((id: string) => update({ ...read(), [id]: "granted" }), [update]);
  const revoke = useCallback(
    (id: string) => {
      const next = { ...read() };
      delete next[id];
      update(next);
    },
    [update],
  );

  return { state, request, grant, revoke };
}
