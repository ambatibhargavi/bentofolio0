import { useEffect, useState } from "react";
import { useTrail, animated, easings } from "@react-spring/web";
import { GRIDS } from "../constants";

export default function ProjectsGrid({ setCurrentGrid, animatedStyles }) {
  const [nameIdx, setNameIdx] = useState(0);
  const name = "Projects".split("");

  const [subheadingIdx, setSubheadingIdx] = useState(0);
  const subheading =
    "Here are a few personal projects I've worked on over the years".split("");

  // Animation for revealing name and subheading
  useEffect(() => {
    const id = setInterval(() => {
      if (nameIdx < name.length) setNameIdx((idx) => idx + 1);
      if (subheadingIdx < subheading.length) setSubheadingIdx((idx) => idx + 1);
    }, 100);

    return () => clearInterval(id);
  }, [nameIdx, subheadingIdx, name.length, subheading.length]);

  // Trail animations for project grid items
  const trails = useTrail(7, {
    from: { scale: 0 },
    to: { scale: 1 },
    config: { easing: easings.easeInBack, delay: 300 },
  });

  // Project data for easier management
  const projects = [
    {
      title: "Spotify Playlist Automation",
      description:
        "Using Terraform, automated playlist management for Spotify with Infrastructure as Code (IaC). Scripts interact with Spotify API for creating, updating, and managing playlists.",
      bgColor: "#A7C957",
      textColor: "black",
      link: "https://github.com/ambatibhargavi/TerraformSpotify",
    },
    {
      title: "Argo Rollouts",
      description:
        "Implemented advanced deployment strategies in Kubernetes, such as Canary and Blue-Green deployments, integrated with Prometheus and Grafana for observability.",
      bgColor: "#BC4749",
      textColor: "white",
      link: "https://github.com/ambatibhargavi/Kubernetes-Deployment",
    },
    {
      title: "Custom LLM Deployment",
      description:
        "Developed a Q&A model with Ollama, trained on user data. Features Dockerized deployment and interactive responses using a CSV dataset.",
      bgColor: "#6A994E",
      textColor: "white",
      link: "https://github.com/ambatibhargavi/ollama-deployment",
    },
    {
      title: "Snowflake User Management",
      description:
        "Automated Snowflake user creation with Terraform loops, optimizing for scalability and efficiency.",
      bgColor: "#D8BFD8",
      textColor: "black",
      link: "https://github.com/ambatibhargavi/terraformloops",
    },
    {
      title: "Interactive Chatbot",
      description:
        "Built using Llama 2 and Streamlit, integrated with Replicate API. Customizable response parameters and open-source flexibility.",
      bgColor: "#BC4749",
      textColor: "white",
      link: "https://github.com/ambatibhargavi/chatbot",
    },
    {
      title: "Netflix Clone",
      description:
        "Created a Netflix-like microservices-based application with SonarQube integration for code quality checks.",
      bgColor: "#A7C957",
      textColor: "black",
      link: "https://github.com/ambatibhargavi/Clone-Services",
    },
  ];

  return (
    <animated.div className="grid grid-cols-1 lg:grid-cols-9 lg:grid-rows-9 w-screen lg:h-screen p-5 gap-5 bg-stone-200">
      {/* Header Section */}
      <animated.div
        style={animatedStyles}
        onClick={() => setCurrentGrid(GRIDS[0])}
        className="row-start-1 lg:col-span-3 lg:row-span-3"
      >
        <animated.div
          style={trails[0]}
          className="w-full h-full p-10 bg-[#386641] border border-black flex flex-col items-center justify-center gap-3"
        >
          <div className="border border-neutral-900 bg-[#F2E8CF] w-fit px-5 py-3">
            <span className="text-5xl font-bold text-[#BC4749]">
              {name.slice(0, nameIdx).join("")}
              <span className="inline-block mx-2 w-6 h-1 bg-[#2A9D8F] animate-pulse"></span>
            </span>
          </div>
          <div className="border text-center border-neutral-900 bg-[#F2E8CF] w-fit px-5 py-2">
            <span className="lg:text-md text-[#BC4749]">
              {subheading.slice(0, subheadingIdx).join("")}
              <span className="inline-block w-3 h-0.5 mx-1 bg-[#2A9D8F] animate-pulse"></span>
            </span>
          </div>
        </animated.div>
      </animated.div>

      {/* Project Sections */}
      {projects.map((project, index) => (
        <animated.div
          key={index}
          style={animatedStyles}
          className={`lg:col-span-3 lg:row-span-3`}
        >
          <animated.div
            style={trails[index + 1]}
            className={`w-full h-full relative bg-[${project.bgColor}] border border-black flex items-center justify-center`}
          >
            <p
              className={`text-center text-${project.textColor} text-lg px-5`}
            >
              {project.description}
            </p>
            <div className="flex justify-center items-center w-full h-full">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2 bg-yellow-500 text-${project.textColor} rounded-md shadow-md hover:bg-yellow-600 hover:shadow-lg transition-all`}
              >
                View Project
              </a>
            </div>
          </animated.div>
        </animated.div>
      ))}
    </animated.div>
  );
}
