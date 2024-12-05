import { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/constants';
import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';

const projectTypes = ['All', 'Architecture', 'Frontend', 'Backend'];

export function Projects() {
  const [selectedType, setSelectedType] = useState('All');

  const filteredProjects = PROJECTS.filter(
    (project) => selectedType === 'All' || project.type === selectedType
  );

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my most impactful projects, demonstrating expertise
            across various domains and technologies.
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 mb-12 overflow-x-auto pb-4">
          {projectTypes.map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? 'default' : 'outline'}
              onClick={() => setSelectedType(type)}
              className="min-w-[100px]"
            >
              {type}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}