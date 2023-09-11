import Image from "next/image";
import React from "react";

export default function RHS({ data }) {
  return (
    <>
      <div class="row">
        <div class="col-md-6">
          <div class="right_text">
            <p>{data?.description}</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="left_img">
            <div class="slide">
              <Image
                height={500}
                width={500}
                blurDataURL={data?.image}
                placeholder="blur"
                src={data?.image}
                class="img-fluid"
                alt={data?.title}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
