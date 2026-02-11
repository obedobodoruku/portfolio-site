import React from 'react';

const Projects = () => {
    return (
        <div>

            <section id="projects">
                <div className='mx-10'>
                    <div>
                        <h1 className='text-center text-5xl font-bold my-7'>Projects</h1>
                    </div>

                    <div>
                        <div className='my-10'>
                            <img className='w-full h-[350px] rounded-xl' src="portfolio-project/src/assets/todoapp-ateg.onrender.com_account.png" />
                        </div>
                        <h2 className='text-2xl font-bold'>Todo List App - A full-stack web application for managing tasks with secure user authentication.</h2>
                        
                        <div>
                            <p>A productivity-focused web app where users can sign up, log in and manage their daily tasks. Users can create, update and delete tasks securely</p>
                        </div>

                        <div className='mx-5 my-3'>
                            <span className='text-2xl font-bold'>Features: </span>
                            <ul>
                                <li>User authentication (signup, login, logout)</li>
                                <li>CRUD operations for tasks (Create, Read, Update, Delete)</li>
                                <li>Tasks are stored in a database and tied to each user</li>
                                <li>Responsive design for desktop and mobile</li>
                            </ul>
                        </div>

                        <div className='mx-5 my-3'>
                            <h4 className='text-xl font-bold'>Tech Stack:</h4>
                            <p>Frontend: HTML, CSS, Bootstrap</p>
                            <p>Backend: Flask, SQLALchemy</p>
                            <p>Database: SQLite</p>
                            <p>Other Tools: Flask-Login</p>
                        </div>

                        <div>
                            <p className='font-bold'>Live Demo: <a className='hover:underline' href="https://todoapp-ateg.onrender.com/">https://todoapp-ateg.onrender.com/</a></p>
                        </div>
                        <div>
                            <p className='font-bold'>GitHub Repo: </p>
                        </div>
                    </div>

                    <div className="mt-[100px]">
                        <div className='my-10'>
                            <img className='w-full h-[350px] rounded-xl' src="portfolio-project/src/assets/flask-x-clone-2.onrender.com_.png" />
                        </div>
                        <h1 className="text-3xl font-bold">Social Platform Website</h1>
                        <div>
                            <p>A social platform where users can post, reply and interact while maintaining ownership of their content</p>
                        </div>

                        <div className='mx-5 my-3'>
                            <p className="text-2xl font-bold">Features: </p>
                            <ul>
                                <li>Secure authentication and authorization</li>
                                <li>Create, edit, delete posts (only by post owner)</li>
                                <li>Reply to posts</li>
                                <li>Dynamic timeline displaying all posts</li>
                            </ul>
                        </div>

                        <div className='mx-5 my-3'>
                            <span className='text-xl font-bold'>Tech Stack: </span>
                            <p>HTML, Tailwind CSS, Flask, SQLAlchemy, SQLite</p>
                        </div>
                        <div>
                            <p><span className='font-bold'>GitHub: </span><a href="https://github.com/obedobodoruku/flask-x-clone"></a>https://github.com/obedobodoruku/flask-x-clone</p>
                            <p><span className='font-bold'>Live Demo: </span><a href="https://flask-x-clone-2.onrender.com/">https://flask-x-clone-2.onrender.com/</a></p>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    );
};

export default Projects;