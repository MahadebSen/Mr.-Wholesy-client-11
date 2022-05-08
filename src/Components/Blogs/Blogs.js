import React from "react";

const Blogs = () => {
  return (
    <div className="mt-10">
      <div className="m-5 border border-2 rounded-lg py-3 px-5">
        <p className="font-medium text-lg">
          1. When Should you use node.js development? And when should you use
          mongoDB?
        </p>
        <p>
          Due to it's single threaded nature, node.js is primarily used for
          non-blocking, event-driven servers. If you wish to develop a real time
          web application, then node.js is the best choice. You can also use it
          to create a wide range of business solution. <br />{" "}
          <span className="font-extrabold ml-7">#</span> If your data is
          document centric and doesn't fit well into the schema of a relational
          database, then no sql database like mongoDB are a good choice. When
          you need to maintain a massive scale, when you are rapidly
          prototyping, than mongoDB can be a great choice.
        </p>
      </div>
      <div className="m-5 border border-2 rounded-lg py-3 px-5">
        <p className="font-medium text-lg">2. SQL vs. no-SQL </p>
        <ul className="list-disc mx-3">
          <li>
            SQL is a relational database management system. But, no-SQL is a non
            relational or, distributed database system.
          </li>
          <li>
            SQL databases have fixed/ static /predefined schema. But, no-SQL
            databases have dynamic schema.
          </li>
          <li>
            SQL databases are not good for hierarchical data storage. But,
            no-SQL databases are best choice for hierarchical data storage.
          </li>
          <li>
            SQL databases are best for complex queries. But no-SQL databases are
            not good for complex queries.
          </li>
          <li>
            SQL databases are vertically saleable. But no-SQL databases are
            horizontally scalable.
          </li>
        </ul>
      </div>
      <div className="m-5 border border-2 rounded-lg py-3 px-5">
        <p className="font-medium text-lg">
          3. What is the purpose of jwt? And how does it work?
        </p>
        <p>
          JSON web token is an open standard that defines a contempt and
          self-contained way for securely transmitting information between two
          parties as JSON object. <br /> Jwt is a stateless authentication which
          means a system or process that enables its components to decentrally
          verify and introspect tokens.Using jwt you can easily verify whether
          the user is authenticated by simply checking the expiration of the
          payload and the validation of the signature. <br />{" "}
          <span className=" font-extrabold ml-7">#</span> Jwt is a string made
          of three parts which contains 64 alphanumeric character separated by
          dots (.). Once decoded, you will get the JSON string 1. header 2.
          payload 3. signature. a. the header contains the type of the token. b.
          the payload contains the claims. c. the signature ensure that the
          token has not been altered.
        </p>
      </div>
      <div className="m-5 border border-2 rounded-lg py-3 px-5">
        <p className="font-medium text-lg">4. JavaScript vs. Node.js</p>
        <ul className="list-disc mx-3">
          <li>
            JavaScript is programming language. But, Node.js is JavaScript run
            time environment.
          </li>
          <li>
            JavaScript is only run in the browser. And we can run JavaScript on
            server side with the help of node.js
          </li>
          <li>
            It is the upgraded version of ECMA Script that uses chrome's V8
            engine, written in C++. And Node.js is written in C, C++ and
            JavaScript.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
