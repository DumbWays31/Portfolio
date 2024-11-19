'use client'

import { useState } from 'react'
import { X, User, Code, Heart, GraduationCap, Briefcase, FolderGit2, Mail, ChevronLeft, ChevronRight, Image } from 'lucide-react'

interface Box {
  title: string;
  content: string;
  color: string;
  details: string;
  icon?: React.ReactNode;
}
interface Project {
  title: string;
  content: string;
}

export default function Component() {
  const [selectedBox, setSelectedBox] = useState<Box | null>(null)
  const [currentProject, setCurrentProject] = useState(0)

  const boxes = [
  {
    title: 'About Me',
    content: 'A passionate developer focused on creating elegant solutions to complex problems.',
    color: '#B2D9E0',
    details: 'Lorem ipsum dolor sit amet...',
    icon: <User />
  },
  {
    title: 'Hard Skills',
    content: 'JavaScript, React, Node.js',
    color: '#567B81',
    details: 'Lorem ipsum dolor sit amet...',
    icon: <Code />
  },
  {
    title: 'Soft Skills',
    content: 'Team Leadership, Communication, Problem Solving',
    color: '#F9B97F',
    details: 'Lorem ipsum dolor sit amet...',
    icon: <Heart />
  },
  {
    title: 'Education',
    content: 'Bachelor in Computer Science, University Name, 2018-2022',
    color: '#CC7229',
    details: 'Lorem ipsum dolor sit amet...',
    icon: <GraduationCap />
  },
  {
    title: 'Professional Experience',
    content: 'Senior Developer, Company Name, 2022-Present',
    color: '#A7BA93',
    details: 'Lorem ipsum dolor sit amet...',
    icon: <Briefcase />
  },
  {
    title: 'Projects',
    content: 'Project 1, Project 2',
    color: '#567B81',
    details: 'Lorem ipsum dolor sit amet...',
    icon: <FolderGit2 />
  },
  {
    title: 'Contact',
    content: 'email@example.com, linkedin.com/in/username',
    color: '#B2D9E0',
    details: 'Lorem ipsum dolor sit amet...',
    icon: <Mail />
  },
]


  return (
    <div className="h-screen w-screen p-4 bg-tertiary">
      <h1 className="text-4xl font-bold text-primary mb-6 ml-2">Elena Ferreira</h1>
      <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[calc(100%-5rem)]">
        {boxes.map((box, index) => (
          <div
            key={index}
            className={`rounded-3xl p-6 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md hover:scale-[1.02] ${
              index === 0 ? 'col-span-2 row-span-2' : index === 3 || index === 4 ? 'col-span-2' : ''
            }`}
            style={{ backgroundColor: box.color }}
            onClick={() => setSelectedBox(box)}
          >
            <h2 className="text-xl font-bold mb-3 text-tertiary">{box.title}</h2>
            <p className="text-gray-100">{box.content}</p>
          </div>
        ))}
      </div>

      {selectedBox && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 transition-opacity duration-300 backdrop-blur-sm"
          onClick={() => setSelectedBox(null)}
        >
          <div 
            className="bg-white rounded-3xl p-8 max-w-2xl w-full relative transition-all duration-300 transform scale-100 opacity-100"
            style={{ backgroundColor: selectedBox.color }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-tertiary hover:text-white transition-colors duration-200"
              onClick={() => setSelectedBox(null)}
            >
              <X size={24} />
            </button>
            <h2 className="text-3xl font-bold mb-4 text-tertiary">{selectedBox.title}</h2>
            <div className="space-y-4">
              <p className="text-gray-100">{selectedBox.content}</p>
              <p className="text-gray-100 leading-relaxed">{selectedBox.details}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}