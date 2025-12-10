import { motion } from "framer-motion";
import { CheckCircle2, Cpu, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Strategy() {
  return (
    <section className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Our Strategy</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Combining advanced technology with human oversight to build a verifiable, open civic infrastructure.
            </p>
          </div>

          {/* Core Strategy Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold font-display mb-6">Civic Information Access</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-6">
                  We are committed to achieving this goal through a thoughtful combination of advanced AI-based technology, robust programming tools, and meticulous human-in-the-loop oversight.
                </p>
                <p>
                  This hybrid approach ensures both efficiency and accuracy in our data collection and dissemination. The governance of these tools and processes is collaboratively managed by the Civic Data Tech partners, ensuring transparency and community-driven development.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="bg-card border border-border/50 p-6 rounded-xl flex items-start gap-4 hover:border-primary/30 transition-colors">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Cpu className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">AI & Technology</h3>
                  <p className="text-sm text-muted-foreground">Advanced automated collection and processing tools.</p>
                </div>
              </div>
              <div className="bg-card border border-border/50 p-6 rounded-xl flex items-start gap-4 hover:border-primary/30 transition-colors">
                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Human Oversight</h3>
                  <p className="text-sm text-muted-foreground">Meticulous verification by community contributors.</p>
                </div>
              </div>
              <div className="bg-card border border-border/50 p-6 rounded-xl flex items-start gap-4 hover:border-primary/30 transition-colors">
                <div className="p-3 bg-secondary rounded-lg text-foreground">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Governance</h3>
                  <p className="text-sm text-muted-foreground">Collaborative management by Civic Data Tech partners.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Initial Phase & Future */}
          <div className="bg-secondary/30 rounded-2xl p-8 md:p-12 mb-20">
             <div className="max-w-3xl mx-auto">
               <h3 className="text-2xl font-bold font-display mb-6">Phased Implementation</h3>
               <div className="space-y-8">
                 <div className="relative pl-8 border-l-2 border-primary">
                   <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                   <h4 className="text-xl font-bold mb-2 text-primary">Phase 1: Foundational Dataset</h4>
                   <p className="text-muted-foreground">
                     Our initial phase is concentrated on building a verifiable foundational dataset for all cities and counties in the U.S. This comprehensive baseline includes essential information such as official websites, details on elected officials, contact information, and election cycles.
                   </p>
                 </div>
                 <div className="relative pl-8 border-l-2 border-border">
                   <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-border ring-4 ring-background" />
                   <h4 className="text-xl font-bold mb-2">Future Developments</h4>
                   <p className="text-muted-foreground">
                     Future planned developments will expand to provide critical election information, including candidate profiles, office specifics, and detailed voting procedures.
                   </p>
                 </div>
               </div>
             </div>
          </div>

          {/* Current Status */}
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold font-display mb-6">Current Status: Building the Foundation</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We have successfully mapped out the initial data points and are actively engaged in the systematic collection and verification of baseline information for local jurisdictions nationwide.
                  </p>
                  <p>
                    Our technological framework for data acquisition and validation is being continuously refined, and our collaborative governance model is fully operational, guiding our progress and future development.
                  </p>
                </div>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border shadow-sm">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  Active Milestones
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    Mapping initial data points
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    Systematic collection & verification
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    Refining technological framework
                  </li>
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    Governance model operational
                  </li>
                </ul>
                <Button className="w-full mt-6" asChild>
                  <Link href="/get-involved">
                    Get Involved <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
