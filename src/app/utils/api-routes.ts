const baseRoute = `${process.env.NEXT_PUBLIC_DOMAIN}/api`;
console.log("Domain",process.env.NEXT_PUBLIC_DOMAIN)
// const baseRoute = `http://localhost:3000/api`;

// const baseRoute = `http://localhost:3000/api`;
// export const USER_API_ROUTES = {
//   SIGNUP: "/auth/signup",
//   LOGIN: "/auth/login",
//   ME: "/auth/me",
//   TRIPDATA: "/trips",
//   FLIGHT_SCRAPE: "/flights/scrape",
//   FLIGHT_SCRAPE_STATUS: "/flights/scrape-status",
//   HOTELS_SCRAPE: "/hotels/scrape",
//   HOTELS_SCRAPE_STATUS: "/hotels/scrape-status",
//   GET_ALL_TRIPS: "/all-trips",
//   GET_ALL_HOTELS: "/all-hotels",
//   GET_UNIQUE_TRIP_CITIES: "/home/unique-cities",
//   GET_CITY_HOTELS: "/home/city-hotels",
//   GET_CITY_TRIPS: "/city-trips",
//   CREATE_BOOKING: "/booking",
//   GET_USER_BOOKINGS: "/booking/get-bookings",
//   GET_ALL_BOOKINGS: "/booking",
// };

export const ADMIN_API_ROUTES = {
  LOGIN: `${baseRoute}/admin/login`,
  DASHBOARD_SCRAPING_CHAT_DATA: `${baseRoute}/admin/dashboard/scraping-chart-data `,
  DASHBOARD_METRICS: `${baseRoute}/admin/dashboard/metrics `,

  CREATE_JOB: `${baseRoute}/admin/create-job`,
  JOB_DETAILS: `${baseRoute}/admin/job-details`,
  // CREATE_JOB: `http://localhost:3000/api/admin/create-job`,
  // JOB_DETAILS: `http://localhost:3000/api/admin/job-details`,
};
