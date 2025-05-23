import CompaniesSlider from "@/components/CompaniesSlider";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Landing = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <Hero />
      <CompaniesSlider />
      <img src="/banner.jpeg" alt="banner image" className="w-full" />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Search and apply for jobs, track application, and more.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post job, manage applications, and find the best candidate
          </CardContent>
        </Card>
      </section>
      <HowItWorks />
    </main>
  );
};

export default Landing;
