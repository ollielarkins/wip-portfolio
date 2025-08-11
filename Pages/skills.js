import React, { useState, useEffect } from "react";
import { CheckCircle, Circle, Star } from "lucide-react";

export default function Skills() {
  const [typedText, setTypedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);

  const skillsHtml = [
    '<!DOCTYPE html>',
    '<html lang="en">',
    '<head>',
    '    <meta charset="UTF-8">',
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '    <title>Technical Skills - John Developer</title>',
    '    <style>',
    '        /* Skills styling with modern CSS */',
    '        .skill-category { margin-bottom: 2rem; }',
    '        .skill-item { display: flex; align-items: center; margin: 0.5rem 0; }',
    '        .skill-level { width: 100px; height: 8px; background: #333; border-radius: 4px; }',
    '        .skill-progress { height: 100%; background: linear-gradient(90deg, #4ade80, #22c55e); }',
    '    </style>',
    '</head>',
    '<body>',
    '    <main class="skills-portfolio">',
    '        <!-- Frontend Technologies -->',
    '        <section class="skill-category" id="frontend">',
    '            <h2 class="category-title">Frontend Development</h2>',
    '            <ul class="skills-list">',
    '                <li class="skill-item" data-level="expert">',
    '                    <span class="skill-name">React.js</span>',
    '                    <div class="skill-level">',
    '                        <div class="skill-progress" style="width: 95%"></div>',
    '                    </div>',
    '                    <span class="experience">4+ years</span>',
    '                </li>',
    '                <li class="skill-item" data-level="expert">',
    '                    <span class="skill-name">TypeScript</span>',
    '                    <div class="skill-level">',
    '                        <div class="skill-progress" style="width: 90%"></div>',
    '                    </div>',
    '                    <span class="experience">3+ years</span>',
    '                </li>',
    '                <li class="skill-item" data-level="advanced">',
    '                    <span class="skill-name">Next.js</span>',
    '                    <div class="skill-level">',
    '                        <div class="skill-progress" style="width: 85%"></div>',
    '                    </div>',
    '                    <span class="experience">2+ years</span>',
    '                </li>',
    '                <li class="skill-item" data-level="expert">',
    '                    <span class="skill-name">Tailwind CSS</span>',
    '                    <div class="skill-level">',
    '                        <div class="skill-progress" style="width: 92%"></div>',
    '                    </div>',
    '                    <span class="experience">3+ years</span>',
    '                </li>',
    '            </ul>',
    '        </section>',
    '',
    '        <!-- Backend Technologies -->',
    '        <section class="skill-category" id="backend">',
    '            <h2 class="category-title">Backend Development</h2>',
    '            <ul class="skills-list">',
    '                <li class="skill-item" data-level="expert">',
    '                    <span class="skill-name">Node.js</span>',
    '                    <div class="skill-level">',
    '                        <div class="skill-progress" style="width: 88%"></div>',
    '                    </div>',
    '                    <span class="experience">4+ years</span>',
    '                </li>',
    '                <li class="skill-item" data-level="advanced">',
    '                    <span class="skill-name">Python</span>',
    '                    <div class="skill-level">',
    '                        <div class="skill-progress" style="width: 80%"></div>',
    '                    </div>',
    '                    <span class="experience">3+ years</span>',
    '                </li>',
    '                <li class="skill-item" data-level="expert">',
    '                    <span class="skill-name">PostgreSQL</span>',
    '                    <div class="skill-level">',
    '                        <div class="skill-progress" style="width: 85%"></div>',
    '                    </div>',
    '                    <span class="experience">3+ years</span>',
    '                </li>',
    '                <li class="skill-item" data-level="advanced">',
    '                    <span class="skill-name">MongoDB</span>',
    '                    <div class="skill-level">',
    '                        <div class="skill-progress" style="width: 75%"></div>',
    '                    </div>',
    '                    <span class="experience">2+ years</span>',
    '                </li>',
    '            </ul>',
    '        </section>',
    '',
    '        <!-- Cloud & DevOps -->',
    '        <section class="skill-category" id="cloud">',
    '            <h2 class="category-title">Cloud & DevOps</h2>',
    '            <ul class="skills-list">',
    '                <li class="skill-item" data-level="advanced">',
    '                    <span class="skill-name">AWS</span>',
    '                    <div class="skill-level">',
    '                        <div class="skill-progress" style="width: 82%"></div>',
    '                    </div>',
    '                    <span class="experience">2+ years</span>',
    '                </li>',
    '                <li class="skill-item" data-level="intermediate">',
    '                    <span class="skill-name">Docker</span>',
    '                    <div class="skill-level">',
    '                        <div class="skill-progress" style="width: 70%"></div>',
    '                    </div>',
    '                    <span class="experience">1+ year</span>',
    '                </li>',
    '                <li class="skill-item" data-level="intermediate">',
    '                    <span class="skill-name">Kubernetes</span>',
    '                    <div class="skill-level">',
    '                        <div class="skill-progress" style="width: 65%"></div>',
    '                    </div>',
    '                    <span class="experience">1+ year</span>',
    '                </li>',
    '            </ul>',
    '        </section>',
    '',
    '        <!-- Tools & Workflow -->',
    '        <section class="skill-category" id="tools">',
    '            <h2 class="category-title">Tools & Workflow</h2>',
    '            <ul class="skills-list">',
    '                <li class="skill-item certified">',
    '                    <span class="skill-name">Git & GitHub</span>',
    '                    <span class="certification">⭐ Git Expert Certified</span>',
    '                </li>',
    '                <li class="skill-item">',
    '                    <span class="skill-name">VSCode</span>',
    '                    <span class="note">Daily driver for 5+ years</span>',
    '                </li>',
    '                <li class="skill-item">',
    '                    <span class="skill-name">Figma</span>',
    '                    <span class="note">UI/UX design collaboration</span>',
    '                </li>',
    '                <li class="skill-item">',
    '                    <span class="skill-name">Linear/Jira</span>',
    '                    <span class="note">Project management & tracking</span>',
    '                </li>',
    '            </ul>',
    '        </section>',
    '    </main>',
    '',
    '    <script>',
    '        // Interactive skill demonstrations',
    '        document.querySelectorAll(".skill-item").forEach(item => {',
    '            item.addEventListener("mouseenter", () => {',
    '                console.log(`Hovering over: ${item.querySelector(".skill-name").textContent}`);',
    '                // Could show project examples using this skill',
    '            });',
    '        });',
    '        ',
    '        // Skill level calculator',
    '        function calculateOverallExpertise() {',
    '            const skills = document.querySelectorAll(".skill-progress");',
    '            let total = 0;',
    '            skills.forEach(skill => {',
    '                total += parseInt(skill.style.width);',
    '            });',
    '            return Math.round(total / skills.length);',
    '        }',
    '        ',
    '        console.log(`Overall skill level: ${calculateOverallExpertise()}%`);',
    '    </script>',
    '</body>',
    '</html>'
  ];

  useEffect(() => {
    if (currentLine < skillsHtml.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [currentLine, skillsHtml]);

  const getLineColor = (line) => {
    if (line.includes('<!--') || line.includes('-->')) {
      return 'text-green-500';
    }
    if (line.includes('<') && line.includes('>')) {
      return 'text-red-400';
    }
    if (line.includes('class=') || line.includes('id=') || line.includes('data-')) {
      return 'text-yellow-400';
    }
    if (line.includes('style=') || line.includes('width:') || line.includes('background:')) {
      return 'text-blue-400';
    }
    if (line.includes('"') && (line.includes('frontend') || line.includes('backend') || line.includes('years'))) {
      return 'text-green-300';
    }
    return 'text-gray-200';
  };

  const skillsData = {
    frontend: [
      { name: 'React.js', level: 95, years: '4+' },
      { name: 'TypeScript', level: 90, years: '3+' },
      { name: 'Next.js', level: 85, years: '2+' },
      { name: 'Tailwind CSS', level: 92, years: '3+' },
    ],
    backend: [
      { name: 'Node.js', level: 88, years: '4+' },
      { name: 'Python', level: 80, years: '3+' },
      { name: 'PostgreSQL', level: 85, years: '3+' },
      { name: 'MongoDB', level: 75, years: '2+' },
    ],
    cloud: [
      { name: 'AWS', level: 82, years: '2+' },
      { name: 'Docker', level: 70, years: '1+' },
      { name: 'Kubernetes', level: 65, years: '1+' },
    ]
  };

  return (
    <div className="h-full flex">
      {/* Line Numbers */}
      <div className="w-16 bg-gray-900 text-gray-500 text-right py-4 px-2 text-xs font-mono leading-6 select-none">
        {skillsHtml.slice(0, currentLine + 1).map((_, index) => (
          <div key={index} className="h-6">
            {index + 1}
          </div>
        ))}
      </div>

      {/* Code Content */}
      <div className="flex-1 bg-gray-800 text-gray-200 p-4 font-mono text-sm leading-6 overflow-auto">
        <div className="space-y-0">
          {skillsHtml.slice(0, currentLine).map((line, index) => (
            <div key={index} className={`${getLineColor(line)} h-6 whitespace-pre`}>
              {line || '\u00A0'}
            </div>
          ))}
          {currentLine < skillsHtml.length && (
            <div className={`${getLineColor(skillsHtml[currentLine])} h-6 whitespace-pre`}>
              {skillsHtml[currentLine]}
              <span className="animate-pulse bg-red-400 w-2 h-5 inline-block ml-1"></span>
            </div>
          )}
        </div>

        {/* Rendered Skills Output */}
        {currentLine >= skillsHtml.length && (
          <div className="mt-8 border-t border-gray-700 pt-8">
            <div className="text-green-400 text-xs mb-6">// Rendered HTML Output:</div>
            
            <div className="space-y-8">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category} className="space-y-4">
                  <h3 className="text-red-400 text-lg font-semibold capitalize">
                    {category} Development
                  </h3>
                  <div className="space-y-3">
                    {skills.map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between bg-gray-900 p-3 rounded border border-gray-600">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-200 font-medium">{skill.name}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-400 w-12 text-right">{skill.years} yrs</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="space-y-4">
                <h3 className="text-red-400 text-lg font-semibold">Tools & Certifications</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 bg-gray-900 p-3 rounded border border-gray-600">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-200">Git Expert Certified</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-900 p-3 rounded border border-gray-600">
                    <Circle className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-200">VSCode Power User</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-900 p-3 rounded border border-gray-600">
                    <Circle className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-200">Figma Collaboration</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-900 p-3 rounded border border-gray-600">
                    <Circle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-200">Agile Methodology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Minimap */}
      <div className="w-20 bg-gray-900 border-l border-gray-700 py-4">
        <div className="w-full h-80 bg-gradient-to-b from-red-900/20 to-green-900/20 rounded border border-gray-600">
          <div className="w-full h-6 bg-red-500/30 mt-2 rounded"></div>
          <div className="w-full h-24 bg-yellow-500/20 mt-4 rounded"></div>
          <div className="w-full h-32 bg-blue-500/20 mt-4 rounded"></div>
          <div className="w-full h-16 bg-green-500/20 mt-4 rounded"></div>
        </div>
      </div>
    </div>
  );
}
