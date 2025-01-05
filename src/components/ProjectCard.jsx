import { Link } from "react-router-dom";

const ProjectCard = ({
  id,
  imgSrc,
  title,
  tags,
  projectLink,
  githubLink,
  classes,
}) => {
  return (
    <Link
      to={`/project/${id}`}
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " +
        classes
      }
    >
      <figure className="img-box aspect-square rounded-lg mb-4 w-full h-[250px]">
        <img
          src={imgSrc}
          alt={title}
          className="img-cover object-contain"
          loading="lazy"
        />
      </figure>
      <div className="flex flex-col items-center justify-between gap-3">
        <h3 className="title-1">{title}</h3>
        <div className="flex flex-wrap  items-center gap-2 ">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 justfify-end">
          {projectLink && (
            <a
              target="_blank"
              href={projectLink}
              className="size-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0"
            >
              <span className="material-symbols-rounded" aria-hidden="true">
                arrow_outward
              </span>
            </a>
          )}
          <a
            target="_blank"
            href={githubLink}
            className="size-11 rounded-lg grid place-items-center bg-zinc-700 shrink-0"
          >
            <img src="/github.svg" alt="Github" width={24} height={24} />
          </a>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
