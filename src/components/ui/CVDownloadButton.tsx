"use client";

import { Button } from "./button";
import { Download } from "lucide-react";

export function CVDownloadButton() {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => window.open("/documents/CV_SPITZER_Lucas_fr.pdf", "_blank")}
    >
      <Download className="mr-2 h-4 w-4" />
      Télécharger CV
    </Button>
  );
}
