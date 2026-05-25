import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from "./assets/pic1.png";
import pic2 from "./assets/pic2.png";
import pic3 from "./assets/pic3.png";
import pic4 from "./assets/pic4.png";
import pic5 from "./assets/pic5.png";
import pic6 from "./assets/pic6.png";

const projects = [
  { id: 1, title: "Library Management System", category: "C++", desc: "Full-featured console-based library management system.", image: pic1 },
  { id: 2, title: "Smart Home Management", category: "Java", desc: "IoT simulation for smart home control.", image: pic2 },
  { id: 3, title: "E-Commerce Platform", category: "HTML/CSS/JS", desc: "Online shopping website with cart and checkout.", image: pic3 },
  { id: 4, title: "Fitness Tracker App", category: "React", desc: "Modern fitness tracking application.", image: pic4 },
  { id: 5, title: "Educational Platform", category: "WordPress", desc: "Learning Management System with courses and quizzes.", image: pic5 },
  { id: 6, title: "ML Prediction Model", category: "Python", desc: "Machine Learning project for data analysis and predictive modeling.", image: pic6 },
];

const Projects = () => {
  return (
    <section className="min-h-screen pt-16 bg-gray-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none">
  <div className="h-80 w-80 rounded-full bg-[#F59E0B]/10 blur-3xl"></div>
</div>
    
    <div className="pt-16 pb-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3  text-gray-900">Our Projects</h1>
          <p className="text-gray-600">Real solutions built with passion</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              to={`/project/${project.id}`}
              className="bg-white border border-gray-100 hover:border-amber-200 rounded-3xl overflow-hidden transition-all hover:shadow-md group"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform" 
              />
              <div className="p-6">
                <span className="text-xs font-mono text-amber-600">{project.category}</span>
                <h3 className="text-lg font-semibold mt-2 mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{project.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Projects;