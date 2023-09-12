import Image from "next/image";
import React from "react";

export default function RHS({ data }) {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="right_text">
            <p>{data?.description}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="left_img">
            <div className="slide">
              <Image
                title={data?.image}
                height={500}
                width={500}
                blurDataURL="/images/blurImage.webp"
                placeholder="blur"
                src={data?.image}
                className="img-fluid"
                alt={data?.title}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
