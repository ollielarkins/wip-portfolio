import React, { useState, useEffect } from "react";
import { Project } from "@/entities/Project";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { format } from "date-fns";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [typedText, setTypedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const fetchedProjects = await Project.list('-completion_date');
    setProjects(fetchedProjects);
  };

  const jsCodeLines = [
    '// projects.js - Portfolio Project Showcase',
    '// Last updated: 2024-01-15',
    '',
    'import { useState, useEffect } from "react";',
    'import { motion } from "framer-motion";',
    '',
    '/**',
    ' * Featured projects that showcase technical skills',
    ' * and problem-solving capabilities',
    ' */',
    '',
    'const projectsData = [',
    '  {',
    '    id: 1,',
    '    name: "E-Commerce Platform",',
    '    description: "Full-stack marketplace with React, Node.js, and Stripe integration",',
    '    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],',
    '    status: "production",',
    '    impact: "Increased sales by 40%",',
    '    github: "https://github.com/johndeveloper/ecommerce-platform",',
    '    demo: "https://marketplace-demo.vercel.app"',
    '  },',
    '  {',
    '    id: 2,',
    '    name: "AI Task Manager",',
    '    description: "Intelligent productivity app with ML-powered task prioritization",',
    '    technologies: ["TypeScript", "Next.js", "OpenAI", "Prisma"],',
    '    status: "beta",',
    '    impact: "200+ active beta users",',
    '    github: "https://github.com/johndeveloper/ai-task-manager",',
    '    demo: "https://ai-tasks.demo.com"',
    '  },',
    '  {',
    '    id: 3,',
    '    name: "Real-time Analytics Dashboard",',
    '    description: "Live data visualization platform for business metrics",',
    '    technologies: ["Vue.js", "D3.js", "WebSockets", "Redis"],',
    '    status: "production",',
    '    impact: "Reduced report generation time by 80%",',
    '    github: "https://github.com/johndeveloper/analytics-dashboard"',
    '  }',
    '];',
    '',
    '// Project component with smooth animations',
    'const ProjectCard = ({ project, index }) => {',
    '  const [isHovered, setIsHovered] = useState(false);',
    '  ',
    '  return (',
    '    <motion.div',
    '      initial={{ opacity: 0, y: 50 }}',
    '      animate={{ opacity: 1, y: 0 }}',
    '      transition={{ delay: index * 0.1 }}',
    '      className="project-card"',
    '      onMouseEnter={() => setIsHovered(true)}',
    '      onMouseLeave={() => setIsHovered(false)}',
    '    >',
    '      <h3 className="project-title">{project.name}</h3>',
    '      <p className="project-description">{project.description}</p>',
    '      ',
    '      {/* Technology stack */}',
    '      <div className="tech-stack">',
    '        {project.technologies.map(tech => (',
    '          <span key={tech} className="tech-badge">{tech}</span>',
    '        ))}',
    '      </div>',
    '      ',
    '      {/* Project links */}',
    '      <div className="project-links">',
    '        {project.github && (',
    '          <a href={project.github} className="github-link">',
    '            <Github size={16} />',
    '            Source Code',
    '          </a>',
    '        )}',
    '        {project.demo && (',
    '          <a href={project.demo} className="demo-link">',
    '            <ExternalLink size={16} />',
    '            Live Demo',
    '          </a>',
    '        )}',
    '      </div>',
    '    </motion.div>',
    '  );',
    '};',
    '',
    '// Main projects component',
    'export default function Projects() {',
    '  const [projects, setProjects] = useState(projectsData);',
    '  const [filter, setFilter] = useState("all");',
    '  ',
    '  useEffect(() => {',
    '    // Simulate API call to load projects',
    '    console.log("Loading projects from database...");',
    '    console.log(`Found ${projects.length} projects`);',
    '  }, []);',
    '  ',
    '  return (',
    '    <div className="projects-container">',
    '      <h2>Featured Projects</h2>',
    '      <div className="projects-grid">',
    '        {projects.map((project, index) => (',
    '          <ProjectCard key={project.id} project={project} index={index} />',
    '        ))}',
    '      </div>',
    '    </div>',
    '  );',
    '}',
    '',
    '// Export for use in portfolio',
    'export { projectsData, ProjectCard };'
  ];

  useEffect(() => {
    if (currentLine < jsCodeLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentLine, jsCodeLines]);

  const getLineColor = (line) => {
    if (line.startsWith('//') || line.startsWith(' *')) {
      return 'text-green-500';
    }
    if (line.includes('import ') || line.includes('export ') || line.includes('const ') || line.includes('function')) {
      return 'text-purple-400';
    }
    if (line.includes('useState') || line.includes('useEffect') || line.includes('return')) {
      return 'text-blue-400';
    }
    if (line.includes('"') || line.includes("'") || line.includes('`')) {
      return 'text-green-300';
    }
    if (line.includes('className=') || line.includes('href=')) {
      return 'text-yellow-400';
    }
    return 'text-gray-200';
  };

  return (
    <div className="h-full flex">
      {/* Line Numbers */}
      <div className="w-16 bg-gray-900 text-gray-500 text-right py-4 px-2 text-xs font-mono leading-6 select-none">
        {jsCodeLines.slice(0, currentLine + 1).map((_, index) => (
          <div key={index} className="h-6">
            {index + 1}
          </div>
        ))}
      </div>

      {/* Code Content */}
      <div className="flex-1 bg-gray-800 text-gray-200 p-4 font-mono text-sm leading-6 overflow-auto">
        <div className="space-y-0">
          {jsCodeLines.slice(0, currentLine).map((line, index) => (
            <div key={index} className={`${getLineColor(line)} h-6 whitespace-pre`}>
              {line || '\u00A0'}
            </div>
          ))}
          {currentLine < jsCodeLines.length && (
            <div className={`${getLineColor(jsCodeLines[currentLine])} h-6 whitespace-pre`}>
              {jsCodeLines[currentLine]}
              <span className="animate-pulse bg-yellow-400 w-2 h-5 inline-block ml-1"></span>
            </div>
          )}
        </div>

        {/* Live Projects Display */}
        {currentLine >= jsCodeLines.length && (
          <div className="mt-8 border-t border-gray-700 pt-8">
            <div className="text-green-400 text-xs mb-4">// Live Project Data Output:</div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div 
                  key={project.id}
                  className="bg-gray-900 border border-gray-600 rounded-lg p-4 hover:border-blue-400 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-blue-400 font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-300 text-xs mb-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs bg-gray-700 text-green-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 text-xs">
                    {project.github_url && (
                      <a 
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-purple-400 hover:text-purple-300"
                      >
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    )}
                    {project.demo_url && (
                      <a 
                        href={project.demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Demo
                      </a>
                    )}
                    {project.completion_date && (
                      <span className="flex items-center gap-1 text-gray-400 ml-auto">
                        <Calendar className="w-3 h-3" />
                        {format(new Date(project.completion_date), 'MMM yyyy')}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Minimap */}
      <div className="w-20 bg-gray-900 border-l border-gray-700 py-4">
        <div className="w-full h-64 bg-gradient-to-b from-purple-900/20 to-blue-900/20 rounded border border-gray-600">
          <div className="w-full h-6 bg-green-500/30 mt-2 rounded"></div>
          <div className="w-full h-16 bg-purple-500/20 mt-4 rounded"></div>
          <div className="w-full h-20 bg-blue-500/20 mt-4 rounded"></div>
        </div>
      </div>
    </div>
  );
}
