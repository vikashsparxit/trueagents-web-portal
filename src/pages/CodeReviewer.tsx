import { ProductTemplate } from "./ProductTemplate";

const CodeReviewer = () => {
  return (
    <ProductTemplate
      title="Code Reviewer - AI-Powered Code Analysis"
      description="Enhance your development workflow with automated code quality assurance. Our AI Code Reviewer provides instant feedback and suggestions to improve code quality and maintainability."
      image="/lovable-uploads/2a47ab0a-d3bf-479c-bd40-95250a554812.png"
      features={[
        "Automated code quality analysis",
        "Security vulnerability detection",
        "Performance optimization suggestions",
        "Code style and consistency checks",
        "Best practices enforcement",
        "Integration with major version control systems",
        "Real-time feedback during development",
        "Custom rule configuration",
        "Team collaboration features",
        "Detailed code quality metrics"
      ]}
    />
  );
};

export default CodeReviewer;