
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Users, Award, Play, Star, ArrowRight } from "lucide-react";
import CourseCard from "@/components/CourseCard";

const featuredCourses = [
  {
    id: 1,
    title: "Complete React Development Course",
    instructor: "Sarah Johnson",
    image: "/placeholder.svg",
    rating: 4.8,
    students: 15420,
    price: 89.99,
    category: "Web Development"
  },
  {
    id: 2,
    title: "Python Data Science Masterclass",
    instructor: "Dr. Michael Chen",
    image: "/placeholder.svg",
    rating: 4.9,
    students: 12350,
    price: 129.99,
    category: "Data Science"
  },
  {
    id: 3,
    title: "Digital Marketing Strategy 2024",
    instructor: "Emily Rodriguez",
    image: "/placeholder.svg",
    rating: 4.7,
    students: 8900,
    price: 79.99,
    category: "Marketing"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Learn Without
              <span className="text-primary block">Limits</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover thousands of courses from expert instructors. Build skills that matter in today's digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link to="/courses">
                  Browse Courses <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">5,000+</h3>
              <p className="text-gray-600">Quality Courses</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">100K+</h3>
              <p className="text-gray-600">Active Students</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-600">Expert Instructors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600">
              Start learning with our most popular courses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose EduPlatform?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Expert Instructors</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn from industry professionals with years of real-world experience.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Play className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Flexible Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Study at your own pace with lifetime access to course materials.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Certificates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Earn recognized certificates upon successful course completion.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students already learning on EduPlatform
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Link to="/courses">Start Learning Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
