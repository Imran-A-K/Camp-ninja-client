import React from 'react'
import { FaCalendarAlt, FaComments, FaUser } from 'react-icons/fa'

const Blog = () => {
    const blog = [
        {
          id: 1,
          type: "admin",
          date: "JAN. 18, 2023",
          com: "5 COMMENTS ",
          title: "The Mental Edge: How Sports Enhance Cognitive Skills in Kids",
          desc: "Engaging in sports not only benefits kids physically but also provides them with a mental edge....",
          cover: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        },
        {
          id: 2,
          type: "admin",
          date: "Feb. 25, 2023",
          com: "8 COMMENTS ",
          title: "Beyond the Game: How Sports Teach Life Skills to Kids",
          desc: "While the physical aspects of sports are visible, the hidden lessons learned through athletic participation....",
          cover: "https://images.unsplash.com/photo-1609422644211-a85c36ee36a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        },
        {
          id: 3,
          type: "Instructor",
          date: "MAY. 23, 2023",
          com: "10 COMMENTS ",
          title: "From Teamwork to Leadership: The Powerful Impact of Sports on Kids",
          desc: "Through team-based activities, children learn the significance of collaboration, cooperation, and effective communication....",
          cover: "https://images.unsplash.com/photo-1518842023089-50e9ac314ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80",
        }
      ]
  return (
    <div className='max-w-[1300px] mx-auto max-sm:px-5'>
        <section className=''>
        <div className=''>
          {/* <Heading subtitle='OUR BLOG' title='Recent From Blog' /> */}
          <div className='grid gap-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            {blog.map((val) => (
              <div key={blog.id} className='shadow-sm bg-white'>
                <div className=''>
                  <img className='h-[210px] max-sm:h-auto max-sm:w-full' src={val.cover} alt='' />
                </div>
                <div className=''>
                  <div className='flex items-center justify-between'>
                    <span>
                      <FaUser />
                      <label htmlFor=''>{val.type}</label>
                    </span>
                    <span>
                      <FaCalendarAlt />
                      <label htmlFor=''>{val.date}</label>
                    </span>
                    <span>
                      <FaComments />
                      <label htmlFor=''>{val.com}</label>
                    </span>
                  </div>
                  <h1>{val.title}</h1>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog