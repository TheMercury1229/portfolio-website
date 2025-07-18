import React from "react";

const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div
      className={
        "flex flex-col sm:flex-row items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group " +
        classes
      }
    >
      <figure className="bg-zinc-700/50 rounded-lg overflow-hidden size-12 p-2 group-hover:bg-zinc-900 transition-colors">
        <img src={imgSrc} alt={label} width={32} height={32} />
      </figure>
      <div className="text-center sm:text-left">
        <h3>{label}</h3>
        <p className="text-zinc-400 text-sm hidden sm:block">{desc}</p>
      </div>
    </div>
  );
};

export default SkillCard;
