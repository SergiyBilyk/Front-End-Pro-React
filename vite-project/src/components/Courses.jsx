import courses from "./data/DataCourses";
import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string'
import { useState, useEffect } from "react";

const sortKeys=['id', 'slug', 'title']

const sortCourses = (courses, key) => {
  const sortedCourses = [...courses];
  if(!key || !sortKeys.includes(key)) {
    return sortedCourses;
  }
  sortedCourses.sort((a,b) => (a[key] > b[key] ? 1 : -1))
  return sortedCourses
};



const Courses = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCourses, setSortedCourses] = useState(sortCourses(courses, sortKey));
  const navigate = useNavigate()
  
  useEffect(() => {
    if(!sortKeys.includes(sortKey)){
      navigate('.')
      setSortKey(undefined)
    }
  }, [sortKey, navigate]);
  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
      {sortedCourses.map((course) => (
        <div key={course.id}>
          <Link to={course.slug}>{course.title}</Link>
        </div>
      ))}
    </>
  );
};

export default Courses;
