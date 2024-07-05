function skillsMember() {
    var member = {
        name: 'John Doe',
        role: 'Web Developer',
        skills: ['HTML', 'CSS', 'JavaScript']
    };

    var skills = member.skills;
    var skillsLength = skills.length;

    for (var i = 0; i < skillsLength; i++) {
        console.log(skills[i]);
    }
}