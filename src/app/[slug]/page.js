import React from "react";

export default function page({ params }) {
  return <div>page:{decodeURIComponent(params.slug)}</div>;
}
