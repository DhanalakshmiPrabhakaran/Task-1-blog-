//create your own resume data in json format:
let MyResume={
    "Basics": {
      "Name": "Dhanalakshmi Prabhakaran",
      "Email": "dhanadhan94@gmail.com",
      "Phone": 8148278532,
      "Degree": "B.E",
      "location": {
        "address": "25,Old Pandian Street, Subramaniyapuram",
        "postalCode": 620020,
        "city": "Trichy",
        "state": "Tamilnadu",
        "country": "India"
      },
      "Profiles":
        {
          "Linkein": "https://www.linkedin.com/in/dhanalakshmi-prabhakaran-a9b9bb142/",
          "github":"https://github.com/DhanalakshmiPrabhakaran"
        }
    },
    "Work": [
      {
        "Company": "Guvi",
        "Designation": "Lead Generation Consultant",
        "StartDate": "17-04-2023",
        "EndDate": "Still Working",
        "Summary": "I am the Lead Generation Consultant, helping to reach good Leads",
      },
    ],
    "Education": [
      {
        "Institution": "Loyola Institution Of Technology",
        "Department": "Computer Science",
        "StudyType": "Fulltime",
        "Batch Start Year": 2011,
        "Batch End Year": 2015,
        "GPA": 7,
      }
    ],
    "Course": [
      {
        "Name": "Full Stack Development",
        "Level": "beginer",
      }
    ],
    "Languages": [
      {
        "Language": "Tamil,English",
      }
    ],
    "Interests": [
      {
        "Name": "Programming",
      }
    ]
  }
  console.log(MyResume);
