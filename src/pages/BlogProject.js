import React from "react";
import "../assets/style/main.css"; // Đảm bảo có style phù hợp

const BlogProject = ({ project }) => {
  return (
    <div className="container">
      <div className="wrapper">
        <h2 className="title">{project.title}</h2>
        <p className="main-content">{project.process}</p>
        {/* Hiển thị thêm thông tin chi tiết nếu cần */}
      </div>
    </div>
  );
};

export default BlogProject;
