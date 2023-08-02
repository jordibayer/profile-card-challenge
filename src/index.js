import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  const skills = [
    {
      name: "HTML+CSS",
      level: "beginner",
      bgColor: "red",
    },
    {
      name: "JavaScript",
      level: "advanced",
      bgColor: "blue",
    },
    {
      name: "Web Design",
      level: "intermediate",
      bgColor: "green",
    },
    {
      name: "React",
      level: "advanced",
      bgColor: "#60DAFB",
    },
  ];
  return (
    <div className="card">
      <Avatar
        className="avatar"
        avatarUrl="https://gravatar.com/avatar/122bdc9970b77a9064644b54035f2768?s=400&d=robohash&r=x"
      />
      <div className="data">
        <Intro
          name="Foo bar"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet eleifend massa. Pellentesque neque turpis, pulvinar at consequat et, aliquet eget lorem. Nam et venenatis metus."
        />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList skills={skills} />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div>
      <img
        src={props.avatarUrl}
        alt="Avatar"
      />
    </div>
  );
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <body>{props.description}</body>
    </div>
  );
}

function SkillList(props) {
  const levelEmoji = {
    beginner: "👶",
    intermediate: "💪",
    advanced: "🙏",
  };
  return (
    <div className="skill-list">
      {props.skills.map((skill, index) => (
        <span
          className="skill"
          style={{ backgroundColor: skill.bgColor }}>
          {skill.name} {levelEmoji[skill.level]}
        </span>
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
