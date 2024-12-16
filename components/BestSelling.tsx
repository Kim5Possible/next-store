import React from "react";

type Props = {};

const BestSelling = (props: Props) => {
  return (
    <section className="bg-[#202020] py-20 shadow-[0_8px_15px_0px_rgba(0,0,0,0.2)_inset]">
      <div className="container text-center">
        <h1 className="blue-text mb-5">Best selling</h1>
        <p>
          Get in on the trend with our curated selection of best-selling styles.
        </p>
      </div>
    </section>
  );
};

export default BestSelling;
