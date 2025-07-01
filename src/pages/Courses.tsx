
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import CourseCard from "@/components/CourseCard";

const allCourses = [
  {
    id: 1,
    title: "Complete React Development Course",
    instructor: "Sarah Johnson",
    image: "/placeholder.svg",
    rating: 4.8,
    students: 15420,
    price: 89.99,
    category: "Web Development",
    duration: "40 hours"
  },
  {
    id: 2,
    title: "Python Data Science Masterclass",
    instructor: "Dr. Michael Chen",
    image: "/placeholder.svg",
    rating: 4.9,
    students: 12350,
    price: 129.99,
    category: "Data Science",
    duration: "60 hours"
  },
  {
    id: 3,
    title: "Digital Marketing Strategy 2024",
    instructor: "Emily Rodriguez",
    image: "/placeholder.svg",
    rating: 4.7,
    students: 8900,
    price: 79.99,
    category: "Marketing",
    duration: "25 hours"
  },
  {
    id: 4,
    title: "Machine Learning with Python",
    instructor: "Alex Thompson",
    image: "/placeholder.svg",
    rating: 4.6,
    students: 7200,
    price: 149.99,
    category: "Data Science",
    duration: "80 hours"
  },
  {
    id: 5,
    title: "UI/UX Design Fundamentals",
    instructor: "Jessica Lee",
    image: "/placeholder.svg",
    rating: 4.8,
    students: 9500,
    price: 99.99,
    category: "Design",
    duration: "35 hours"
  },
  {
    id: 6,
    title: "Node.js Backend Development",
    instructor: "David Park",
    image: "/placeholder.svg",
    rating: 4.7,
    students: 6800,
    price: 119.99,
    category: "Web Development",
    duration: "50 hours"
  }
];

const categories = ["All", "Web Development", "Data Science", "Marketing", "Design"];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredCourses, setFilteredCourses] = useState(allCourses);

  const handleSearch = () => {
    let filtered = allCourses;

    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    setFilteredCourses(filtered);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    let filtered = allCourses;

    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category !== "All") {
      filtered = filtered.filter(course => course.category === category);
    }

    setFilteredCourses(filtered);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            All Courses
          </h1>
          <p className="text-xl text-gray-600">
            Discover our comprehensive collection of courses
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search courses or instructors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <Button onClick={handleSearch} className="px-6">
              <Filter className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="cursor-pointer px-4 py-2 text-sm"
                onClick={() => handleCategoryFilter(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No courses found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
