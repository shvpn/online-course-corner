
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface Course {
  id: number;
  title: string;
  instructor: string;
  image: string;
  rating: number;
  students: number;
  price: number;
  category: string;
  duration?: string;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-3 left-3" variant="secondary">
          {course.category}
        </Badge>
      </div>
      
      <CardHeader className="flex-1">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{course.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{course.students.toLocaleString()}</span>
          </div>
          {course.duration && (
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
          )}
        </div>
        
        <h3 className="font-semibold text-lg leading-tight mb-2 line-clamp-2">
          {course.title}
        </h3>
        
        <p className="text-muted-foreground text-sm">
          by {course.instructor}
        </p>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            ${course.price}
          </span>
          <Button asChild>
            <Link to={`/courses/${course.id}`}>
              View Course
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
