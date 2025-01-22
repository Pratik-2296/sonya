
// import React from "react";
// import { motion } from "framer-motion";

// const AnimatedCard = () => {
//   return (
//     <motion.div 
//       className="card"
//       style={{ width: "18rem" }}
//       whileHover={{ scale: 1.05 }}
//       transition={{ duration: 0.3 }}
//     >
//       <img
//         src="/design.png"
        
//         alt="Card example" style={{ height: '100%', width: '100%'}}
//       />
//       <div className="card-body">
//         <h5 className="card-title">Card Title</h5>
//         <p className="card-text">
//           Some quick example text to build on the card title and make up the bulk of the card's content.
//         </p>
//         <a href="https://example.com" className="btn btn-primary">
//           Go somewhere
//         </a>
//       </div>
//     </motion.div>
//   );
// };

// export default AnimatedCard;


import React from "react";
import { motion } from "framer-motion";

const AnimatedCard = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row">
        {/* First Card */}
        <div className="col-md-4 mt-3 p-4">
          <motion.div
            className="card"
            style={{ width: "18rem" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/design.png"
              alt="Card example"
              style={{ height: "100%", width: "100%" }}
            />
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <a href="https://example.com" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </motion.div>
        </div>

        {/* Second Card */}
        <div className="col-md-4 mt-3 p-4">
          <motion.div
            className="card"
            style={{ width: "18rem" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/design.png"
              alt="Card example"
              style={{ height: "100%", width: "100%" }}
            />
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <a href="https://example.com" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </motion.div>
        </div>

        {/* Third Card */}
        <div className="col-md-4 mt-3 p-4">
          <motion.div
            className="card"
            style={{ width: "18rem" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/design.png"
              alt="Card example"
              style={{ height: "100%", width: "100%" }}
            />
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <a href="https://example.com" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </motion.div>
        </div>

        <div className="col-md-4 p-4">
          <motion.div
            className="card"
            style={{ width: "18rem" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/design.png"
              alt="Card example"
              style={{ height: "100%", width: "100%" }}
            />
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <a href="https://example.com" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </motion.div>
        </div>

        {/* Second Card */}
        <div className="col-md-4  p-4">
          <motion.div
            className="card"
            style={{ width: "18rem" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/design.png"
              alt="Card example"
              style={{ height: "100%", width: "100%" }}
            />
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <a href="https://example.com" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </motion.div>
        </div>

        {/* Third Card */}
        <div className="col-md-4  p-4">
          <motion.div
            className="card"
            style={{ width: "18rem" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/design.png"
              alt="Card example"
              style={{ height: "100%", width: "100%" }}
            />
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <a href="https://example.com" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </motion.div>
        </div>




      </div>
    </div>
  );
};

export default AnimatedCard;
