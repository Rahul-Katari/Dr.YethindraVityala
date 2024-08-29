// services/api.js

const API_BASE_URL = "https://admin.sriswasthaentgastro.com"; // Update this with your API base URL
const token = "ZHLfrRGviEICpsueAZIBe74PxYRQ5U1t";
export const googleMapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5586811642925!2d78.357495!3d17.384956299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9573778df145%3A0x2a9c81576b138d0f!2sDr.%20Vijaya%20Lakshmi%20%7C%20Best%20ENT%20Specialist%20In%20Narsingi%2C%20Hyderabad%20%7C%20Sri%20Swastha%20ENT%20and%20Gastro%20Liver%20Clinics%20in%20Narsingi!5e0!3m2!1sen!2sin!4v1723953865896!5m2!1sen!2sin';
export const doctorsList = [
  { name: "Dr. Vijaya lakshmi", value: 1 },
  { name: "Dr. Vijay Kumar", value: 2 },
];
export const specialities = [
  "Ear Treatments",
  "Nose Treatments",
  "Throat Treatments",
  "General ENT Services",
  "Hearing and Speech Services",
  "Conditions",
  "Procedures"
];
export const ASSET_URL = `${API_BASE_URL}/assets/`;

async function fetchAPI(endpoint, method = "GET", body = null, headers = {}) {
  const requestOptions = {
    method: method,
    headers: {
      ...headers,
      "Content-Type": "application/json",
      Authorization: "Bearer " + token, // Update this with your authorization token
    },
    body: body ? JSON.stringify(body) : undefined,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, requestOptions);
    // if (!response.ok) {
    //   throw new Error(response.json());
    // }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}

export async function createEnquiry(data) {
  return await fetchAPI("/items/enquiries", "POST", data);
}
export async function createAppointment(data) {
  return await fetchAPI("/items/appointments", "POST", data);
}

export async function getCareerTransitions() {
  return await fetchAPI("/items/careertransitions?sort=-date_created");
}

export async function getRecruiterTestimonials() {
  return await fetchAPI("/items/Recruiter_Testimonials?sort=-date_created");
}

export async function getsuccessStories() {
  return await fetchAPI("/items/success_stories?sort=-date_created");
}

export async function getblogbyid(id) {
  return await fetchAPI("/items/blogs/" + id);
}

export async function getcareerbyid(id) {
  return await fetchAPI("/items/careers/" + id);
}

export async function getCareers() {
  return await fetchAPI("/items/careers?sort=-date_created");
}

export async function createApplication(data) {
  return await fetchAPI("/items/applications", "POST", data);
}

export async function savefile(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token, // Update this with your authorization token
    },
    body: data, // Pass the FormData directly as the body
  };

  try {
    const response = await fetch(`${API_BASE_URL}/files`, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export async function createNewsletter(data) {
  return await fetchAPI("/items/newsletter", "POST", data);
}
export async function getMenu(type) {
  return await fetchAPI(`/items/${type}`);
}
// export async function getServiceDetails(type, id) {
//   return await fetchAPI(`/items/${type}/${id}`);
// }
export async function getServiceDetails(type, filter = "", limit = "") {
  let queryString = "?sort=-date_created";

  if (filter) {
    queryString += "&filter[slug_name][_eq]=" + filter;
  }

  if (limit) {
    queryString += "&limit=" + limit;
  }

  return await fetchAPI(`/items/${type}` + queryString);
}

export async function getnavcourse() {
  return await fetchAPI(
    "/items/courses?fields[]=course_name&fields[]=course_category&fields[]=url&fields[]=parent_course"
  );
}

export async function getcoursedata(id) {
  return await fetchAPI("/items/courses?filter[url][_eq]=" + id);
}

export async function getcoursetechnology(data) {
  return await fetchAPI(
    `/items/courses_technologies_2?filter={ "id": { "_in":[${data}] }}`
  );
}

export async function gettechnology(data) {
  return await fetchAPI(
    `/items/technologies?filter={ "id": { "_in":[${data}] }}`
  );
}

export async function getCourseTestimonials(data) {
  return await fetchAPI(
    `/items/course_testimonials?filter={ "id": { "_in":[${data}] }}`
  );
}

export async function getCourses_Testimonials(data) {
  return await fetchAPI(
    `/items/courses_testimonials?filter={ "id": { "_in":[${data}] }}`
  );
}

export async function getfeaturedstory() {
  return await fetchAPI("/items/featured_story/1");
}

export async function getlocations() {
  return await fetchAPI("/items/locations");
}

export async function getblogs(filter = "", limit = "") {
  let queryString = "?sort=-date_created";

  if (filter) {
    queryString += "&filter[slug_name][_eq]=" + filter;
  }

  if (limit) {
    queryString += "&limit=" + limit;
  }

  return await fetchAPI("/items/blogs" + queryString);
}

export async function getDoctorInfo(id) {
  return await fetchAPI("/items/doctors/" + id);
}
export async function getDoctors() {
  return await fetchAPI("/items/doctors");
}
export async function getservices(filter = "", limit = "") {
  let queryString = "?sort=-date_created";

  if (filter) {
    queryString += "&filter[slug_name][_eq]=" + filter;
  }

  if (limit) {
    queryString += "&limit=" + limit;
  }

  return await fetchAPI("/items/services" + queryString);
}

export async function getpainconditions(filter = "", limit = "") {
  let queryString = "?sort=-date_created";

  if (filter) {
    queryString += "&filter[slug_name][_eq]=" + filter;
  }

  if (limit) {
    queryString += "&limit=" + limit;
  }

  return await fetchAPI("/items/pain_conditions" + queryString);
}

export async function getHealthVideos(filter = "", limit = "") {
  let queryString = "?sort=-date_created";

  if (filter) {
    queryString += "&filter[slug_name][_eq]=" + filter;
  }

  if (limit) {
    queryString += "&limit=" + limit;
  }

  return await fetchAPI("/items/healthtalks" + queryString);
}

export async function getBookedSlots(date) {
  return await fetchAPI(
    `/items/appointments?fields[]=date_time&filter[_and][0][date_time][_between][0]=${date}T09:30:00&filter[_and][0][date_time][_between][1]=${date}T17:00:00`
  );
}

// Add more functions for other API endpoints as needed
