import React, { useRef } from 'react';
import './database.css'
import Banner from '../../service/Banner'
import Getin from '../../service/Getin'

export default function Database() {


    const getinRef = useRef(null);

    const scrollToGetin = () => {
      if (getinRef.current) {
        getinRef.current.scrollIntoView({ behavior: 'smooth' });
  
      }
    };



  return (
    <>
      <Banner 
      heading="Database Solutions: MySQL and MongoDB " 
      desc="Welcome to our website development services! As part of our comprehensive offerings, we provide expertise in database solutions, including MySQL and MongoDB. In this section, we offer an overview of MySQL and MongoDB, their features, and how they can address your data storage and management needs."
      button="Get Started"
      scrollToGetin={scrollToGetin} 
      />  

    <div className="database">
        <div className="container">
          <h2>What is MySQL?</h2>
          <div className="custom-hr">
            <hr />
          </div>
          <div className="row data-text">
            <div className="col-lg-8">
              <p>MySQL is a popular open-source relational database management system (RDBMS) known for its reliability, performance, and ease of use. It is widely used in various applications, from small-scale websites to large enterprise systems.</p>
            </div>
            <div className="col-lg-4">
              <img className='data-img' src="./image/database/image 120.png" alt="" />
            </div>
          </div>
          
          <h2>key features of MySQL</h2>
          <div className="custom-hr">
              <hr />
          </div>
          <div className="row">
            <div className="col-lg-2 my-3"></div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Relational Database</h5>
                <p> MySQL follows the relational database model, allowing you to define tables, relationships, and constraints to organize and store your data efficiently.
                </p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Scalability</h5>
                <p>MySQL is designed to scale horizontally and vertically, enabling you to handle increasing volumes of data and user traffic as your application grows.
                </p>
              </div>
            </div>
            <div className="col-lg-2 my-3"></div>
          </div>
          <div className="row">
            <div className="col-lg-2 my-3"></div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>High Performance</h5>
                <p>  MySQL offers excellent performance for read and write operations, with features like indexing, caching, and query optimization to ensure fast and efficient data retrieval.    
                </p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Data Security</h5>
                <p>MySQL provides robust security features, including user authentication, access control, encryption, and auditing, to protect your data from unauthorized access and breaches.
                </p>
              </div>
            </div>
            <div className="col-lg-2 my-3"></div>
          </div>
        </div>
        
    </div>



    <div ref={getinRef}>
      <Getin 
        title1="Optimize Your Business with Leading  "
        title2=" Database Firm"
      />
    </div>


    <div className="database mongo">
        <div className="container">
          <h2>Why Choose mongoDB ?</h2>
          <div className="custom-hr">
            <hr />
          </div>
          <div className="row data-text">
            <div className="col-lg-8">
              <p>MongoDB is the ideal choice for its flexible schema design, allowing seamless adaptation to evolving data requirements. Its scalability ensures effortless handling of growing datasets, while its high-performance features guarantee efficient data processing, making it the perfect fit for modern, data-driven applications.</p>
            </div>
            <div className="col-lg-4">
              <img className='data-img' src="./image/database/image 119.png" alt="" />
            </div>
          </div>
          
          <h2>key features of MongoDB</h2>
          <div className="custom-hr">
              <hr />
          </div>
          <div className="row">
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Document-Oriented</h5>
                <p> MongoDB stores data in flexible JSON-like documents, allowing you to represent complex hierarchical data structures easily.
                </p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Scalability</h5>
                <p>MongoDB is designed for horizontal scalability, with features like sharding and replica sets to distribute data across multiple servers and handle large volumes of data and user requests.
                </p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>High Performance</h5>
                <p>MongoDB offers high-performance read and write operations, with features like indexing, aggregation pipelines, and in-memory storage to optimize query performance.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 my-3"></div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Schema Flexibility</h5>
                <p>  MongoDB's schemaless design allows you to evolve your data model over time without the need for schema migrations, making it ideal for agile development and iterative changes.    
                </p>
              </div>
            </div>
            <div className="col-lg-4 my-3">
              <div className="box">
                <h5>Built-in Replication and Fault Tolerance</h5>
                <p>MongoDB includes built-in replication and fault tolerance mechanisms, ensuring data availability and durability even in the event of hardware failures or network issues.
                </p>
              </div>
            </div>
            <div className="col-lg-2 my-3"></div>
          </div>
        </div>
        <center><button onClick={scrollToGetin}>Share Your Project with Us for Discussion</button></center>
    </div>


    <div className="choos-database">
      <div className="container">
        <h2>Choosing the Right Database Solution</h2>
        <div className="custom-hr">
          <hr />
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Use MySQL if: <span>You need a reliable and scalable relational database for structured data storage, transactional applications, and data integrity enforcement.</span></h5>
        </div>
        <div className="chek">
          <img src="./image/webdevlopment/check-mark 1.png" alt="" />
          <h5 className='mb-3'> Use MongoDB if: <span>You need a flexible and scalable NoSQL database for handling unstructured or semi-structured data, rapid development, and horizontal scalability.</span></h5>
        </div>
        

      </div>
    </div>


    </>
  )
}
