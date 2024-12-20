'use client'

import { useEffect, useState } from 'react'
import { X, User, Code, Heart, GraduationCap, Briefcase, FolderGit2, Mail, ChevronLeft, ChevronRight, Image } from 'lucide-react'
import myPhoto from '../public/elena-ferreira.jpg'

interface Project {
  title: string;
  content: string;
  details: string;
}

interface Box {
  title: string;
  content: string;
  color: string;
  titleColor: string;
  details: string;
  icon: React.ReactNode;
  projects?: Project[];
}

export default function Component() {
  const [selectedBox, setSelectedBox] = useState<Box | null>(null)
  const [currentProject, setCurrentProject] = useState(0)

  // Quitter avec Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedBox(null);
        setCurrentProject(0);
      }
    };
    if (selectedBox) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedBox]);

  const boxes = [
    {
      title: 'About Me',
      content: 'A passionate developer focused on creating elegant solutions to complex problems.',
      color: '#8ecae6',
      titleColor: '#1D3557',
      details: 'Lorem ipsum dolor sit amet...',
      icon: <User className="inline-block mr-2" />
    },
    {
      title: 'Photo',
      content: 'Your professional photo',
      color: '#F0F0F0',
      titleColor: '#457B9D',
      details: 'A professional headshot or a photo that represents you',
      icon: <Image className="inline-block mr-2" />
    },
    {
      title: 'Hard Skills',
      content: 'JavaScript, React, Node.js',
      color: '#457B9D',
      titleColor: '#F1FAEE',
      details: 'Lorem ipsum dolor sit amet...',
      icon: <Code className="inline-block mr-2" />
    },
    {
      title: 'Soft Skills',
      content: 'Team Leadership, Communication, Problem Solving',
      color: '#4c956c',
      titleColor: '#F1FAEE',
      details: 'Lorem ipsum dolor sit amet...',
      icon: <Heart className="inline-block mr-2" />
    },
    {
      title: 'Education',
      content: 'Bachelor in Computer Science, University Name, 2018-2022',
      color: '#4c956c',
      titleColor: '#F1FAEE',
      details: 'Lorem ipsum dolor sit amet...',
      icon: <GraduationCap className="inline-block mr-2" />
    },
    {
      title: 'Professional Experience',
      content: 'Senior Developer, Company Name, 2022-Present',
      color: '#1D3557',
      titleColor: '#F1FAEE',
      details: 'Lorem ipsum dolor sit amet...',
      icon: <Briefcase className="inline-block mr-2" />
    },
    {
      title: 'Projects',
      content: '',
      color: '#457B9D',
      titleColor: '#F1FAEE',
      details: 'Lorem ipsum dolor sit amet...',
      icon: <FolderGit2 className="inline-block mr-2" />,
      projects: [
        { title: 'Project 1', content: 'Description of Project 1', details: 'Detailed information about Project 1...' },
        { title: 'Project 2', content: 'Description of Project 2', details: 'Detailed information about Project 2...' },
        { title: 'Project 3', content: 'Description of Project 3', details: 'Detailed information about Project 3...' },
        { title: 'Project 4', content: 'Description of Project 4', details: 'Detailed information about Project 4...' },
        { title: 'Project 5', content: 'Description of Project 5', details: 'Detailed information about Project 5...' },
      ]
    },
    {
      title: 'Contact',
      content: 'email@example.com, linkedin.com/in/username',
      color: '#8ecae6',
      titleColor: '#1D3557',
      details: 'Lorem ipsum dolor sit amet...',
      icon: <Mail className="inline-block mr-2" />
    },
  ]

  return (
    <div className="h-screen w-screen p-4 bg-tertiary">
      <h1 className="text-4xl font-bold text-primary mb-6 ml-2">Elena Ferreira</h1>
      <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[calc(100%-5rem)]">
        {boxes.map((box, index) => (
          <div
            key={index}
            className={`transition-all duration-300 rounded-3xl ${
              box.title === 'Photo' ? '' : 'cursor-pointer p-6 shadow-sm hover:shadow-md hover:scale-[1.02]'
            } ${
              index === 5 ? 'col-span-2 row-span-2' : index === 4 ? 'col-span-2' : ''
            }`}
            style={{ backgroundColor: box.color }}
            onClick={() => setSelectedBox(box.title === 'Photo' ? null : box)}
          >
            {box.title === 'Photo' ? (
              <div className="w-full h-full flex items-center justify-center">
                <img src={myPhoto.src} alt="Elena Ferreira" className="w-full h-full object-cover rounded-3xl" />
              </div>
            ) : box.projects ? (
              <div className="relative h-full">
                <h2 className="text-xl font-bold mb-3 flex items-center" style={{ color: box.titleColor }}>
                  {box.icon}
                  {box.projects[currentProject].title}
                </h2>
                <p className="text-gray-100">{box.projects[currentProject].content}</p>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentProject((prev) => (prev === 0 ? box.projects!.length - 1 : prev - 1));
                    }}
                    className="text-tertiary hover:text-white transition-colors duration-200"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentProject((prev) => (prev === box.projects!.length - 1 ? 0 : prev + 1));
                    }}
                    className="text-tertiary hover:text-white transition-colors duration-200"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-3 flex items-center" style={{ color: box.titleColor }}>
                  {box.icon}
                  {box.title}
                </h2>
                <p className="text-gray-100">{box.content}</p>
              </>
            )}
          </div>
        ))}
      </div>

      {selectedBox && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 transition-opacity duration-300 backdrop-blur-sm"
          onClick={() => {
            setSelectedBox(null);
            setCurrentProject(0);
          }}
        >
          <div 
            className="bg-white rounded-3xl p-8 max-w-2xl w-full relative transition-all duration-300 transform scale-100 opacity-100"
            style={{ backgroundColor: selectedBox.color }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-tertiary hover:text-white transition-colors duration-200"
              onClick={() => {
                setSelectedBox(null);
                setCurrentProject(0);
              }}
            >
              <X size={24} />
            </button>
            <h2 className="text-3xl font-bold mb-4 flex items-center" style={{ color: selectedBox.titleColor }}>
              {selectedBox.icon}
              {selectedBox.projects ? selectedBox.projects[currentProject].title : selectedBox.title}
            </h2>
            {selectedBox.projects && (
              <p className="text-sm text-tertiary mb-2">
                Project {currentProject + 1} of {selectedBox.projects.length}
              </p>
            )}
            <div className="space-y-4">
              {selectedBox.title === 'Photo' ? (
                <div className="w-full flex items-center justify-center">
                  <img src={myPhoto.src} alt="Elena Ferreira" className="w-64 h-64 object-cover rounded-full" />
                </div>
              ) : (
                <>
                  <p className="text-gray-100">
                    {selectedBox.projects ? selectedBox.projects[currentProject].content : selectedBox.content}
                  </p>
                  <p className="text-gray-100 leading-relaxed">
                    {selectedBox.projects ? selectedBox.projects[currentProject].details : selectedBox.details}
                  </p>
                </>
              )}
            </div>
            {selectedBox.projects && (
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setCurrentProject((prev) => (prev === 0 ? selectedBox.projects!.length - 1 : prev - 1))}
                  className="text-tertiary hover:text-white transition-colors duration-200"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => setCurrentProject((prev) => (prev === selectedBox.projects!.length - 1 ? 0 : prev + 1))}
                  className="text-tertiary hover:text-white transition-colors duration-200"
                  aria-label="Next project"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}