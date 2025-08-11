import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Folder, 
  FolderOpen, 
  FileText, 
  Terminal as TerminalIcon,
  Settings,
  Search,
  GitBranch,
  Monitor,
  Sun,
  Moon,
  Palette
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const themes = {
  'dark': {
    name: 'Dark+ (default dark)',
    colors: {
      bg: '#1e1e1e',
      sidebar: '#252526',
      editor: '#1e1e1e',
      terminal: '#0c0c0c',
      text: '#d4d4d4',
      accent: '#007acc',
      border: '#3e3e42'
    }
  },
  'light': {
    name: 'Default Light+',
    colors: {
      bg: '#ffffff',
      sidebar: '#f3f3f3',
      editor: '#ffffff',
 
