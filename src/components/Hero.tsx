import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
const Hero = () => {
  return (
    <Fragment>
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center text-color text-4xl font-extrabold sm:text-6xl lg:text-8xl py-4">
          Find Your Dream Job
          <span className="flex items-center gap-2 sm:gap-6">
            and get hired
            <img
              src="/logo.png"
              alt="logo image"
              className="h-14 sm:h-24 lg:h-32"
            />
          </span>
        </h1>
        <p className="text-color sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        {/* Buttons */}
        <Link to="/jobs">
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to="/post-job">
          <Button variant="destructive" size="xl">
            Post a Job
          </Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Hero;
