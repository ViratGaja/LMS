import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import { assets } from '../../assets/assets';

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const { allCourses,calculateRating } = useContext(AppContext);

  const fetchCourseData = async () => {
    if (allCourses && allCourses.length > 0) {
      const findCourse = allCourses.find((course) => course._id === id);
      setCourseData(findCourse || null);
    }
  };

  useEffect(() => {
    fetchCourseData();
  }, [id, allCourses]); // Dependencies ensure the effect runs when `id` or `allCourses` changes.

  if (!courseData) {
    return <div>Loading course details...</div>;
  }

  return courseData ? (
    <>
      <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-8 md:pt-20 text-left">
        <div className="absolute top-0 left-0 w-full h-section-height -z-1 bg-gradient-to-b from-cyan-100/70"></div>

        <div className='max-w-xl z-10 text-grey-500'>
          <h1 className='md:text-course-deatails-heading-large text-course-deatails-heading-large font-semibold text-gray-800'>{courseData.courseTitle}</h1>
          <p className='pt-4 md:txt-base text-sm' dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 200) }}></p>



          <div className='flex items-center space-x-2'>
            <p>{calculateRating(courseData)}</p>
            <div className='flex'>
              {[...Array(5)].map((_, i) => (<img key={i} src={i < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} className='w-3.5 h-3.5' />))}
            </div>
            <p className='text-gray-500'>{courseData.courseRatings.length}</p>
          </div>



        </div>

        <div>
          {/* Add additional details about the course */}
        </div>
      </div>
    </>
  ) : <p>Loading</p>
};

export default CourseDetails;
