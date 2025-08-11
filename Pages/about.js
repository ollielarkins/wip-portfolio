import React, { useState, useEffect } from "react";

export default function About() {
  const [typedText, setTypedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  
  const codeLines = [
    '#!/usr/bin/env python3',
    '"""',
    'Developer Portfolio - About Module',
    'Author: John Developer',
    'Last Modified: 2024-01-15',
    '"""',
    '',
    'from typing import List, Dict',
    'from datetime import datetime',
    'import skills',
    'import experience',
    '',
    '',
    'class Developer:',
    '    """A passionate full-stack developer and problem solver."""',
    '    ',
    '    def __init__(self):',
    '        self.name: str = "John Developer"',
    '        self.role: str = "Full-Stack Developer"',
    '        self.location: str = "San Francisco, CA"',
    '        self.experience_years: int = 5',
    '        self.passion: str = "Building exceptional digital experiences"',
    '        self.currently_learning: List[str] = [',
    '            "AI/Machine Learning",',
    '            "Cloud Architecture",',
    '            "Web3 Technologies"',
    '        ]',
    '        self.technologies: Dict[str, List[str]] = {',
    '            "frontend": ["React", "TypeScript", "Next.js", "Tailwind"],',
    '            "backend": ["Node.js", "Python", "PostgreSQL", "MongoDB"],',
    '            "cloud": ["AWS", "Docker", "Kubernetes", "Serverless"],',
    '            "tools": ["Git", "VSCode", "Figma", "Linear"]',
    '        }',
    '    ',
    '    def get_bio(self) -> str:',
    '        """Returns developer biography and current status."""',
 
