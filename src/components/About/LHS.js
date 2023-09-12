import Image from "next/image";
import React from "react";

export default function LHS({ data }) {
  return (
    <>
      <div class="row">
        <div class="col-md-6">
          <div class="left_img">
            <div class="slide">
              <Image
                title={data?.image}
                height={500}
                width={500}
                src={data?.image}
                blurDataURL="/images/blurImage.webp"
                placeholder="blur"
                class="img-fluid"
                alt={data?.title}
              />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="right_text">
            <p>{data?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
