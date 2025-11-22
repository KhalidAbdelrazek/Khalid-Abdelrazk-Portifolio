import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="glass rounded-3xl p-8 md:p-12 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-foreground/90 leading-relaxed"
            >
              Data Analyst with 1+ years of experience turning raw data into
              actionable insights. Completed 7+ real-world projects in data
              analysis and machine learning. Skilled in Python, SQL, Power BI,
              and data storytelling. Currently leading an 8-member team on a
              Multi-Functional Healthcare Robot.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid md:grid-cols-3 gap-6 pt-6 border-t border-border/50"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 glass rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Beni Suef, Egypt</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 glass rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">01015565612</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 glass rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-sm">
                    khalidabdelrazk4@gmail.com
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
