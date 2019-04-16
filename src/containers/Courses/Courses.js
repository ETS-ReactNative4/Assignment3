import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import './Courses.css';
import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses"> {
                        this.state.courses.map( course => {
                            return (
                                    <div key={course.id}>
                                        <Link 
                                            to={{
                                                pathname: this.props.match.url + "/course/"+course.id+"/"+course.title
                                              }}>
                                            <article className="Cours" >
                                                {course.title}
                                            </article>
                                        </Link>
                                    </div>
                               )
                        } )
                    }
                </section>
                <Switch>
                    <Redirect from="/courses/course/:id/:title" to="/courses" />
                    <Route path={this.props.match.url + "/course/:id/:title"} exact component={Course}/>
                </Switch>
            </div>
        );
    }
}

export default Courses;