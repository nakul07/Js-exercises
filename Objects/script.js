const MyInfo = {
  name: "Nakul",
  address: "Imadol",
  email: "niroulanakul@gmail.com",
  interest: "JavaScript",
  education: [
    { name: "Katford", enrolledDate: "2018" },
    { name: "Arniko", enrolledDate: "2015" },
  ],
};
MyInfo.education.forEach((education) => {
  console.log("Name:", education.name, ",", "Date:", education.enrolledDate);
});
