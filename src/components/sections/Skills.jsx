// Skills.jsx
import React from "react";
import skills from "../../data/skills.js";
import FadeIn from "../animation/Fadein.jsx";

function Skills() {
    const skillCategories = {
        "Frontend Development": [
            skills.find((s) => s.name === "HTML5"),
            skills.find((s) => s.name === "CSS3"),
            skills.find((s) => s.name === "EJS"),
            skills.find((s) => s.name === "React.js"),
            skills.find((s) => s.name === "Bootstrap"),
            skills.find((s) => s.name === "Tailwind CSS"),
        ].filter(Boolean),

        "Backend & API": [
            skills.find((s) => s.name === "Node.js"),
            skills.find((s) => s.name === "Express.js"),
            skills.find((s) => s.name === "RESTful APIs"),
            skills.find((s) => s.name === "MVC Architecture"),
        ].filter(Boolean),

        "Database": [
            skills.find((s) => s.name === "MongoDB"),
            skills.find((s) => s.name === "MySQL"),
            skills.find((s) => s.name === "Mongoose ODM"),
        ].filter(Boolean),

        "Programming Languages": [
            skills.find((s) => s.name === "Java"),
            skills.find((s) => s.name === "JavaScript"),
        ].filter(Boolean),

        "Tools & Development": [
            skills.find((s) => s.name === "Git"),
            skills.find((s) => s.name === "GitHub"),
            skills.find((s) => s.name === "VS Code"),
            skills.find((s) => s.name === "Eclipse"),
            skills.find((s) => s.name === "Hoppscotch"),
        ].filter(Boolean),

        "Cloud & DevOps": [
            skills.find((s) => s.name === "AWS"),
            skills.find((s) => s.name === "CI/CD"),
        ].filter(Boolean),

        "Testing": [
            skills.find((s) => s.name === "Manual Testing"),
            skills.find((s) => s.name === "Automation Testing"),
            skills.find((s) => s.name === "Selenium WebDriver"),
        ].filter(Boolean),
    };

    const getProficiencyLevel = (skillLevel) => {
        const levels = {
            Expert: 95,
            Advanced: 80,
            Intermediate: 65,
            Beginner: 40,
        };
        return levels[skillLevel] || 50;
    };

    const getLevelColor = (level) => {
        const colors = {
            Expert: "text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30",
            Advanced: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30",
            Intermediate: "text-emerald-400 bg-emerald-500/20 border-emerald-500/30",
            Beginner: "text-yellow-400 bg-yellow-500/20 border-yellow-500/30",
        };

        return colors[level] || "text-gray-400 bg-gray-500/20 border-gray-500/30";
    };

    return (
        <section id="skills" className="py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">My Skills</h2>
                        <p className="text-white/60">Technologies and tools I work with</p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skillCategories).map(([categoryName, skillList], index) => (
                        <FadeIn key={categoryName} delay={index * 100}>
                            {/* Added hover effects to this div */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-white/[0.07] hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 cursor-default">
                                <h3 className="text-xl font-semibold text-primary mb-6">{categoryName}</h3>
                                <div className="space-y-6">
                                    {skillList.map((skill) => {
                                        if (!skill) return null;
                                        const proficiency = getProficiencyLevel(skill.level);
                                        
                                        return (
                                            <div key={skill.id}>
                                                <div className="flex justify-between items-center mb-2">
                                                    <div className="flex items-center gap-3">
                                                        <i className={`${skill.icon} text-white/70`}></i>
                                                        <span className="font-medium">{skill.name}</span>
                                                    </div>
                                                    <span className={`text-xs font-mono px-2 py-1 rounded-full border ${getLevelColor(skill.level)}`}>
                                                        {skill.level}
                                                    </span>
                                                </div>
                                                
                                                {/* Progress Bar */}
                                                <div className="w-full bg-white/10 rounded-full h-1.5 mb-2">
                                                    <div
                                                        className="bg-primary h-1.5 rounded-full transition-all duration-500"
                                                        style={{ width: `${proficiency}%` }}
                                                    ></div>
                                                </div>
                                                
                                                <p className="text-xs text-white/50">{skill.experience}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;