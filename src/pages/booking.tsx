import React, { useEffect, useState } from "react";
export default function Booking() {
  const [discount, setDiscount] = useState(0);
  const path = new Location().search;

  useEffect(() => {
    if (path) {
      const promo_code = path.match(/promo_code=\d{1,3}/gi);
      if (promo_code) {
        setDiscount(parseInt(promo_code[0].split("=")[1]));
      }
    }
  }, []);
  <DiscountProvider initVal={discount}>
    <SearchProvider>
      <RoomProvider>
        <div className="app">
          <Headers />
          <Search />
          <div className="container">
            <div className="row">
              <main className="col-md-8">{children}</main>
              <aside className="col-md-4">
                <section className="mb-4">
                  <img src="/images/coco-drink.png" width="300" alt="" />
                  <h2 className="text-uppercase font-weight-bold">
                    TODAY ONLY: 10% OFF
                  </h2>
                  <p>
                    Book <span className="text-underline">today</span> and get
                    an exclusive <strong>10% discount</strong> on your stay.
                  </p>
                  <button className="btn btn-primary text-uppercase">
                    Enjoy
                  </button>
                </section>
                <Reservation />
              </aside>
            </div>
          </div>
          <Footer />
        </div>
      </RoomProvider>
    </SearchProvider>
  </DiscountProvider>;
}