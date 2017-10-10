var course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};

coursename = course.name
console.log(coursename)

secondTeacher = course.teachers[1]
console.log(secondTeacher)

firstStudent = course.students[0].name
console.log(firstStudent)

katyComputer = course.students[1].computer.type
console.log(katyComputer)

equip = course.preReqs.equipment
console.log(equip)

secondOSOption = course.preReqs.equipment.OSOptions[1]
console.log(secondOSOption)

console.log(course.preReqs.equipment.OSOptions.join(" or "))

OSXstudents = []
studentObjects = course.students
console.log(studentObjects)

for(var i = 0; i < studentObjects.length; i++){
	if(studentObjects[i].computer.OS == "OSX"){
		OSXstudents.push(studentObjects[i].name)
	}
}
console.log(OSXstudents)

