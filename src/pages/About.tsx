
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About EduPlatform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to make quality education accessible to everyone, everywhere. 
            Our platform connects passionate learners with expert instructors from around the world.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <Target className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                To democratize education by providing affordable, high-quality online courses 
                that empower individuals to learn new skills, advance their careers, and 
                pursue their passions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Globe className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                To create a world where learning has no boundaries, where anyone can access 
                the knowledge they need to transform their lives and contribute meaningfully 
                to society.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="bg-primary/5 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">5,000+</h3>
              <p className="text-gray-600">Courses Available</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">100K+</h3>
              <p className="text-gray-600">Active Students</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
              <p className="text-gray-600">Expert Instructors</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
              <p className="text-gray-600">Countries Served</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Education should be available to everyone, regardless of their 
                  background, location, or financial situation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We maintain the highest standards in course content, instruction, 
                  and learning experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We continuously evolve our platform using the latest technology 
                  to enhance the learning experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Story */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              Founded in 2020, EduPlatform was born out of a simple belief: that everyone 
              deserves access to quality education. Our founders, a group of educators and 
              technologists, recognized the growing need for flexible, affordable learning 
              solutions in an increasingly digital world.
            </p>
            <p className="mb-4">
              What started as a small platform with just 50 courses has grown into a 
              comprehensive learning ecosystem serving students worldwide. We've partnered 
              with industry experts, academic institutions, and leading professionals to 
              create courses that are both practical and transformative.
            </p>
            <p>
              Today, we're proud to be a trusted partner in the learning journeys of 
              hundreds of thousands of students, helping them acquire new skills, 
              change careers, and achieve their personal and professional goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
