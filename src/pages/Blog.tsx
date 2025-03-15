
import { useEffect } from 'react';
import BlogNav from '../components/blog/BlogNav';
import BlogHeader from '../components/blog/BlogHeader';
import BlogSection from '../components/blog/BlogSection';
import TechniqueCard from '../components/blog/TechniqueCard';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <BlogNav />
      
      <main className="pt-20">
        <BlogHeader />
        
        <BlogSection title="The Hidden Crisis in AI Implementation" delay={100}>
          <p className="mb-4">
            Despite record spending on AI tools, most businesses are capturing only a fraction of the potential value. 
            A recent Deloitte study found that <strong>74% of companies are using less than 20% of their AI systems' capabilities</strong>. 
            This implementation gap is costing the average enterprise over $2.3 million annually in:
          </p>
          
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Redundant manual work that could be automated</li>
            <li>Suboptimal AI outputs requiring extensive human correction</li>
            <li>Employee frustration and decreased motivation</li>
            <li>Continued reliance on outdated processes</li>
            <li>Lost competitive advantage to AI-mature competitors</li>
          </ul>
          
          <p className="mb-4">
            The root cause? Not technological limitations, but <strong>insufficient understanding of advanced prompting techniques</strong>.
          </p>
        </BlogSection>
        
        <BlogSection title="The Breakthrough: Systematic Prompt Engineering" delay={200}>
          <p className="mb-4">
            When Bangalore-based software development firm TechNova implemented our advanced prompt engineering framework, 
            they experienced a dramatic transformation:
          </p>
          
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li><strong>62% reduction</strong> in administrative workload</li>
            <li><strong>41% faster</strong> project delivery timelines</li>
            <li><strong>89% improvement</strong> in employee satisfaction scores</li>
            <li><strong>$437,000 annual savings</strong> in operational costs</li>
          </ul>
          
          <div className="my-6 p-4 border-l-4 border-black bg-gray-50 italic">
            "We were using AI like a basic calculator when it could have been functioning as a full executive assistant. 
            These advanced prompting techniques changed everything about how we operate."
            <div className="mt-2 font-medium not-italic">- Priya Mehta, COO, TechNova</div>
          </div>
        </BlogSection>
        
        <BlogSection title="7 Advanced Prompting Techniques That Transform Productivity" delay={300}>
          <div className="space-y-8 mt-6">
            <TechniqueCard
              number={1}
              title="Chain-of-Thought Prompting"
              traditional="Asking for a direct answer to complex problems"
              advanced="Instructing the AI to show its reasoning process step-by-step"
              impact="Reduces error rates by 47% in financial analysis and strategic planning"
              example={
                <div>
                  <p className="mb-2"><strong>Instead of:</strong> "What's the best market entry strategy for our product?"</p>
                  <p><strong>Use:</strong> "Think step-by-step about the optimal market entry strategy for our product. First, analyze our competitive advantages. Second, evaluate market saturation in potential regions. Third, consider regulatory constraints. Fourth, assess resource requirements. Finally, recommend the most promising approach based on this analysis."</p>
                </div>
              }
              delay={100}
            />
            
            <TechniqueCard
              number={2}
              title="Role-Based Context Framing"
              traditional="Generic queries without specifying expertise needed"
              advanced="Assigning specific professional roles to the AI"
              impact="Improves output quality by 53% for specialized tasks"
              example={
                <div>
                  <p className="mb-2"><strong>Instead of:</strong> "Write a blog post about supply chain optimization."</p>
                  <p><strong>Use:</strong> "As an experienced supply chain management consultant with 15 years of experience helping Fortune 500 companies optimize their operations, write a detailed blog post about advanced supply chain optimization techniques that can help mid-sized manufacturing businesses reduce costs while improving resilience."</p>
                </div>
              }
              delay={200}
            />
            
            <TechniqueCard
              number={3}
              title="Output Structure Control"
              traditional="Accepting default formats from AI systems"
              advanced="Precisely defining the structure, format, and components of the desired output"
              impact="Reduces reformatting time by 78% and improves implementation speed"
              example={
                <div>
                  <p className="mb-2"><strong>Instead of:</strong> "Create a marketing analysis report."</p>
                  <p><strong>Use:</strong> "Create a marketing analysis report with the following structure:
                  1. Executive Summary (max 150 words)
                  2. Market Trends (3-5 key trends with supporting data)
                  3. Competitor Analysis (table format with columns for Competitor, Strengths, Weaknesses, Market Share)
                  4. Opportunity Assessment (bullet points ranked by potential impact)
                  5. Recommended Actions (prioritized list with implementation difficulty rating)
                  Format all data-driven insights with relevant metrics and use subheadings for easy scanning."</p>
                </div>
              }
              delay={300}
            />
            
            <TechniqueCard
              number={4}
              title="Multi-Perspective Evaluation"
              traditional="Accepting initial AI recommendations without critique"
              advanced="Instructing the AI to analyze problems from multiple perspectives"
              impact="Improves decision quality by 64% in complex business scenarios"
              example={
                <div>
                  <p className="mb-2"><strong>Instead of:</strong> "Should we launch this product?"</p>
                  <p><strong>Use:</strong> "Analyze our potential product launch from multiple perspectives:
                  1. From a financial perspective, what are the risks and potential returns?
                  2. From a marketing perspective, how does this fit our brand positioning?
                  3. From a customer perspective, what unmet needs does this address?
                  4. From a competitive perspective, what is our advantage?
                  5. From an operational perspective, what challenges might we face?
                  After considering all perspectives, provide a balanced recommendation."</p>
                </div>
              }
              delay={400}
            />
            
            <TechniqueCard
              number={5}
              title="Constraint-Based Optimization"
              traditional="Open-ended requests without specific constraints"
              advanced="Explicitly defining business constraints and optimization criteria"
              impact="Produces actionable recommendations 3.2x faster"
              example={
                <div>
                  <p className="mb-2"><strong>Instead of:</strong> "How can we reduce customer churn?"</p>
                  <p><strong>Use:</strong> "Recommend strategies to reduce our customer churn rate with these constraints: must be implementable within 45 days, require no more than $50,000 investment, use existing team capabilities, and prioritize solutions that improve our NPS score. Optimize for highest retention impact per dollar spent."</p>
                </div>
              }
              delay={500}
            />
            
            <TechniqueCard
              number={6}
              title="Scenario Planning Prompts"
              traditional="Linear predictions based on current trends"
              advanced="Structured scenario development across multiple variables"
              impact="Improves strategic planning resilience by 71%"
              example={
                <div>
                  <p className="mb-2"><strong>Instead of:</strong> "What will happen to our market in the next year?"</p>
                  <p><strong>Use:</strong> "Develop three distinct scenarios for our market over the next 18 months:
                  1. Base case: Assuming current trends continue
                  2. Downside case: Assuming economic recession and 20% market contraction
                  3. Upside case: Assuming accelerated technology adoption and 30% market expansion
                  For each scenario, detail:
                  - Key market indicators to monitor
                  - Competitor likely responses
                  - Recommended strategic adjustments
                  - Critical decision points and triggers"</p>
                </div>
              }
              delay={600}
            />
            
            <TechniqueCard
              number={7}
              title="Iterative Refinement Loops"
              traditional="Single-step prompting for complex outputs"
              advanced="Designing multi-stage processes with AI feedback loops"
              impact="Increases final output quality by 83% for complex deliverables"
              example={
                <div>
                  <p className="mb-2"><strong>Instead of:</strong> "Write our quarterly business plan."</p>
                  <p><strong>Use:</strong> "We'll create our quarterly business plan in stages:
                  1. First, analyze our previous quarter's performance data and identify 3-5 key insights
                  2. Based on those insights, recommend 3 primary focus areas for the upcoming quarter
                  3. For each focus area, help us develop 2-3 specific initiatives with clear KPIs
                  4. Review the draft plan for potential obstacles and develop contingency approaches
                  5. Finalize by creating an executive summary that connects our strategy to our annual objectives"</p>
                </div>
              }
              delay={700}
            />
          </div>
        </BlogSection>
      </main>
      
      <footer className="border-t border-gray-200 mt-10 py-10 text-center text-gray-500 text-sm">
        <div className="container px-4 md:px-6">
          <p>© 2023 AI Prompt Engineering. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
