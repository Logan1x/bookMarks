import { LinkPreview } from "@dhaiwat10/react-link-preview";

const Home = () => {
  const arr = [
    "https://web.dev/",
    "https://www.grammarly.com/blog/category/how-to/",
    "https://developer.mozilla.org/en-US/",
    "https://themakersclub.vercel.app/resources",
    "https://yeun.github.io/open-color/",
    "https://graphics.reuters.com/",
    "https://courses.kevinpowell.co/courses/conquering-responsive-layouts",
    "https://boringavatars.com/",
    "https://indiainvestments.gitbook.io/content/stocks/reading-an-annual-report",
    "https://www.evernote.design/",
    "https://readme.so/editor",
    "https://neverinstall.com/",
    "https://developers.google.com/tech-writing",
    "https://www.figma.com/figjam/",
    "https://allcontributors.org/",
    "https://covid-vaccine-finder.netlify.app/",
    "https://wordize.netlify.app/",
    "https://www.fontsinthewild.com/"
  ];
  return (
    <section>
      <div className="flexy">
        {arr.map((item) => (
          <LinkPreview
            url={item}
            descriptionLength="25"
            className="mar-x"
            height="260px"
            width="250px"
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
