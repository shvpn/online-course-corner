
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Users, Clock, Play, Download, CheckCircle } from "lucide-react";

// Mock course data - in a real app, this would come from an API
const getCourseById = (id: number) => {
  const courses = {
    1: {
      id: 1,
      title: "Complete React Development Course",
      instructor: "Sarah Johnson",
      image: "/placeholder.svg",
      rating: 4.8,
      students: 15420,
      price: 89.99,
      category: "Web Development",
      duration: "40 hours",
      description: "Master React from basics to advanced concepts. Build real-world projects and learn modern React patterns, hooks, state management, and more.",
      whatYoullLearn: [
        "Build modern React applications from scratch",
        "Master React Hooks and functional components",
        "Implement state management with Context API and Redux",
        "Create responsive and interactive user interfaces",
        "Deploy React applications to production",
        "Work with APIs and handle asynchronous operations"
      ],
      curriculum: [
        { title: "Introduction to React", duration: "2 hours", lessons: 8 },
        { title: "Components and JSX", duration: "3 hours", lessons: 12 },
        { title: "State and Props", duration: "4 hours", lessons: 15 },
        { title: "React Hooks", duration: "5 hours", lessons: 18 },
        { title: "State Management", duration: "6 hours", lessons: 20 },
        { title: "API Integration", duration: "4 hours", lessons: 14 },
        { title: "Testing React Apps", duration: "3 hours", lessons: 10 },
        { title: "Deployment", duration: "2 hours", lessons: 6 }
      ],
      requirements: [
        "Basic knowledge of HTML, CSS, and JavaScript",
        "Familiarity with ES6+ features",
        "A computer with internet connection",
        "Code editor (VS Code recommended)"
      ]
    }
  };
  
  return courses[id as keyof typeof courses];
};

const CourseDetail = () => {
  const { id } = useParams();
  const course = getCourseById(Number(id));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600">The course you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className="mb-8">
              <Badge className="mb-4">{course.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {course.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {course.description}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{course.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mt-4">
                Created by <span className="font-medium">{course.instructor}</span>
              </p>
            </div>

            {/* Course Image */}
            <div className="mb-8">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>What you'll learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {course.whatYoullLearn.map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {course.requirements.map((req, index) => (
                        <li key={index} className="text-sm text-muted-foreground">
                          • {req}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="curriculum">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Content</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {course.curriculum.length} sections • {course.curriculum.reduce((acc, section) => acc + section.lessons, 0)} lectures • {course.duration} total length
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {course.curriculum.map((section, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex justify-between items-center">
                            <h3 className="font-medium">{section.title}</h3>
                            <div className="text-sm text-muted-foreground">
                              {section.lessons} lectures • {section.duration}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Reviews will be displayed here in a real implementation.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    ${course.price}
                  </div>
                  <p className="text-sm text-muted-foreground">One-time payment</p>
                </div>

                <div className="space-y-3 mb-6">
                  <Button className="w-full" size="lg">
                    <Play className="mr-2 h-4 w-4" />
                    Enroll Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Add to Wishlist
                  </Button>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Students:</span>
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Certificate:</span>
                    <span>Yes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Access:</span>
                    <span>Lifetime</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-medium mb-3">This course includes:</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Play className="h-4 w-4" />
                      <span>Video lectures</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      <span>Downloadable resources</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>Certificate of completion</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
