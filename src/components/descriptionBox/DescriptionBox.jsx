import React from "react";
import './DescriptionBox.css'
import { Link } from "react-router-dom";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade"><Link to={'/reviews'}>Reviews </Link></div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          voluptatem, reprehenderit eum expedita repellendus laborum quo
          doloremque ipsum consectetur optio ducimus molestiae itaque deleniti
          rem, dignissimos eaque? Autem temporibus inventore fugiat modi ad
          explicabo distinctio repudiandae sed ipsum natus id, non repellat ex,
        
       
        </p>
        <p> 
        quidem est, similique sit quasi nesciunt cumque velit sint molestias
          saepe asperiores. Itaque pariatur nemo labore, quibusdam ea assumenda
          explicabo ratione accusamus debitis, inventore eligendi. Voluptas quis
          nulla vitae culpa nihil ratione numquam sapiente maxime deserunt
          aperiam.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
