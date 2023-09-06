import {useNavigate, useParams} from 'react-router-dom'
import courses from "./data/DataCourses";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const SingleCours = () => {
    const params = useParams()
    const navigate = useNavigate();
    const cours = courses.find((cours) => cours.slug === params.slug)

    useEffect(() => {
        if(!cours) {
            navigate('..', {relative:'path'})
        }
    },[cours])
  return (
    <>
      <h2>{cours?.title}</h2>
      <h3>{cours?.slug}</h3>
      <Link to=".." relative='path'>All courses</Link>
    </>
  );
}

export default SingleCours