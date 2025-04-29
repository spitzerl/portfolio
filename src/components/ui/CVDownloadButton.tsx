"use client";

import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Download } from "lucide-react";

// Composant pour le bouton de téléchargement du CV
export function CVDownloadButton() {
  // Fonction pour télécharger le CV
  const downloadCV = (language: string) => {
    const cvPath = `/documents/CV_SPITZER_Lucas_${language}.pdf`;
    window.open(cvPath, "_blank");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Télécharger CV
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => downloadCV("fr")}>
          Français
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => downloadCV("en")}>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 