var bio = {
	"name" : "Andrew Reid",
	"role" : "Aspiring Web Developer",
	"contacts" : {
		"mobile" : "01573833882",
		"email" : "s.andrew.reid@gmail.com",
		"github" : "https://github.com/sareid",
		"twitter" : "n/a",
		"location" : "Berlin, Germany"
	},
	"welcomeMessage" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.",
	"skills" : [
		"Coding", "Fighting Crime", "Being silent during movies", "Postmodern Literary analysis"
		],
	"bioPic" : "images/cv_biopic.jpg",
	"display" : function(){

		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMsg);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedContacts = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation;
		$("#topContacts").prepend(formattedContacts);
		$("#footerContacts").append(formattedContacts);

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
			$("#skills").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
			$("#skills").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
			$("#skills").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
			$("#skills").append(formattedSkill);
		}
	}
}

var work = {
	"jobs" : [
		{
			"employer" : "Ecologic Institute",
			"title" : "Researcher",
			"location" : "Berlin, Germany",
			"dates" : "2010-2015",
			"description" : "Conducted research on coastal and marine environmental policy in the European context."
		},
		{
			"employer" : "Permanent Mission of the Republic of Nauru to the UN",
			"title" : "Advisor",
			"location" : "New York City, USA",
			"dates" : "2009",
			"description" : "Represented Nauru in the General Assembly, reported to capital, and drafted policy briefs, statements, and reports."
		}
	],
	"display" : function(){

		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			$(".work-entry:last").append(
				formattedEmployerTitle);

			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").prepend(
				formattedWorkLocation);

			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(
				formattedWorkDates);

			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(
				formattedWorkDescription);
		}

	}
}

var projects = {
	"projects" : [
		{
			"title" : "Soils2Sea",
			"dates"	: "2014-2015",
			"description" : "EU Funded BONUS project examining governance solutions for limiting nutrient loading in the Baltic Sea.",
			"images" : [
				"images/cv_s2s_1.jpg",
				"images/cv_s2s_2.jpg"
			]
		},
		{
			"title" : "BASE",
			"dates"	: "2012-2015",
			"description" : "EU funded FP7 project examining climate adaptation strategies around the EU.",
			"images" : [
				"images/cv_base_1.jpg",
				"images/cv_BASE_2.jpg"
			]
		}
	],
	"display" : function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(
				formattedProjectTitle);

			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(
				formattedProjectDates);

			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(
				formattedProjectDescription);

			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(
					formattedImage);
				}
			}
		}
	}
}

var education = {
	"schools" : [
		{
			"name" : "University of St Andrews",
			"location" : "St Andrews, UK",
			"degree" : "Joint Honours MA",
			"majors" : ["English", " International Relations"],
			"dates" : 2007,
		},
		{
			"name" : "University of Waterloo",
			"location" : "Waterloo, Canada",
			"degree" : "MA",
			"majors" : ["Global Governance"],
			"dates" : 2010,
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front End Web Development Nanodegree",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "https://www.udacity.com/nanodegree"
		}
	],

	"display" : function() {

		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;

			$(".education-entry:last").append(
				formattedSchoolNameDegree);

			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedSchoolDates);

			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);

			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedSchoolMajor);

		}

		$("#education").append(HTMLonlineClasses);
		for (onlineCourse in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;

			$(".education-entry:last").append(
				formattedOnlineTitleSchool);

			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
			$(".education-entry:last").append(formattedOnlineDates);

			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
}

bio.display();
work.display();
education.display();
projects.display();

function inName(name) {
	name = bio.name.trim().split(" ");
	console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] +" " +name[1];
}

$("#main").append(internationalizeButton);

$("#map-div").append(googleMap);

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});