import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Copy, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [typedText, setTypedText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [copiedField, setCopiedField] = useState(null);

  const cssCode = [
    '/* contact.css - Professional Contact Information */',
    '/* Modern CSS approach to contact styling */',
    '',
    ':root {',
    '  /* Contact theme variables */',
    '  --contact-primary: #4f46e5;',
    '  --contact-secondary: #06b6d4;',
    '  --contact-accent: #10b981;',
    '  --response-time: 24h;',
    '}',
    '',
    '/* Personal Information Styling */',
    '.developer-contact {',
    '  display: flex;',
    '  flex-direction: column;',
    '  gap: 1.5rem;',
    '  padding: 2rem;',
    '  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);',
    '  border-radius: 12px;',
    '}',
    '',
    '/* Contact Methods */',
    '.email {',
    '  content: "john.developer@gmail.com";',
    '  color: var(--contact-primary);',
    '  text-decoration: none;',
    '  font-weight: 600;',
    '  transition: color 0.3s ease;',
    '}',
    '',
    '.email:hover {',
    '  color: var(--contact-secondary);',
    '  text-decoration: underline;',
    '}',
    '',
    '.phone::after {',
    '  content: "+1 (555) 123-4567";',
    '  color: var(--contact-primary);',
    '  font-family: monospace;',
    '}',
    '',
    '.location {',
    '  position: relative;',
    '}',
    '',
    '.location::before {',
    '  content: "📍";',
    '  margin-right: 8px;',
    '}',
    '',
    '.location::after {',
    '  content: "San Francisco, CA";',
    '  color: var(--contact-accent);',
    '  font-style: italic;',
    '}',
    '',
    '/* Social Media Links */',
    '.social-links {',
    '  display: flex;',
    '  gap: 1rem;',
    '  margin-top: 2rem;',
    '}',
    '',
    '.github-profile {',
    '  content: "github.com/johndeveloper";',
    '  color: #333;',
    '  background: #f0f0f0;',
    '  padding: 0.5rem 1rem;',
    '  border-radius: 6px;',
    '  text-decoration: none;',
    '}',
    '',
    '.linkedin-profile {',
    '  content: "linkedin.com/in/johndeveloper";',
    '  color: #0077b5;',
    '  background: #e1f5fe;',
    '  padding: 0.5rem 1rem;',
    '  border-radius: 6px;',
    '}',
    '',
    '.twitter-handle {',
    '  content: "@johndev_codes";',
    '  color: #1da1f2;',
    '  background: #e3f2fd;',
    '  padding: 0.5rem 1rem;',
    '  border-radius: 6px;',
    '}',
    '',
    '/* Availability Status */',
    '.availability-status {',
    '  display: inline-block;',
    '  padding: 0.5rem 1rem;',
    '  border-radius: 20px;',
    '  font-size: 0.875rem;',
    '  font-weight: 500;',
    '}',
    '',
    '.available::before {',
    '  content: "🟢";',
    '  margin-right: 0.5rem;',
    '}',
    '',
    '.available::after {',
    '  content: "Available for new opportunities";',
    '  color: var(--contact-accent);',
    '}',
    '',
    '/* Response Time Indicator */',
    '.response-time {',
    '  color: var(--contact-secondary);',
    '  font-size: 0.875rem;',
    '}',
    '',
    '.response-time::before {',
    '  content: "⚡";',
    '  margin-right: 0.5rem;',
    '}',
    '',
    '.response-time::after {',
    '  content: "Usually responds within " var(--response-time);',
    '}',
    '',
    '/* Contact Form Styling */',
    '.contact-form {',
    '  max-width: 500px;',
    '  margin: 2rem auto;',
    '  padding: 2rem;',
    '  background: rgba(255, 255, 255, 0.05);',
    '  border: 1px solid rgba(255, 255, 255, 0.1);',
    '  border-radius: 12px;',
    '  backdrop-filter: blur(10px);',
    '}',
    '',
    '.form-field {',
    '  margin-bottom: 1.5rem;',
    '}',
    '',
    '.form-label {',
    '  display: block;',
    '  color: var(--contact-primary);',
    '  font-weight: 600;',
    '  margin-bottom: 0.5rem;',
    '}',
    '',
    '.form-input {',
    '  width: 100%;',
    '  padding: 0.75rem;',
    '  border: 1px solid var(--contact-primary);',
    '  border-radius: 6px;',
    '  background: rgba(255, 255, 255, 0.1);',
    '  color: white;',
    '  transition: border-color 0.3s ease;',
    '}',
    '',
    '.form-input:focus {',
    '  outline: none;',
    '  border-color: var(--contact-secondary);',
    '  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);',
    '}',
    '',
    '.submit-button {',
    '  background: linear-gradient(135deg, var(--contact-primary), var(--contact-secondary));',
    '  color: white;',
    '  border: none;',
    '  padding: 0.75rem 2rem;',
    '  border-radius: 6px;',
    '  font-weight: 600;',
    '  cursor: pointer;',
    '  transition: transform 0.2s ease;',
    '}',
    '',
    '.submit-button:hover {',
    '  transform: translateY(-2px);',
    '  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);',
    '}',
    '',
    '/* Responsive Design */',
    '@media (max-width: 768px) {',
    '  .developer-contact {',
    '    padding: 1rem;',
    '  }',
    '  ',
    '  .social-links {',
    '    flex-direction: column;',
    '  }',
    '  ',
    '  .contact-form {',
    '    margin: 1rem;',
    '    padding: 1rem;',
    '  }',
    '}',
    '',
    '/* Animation Effects */',
    '@keyframes fadeInUp {',
    '  from {',
    '    opacity: 0;',
    '    transform: translateY(30px);',
    '  }',
    '  to {',
    '    opacity: 1;',
    '    transform: translateY(0);',
    '  }',
    '}',
    '',
    '.contact-item {',
    '  animation: fadeInUp 0.6s ease forwards;',
    '  animation-delay: var(--animation-delay, 0ms);',
    '}'
  ];

  useEffect(() => {
    if (currentLine < cssCode.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [currentLine, cssCode]);

  const getLineColor = (line) => {
    if (line.startsWith('/*') || line.includes('*/')) {
      return 'text-green-500';
    }
    if (line.includes(':root') || line.includes('@media') || line.includes('@keyframes')) {
      return 'text-purple-400';
    }
    if (line.includes(':') && (line.includes('--') || line.includes('#') || line.includes('px') || line.includes('rem'))) {
      return 'text-yellow-400';
    }
    if (line.includes('content:') && line.includes('"')) {
      return 'text-green-300';
    }
    if (line.includes('.') && line.includes('{')) {
      return 'text-blue-400';
    }
    return 'text-gray-200';
  };

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text');
    }
  };

  const contactInfo = {
    email: 'john.developer@gmail.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/johndeveloper',
    github: 'github.com/johndeveloper',
    twitter: '@johndev_codes'
  };

  return (
    <div className="h-full flex">
      {/* Line Numbers */}
      <div className="w-16 bg-gray-900 text-gray-500 text-right py-4 px-2 text-xs font-mono leading-6 select-none">
        {cssCode.slice(0, currentLine + 1).map((_, index) => (
          <div key={index} className="h-6">
            {index + 1}
          </div>
        ))}
      </div>

      {/* Code Content */}
      <div className="flex-1 bg-gray-800 text-gray-200 p-4 font-mono text-sm leading-6 overflow-auto">
        <div className="space-y-0">
          {cssCode.slice(0, currentLine).map((line, index) => (
            <div key={index} className={`${getLineColor(line)} h-6 whitespace-pre`}>
              {line || '\u00A0'}
            </div>
          ))}
          {currentLine < cssCode.length && (
            <div className={`${getLineColor(cssCode[currentLine])} h-6 whitespace-pre`}>
              {cssCode[currentLine]}
              <span className="animate-pulse bg-blue-400 w-2 h-5 inline-block ml-1"></span>
            </div>
          )}
        </div>

        {/* Rendered Contact Output */}
        {currentLine >= cssCode.length && (
          <div className="mt-8 border-t border-gray-700 pt-8">
            <div className="text-green-400 text-xs mb-6">/* Rendered CSS Output: */</div>
            
            <div className="max-w-2xl mx-auto space-y-8">
              {/* Contact Header */}
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Let's Connect
                </h2>
                <div className="flex items-center justify-center gap-2 text-green-400">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Available for new opportunities</span>
                </div>
              </div>

              {/* Contact Information Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-600 hover:border-blue-400 transition-all">
                  <div className="flex items-center justify-between">
 
