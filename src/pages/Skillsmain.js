// src/pages/SkillsList.js
import React from "react";
import Skill from "../components/Skill";
import "../assets/style/skill.css";
import { FaReact, FaBusinessTime } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiCss3Full } from "react-icons/di";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdHeadsetMic } from "react-icons/md";
import { GiConversation } from "react-icons/gi";

export const skills = [
  {
    title: "JavaScript",
    description: "Kỹ năng lập trình JavaScript.",
    type: "hard",
    percentage: 60,
    imgUrl: <IoLogoJavascript />,
  },
  {
    title: "React",
    description: "Kỹ năng phát triển ứng dụng với React.",
    type: "hard",
    percentage: 20,
    imgUrl: <FaReact />,
  },
  {
    title: "CSS",
    description: "Kỹ năng thiết kế giao diện với CSS.",
    type: "hard",
    percentage: 60,
    imgUrl: <DiCss3Full />,
  },
  {
    title: "Time Management",
    description: "Kỹ năng quản lý thời gian và phân bổ theo cấp độ ưu tiên",
    type: "soft",
    percentage: 60,
    imgUrl: <FaBusinessTime />,
  },
  {
    title: "Group Working",
    description: "Làm việc nhóm và cùng nhau tạo ra kết quả",
    type: "soft",
    percentage: 75,
    imgUrl: <FaPeopleGroup />,
  },
  {
    title: "Leader",
    description: "Quản lý và đánh giá các cá nhân của team một cách phù hợp",
    type: "soft",
    percentage: 75,
    imgUrl: <MdHeadsetMic />,
  },
  {
    title: "Conversation",
    description: "Giao tiếp với mọi người, thảo luận và giải quyết vấn đề",
    type: "soft",
    percentage: 101,
    imgUrl: <GiConversation />,
  },
];

const SkillsListmain = () => {
  const hardSkills = skills.filter((skill) => skill.type === "hard");
  const softSkills = skills.filter((skill) => skill.type === "soft");
  return (
    <div className="skills-list">
      <h1>My Major Skills</h1>
      <div className="skills-container">
        {hardSkills.map((skill, index) => (
          <Skill
            key={index}
            title={skill.title}
            description={skill.description}
            type={skill.type}
            percentage={skill.percentage}
            imgUrl={skill.imgUrl}
          />
        ))}
      </div>
      <h1>My Soft skills</h1>
      <div className="skills-container">
        {softSkills.map((skill, index) => (
          <Skill
            key={index}
            title={skill.title}
            description={skill.description}
            percentage={skill.percentage}
            imgUrl={skill.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsListmain;
