import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { PROFILE } from '@/lib/constants';

export function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-background to-accent"
    >
      <div className="text-center space-y-6 p-4">
        <motion.h1 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          {PROFILE.name}
        </motion.h1>
        <motion.p 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground"
        >
          {PROFILE.title}
        </motion.p>
      </div>
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute bottom-10"
      >
        <ChevronDown className="animate-bounce w-6 h-6" />
      </motion.div>
    </motion.section>
  );
}