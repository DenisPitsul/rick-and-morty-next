"use client";

import { useEffect } from "react";

export default function BootstrapClientOnly() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js" as string);
  }, []);

  return null;
}
