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
    '        return f"""',
    '        Hello! I\'m {self.name}, a {self.role} with {self.experience_years} years',
    '        of experience crafting digital solutions that make a difference.',
    '        ',
    '        I specialize in building scalable web applications using modern',
    '        technologies like React, Node.js, and cloud platforms. My approach',
    '        combines technical excellence with user-centered design thinking.',
    '        ',
    '        When I\'m not coding, you\'ll find me contributing to open source',
    '        projects, mentoring junior developers, or exploring the latest',
    '        trends in AI and machine learning.',
    '        ',
    '        I\'m currently open to new opportunities and exciting projects!',
    '        """',
    '    ',
    '    def get_current_status(self) -> Dict:',
    '        """Returns current availability and project status."""',
    '        return {',
    '            "availability": "Open to opportunities",',
    '            "current_project": "VSCode Portfolio Website",',
    '            "last_updated": datetime.now().strftime("%Y-%m-%d"),',
    '            "response_time": "Usually within 24 hours"',
    '        }',
    '',
    '',
    '# Initialize developer instance',
    'if __name__ == "__main__":',
    '    me = Developer()',
    '    print("=" * 60)',
    '    print(me.get_bio())',
    '    print("=" * 60)',
    '    print(f"Status: {me.get_current_status()}")',
    '    print("\\n>>> Ready to collaborate! 🚀")',
  ];

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const timer = setTimeout(() => {
        setTypedText(prev => prev + codeLines[currentLine] + '\n');
        setCurrentLine(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentLine, codeLines]);

  const getLineColor = (line) => {
    if (line.startsWith('#!/') || line.startsWith('"""') || line.includes('"""')) {
      return 'text-green-400';
    }
    if (line.startsWith('from ') || line.startsWith('import ')) {
      return 'text-purple-400';
    }
    if (line.includes('class ') || line.includes('def ')) {
      return 'text-blue-400';
    }
    if (line.includes('self.') || line.includes('return')) {
      return 'text-yellow-400';
    }
    if (line.includes('"') || line.includes("'")) {
      return 'text-green-300';
    }
    if (line.includes('#')) {
      return 'text-gray-500';
    }
    return 'text-gray-200';
  };

  return (
    <div className="h-full flex">
      {/* Line Numbers */}
      <div className="w-16 bg-gray-900 text-gray-500 text-right py-4 px-2 text-xs font-mono leading-6 select-none">
        {codeLines.slice(0, currentLine + 1).map((_, index) => (
          <div key={index} className="h-6">
            {index + 1}
          </div>
        ))}
      </div>

      {/* Code Content */}
      <div className="flex-1 bg-gray-800 text-gray-200 p-4 font-mono text-sm leading-6 overflow-auto">
        <pre className="whitespace-pre-wrap">
          {codeLines.slice(0, currentLine).map((line, index) => (
            <div key={index} className={`${getLineColor(line)} h-6`}>
              {line || '\u00A0'}
            </div>
          ))}
          {currentLine < codeLines.length && (
            <div className={`${getLineColor(codeLines[currentLine])} h-6`}>
              {codeLines[currentLine]}
              <span className="animate-pulse bg-gray-400 w-2 h-5 inline-block ml-1"></span>
            </div>
          )}
        </pre>
      </div>

      {/* Minimap */}
      <div className="w-20 bg-gray-900 border-l border-gray-700 py-4">
        <div className="w-full h-48 bg-gradient-to-b from-blue-900/20 to-purple-900/20 rounded border border-gray-600">
          <div className="w-full h-8 bg-blue-500/30 mt-4 rounded"></div>
          <div className="w-full h-12 bg-green-500/20 mt-2 rounded"></div>
          <div className="w-full h-16 bg-yellow-500/20 mt-2 rounded"></div>
        </div>
      </div>
    </div>
  );
}
